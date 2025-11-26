import { ReactNode } from "react";

interface ParallaxSectionProps {
  imageUrl: string;
  children: ReactNode;
  className?: string;
}

export function ParallaxSection({ imageUrl, children, className = "" }: ParallaxSectionProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Fixed background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="absolute inset-0 bg-stone-900/20" />
      </div>
      
      {/* Scrolling content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
