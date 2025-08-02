"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage1 from '@/assets/hero-school-1.jpg';
import heroImage2 from '@/assets/hero-school-2.jpg';
// import heroImage3 from '@/assets/hero-school-3.jpg';
import Image from 'next/image';

const slides = [
  {
    id: 1,
    image: heroImage1,
    title: "শিক্ষার মাধ্যমে ভবিষ্যৎ গড়ি",
    subtitle:
      "আধুনিক শিক্ষা ব্যবস্থা ও উন্নত পরিবেশে আপনার সন্তানের স্বপ্ন পূরণ করুন",
    alt: "Modern school building with students",
  },
  {
    id: 2,
    image: heroImage2,
    title: "ইন্টারঅ্যাক্টিভ শিক্ষা পদ্ধতি",
    subtitle: "আধুনিক প্রযুক্তি ও অভিজ্ঞ শিক্ষকদের তত্ত্বাবধানে সৃজনশীল শিক্ষা",
    alt: "Students engaged in interactive learning",
  },
  // {
  //   id: 3,
  //   image: heroImage3,
  //   title: "বিজ্ঞান ও গবেষণায় এগিয়ে",
  //   subtitle: "অত্याधুনিক ল্যাবরেটরি ও গবেষণা সুবিধায় হাতে-কলমে শিক্ষা",
  //   alt: "Students in modern science laboratory",
  // },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-advance slides (research shows this should be user-controlled, not automatic)
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="relative h-[70vh] min-h-[500px] w-full overflow-hidden"
      role="banner"
    >
      {/* Slide max-w-7xl */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={index !== currentSlide}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              className="h-full w-full object-cover"
              loading={index === 0 ? 'eager' : 'lazy'}
            />
            {/* Gradient Overlay for Better Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent" />

            {/* Content Overlay */}
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto px-4">
                <div className="max-w-2xl text-white">
                  <h1 className="font-heading text-4xl md:text-6xl font-bold leading-tight mb-4 animate-fade-in-up">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl font-body mb-8 leading-relaxed animate-slide-in-left">
                    {slide.subtitle}
                  </p>
                  <div className="flex flex-wrap gap-4 animate-scale-in">
                    <Button
                      variant="destructive"
                      size="lg"
                      className="font-body"
                    >
                      ভর্তির তথ্য দেখুন
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="text-black"
                    >
                      আমাদের সম্পর্কে
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-8 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Accessibility: Screen reader announcement for slide changes */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Slide {currentSlide + 1} of {slides.length}:{" "}
        {slides[currentSlide].title}
      </div>
    </section>
  );
};

export default HeroSlider;
