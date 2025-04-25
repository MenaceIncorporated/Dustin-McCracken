-- Insert sample properties
INSERT INTO properties (
    title,
    description,
    price,
    status,
    type,
    bedrooms,
    bathrooms,
    square_feet,
    lot_size,
    year_built,
    address,
    city,
    state,
    zip_code,
    location,
    features,
    images,
    virtual_tour_url
) VALUES
(
    'Beautiful Family Home in Quiet Neighborhood',
    'Stunning 4-bedroom home with modern finishes and an open floor plan. Features include a gourmet kitchen, hardwood floors throughout, and a spacious backyard.',
    599000.00,
    'active',
    'single-family',
    4,
    3,
    2800,
    0.25,
    2018,
    '123 Oak Street',
    'Springfield',
    'IL',
    '62701',
    ST_SetSRID(ST_MakePoint(-89.6501, 39.8018), 4326),
    '{"garage": true, "central_air": true, "fireplace": true}',
    ARRAY['https://example.com/images/house1.jpg', 'https://example.com/images/house1-2.jpg'],
    'https://example.com/virtual-tour/house1'
),
(
    'Modern Downtown Condo',
    'Luxurious 2-bedroom condo in the heart of downtown. Floor-to-ceiling windows with stunning city views.',
    425000.00,
    'active',
    'condo',
    2,
    2,
    1200,
    NULL,
    2020,
    '456 Main Street, Unit 1201',
    'Springfield',
    'IL',
    '62701',
    ST_SetSRID(ST_MakePoint(-89.6443, 39.8019), 4326),
    '{"elevator": true, "gym": true, "parking": true}',
    ARRAY['https://example.com/images/condo1.jpg'],
    'https://example.com/virtual-tour/condo1'
);

-- Insert sample blog posts
INSERT INTO blog_posts (
    title,
    slug,
    content,
    excerpt,
    featured_image,
    published_at,
    tags
) VALUES
(
    'Top 10 Tips for First-Time Home Buyers',
    'top-10-tips-first-time-home-buyers',
    'Here are the top 10 things you need to know before buying your first home...',
    'Essential tips for navigating the home buying process',
    'https://example.com/images/blog1.jpg',
    NOW(),
    ARRAY['buying', 'first-time-buyers', 'tips']
),
(
    'Why Springfield is the Perfect Place to Live',
    'why-springfield-perfect-place-to-live',
    'Discover what makes Springfield an ideal location for families and professionals...',
    'A comprehensive guide to living in Springfield',
    'https://example.com/images/blog2.jpg',
    NOW(),
    ARRAY['springfield', 'community', 'lifestyle']
);

-- Insert sample programs
INSERT INTO programs (
    name,
    description,
    features,
    requirements,
    active
) VALUES
(
    'First-Time Buyer Assistance',
    'Special program designed to help first-time home buyers with down payment assistance and favorable terms.',
    '{"down_payment_assistance": true, "reduced_fees": true, "educational_resources": true}',
    ARRAY['Must be a first-time home buyer', 'Income restrictions apply', 'Must complete home buyer education course'],
    true
),
(
    'VA Loan Program',
    'Specialized program for veterans and active military personnel.',
    '{"no_down_payment": true, "competitive_rates": true, "flexible_terms": true}',
    ARRAY['Must be active military, veteran, or eligible spouse', 'Valid VA Certificate of Eligibility required'],
    true
); 