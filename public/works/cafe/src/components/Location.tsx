import { MapPin, Clock, Phone } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function Location() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-24 px-4" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-center text-stone-800 mb-16 tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          ACCESS
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-12">
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <MapPin className="w-8 h-8 text-stone-600 mb-4" />
            <h3 className="text-stone-700 mb-3 tracking-wide">住所</h3>
            <p className="text-stone-600">
              〒150-0001<br />
              東京都渋谷区神宮前1-2-3<br />
              ナチュラルビル 1F
            </p>
          </motion.div>
          
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Clock className="w-8 h-8 text-stone-600 mb-4" />
            <h3 className="text-stone-700 mb-3 tracking-wide">営業時間</h3>
            <p className="text-stone-600">
              平日 9:00 - 19:00<br />
              土日祝 10:00 - 18:00<br />
              定休日: 水曜日
            </p>
          </motion.div>
          
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Phone className="w-8 h-8 text-stone-600 mb-4" />
            <h3 className="text-stone-700 mb-3 tracking-wide">お問い合わせ</h3>
            <p className="text-stone-600">
              TEL: 03-1234-5678<br />
              MAIL: info@naturalcafe.jp
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}