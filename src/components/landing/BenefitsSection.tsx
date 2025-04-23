
import React from "react";
import { CheckCircle, Clock, Shield, Zap, Database, Search, Twitter as TwitterIcon } from "lucide-react";

export const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Clock className="h-6 w-6 text-scryptex-blue" />,
      text: "All info in one click"
    },
    {
      icon: <Shield className="h-6 w-6 text-scryptex-blue" />,
      text: "Legit project signals only"
    },
    {
      icon: <Zap className="h-6 w-6 text-scryptex-blue" />,
      text: "Automate farming tasks"
    },
    {
      icon: <TwitterIcon className="h-6 w-6 text-scryptex-blue" />,
      text: "AI-generated Twitter campaigns"
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-scryptex-blue" />,
      text: "No more scam guessing"
    },
    {
      icon: <Database className="h-6 w-6 text-scryptex-blue" />,
      text: "Build personal dashboard"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Save Time. Farm Smarter.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            With Scryptex, you're not just farming—you're farming intelligently
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg">
              <div className="mr-4 mt-1">{benefit.icon}</div>
              <p className="text-lg font-medium text-gray-800">{benefit.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
