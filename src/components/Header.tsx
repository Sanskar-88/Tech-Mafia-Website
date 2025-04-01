import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white dark:bg-dark shadow-md z-50">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-primary font-heading">
            TechInformer
          </Link>
          
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li>
                <Link href="/" className="font-medium hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/category/gadgets" className="font-medium hover:text-primary">
                  Gadgets
                </Link>
              </li>
              <li>
                <Link href="/category/mobiles" className="font-medium hover:text-primary">
                  Mobiles
                </Link>
              </li>
              <li>
                <Link href="/category/laptops" className="font-medium hover:text-primary">
                  Laptops
                </Link>
              </li>
              <li>
                <Link href="/category/wearables" className="font-medium hover:text-primary">
                  Wearables
                </Link>
              </li>
              <li>
                <Link href="/news" className="font-medium hover:text-primary">
                  News
                </Link>
              </li>
            </ul>
          </nav>
          
          <div className="flex items-center space-x-4">
            <button className="md:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <button className="btn btn-primary hidden md:block">Subscribe</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 