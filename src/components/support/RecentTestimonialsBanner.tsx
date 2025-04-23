
import React, { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

interface Testimonial {
  message: string;
  email?: string;
}

export const RecentTestimonialsBanner = ({
  testimonials,
}: {
  testimonials: Testimonial[];
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (testimonials.length < 2) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 3200);
    return () => clearInterval(id);
  }, [testimonials]);

  if (!testimonials || testimonials.length === 0) return null;

  return (
    <div className="flex items-center gap-3 rounded-lg bg-secondary p-3 animate-fade-in transition-all">
      <MessageCircle className="h-4 w-4 text-primary" />
      <span className="text-xs font-medium text-gray-800 italic">
        “{testimonials[index].message}”
      </span>
      {testimonials[index].email && (
        <span className="ml-2 text-xs text-muted-foreground">
          — {testimonials[index].email}
        </span>
      )}
    </div>
  );
};
