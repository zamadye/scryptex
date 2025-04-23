
import React from "react";
import { Footer } from "@/components/landing/Footer";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

interface LandingLayoutProps {
  children: React.ReactNode;
}

export const LandingLayout: React.FC<LandingLayoutProps> = ({ children }) => {
  return (
    <TooltipProvider>
      <div className="flex min-h-screen flex-col">
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
        <Toaster />
        <Sonner />
      </div>
    </TooltipProvider>
  );
};
