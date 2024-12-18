'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="fixed w-full top-0 z-50 bg-background/80 backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative w-8 h-8">
            <Image 
              src="/globe.svg"
              alt="Openmesh"
              fill
              className="object-contain"
            />
          </div>
          <span className="font-bold text-xl">
            Openmesh.<span className="text-primary">Network</span>
          </span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/about" className="hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/products" className="hover:text-primary transition-colors">
            Products
          </Link>
          <Link href="/resources" className="hover:text-primary transition-colors">
            Resources
          </Link>
          <Link href="/community" className="hover:text-primary transition-colors">
            Community
          </Link>
        </div>
      </nav>
    </header>
  );
}