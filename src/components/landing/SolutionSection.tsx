
import React from "react";
import { BarChart, Rocket, Twitter } from "lucide-react";

export const SolutionSection = () => {
  const solutions = [
    {
      icon: <BarChart className="h-16 w-16 text-scryptex-blue" />,
      title: "Analyze Agent",
      description: "Filter scams, hype, & weak projects. One-click full report: roadmap, tokenomics, team, VC, airdrop signal."
    },
    {
      icon: <Rocket className="h-16 w-16 text-scryptex-blue" />,
      title: "Farming Agent",
      description: "Auto-detect & run farming tasks across chains. No more clicking task by task manually."
    },
    {
      icon: <Twitter className="h-16 w-16 text-scryptex-blue" />,
      title: "Twitter Agent",
      description: "AI writes your Twitter post, thread, meme. Farm social engagement in seconds."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Scryptex Does the Hard Work, So You Don't Have To
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our intelligent agents work together to save you time and maximize your opportunities
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md border border-gray-200 text-center hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex justify-center mb-6">{solution.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">{solution.title}</h3>
              <p className="text-gray-600">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
