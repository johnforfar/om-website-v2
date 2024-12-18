'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative min-h-screen pt-20">
      {/* Background */}
      <div className="absolute inset-0 opacity-20">
        <Image 
          src="https://framerusercontent.com/images/h6WLVGFkupUWdZWpFwOwbwR3Hlw.png"
          alt="Particle Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1 
            className="text-4xl md:text-[42px] font-bold leading-[60px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Permissionless & Immutable Cloud
          </motion.h1>

          <h2 className="text-[72px] font-bold text-primary mt-4">
            for developer tools & compilers
          </h2>
        </div>
      </div>
    </div>
  );
}