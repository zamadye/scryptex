
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="py-20 px-4 sm:px-6 flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-5 duration-500">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 max-w-4xl mb-6">
        The Ultimate <span className="text-scryptex-blue">Crypto Research & Analysis</span> Platform
      </h1>
      <p className="text-xl text-gray-600 max-w-2xl mb-10">
        AI-powered analysis for airdrop hunters, investors, and Web3 researchers. Find the best opportunities before anyone else.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link to="/dashboard">
          <Button className="bg-scryptex-blue hover:bg-scryptex-dark text-white font-medium rounded-lg px-6 py-3 flex items-center">
            Explore Dashboard
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
        <Link to="/login">
          <Button variant="outline" className="border border-gray-300 hover:bg-gray-50 rounded-lg px-6 py-3 flex items-center">
            Login
          </Button>
        </Link>
      </div>
    </section>
  );
};
