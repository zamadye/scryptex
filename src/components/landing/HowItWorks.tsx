
import React from "react";

const steps = [
  {
    number: "01",
    title: "Connect Your Wallet",
    description: "Connect securely to access your assets and interactions across multiple chains."
  },
  {
    number: "02",
    title: "Analyze Projects",
    description: "Our AI analyzes crypto projects using on-chain data and market insights."
  },
  {
    number: "03",
    title: "Get Personalized Actions",
    description: "Receive tailored recommendations for airdrops, farming, and investment strategies."
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-16 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How Scryptex Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our platform uses advanced AI to analyze crypto projects and maximize your opportunities
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 relative animate-in fade-in duration-500">
              <div className="absolute -top-4 -left-4 bg-scryptex-blue text-white text-xl font-bold rounded-full w-12 h-12 flex items-center justify-center">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-3 mt-4 text-gray-900">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
