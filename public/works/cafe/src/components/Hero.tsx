import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";

export function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1635236796520-68dd8df87895?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwY2FmZSUyMGludGVyaW9yfGVufDF8fHx8MTc2MjU1NTgzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Cafe interior"
            className="w-full h-full object-cover opacity-90"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/50 to-stone-900/30" />
      </div>
      
      <motion.div
        className="relative z-10 text-center px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <div className="bg-white/30 backdrop-blur-md py-12 px-8 rounded-lg inline-block">
          <h1 className="text-stone-800 mb-4 tracking-wide">NATURAL CAFE</h1>
          <p className="text-stone-600 max-w-md mx-auto">
            自然の恵みを感じる、心地よい時間を
          </p>
        </div>
      </motion.div>
    </div>
  );
}