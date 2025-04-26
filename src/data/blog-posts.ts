export interface BlogPost {
  id: number
  title: string
  slug: string
  excerpt: string
  content: string
  author: string
  date: string
  category: 'Market Updates' | 'Buying Tips' | 'Selling Tips' | 'Home Improvement' | 'Industry News'
  imageUrl: string
  readTime: number
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: '2024 Housing Market Trends: What to Expect',
    slug: '2024-housing-market-trends',
    excerpt: 'An in-depth analysis of housing market predictions for 2024, including price trends, interest rates, and buyer demand.',
    content: `The housing market in 2024 continues to evolve, presenting both challenges and opportunities for buyers and sellers. Here's what you need to know:

Interest Rates and Their Impact
- Current trends in mortgage rates
- How rates are affecting buyer demand
- Strategies for navigating higher rates

Market Inventory
- Current housing supply levels
- New construction outlook
- Impact on home prices

Buyer and Seller Strategies
- Tips for competing in today's market
- Best times to list your home
- Negotiation tactics that work

Looking ahead, we expect to see continued stabilization in prices and potentially more inventory coming to market...`,
    author: 'Dustin McCracken',
    date: '2024-03-15',
    category: 'Market Updates',
    imageUrl: 'https://picsum.photos/seed/market2024/800/400',
    readTime: 5
  },
  {
    id: 2,
    title: 'Maximizing Your Home's Value: Pre-Sale Improvements',
    slug: 'maximizing-home-value-improvements',
    excerpt: 'Discover the most effective home improvements that can significantly increase your property's value before selling.',
    content: `When preparing to sell your home, strategic improvements can make a substantial difference in your final sale price. Here's our comprehensive guide:

High-ROI Improvements
- Kitchen updates that buyers love
- Bathroom renovations worth doing
- Curb appeal enhancements

Quick Fixes with Big Impact
- Paint colors that sell
- Lighting upgrades
- Flooring refreshes

Staging Tips
- Room-by-room staging guide
- Decluttering strategies
- Professional vs. DIY staging

Remember, not all improvements offer equal return on investment...`,
    author: 'Dustin McCracken',
    date: '2024-03-10',
    category: 'Selling Tips',
    imageUrl: 'https://picsum.photos/seed/improvements/800/400',
    readTime: 6
  },
  {
    id: 3,
    title: 'First-Time Homebuyer's Guide 2024',
    slug: 'first-time-homebuyer-guide-2024',
    excerpt: 'Everything you need to know about buying your first home in 2024, from financing to closing.',
    content: `Buying your first home can seem overwhelming, but we're here to break it down into manageable steps:

Getting Started
- Assessing your readiness
- Understanding your budget
- Credit score preparation

Financing Your Home
- Down payment options
- Mortgage types explained
- First-time buyer programs

The Buying Process
- House hunting tips
- Making an offer
- Inspection and closing

Let's explore each step in detail...`,
    author: 'Dustin McCracken',
    date: '2024-03-05',
    category: 'Buying Tips',
    imageUrl: 'https://picsum.photos/seed/firsttime/800/400',
    readTime: 7
  }
] 