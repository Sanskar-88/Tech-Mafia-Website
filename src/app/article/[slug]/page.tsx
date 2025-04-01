'use client';

import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PlaceholderImage from '@/components/PlaceholderImage';

// Sample article data - in a real app, this would come from a database or API
const articlesData = {
  'future-of-foldable-phones': {
    title: 'The Future of Foldable Phones in 2023',
    excerpt: 'Explore how foldable technology is evolving and what to expect from the next generation of devices.',
    content: `
      <p>Foldable phones have come a long way since their introduction just a few years ago. What was once considered a gimmick or experimental technology has now evolved into a legitimate product category with multiple manufacturers competing for market share.</p>
      
      <h2>The Current State of Foldable Phones</h2>
      
      <p>Samsung continues to lead the foldable market with its Galaxy Z Fold and Z Flip series. The latest iterations have addressed many of the concerns from early models, including durability, water resistance, and the visibility of the crease in the display.</p>
      
      <p>Meanwhile, competitors like Motorola, Xiaomi, and Huawei have all released their own foldable devices, each with unique approaches to the form factor. Some prioritize a larger internal display, while others focus on compactness and portability.</p>
      
      <h2>Technological Advancements</h2>
      
      <p>The technology behind foldable displays continues to improve at a rapid pace. Manufacturers are developing more durable folding mechanisms, better hinge designs, and displays that can withstand thousands of folds without showing significant wear.</p>
      
      <p>Ultra-thin glass (UTG) has replaced plastic in many foldable displays, offering better scratch resistance while maintaining flexibility. Companies are also working on reducing the visibility of the crease that forms at the fold, one of the most common complaints about these devices.</p>
      
      <h2>What to Expect in 2023</h2>
      
      <p>As we move through 2023, we can expect several exciting developments in the foldable phone market:</p>
      
      <ul>
        <li><strong>More affordable options:</strong> As manufacturing processes improve and economies of scale kick in, we'll likely see more mid-range foldable phones that bring the technology to a wider audience.</li>
        <li><strong>Improved durability:</strong> Each generation of foldable phones has been more durable than the last, and this trend will continue with better water and dust resistance.</li>
        <li><strong>New form factors:</strong> Beyond the current book-style and flip-style foldables, we might see tri-fold devices or even rollable displays that offer new ways to expand screen real estate.</li>
        <li><strong>Better cameras and performance:</strong> Early foldables often compromised on camera quality or performance, but newer models are closing the gap with traditional flagship phones.</li>
      </ul>
      
      <h2>Challenges That Remain</h2>
      
      <p>Despite the progress, foldable phones still face several challenges:</p>
      
      <p>Battery life remains a concern, as powering larger displays requires more energy. The physical constraints of foldable designs also limit battery size compared to traditional phones of similar dimensions.</p>
      
      <p>Software optimization is another area that needs improvement. While Android has added better support for foldable form factors, many apps still don't take full advantage of the unique capabilities these devices offer.</p>
      
      <h2>Conclusion</h2>
      
      <p>Foldable phones are no longer just a novelty—they represent a significant direction for the future of mobile devices. As technology continues to improve and prices gradually come down, we may reach a point where foldable displays become the norm rather than the exception.</p>
      
      <p>For tech enthusiasts and early adopters, 2023 promises to be an exciting year in the evolution of this innovative product category. Whether you're considering purchasing your first foldable phone or upgrading from an earlier model, the options available will be more compelling than ever before.</p>
    `,
    category: 'Mobiles',
    image: '/images/foldable-phones.jpg',
    author: 'Alex Chen',
    date: 'June 15, 2023',
    readTime: '8 min read',
    relatedArticles: [
      'samsung-galaxy-z-fold-5-review',
      'iphone-15-pro-everything-we-know',
      'best-budget-smartphones-2023',
    ],
  },
  'top-laptops-professionals': {
    title: 'Top 10 Laptops for Professionals',
    excerpt: 'A comprehensive guide to the best laptops for work, creativity, and productivity in 2023.',
    content: `
      <p>Choosing the right laptop for professional work is more important than ever, especially with the rise of remote and hybrid work environments. The perfect professional laptop needs to balance performance, portability, battery life, and features specific to your field.</p>
      
      <p>In this guide, we'll explore the top laptops across various professional categories, from content creation to business and development work.</p>
      
      <h2>For Business Professionals</h2>
      
      <h3>1. Dell XPS 13 Plus</h3>
      
      <p>The Dell XPS 13 Plus represents the pinnacle of business ultrabooks. With its stunning edge-to-edge display, powerful 12th-gen Intel processors, and exceptional build quality, it's perfect for executives and business travelers who need reliability and performance in a compact package.</p>
      
      <p>The haptic touchpad and edge-to-edge keyboard create a clean, modern aesthetic while maintaining excellent functionality. Battery life is impressive at 8-10 hours of real-world use, making it ideal for long workdays away from power outlets.</p>
      
      <h3>2. Lenovo ThinkPad X1 Carbon</h3>
      
      <p>The ThinkPad series has long been the gold standard for business laptops, and the X1 Carbon continues this tradition. Its military-grade durability, legendary keyboard, and comprehensive security features make it a favorite among corporate users.</p>
      
      <p>The latest generation offers Intel Evo certification, ensuring responsive performance and all-day battery life. The 14-inch display strikes a perfect balance between screen real estate and portability.</p>
      
      <h2>For Creative Professionals</h2>
      
      <h3>3. MacBook Pro 16-inch (M2 Pro/Max)</h3>
      
      <p>Apple's 16-inch MacBook Pro with M2 Pro or M2 Max chips is a powerhouse for creative work. The stunning Liquid Retina XDR display with mini-LED technology offers exceptional color accuracy and contrast, making it perfect for photo and video editing.</p>
      
      <p>The M2 Pro and M2 Max chips deliver desktop-class performance while maintaining impressive battery life. The return of essential ports like HDMI and SD card reader makes this a practical choice for photographers and videographers.</p>
      
      <h3>4. Dell XPS 17</h3>
      
      <p>For Windows users in creative fields, the Dell XPS 17 offers a compelling alternative to the MacBook Pro. Its optional 4K+ display covers 100% of Adobe RGB and 94% of DCI-P3 color spaces, making it ideal for color-critical work.</p>
      
      <p>Configurations with NVIDIA RTX graphics provide the necessary horsepower for video editing, 3D rendering, and other demanding creative tasks. Despite its 17-inch screen, the XPS 17 remains relatively portable thanks to its thin bezels and streamlined design.</p>
      
      <h2>For Developers and Engineers</h2>
      
      <h3>5. System76 Lemur Pro</h3>
      
      <p>For developers who prefer Linux, the System76 Lemur Pro comes with Pop!_OS or Ubuntu pre-installed. This lightweight ultrabook offers excellent performance for coding and development work, with a focus on open-source software and privacy.</p>
      
      <p>The exceptional battery life (up to 14 hours) and lightweight design make it perfect for developers who work on the go. System76's commitment to user repairability and upgradability also means this laptop can grow with your needs.</p>
      
      <h3>6. Microsoft Surface Laptop Studio</h3>
      
      <p>The Surface Laptop Studio's unique form factor allows it to transform from a traditional laptop to a tablet-like studio mode, making it versatile for different development scenarios. The 120Hz display and precision touchpad provide an excellent user experience.</p>
      
      <p>With discrete NVIDIA graphics options and quad-core Intel processors, it has enough power for development work, including mobile app testing and light game development.</p>
      
      <h2>For Scientific and Technical Work</h2>
      
      <h3>7. HP ZBook Studio G9</h3>
      
      <p>HP's ZBook Studio combines workstation-class performance with a relatively portable design. Configurations with Intel Xeon processors and NVIDIA RTX A-series graphics make it suitable for scientific computing, CAD work, and data analysis.</p>
      
      <p>The DreamColor display option provides exceptional color accuracy for technical visualizations. HP's comprehensive security features and reliability make this a solid choice for professionals working with sensitive or critical data.</p>
      
      <h2>For Budget-Conscious Professionals</h2>
      
      <h3>8. Acer Swift 3</h3>
      
      <p>Not every professional needs to spend thousands on a laptop. The Acer Swift 3 offers excellent performance for everyday business tasks at a fraction of the price of premium models. With AMD Ryzen or Intel Core processors, 8-16GB of RAM, and fast SSD storage, it handles productivity work with ease.</p>
      
      <p>The all-metal chassis provides durability, while the 14-inch display offers good color accuracy for its price range. Battery life is solid at 8+ hours for typical office work.</p>
      
      <h3>9. Lenovo ThinkBook 14</h3>
      
      <p>The ThinkBook series bridges the gap between consumer and business laptops, offering ThinkPad-inspired features at more accessible price points. The ThinkBook 14 includes a spill-resistant keyboard, security features like a fingerprint reader, and good connectivity options.</p>
      
      <p>Performance is more than adequate for business applications, document creation, and web-based work. The professional design looks appropriate in any business setting.</p>
      
      <h2>For Maximum Portability</h2>
      
      <h3>10. LG Gram 16</h3>
      
      <p>For professionals who prioritize lightweight design without sacrificing screen size, the LG Gram 16 is unmatched. Weighing just under 2.6 pounds (1.19kg), it's astonishingly light for a 16-inch laptop.</p>
      
      <p>Despite its lightweight construction, it doesn't compromise on performance or battery life, offering 11th-gen Intel processors and up to 22 hours of runtime. The 16:10 display provides extra vertical space for documents and spreadsheets.</p>
      
      <h2>Conclusion</h2>
      
      <p>The best laptop for your professional needs depends on your specific requirements, workflow, and budget. Consider factors like performance needs, portability requirements, display quality, and battery life when making your decision.</p>
      
      <p>Remember that the most expensive option isn't always the best for your particular situation. Focus on the features that will genuinely improve your productivity and work experience rather than specifications that look impressive but won't benefit your day-to-day tasks.</p>
    `,
    category: 'Laptops',
    image: '/images/professional-laptops.jpg',
    author: 'Sarah Johnson',
    date: 'June 10, 2023',
    readTime: '12 min read',
    relatedArticles: [
      'macbook-air-m2-long-term-review',
      'best-gaming-laptops-2023',
      'windows-11-vs-macos-ventura',
    ],
  },
};

