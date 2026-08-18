"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TestimonialCard from "@/components/ui/TestimonialCard";
import type { Review } from "@/content/reviews";

interface TestimonialsCarouselProps {
  reviews: Review[];
}

export default function TestimonialsCarousel({ reviews }: TestimonialsCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (reviews.length === 0) return null;

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + reviews.length) % reviews.length);
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % reviews.length);
  };

  return (
    <div className="section-container pb-4">
      <div className="mx-auto flex max-w-4xl items-center gap-2 sm:gap-5">
        <button
          type="button"
          onClick={showPrevious}
          className="grid size-10 shrink-0 place-items-center rounded-full border border-black/10 bg-white text-text-primary shadow-md transition hover:-translate-y-0.5 hover:border-brand-primary/30 hover:text-brand-primary sm:size-12"
          aria-label="Show previous client story"
        >
          <ChevronLeft className="size-5" />
        </button>

        <div className="min-w-0 flex-1 overflow-hidden py-4">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={reviews[activeIndex].name}
              initial={{ opacity: 0, x: 36 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -36 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <TestimonialCard review={reviews[activeIndex]} />
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          type="button"
          onClick={showNext}
          className="grid size-10 shrink-0 place-items-center rounded-full border border-black/10 bg-white text-text-primary shadow-md transition hover:-translate-y-0.5 hover:border-brand-primary/30 hover:text-brand-primary sm:size-12"
          aria-label="Show next client story"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>

      <div className="mt-3 flex justify-center gap-2" aria-label="Client story navigation">
        {reviews.map((review, index) => (
          <button
            key={review.name}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`h-2 rounded-full transition-all ${index === activeIndex ? "w-7 bg-brand-primary" : "w-2 bg-black/15 hover:bg-black/30"}`}
            aria-label={`Show client story ${index + 1}`}
            aria-current={index === activeIndex ? "true" : undefined}
          />
        ))}
      </div>
    </div>
  );
}
