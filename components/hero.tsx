"use client";

import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

interface Slide {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  cta: string;
}

const MasgasHeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  
  const slides: Slide[] = [
    {
      title: "Premium Petroleum Equipment",
      subtitle: "Leading the Industry Forward",
      description: "State-of-the-art petroleum equipment designed for maximum efficiency and reliability in fuel management systems.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=600&fit=crop",
      cta: "Explore Equipment"
    },
    {
      title: "Electrical Solutions",
      subtitle: "Power Your Operations",
      description: "Comprehensive electrical systems and components engineered for petroleum industry applications and beyond.",
      image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1200&h=600&fit=crop",
      cta: "View Solutions"
    },
    {
      title: "Expert Installation & Service",
      subtitle: "Your Trusted Partner",
      description: "Professional installation, maintenance, and support services ensuring optimal performance of your equipment.",
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&h=600&fit=crop",
      cta: "Get Service"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    if (index >= 0 && index < slides.length) {
      setCurrentSlide(index);
    }
  };

  const currentSlideData = slides[currentSlide];

  return (
    <div className="relative min-h-[600px] lg:h-screen overflow-hidden flex flex-col justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out"
          style={{ backgroundImage: `url(${currentSlideData.image})` }}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - Content */}
            <div className="space-y-8">
              {/* Brand */}
              <div>
                <h1 className="text-2xl md:text-4xl font-bold text-white mb-2">
                  MASGAS
                </h1>
                <p className="text-sm md:text-lg text-blue-200">
                  Petroleum Equipment & Electricals
                </p>
              </div>

              {/* Main Content */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-2 md:mb-4">
                    {currentSlideData.title}
                  </h2>
                  <h3 className="text-lg md:text-2xl text-blue-300 font-medium mb-4 md:mb-6">
                    {currentSlideData.subtitle}
                  </h3>
                </div>
                
                <p className="text-sm md:text-lg text-gray-200 leading-relaxed max-w-xl">
                  {currentSlideData.description}
                </p>

                {/* CTA Button */}
                <div className="pt-4">
                  <button className="group bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold text-base md:text-lg transition-all duration-300 hover:scale-105 shadow-lg">
                    <span className="flex items-center gap-2">
                      {currentSlideData.cta}
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column - Navigation */}
            <div className="hidden lg:flex justify-end">
              <div className="space-y-4">
                            
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="absolute top-1/2 -translate-y-1/2 left-4 lg:hidden z-20">
        <button
          onClick={prevSlide}
          className="p-2 bg-black/30 hover:bg-black/50 rounded-full text-white transition-all duration-300"
        >
          <ChevronLeft size={20} />
        </button>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-4 lg:hidden z-20">
        <button
          onClick={nextSlide}
          className="p-2 bg-black/30 hover:bg-black/50 rounded-full text-white transition-all duration-300"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default MasgasHeroSection;