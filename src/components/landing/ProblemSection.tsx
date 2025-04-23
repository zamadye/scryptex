
import React from "react";
import { XCircle, Clock, Search } from "lucide-react";

export const ProblemSection = () => {
  const problems = [
    {
      icon: <XCircle className="h-12 w-12 text-red-500" />,
      title: "Join testnet → no reward",
      description: "Hours spent on testnet participation with zero confirmation of eligibility"
    },
    {
      icon: <Clock className="h-12 w-12 text-amber-500" />,
      title: "Farm airdrop → no confirmation",
      description: "Never knowing if your farming efforts will actually pay off"
    },
    {
      icon: <Search className="h-12 w-12 text-orange-500" />,
      title: "Research project potential? Manual & exhausting",
      description: "Spending hours on research only to find dead-end projects"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Tired of Wasting Time on Useless Projects?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The Web3 space is filled with noise, scams, and time-wasting activities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {problems.map((problem, index) => (
            <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="mb-4">{problem.icon}</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">{problem.title}</h3>
              <p className="text-gray-600">{problem.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <p className="text-xl font-semibold text-scryptex-blue">
            It's 2025 — you deserve better.
          </p>
        </div>
      </div>
    </section>
  );
};
