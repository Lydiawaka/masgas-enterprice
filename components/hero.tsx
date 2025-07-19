"use client";

import React, { useState, useEffect } from 'react';
import {  Zap, Settings, ShieldCheck, ArrowRight } from 'lucide-react';

interface Slide {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  cta: string;
  features: string[];
}

const MasgasHeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  
  const slides: Slide[] = [
    {
      title: "Premium Petroleum Equipment",
      subtitle: "Leading the Industry Forward",
      description: "State-of-the-art petroleum equipment designed for maximum efficiency and reliability in fuel management systems.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=600&fit=crop",
      cta: "Explore Equipment",
      features: ["Advanced Technology", "ISO Certified", "24/7 Support"]
    },
    {
      title: "Electrical Solutions",
      subtitle: "Power Your Operations",
      description: "Comprehensive electrical systems and components engineered for petroleum industry applications and beyond.",
      image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1200&h=600&fit=crop",
      cta: "View Solutions",
      features: ["High Performance", "Safety First", "Custom Solutions"]
    },
    {
      title: "Expert Installation & Service",
      subtitle: "Your Trusted Partner",
      description: "Professional installation, maintenance, and support services ensuring optimal performance of your equipment.",
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&h=600&fit=crop",
      cta: "Get Service",
      features: ["Certified Technicians", "Rapid Response", "Warranty Protection"]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index:number) => {
    if (index >= 0 && index < slides.length) {
      setCurrentSlide(index);
    }
  };

  return (
    <div className="relative h-[90vh] overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Background Slides */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-105'
            }`}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-blue-900/70 to-transparent" />
          </div>
        ))}
      </div>

      
      {/* Main Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl">
            {/* Brand Logo/Name */}
            <div className="mb-8">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 tracking-tight">
                MASGAS
              </h1>
              <p className="text-xl md:text-2xl text-blue-200 font-light">
                Petroleum Equipment & Electricals
              </p>
            </div>

            {/* Sliding Content */}
            <div className="space-y-6">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`transition-all duration-700 ease-out ${
                    index === currentSlide
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 translate-x-8'
                  }`}
                  style={{ display: index === currentSlide ? 'block' : 'none' }}
                >
                  <div className="space-y-4">
                    <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                      {slide.title}
                    </h2>
                    <h3 className="text-2xl md:text-3xl text-blue-300 font-medium">
                      {slide.subtitle}
                    </h3>
                    <p className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed">
                      {slide.description}
                    </p>
                    
                    {/* Features */}
                    <div className="flex flex-wrap gap-4 mt-6">
                      {slide.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20"
                        >
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          <span className="text-white text-sm font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <div className="pt-4">
                      <button className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 border border-blue-500/50">
                        <span className="flex items-center gap-2">
                          {slide.cta}
                          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white scale-125'
                : 'bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 z-10 opacity-20">
        <Zap size={120} className="text-blue-400" />
      </div>
      <div className="absolute bottom-20 left-20 z-10 opacity-20">
        <Settings size={80} className="text-blue-300" />
      </div>
      <div className="absolute top-1/2 right-40 z-10 opacity-15">
        <ShieldCheck size={100} className="text-white" />
      </div>

      {/* Animated Background Grid */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          animation: 'grid-move 20s linear infinite'
        }} />
      </div>

      <style jsx>{`
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
      `}</style>
    </div>
  );
};

export default MasgasHeroSection;