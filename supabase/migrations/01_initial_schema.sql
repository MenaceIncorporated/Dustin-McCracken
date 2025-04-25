-- Enable necessary extensions
create extension if not exists "uuid-ossp";
create extension if not exists "postgis";

-- Set up storage for property images
insert into storage.buckets (id, name) values ('property-images', 'property-images');
create policy "Public Access" on storage.objects for select using (bucket_id = 'property-images');
create policy "Authenticated Users Can Upload" on storage.objects for insert with check (bucket_id = 'property-images' AND auth.role() = 'authenticated');

-- Properties table
create type property_status as enum ('active', 'pending', 'sold', 'off-market');
create type property_type as enum ('single-family', 'multi-family', 'condo', 'townhouse', 'land', 'commercial');

create table properties (
    id uuid primary key default uuid_generate_v4(),
    created_at timestamptz default now(),
    updated_at timestamptz default now(),
    title text not null,
    description text,
    price decimal(12,2) not null,
    status property_status default 'active',
    type property_type not null,
    bedrooms smallint,
    bathrooms smallint,
    square_feet integer,
    lot_size decimal(10,2),
    year_built smallint,
    address text not null,
    city text not null,
    state text not null,
    zip_code text not null,
    location geography(Point),
    features jsonb,
    images text[],
    virtual_tour_url text,
    listed_by uuid references auth.users,
    search_vector tsvector generated always as (
        setweight(to_tsvector('english', coalesce(title, '')), 'A') ||
        setweight(to_tsvector('english', coalesce(description, '')), 'B') ||
        setweight(to_tsvector('english', coalesce(address, '')), 'C')
    ) stored
);

create index properties_search_idx on properties using gin(search_vector);
create index properties_location_idx on properties using gist(location);

-- Inquiries table
create table inquiries (
    id uuid primary key default uuid_generate_v4(),
    created_at timestamptz default now(),
    property_id uuid references properties on delete cascade,
    name text not null,
    email text not null,
    phone text,
    message text not null,
    status text default 'new',
    responded_at timestamptz,
    responded_by uuid references auth.users
);

-- Blog posts table
create table blog_posts (
    id uuid primary key default uuid_generate_v4(),
    created_at timestamptz default now(),
    updated_at timestamptz default now(),
    title text not null,
    slug text not null unique,
    content text not null,
    excerpt text,
    featured_image text,
    author_id uuid references auth.users,
    published_at timestamptz,
    tags text[],
    search_vector tsvector generated always as (
        setweight(to_tsvector('english', title), 'A') ||
        setweight(to_tsvector('english', coalesce(excerpt, '')), 'B') ||
        setweight(to_tsvector('english', content), 'C')
    ) stored
);

create index blog_posts_search_idx on blog_posts using gin(search_vector);

-- Programs table
create table programs (
    id uuid primary key default uuid_generate_v4(),
    created_at timestamptz default now(),
    updated_at timestamptz default now(),
    name text not null,
    description text not null,
    features jsonb,
    requirements text[],
    active boolean default true
);

-- Contact messages table
create table contact_messages (
    id uuid primary key default uuid_generate_v4(),
    created_at timestamptz default now(),
    name text not null,
    email text not null,
    phone text,
    message text not null,
    type text not null,
    status text default 'new',
    responded_at timestamptz,
    responded_by uuid references auth.users
);

-- Set up Row Level Security (RLS)
alter table properties enable row level security;
alter table inquiries enable row level security;
alter table blog_posts enable row level security;
alter table programs enable row level security;
alter table contact_messages enable row level security;

-- RLS Policies

-- Properties policies
create policy "Public can view active properties"
    on properties for select
    using (status = 'active');

create policy "Authenticated users can create properties"
    on properties for insert
    with check (auth.role() = 'authenticated');

create policy "Users can update their own properties"
    on properties for update
    using (auth.uid() = listed_by);

-- Inquiries policies
create policy "Users can view their own inquiries"
    on inquiries for select
    using (auth.uid() = responded_by);

create policy "Public can create inquiries"
    on inquiries for insert
    with check (true);

create policy "Staff can view all inquiries"
    on inquiries for select
    using (auth.role() = 'authenticated');

-- Blog posts policies
create policy "Public can view published posts"
    on blog_posts for select
    using (published_at is not null and published_at <= now());

create policy "Authors can manage their posts"
    on blog_posts for all
    using (auth.uid() = author_id);

-- Programs policies
create policy "Public can view active programs"
    on programs for select
    using (active = true);

create policy "Staff can manage programs"
    on programs for all
    using (auth.role() = 'authenticated');

-- Contact messages policies
create policy "Public can create contact messages"
    on contact_messages for insert
    with check (true);

create policy "Staff can view and manage messages"
    on contact_messages for all
    using (auth.role() = 'authenticated');

-- Create functions for full-text search
create function search_properties(search_query text)
returns setof properties
language sql
stable
as $$
    select *
    from properties
    where status = 'active'
    and search_vector @@ plainto_tsquery('english', search_query)
    order by ts_rank(search_vector, plainto_tsquery('english', search_query)) desc;
$$;

-- Create function for nearby properties
create function nearby_properties(lat float, lng float, radius_miles float)
returns setof properties
language sql
stable
as $$
    select *
    from properties
    where status = 'active'
    and ST_DWithin(
        location,
        ST_SetSRID(ST_MakePoint(lng, lat), 4326)::geography,
        radius_miles * 1609.34  -- Convert miles to meters
    )
    order by location <-> ST_SetSRID(ST_MakePoint(lng, lat), 4326)::geography;
$$; 