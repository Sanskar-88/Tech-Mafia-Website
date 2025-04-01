import React from 'react';

interface PlaceholderImageProps {
  alt: string;
  className?: string;
  style?: Record<string, string | number>;
}

const PlaceholderImage = ({ 
  alt, 
  className = '', 
  style = {} 
}: PlaceholderImageProps) => {
  // Generate a background color based on the alt text for visual variety
  const generateColor = (text: string) => {
    let hash = 0;
    for (let i = 0; i < text.length; i++) {
      hash = text.charCodeAt(i) + ((hash << 5) - hash);
    }
    
    const hue = hash % 360;
    return `hsl(${hue}, 70%, 80%)`;
  };

  const bgColor = generateColor(alt);
  
  return (
    <div 
      className={`flex items-center justify-center ${className}`}
      style={{ 
        backgroundColor: bgColor,
        ...style
      }}
    >
      <div className="text-center p-4 text-gray-700">
        <div className="text-3xl mb-2">📷</div>
        <p className="font-medium text-sm">{alt}</p>
      </div>
    </div>
  );
};

export default PlaceholderImage; 