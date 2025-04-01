# TechInformer - Tech News & Reviews Website

TechInformer is a modern, responsive website built with Next.js and Tailwind CSS that provides the latest information about technology, gadgets, mobile phones, laptops, and other tech-related topics.

## Features

- **Modern Design**: Clean, responsive layout that works on all devices
- **Category Pages**: Dedicated sections for different tech categories (gadgets, mobiles, laptops, wearables)
- **Article Pages**: Detailed article pages with rich content and related articles
- **Newsletter Subscription**: Allow users to subscribe for the latest tech updates
- **Dark Mode Support**: Automatic dark mode based on user preferences
- **No Images Required**: Uses emoji and colored backgrounds instead of actual images

## Tech Stack

- **Next.js**: React framework for server-rendered applications
- **TypeScript**: For type safety and better developer experience
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development

## Getting Started

### Prerequisites

- Node.js 14.x or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/tech-informer.git
cd tech-informer
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Project Structure

```
tech-informer/
├── src/
│   ├── app/                  # Next.js App Router
│   │   ├── article/          # Article pages
│   │   ├── category/         # Category pages
│   │   ├── globals.css       # Global styles
│   │   ├── layout.tsx        # Root layout
│   │   └── page.tsx          # Home page
│   ├── components/           # Reusable components
│   │   ├── Header.tsx        # Header component
│   │   └── Footer.tsx        # Footer component
├── public/                   # Static assets
├── package.json              # Project dependencies and scripts
├── tailwind.config.js        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
└── README.md                 # Project documentation
```

## Image-Free Design

This website is designed to work without requiring any actual images. Instead, it uses:

1. **Emojis**: To represent different categories and content types
2. **Colored Backgrounds**: To create visual interest and distinguish between sections
3. **Gradients**: For hero sections and category cards
4. **Typography**: Strong typography to convey information hierarchy

This approach makes the website:
- Faster to load
- More accessible
- Easier to maintain
- Less dependent on external resources

## Customization

### Adding New Categories

To add a new category, update the following files:
1. Add the category to the Header component navigation
2. Add the category to the Footer component links
3. Create a new entry in the category page

### Adding New Articles

To add a new article:
1. Add the article data to the appropriate category
2. Create a new article page with the content

## Deployment

This project can be easily deployed to Vercel, Netlify, or any other platform that supports Next.js applications.

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Images used in this project are for demonstration purposes only
- Content is fictional and created for demonstration purposes 