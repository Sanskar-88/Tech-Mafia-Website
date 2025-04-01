import React from 'react';
import Link from 'next/link';
import PlaceholderImage from './PlaceholderImage';

interface FeaturedArticleProps {
  title: string;
  excerpt: string;
  category: string;
  image: string;
  slug: string;
  date: string;
}

const FeaturedArticle: React.FC<FeaturedArticleProps> = ({
  title,
  excerpt,
  category,
  image,
  slug,
  date,
}) => {
  return (
    <div className="card group h-full flex flex-col">
      <div className="relative h-56 w-full overflow-hidden">
        <PlaceholderImage
          alt={`Featured image for ${title}`}
          className="group-hover:scale-105 transition-transform duration-300 h-full w-full"
        />
        <div className="absolute top-4 left-4 bg-primary text-white text-sm font-medium px-3 py-1 rounded-full">
          {category}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">{date}</span>
        <Link href={slug} className="block">
          <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
            {title}
          </h3>
        </Link>
        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{excerpt}</p>
        <Link
          href={slug}
          className="text-primary font-medium flex items-center hover:underline"
        >
          Read More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedArticle; 