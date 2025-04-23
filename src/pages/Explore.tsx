
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Radar } from "lucide-react";
import { Button } from "@/components/ui/button";

const ExplorePage = () => {
  const scrollToWaitlist = () => {
    // Since we're navigating to homepage first, we need to wait for navigation
    setTimeout(() => {
      const waitlistSection = document.getElementById("waitlist");
      waitlistSection?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex flex-col items-center justify-center p-6 text-center animate-in fade-in slide-in-from-bottom-5 duration-500">
      <div className="max-w-3xl mx-auto space-y-8">
        <Radar className="w-16 h-16 text-scryptex-blue mb-8" />
        
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
          🚀 Explore Coming Soon!
        </h1>
        
        <p className="text-xl text-gray-600 mb-8">
          We're crafting something exciting.
          The Explore feature will let you discover top community-analyzed airdrop projects, 
          trending chains, and automated farming insights — all powered by AI.
        </p>
        
        <p className="text-lg text-gray-700 bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-gray-100">
          You've found it before it launched.
          Scryptex Explore will help you uncover promising projects,
          filter out the noise, and farm smarter — with zero guesswork.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <Link to="/">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Go Back
            </Button>
          </Link>
          <Link to="/">
            <Button 
              className="bg-scryptex-blue hover:bg-scryptex-dark"
              onClick={scrollToWaitlist}
            >
              Join Waitlist
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;
