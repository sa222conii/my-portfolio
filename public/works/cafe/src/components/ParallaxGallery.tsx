import { ParallaxSection } from "./ParallaxSection";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

interface ParallaxGalleryProps {
  imageUrl: string;
  title?: string;
  description?: string;
}

export function ParallaxGallery({ imageUrl, title, description }: ParallaxGalleryProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <ParallaxSection imageUrl={imageUrl} className="py-32">
      <div className="max-w-4xl mx-auto px-4" ref={ref}>
        <motion.div
          className="bg-white/30 backdrop-blur-md p-12 rounded-lg"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
        >
          {title && (
            <h2 className="text-center text-stone-800 mb-6 tracking-wide">
              {title}
            </h2>
          )}
          {description && (
            <p className="text-center text-stone-600 max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </motion.div>
      </div>
    </ParallaxSection>
  );
}