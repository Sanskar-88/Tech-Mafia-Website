import React from 'react';
import Link from 'next/link';
import PlaceholderImage from './PlaceholderImage';

interface ArticleCardProps {
  title: string;
  excerpt: string;
  category: string;
  image: string;
  slug: string;
  date: string;
}

const ArticleCard = ({
  title,
  excerpt,
  category,
  image,
  slug,
  date,
}) => {
  return (
    <div className="card group h-full flex flex-col">
      <div className="relative h-48 w-full overflow-hidden">
        <PlaceholderImage
          alt={`Image for ${title}`}
          className="group-hover:scale-105 transition-transform duration-300 h-full w-full"
        />
        <div className="absolute top-3 left-3 bg-primary text-white text-xs font-medium px-2 py-1 rounded-full">
          {category}
        </div>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <span className="text-xs text-gray-500 dark:text-gray-400 mb-1">{date}</span>
        <Link href={slug} className="block">
          <h3 className="text-lg font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
        </Link>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">{excerpt}</p>
        <Link
          href={slug}
          className="text-primary text-sm font-medium mt-auto hover:underline"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default ArticleCard; 