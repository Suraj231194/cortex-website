"use client";

import { useState } from "react";
import { motion } from "motion/react";
import TestimonialCard from "@/components/ui/TestimonialCard";
import type { Review } from "@/content/reviews";

interface TestimonialsMarqueeProps {
  reviews: Review[];
}

export default function TestimonialsMarquee({ reviews }: TestimonialsMarqueeProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  // Repeat array 4x for seamless infinite marquee scrolling
  const repeatedReviews = [...reviews, ...reviews, ...reviews, ...reviews];

  return (
    <div
      className="relative w-full overflow-hidden py-4 cursor-grab active:cursor-grabbing select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Left/Right Edge Blur / Gradient Fades */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-12 sm:w-20 bg-gradient-to-r from-white via-white/80 to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-12 sm:w-20 bg-gradient-to-l from-white via-white/80 to-transparent" />

      <motion.div
        className="flex gap-6 w-max"
        drag="x"
        dragConstraints={{ left: -1800, right: 100 }}
        dragElastic={0.1}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}
        animate={
          isHovered || isDragging
            ? undefined
            : { x: ["0%", "-50%"] }
        }
        transition={
          isHovered || isDragging
            ? undefined
            : {
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 28,
                  ease: "linear",
                },
              }
        }
      >
        {repeatedReviews.map((review, i) => (
          <div
            key={`${review.name}-${i}`}
            className="w-[340px] sm:w-[400px] md:w-[440px] shrink-0"
          >
            <TestimonialCard review={review} index={0} />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
