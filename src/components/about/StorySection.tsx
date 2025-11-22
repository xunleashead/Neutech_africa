"use client";

import { motion } from "framer-motion";
import { companyInfo } from "@/data/content";

export default function StorySection() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {companyInfo.story}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Today, we stand as a beacon of innovation, helping businesses across the continent
              harness the power of technology to achieve their goals and secure their digital future.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
