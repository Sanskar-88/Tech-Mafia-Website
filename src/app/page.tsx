'use client';

import React from 'react';
import Link from 'next/link';
import PlaceholderImage from '@/components/PlaceholderImage';
import FeaturedArticle from '@/components/FeaturedArticle';
import ArticleCard from '@/components/ArticleCard';
import NewsletterForm from '@/components/NewsletterForm';

export default function Home() {
  return (
    <div className="container-custom py-8">
      {/* Hero Section */}
      <section className="mb-16">
        <div className="relative rounded-xl overflow-hidden h-[400px] w-full bg-gradient-to-r from-primary to-blue-700">
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10"></div>
          <div className="absolute inset-0 z-20 flex flex-col justify-center p-8 md:p-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-2xl">
              Discover the Latest in Tech Innovation
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl">
              Stay updated with the newest gadgets, mobile phones, laptops, and tech news from around the world.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/category/gadgets" className="btn btn-primary">
                Explore Gadgets
              </Link>
              <Link href="/news" className="btn bg-white text-dark hover:bg-gray-100">
                Latest News
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Featured Articles</h2>
          <Link href="/featured" className="text-primary font-medium hover:underline">
            View All
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Article 1 */}
          <div className="card group h-full flex flex-col">
            <div className="relative h-56 w-full overflow-hidden bg-blue-100 flex items-center justify-center">
              <div className="text-center p-4">
                <div className="text-3xl mb-2">📱</div>
                <p className="font-medium">Foldable Phones</p>
              </div>
              <div className="absolute top-4 left-4 bg-primary text-white text-sm font-medium px-3 py-1 rounded-full">
                Mobiles
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">June 15, 2023</span>
              <Link href="/article/future-of-foldable-phones" className="block">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  The Future of Foldable Phones in 2023
                </h3>
              </Link>
              <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                Explore how foldable technology is evolving and what to expect from the next generation of devices.
              </p>
              <Link href="/article/future-of-foldable-phones" className="text-primary font-medium flex items-center hover:underline">
                Read More →
              </Link>
            </div>
          </div>

          {/* Article 2 */}
          <div className="card group h-full flex flex-col">
            <div className="relative h-56 w-full overflow-hidden bg-gray-100 flex items-center justify-center">
              <div className="text-center p-4">
                <div className="text-3xl mb-2">💻</div>
                <p className="font-medium">Professional Laptops</p>
              </div>
              <div className="absolute top-4 left-4 bg-primary text-white text-sm font-medium px-3 py-1 rounded-full">
                Laptops
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">June 10, 2023</span>
              <Link href="/article/top-laptops-professionals" className="block">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  Top 10 Laptops for Professionals
                </h3>
              </Link>
              <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                A comprehensive guide to the best laptops for work, creativity, and productivity in 2023.
              </p>
              <Link href="/article/top-laptops-professionals" className="text-primary font-medium flex items-center hover:underline">
                Read More →
              </Link>
            </div>
          </div>

          {/* Article 3 */}
          <div className="card group h-full flex flex-col">
            <div className="relative h-56 w-full overflow-hidden bg-green-100 flex items-center justify-center">
              <div className="text-center p-4">
                <div className="text-3xl mb-2">🏠</div>
                <p className="font-medium">Smart Home</p>
              </div>
              <div className="absolute top-4 left-4 bg-primary text-white text-sm font-medium px-3 py-1 rounded-full">
                Smart Home
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">June 5, 2023</span>
              <Link href="/article/smart-home-savings" className="block">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  Smart Home Devices That Actually Save You Money
                </h3>
              </Link>
              <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                Discover which smart home gadgets can help reduce your utility bills and improve efficiency.
              </p>
              <Link href="/article/smart-home-savings" className="text-primary font-medium flex items-center hover:underline">
                Read More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Latest News</h2>
          <Link href="/news" className="text-primary font-medium hover:underline">
            View All News
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* News 1 */}
          <div className="card group h-full flex flex-col">
            <div className="relative h-48 w-full overflow-hidden bg-gray-100 flex items-center justify-center">
              <div className="text-center p-4">
                <div className="text-3xl mb-2">🍎</div>
                <p className="font-medium">MacBook Pro</p>
              </div>
              <div className="absolute top-3 left-3 bg-primary text-white text-xs font-medium px-2 py-1 rounded-full">
                Laptops
              </div>
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <span className="text-xs text-gray-500 dark:text-gray-400 mb-1">June 12, 2023</span>
              <Link href="/news/apple-new-macbook-pro" className="block">
                <h3 className="text-lg font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  Apple Announces New MacBook Pro with M2 Pro and M2 Max Chips
                </h3>
              </Link>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">
                The latest MacBook Pro models feature Apple's newest processors with improved performance.
              </p>
              <Link href="/news/apple-new-macbook-pro" className="text-primary text-sm font-medium mt-auto hover:underline">
                Read More
              </Link>
            </div>
          </div>

          {/* News 2 */}
          <div className="card group h-full flex flex-col">
            <div className="relative h-48 w-full overflow-hidden bg-purple-100 flex items-center justify-center">
              <div className="text-center p-4">
                <div className="text-3xl mb-2">⌚</div>
                <p className="font-medium">Galaxy Watch</p>
              </div>
              <div className="absolute top-3 left-3 bg-primary text-white text-xs font-medium px-2 py-1 rounded-full">
                Wearables
              </div>
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <span className="text-xs text-gray-500 dark:text-gray-400 mb-1">June 11, 2023</span>
              <Link href="/news/samsung-galaxy-watch" className="block">
                <h3 className="text-lg font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  Samsung Unveils New Galaxy Watch with Enhanced Health Features
                </h3>
              </Link>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">
                The new Galaxy Watch includes advanced health monitoring and longer battery life.
              </p>
              <Link href="/news/samsung-galaxy-watch" className="text-primary text-sm font-medium mt-auto hover:underline">
                Read More
              </Link>
            </div>
          </div>

          {/* News 3 */}
          <div className="card group h-full flex flex-col">
            <div className="relative h-48 w-full overflow-hidden bg-green-100 flex items-center justify-center">
              <div className="text-center p-4">
                <div className="text-3xl mb-2">📱</div>
                <p className="font-medium">Google Pixel</p>
              </div>
              <div className="absolute top-3 left-3 bg-primary text-white text-xs font-medium px-2 py-1 rounded-full">
                Mobiles
              </div>
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <span className="text-xs text-gray-500 dark:text-gray-400 mb-1">June 9, 2023</span>
              <Link href="/news/google-pixel-7a-review" className="block">
                <h3 className="text-lg font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  Google Pixel 7a Review: The Best Mid-Range Phone?
                </h3>
              </Link>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">
                Our comprehensive review of Google's latest affordable smartphone offering.
              </p>
              <Link href="/news/google-pixel-7a-review" className="text-primary text-sm font-medium mt-auto hover:underline">
                Read More
              </Link>
            </div>
          </div>

          {/* News 4 */}
          <div className="card group h-full flex flex-col">
            <div className="relative h-48 w-full overflow-hidden bg-blue-100 flex items-center justify-center">
              <div className="text-center p-4">
                <div className="text-3xl mb-2">🤖</div>
                <p className="font-medium">AI Gadgets</p>
              </div>
              <div className="absolute top-3 left-3 bg-primary text-white text-xs font-medium px-2 py-1 rounded-full">
                Gadgets
              </div>
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <span className="text-xs text-gray-500 dark:text-gray-400 mb-1">June 8, 2023</span>
              <Link href="/news/ai-powered-gadgets" className="block">
                <h3 className="text-lg font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  The Rise of AI-Powered Gadgets: What You Need to Know
                </h3>
              </Link>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">
                How artificial intelligence is transforming consumer electronics and what to expect next.
              </p>
              <Link href="/news/ai-powered-gadgets" className="text-primary text-sm font-medium mt-auto hover:underline">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Explore Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link href="/category/mobiles" className="group">
            <div className="relative h-48 rounded-lg overflow-hidden bg-blue-600">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10 group-hover:from-primary/70 transition-all duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-4xl text-white">📱</div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                <h3 className="text-xl font-bold text-white">Mobiles</h3>
              </div>
            </div>
          </Link>
          <Link href="/category/laptops" className="group">
            <div className="relative h-48 rounded-lg overflow-hidden bg-gray-700">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10 group-hover:from-primary/70 transition-all duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-4xl text-white">💻</div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                <h3 className="text-xl font-bold text-white">Laptops</h3>
              </div>
            </div>
          </Link>
          <Link href="/category/wearables" className="group">
            <div className="relative h-48 rounded-lg overflow-hidden bg-purple-700">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10 group-hover:from-primary/70 transition-all duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-4xl text-white">⌚</div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                <h3 className="text-xl font-bold text-white">Wearables</h3>
              </div>
            </div>
          </Link>
          <Link href="/category/gadgets" className="group">
            <div className="relative h-48 rounded-lg overflow-hidden bg-green-700">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10 group-hover:from-primary/70 transition-all duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-4xl text-white">🎮</div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                <h3 className="text-xl font-bold text-white">Gadgets</h3>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-primary rounded-xl p-8 md:p-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
            <p className="text-white/90 text-lg mb-4">
              Subscribe to our newsletter to receive the latest tech news, reviews, and exclusive content directly in your inbox.
            </p>
          </div>
          <div className="md:w-1/2">
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
              <button type="submit" className="bg-white text-primary px-6 py-3 rounded-md font-medium hover:bg-gray-100">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
} 