export function generateMetadata({ params }: { params: { slug: string } }) {
  const article = articlesData[params.slug as keyof typeof articlesData];
  
  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }
  
  return {
    title: `${article.title} - TechInformer`,
    description: article.excerpt,
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  // This is a simplified version that would normally fetch data based on the slug
  const article = {
    title: "The Future of Foldable Phones in 2023",
    excerpt: "Explore how foldable technology is evolving and what to expect from the next generation of devices.",
    content: `
      <p>Foldable phones have come a long way since their introduction just a few years ago. What was once considered a gimmick or experimental technology has now evolved into a legitimate product category with multiple manufacturers competing for market share.</p>
      
      <h2>The Current State of Foldable Phones</h2>
      
      <p>Samsung continues to lead the foldable market with its Galaxy Z Fold and Z Flip series. The latest iterations have addressed many of the concerns from early models, including durability, water resistance, and the visibility of the crease in the display.</p>
      
      <p>Meanwhile, competitors like Motorola, Xiaomi, and Huawei have all released their own foldable devices, each with unique approaches to the form factor. Some prioritize a larger internal display, while others focus on compactness and portability.</p>
      
      <h2>Technological Advancements</h2>
      
      <p>The technology behind foldable displays continues to improve at a rapid pace. Manufacturers are developing more durable folding mechanisms, better hinge designs, and displays that can withstand thousands of folds without showing significant wear.</p>
      
      <p>Ultra-thin glass (UTG) has replaced plastic in many foldable displays, offering better scratch resistance while maintaining flexibility. Companies are also working on reducing the visibility of the crease that forms at the fold, one of the most common complaints about these devices.</p>
      
      <h2>What to Expect in 2023</h2>
      
      <p>As we move through 2023, we can expect several exciting developments in the foldable phone market:</p>
      
      <ul>
        <li><strong>More affordable options:</strong> As manufacturing processes improve and economies of scale kick in, we'll likely see more mid-range foldable phones that bring the technology to a wider audience.</li>
        <li><strong>Improved durability:</strong> Each generation of foldable phones has been more durable than the last, and this trend will continue with better water and dust resistance.</li>
        <li><strong>New form factors:</strong> Beyond the current book-style and flip-style foldables, we might see tri-fold devices or even rollable displays that offer new ways to expand screen real estate.</li>
        <li><strong>Better cameras and performance:</strong> Early foldables often compromised on camera quality or performance, but newer models are closing the gap with traditional flagship phones.</li>
      </ul>
      
      <h2>Conclusion</h2>
      
      <p>Foldable phones are no longer just a novelty—they represent a significant direction for the future of mobile devices. As technology continues to improve and prices gradually come down, we may reach a point where foldable displays become the norm rather than the exception.</p>
    `,
    category: "Mobiles",
    author: "Alex Chen",
    date: "June 15, 2023",
    readTime: "8 min read",
  };
  
  return (
    <div className="container-custom py-8">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumbs */}
        <div className="flex items-center text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <Link href={`/category/${article.category.toLowerCase()}`} className="hover:text-primary">
            {article.category}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700">{article.title}</span>
        </div>
        
        {/* Article Header */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{article.title}</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">{article.excerpt}</p>
        
        {/* Article Meta */}
        <div className="flex items-center mb-8">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-bold mr-3">
              {article.author.split(' ').map(name => name[0]).join('')}
            </div>
            <div>
              <p className="font-medium">{article.author}</p>
              <div className="flex items-center text-sm text-gray-500">
                <span>{article.date}</span>
                <span className="mx-2">•</span>
                <span>{article.readTime}</span>
              </div>
            </div>
          </div>
          
          <div className="ml-auto flex space-x-2">
            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
              </svg>
            </button>
            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0v3H7V4h6zm-5 7a1 1 0 100-2 1 1 0 000 2zm0 2a1 1 0 100 2 1 1 0 000-2zm4-2a1 1 0 100-2 1 1 0 000 2zm0 2a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Featured Image */}
        <div className="relative h-[400px] w-full rounded-xl overflow-hidden mb-8 bg-blue-100 flex items-center justify-center">
          <div className="text-center p-4">
            <div className="text-6xl mb-4">📱</div>
            <p className="text-xl font-medium">Foldable Phones Technology</p>
          </div>
        </div>
        
        {/* Article Content */}
        <div 
          className="prose prose-lg max-w-none dark:prose-invert mb-12"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-12">
          <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
            {article.category}
          </span>
          <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
            Technology
          </span>
          <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
            Reviews
          </span>
        </div>
        
        {/* Author Bio */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 mb-12">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-bold mr-4">
              {article.author.split(' ').map(name => name[0]).join('')}
            </div>
            <div>
              <h3 className="font-bold text-lg">{article.author}</h3>
              <p className="text-gray-600 dark:text-gray-300">Tech Writer & Reviewer</p>
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            A passionate technology enthusiast with over 10 years of experience reviewing and analyzing the latest tech products. Specializes in consumer electronics and mobile technology.
          </p>
        </div>
        
        {/* Newsletter */}
        <div className="bg-primary rounded-xl p-8 text-white mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-2">Enjoyed this article?</h3>
              <p className="text-white/90">
                Subscribe to our newsletter to receive the latest tech news, reviews, and exclusive content directly in your inbox.
              </p>
            </div>
            <div className="md:w-1/2">
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white text-gray-800"
                  required
                />
                <button type="submit" className="bg-white text-primary px-4 py-2 rounded-md font-medium hover:bg-gray-100">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 