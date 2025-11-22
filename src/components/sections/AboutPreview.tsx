"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function AboutPreview() {
  const highlights = [
    "Leading tech innovation across Africa",
    "Expert team of developers and security specialists",
    "Proven track record of successful projects",
    "24/7 support and dedicated customer service",
  ];

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Driving Digital Transformation in Africa
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              NeuTechAfrica is more than just a technology company – we're your partner in innovation.
              Founded with a vision to revolutionize the African tech landscape, we deliver cutting-edge
              solutions that empower businesses to thrive in the digital age.
            </p>

            <ul className="space-y-4 mb-8">
              {highlights.map((highlight, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{highlight}</span>
                </motion.li>
              ))}
            </ul>

            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </motion.div>

          {/* Image/Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 md:p-12">
              <div className="space-y-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">5+</div>
                  <div className="text-white/80">Years of Excellence</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">100+</div>
                  <div className="text-white/80">Happy Clients</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">200+</div>
                  <div className="text-white/80">Projects Delivered</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
