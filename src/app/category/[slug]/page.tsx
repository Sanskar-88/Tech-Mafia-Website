'use client';

import React from 'react';
import Link from 'next/link';
import PlaceholderImage from '@/components/PlaceholderImage';
import ArticleCard from '@/components/ArticleCard';

// This is a sample data structure - in a real app, this would come from a database or API
const categoryData = {
  gadgets: {
    title: 'Gadgets',
    description: 'Discover the latest and most innovative gadgets from around the world.',
    image: '/images/category-gadgets.jpg',
    articles: [
      {
        title: 'The Best Smart Home Gadgets of 2023',
        excerpt: 'Transform your home with these cutting-edge smart devices that make life easier and more efficient.',
        category: 'Gadgets',
        image: '/images/smart-home.jpg',
        slug: '/article/best-smart-home-gadgets-2023',
        date: 'June 15, 2023',
      },
      {
        title: 'Top 10 Tech Gadgets Under $100',
        excerpt: 'Amazing tech gadgets that won\'t break the bank but will upgrade your daily life.',
        category: 'Gadgets',
        image: '/images/budget-gadgets.jpg',
        slug: '/article/top-tech-gadgets-under-100',
        date: 'June 12, 2023',
      },
      {
        title: 'Must-Have Travel Gadgets for 2023',
        excerpt: 'Essential tech companions for your next adventure, from portable chargers to noise-cancelling headphones.',
        category: 'Gadgets',
        image: '/images/travel-gadgets.jpg',
        slug: '/article/must-have-travel-gadgets-2023',
        date: 'June 8, 2023',
      },
      {
        title: 'The Rise of AI-Powered Gadgets',
        excerpt: 'How artificial intelligence is transforming everyday devices and making them smarter than ever.',
        category: 'Gadgets',
        image: '/images/ai-gadgets.jpg',
        slug: '/article/rise-of-ai-powered-gadgets',
        date: 'June 5, 2023',
      },
    ],
  },
  mobiles: {
    title: 'Mobile Phones',
    description: 'Stay updated with the latest smartphones, features, and mobile technology trends.',
    image: '/images/category-mobiles.jpg',
    articles: [
      {
        title: 'iPhone 15 Pro: Everything We Know So Far',
        excerpt: 'Rumors, leaks, and predictions about Apple\'s next flagship smartphone.',
        category: 'Mobiles',
        image: '/images/iphone-15.jpg',
        slug: '/article/iphone-15-pro-everything-we-know',
        date: 'June 14, 2023',
      },
      {
        title: 'Samsung Galaxy Z Fold 5 Review',
        excerpt: 'A hands-on review of Samsung\'s latest foldable smartphone and how it compares to previous models.',
        category: 'Mobiles',
        image: '/images/galaxy-fold.jpg',
        slug: '/article/samsung-galaxy-z-fold-5-review',
        date: 'June 10, 2023',
      },
      {
        title: 'The Best Budget Smartphones of 2023',
        excerpt: 'Top-performing smartphones that deliver excellent features without the premium price tag.',
        category: 'Mobiles',
        image: '/images/budget-phones.jpg',
        slug: '/article/best-budget-smartphones-2023',
        date: 'June 7, 2023',
      },
      {
        title: 'Android 14: New Features and Compatible Devices',
        excerpt: 'Everything you need to know about the latest Android operating system update.',
        category: 'Mobiles',
        image: '/images/android-14.jpg',
        slug: '/article/android-14-features-compatible-devices',
        date: 'June 3, 2023',
      },
    ],
  },
  laptops: {
    title: 'Laptops',
    description: 'Explore the latest laptops, from ultrabooks to gaming powerhouses.',
    image: '/images/category-laptops.jpg',
    articles: [
      {
        title: 'MacBook Air M2: Long-Term Review',
        excerpt: 'After six months with Apple\'s M2-powered MacBook Air, here\'s how it holds up for daily use.',
        category: 'Laptops',
        image: '/images/macbook-air.jpg',
        slug: '/article/macbook-air-m2-long-term-review',
        date: 'June 16, 2023',
      },
      {
        title: 'The Best Gaming Laptops of 2023',
        excerpt: 'Powerful gaming laptops that deliver desktop-class performance for the serious gamer.',
        category: 'Laptops',
        image: '/images/gaming-laptops.jpg',
        slug: '/article/best-gaming-laptops-2023',
        date: 'June 11, 2023',
      },
      {
        title: 'Windows 11 vs macOS Ventura: Which OS is Right for You?',
        excerpt: 'A detailed comparison of the latest operating systems from Microsoft and Apple.',
        category: 'Laptops',
        image: '/images/os-comparison.jpg',
        slug: '/article/windows-11-vs-macos-ventura',
        date: 'June 9, 2023',
      },
      {
        title: 'The Future of Laptop Design: Trends to Watch',
        excerpt: 'From foldable screens to sustainable materials, here\'s how laptop design is evolving.',
        category: 'Laptops',
        image: '/images/laptop-design.jpg',
        slug: '/article/future-of-laptop-design',
        date: 'June 4, 2023',
      },
    ],
  },
  wearables: {
    title: 'Wearables',
    description: 'The latest in wearable technology, from smartwatches to fitness trackers and more.',
    image: '/images/category-wearables.jpg',
    articles: [
      {
        title: 'Apple Watch Series 8 vs. Samsung Galaxy Watch 5',
        excerpt: 'A head-to-head comparison of the two leading smartwatches on the market.',
        category: 'Wearables',
        image: '/images/smartwatch-comparison.jpg',
        slug: '/article/apple-watch-vs-galaxy-watch',
        date: 'June 13, 2023',
      },
      {
        title: 'The Best Fitness Trackers for Every Budget',
        excerpt: 'From basic step counters to advanced health monitors, find the perfect fitness tracker for your needs.',
        category: 'Wearables',
        image: '/images/fitness-trackers.jpg',
        slug: '/article/best-fitness-trackers-every-budget',
        date: 'June 10, 2023',
      },
      {
        title: 'Smart Glasses in 2023: Are They Finally Ready?',
        excerpt: 'Exploring the current state of smart glasses technology and the best options available.',
        category: 'Wearables',
        image: '/images/smart-glasses.jpg',
        slug: '/article/smart-glasses-2023',
        date: 'June 6, 2023',
      },
      {
        title: 'Health Monitoring Wearables: Beyond Step Counting',
        excerpt: 'How modern wearables are becoming sophisticated health devices that can save lives.',
        category: 'Wearables',
        image: '/images/health-wearables.jpg',
        slug: '/article/health-monitoring-wearables',
        date: 'June 2, 2023',
      },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(categoryData).map((slug) => ({
    slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const category = categoryData[params.slug as keyof typeof categoryData];
  
  if (!category) {
    return {
      title: 'Category Not Found',
    };
  }
  
  return {
    title: `${category.title} - TechInformer`,
    description: category.description,
  };
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  // This is a simplified version that would normally fetch data based on the slug
  const category = {
    title: "Mobile Phones",
    description: "Stay updated with the latest smartphones, features, and mobile technology trends.",
    articles: [
      {
        title: "iPhone 15 Pro: Everything We Know So Far",
        excerpt: "Rumors, leaks, and predictions about Apple's next flagship smartphone.",
        category: "Mobiles",
        slug: "/article/iphone-15-pro-everything-we-know",
        date: "June 14, 2023",
      },
      {
        title: "Samsung Galaxy Z Fold 5 Review",
        excerpt: "A hands-on review of Samsung's latest foldable smartphone and how it compares to previous models.",
        category: "Mobiles",
        slug: "/article/samsung-galaxy-z-fold-5-review",
        date: "June 10, 2023",
      },
      {
        title: "The Best Budget Smartphones of 2023",
        excerpt: "Top-performing smartphones that deliver excellent features without the premium price tag.",
        category: "Mobiles",
        slug: "/article/best-budget-smartphones-2023",
        date: "June 7, 2023",
      },
      {
        title: "Android 14: New Features and Compatible Devices",
        excerpt: "Everything you need to know about the latest Android operating system update.",
        category: "Mobiles",
        slug: "/article/android-14-features-compatible-devices",
        date: "June 3, 2023",
      },
    ],
  };
  
  return (
    <div className="container-custom py-8">
      <div className="relative h-64 rounded-xl overflow-hidden mb-8 bg-blue-600">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl text-white/30">📱</div>
        </div>
        <div className="absolute inset-0 z-20 flex flex-col justify-center p-8">
          <h1 className="text-4xl font-bold text-white mb-4">{category.title}</h1>
          <p className="text-lg text-gray-200 max-w-xl">{category.description}</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {category.articles.map((article, index) => (
          <div key={index} className="card group h-full flex flex-col">
            <div className="relative h-48 w-full overflow-hidden bg-blue-100 flex items-center justify-center">
              <div className="text-center p-4">
                <div className="text-3xl mb-2">📱</div>
                <p className="font-medium">Mobile Phone</p>
              </div>
              <div className="absolute top-3 left-3 bg-primary text-white text-xs font-medium px-2 py-1 rounded-full">
                {article.category}
              </div>
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <span className="text-xs text-gray-500 dark:text-gray-400 mb-1">{article.date}</span>
              <Link href={article.slug} className="block">
                <h3 className="text-lg font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
              </Link>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">{article.excerpt}</p>
              <Link href={article.slug} className="text-primary text-sm font-medium mt-auto hover:underline">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 