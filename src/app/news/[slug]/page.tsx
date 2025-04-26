'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import { blogPosts, BlogPost } from '@/data/blog-posts'

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const [post, setPost] = useState<BlogPost | null>(null)
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([])

  useEffect(() => {
    const foundPost = blogPosts.find(p => p.slug === params.slug)
    if (foundPost) {
      setPost(foundPost)
      // Find related posts in the same category
      const related = blogPosts
        .filter(p => p.category === foundPost.category && p.id !== foundPost.id)
        .slice(0, 3)
      setRelatedPosts(related)
    }
  }, [params.slug])

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900">
              Article not found
            </h1>
            <p className="mt-2 text-gray-600">
              The article you're looking for doesn't exist or has been removed.
            </p>
            <Link
              href="/news"
              className="mt-4 inline-block text-primary hover:text-primary-dark"
            >
              ← Back to News
            </Link>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          href="/news"
          className="inline-block mb-8 text-primary hover:text-primary-dark"
        >
          ← Back to News
        </Link>

        <article>
          <div className="relative h-96 rounded-lg overflow-hidden mb-8">
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="flex items-center justify-between mb-8">
              <span className="text-sm font-medium text-primary">
                {post.category}
              </span>
              <span className="text-sm text-gray-500">
                {post.readTime} min read
              </span>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {post.title}
            </h1>

            <div className="flex items-center justify-between mb-8 text-gray-500">
              <span>By {post.author}</span>
              <span>{new Date(post.date).toLocaleDateString()}</span>
            </div>

            <div className="whitespace-pre-wrap">{post.content}</div>
          </div>
        </article>

        {relatedPosts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map(relatedPost => (
                <Link
                  key={relatedPost.id}
                  href={`/news/${relatedPost.slug}`}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-48">
                    <Image
                      src={relatedPost.imageUrl}
                      alt={relatedPost.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  )
} 