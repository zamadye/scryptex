
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BarChart, Rocket, Twitter, PieChart, Search } from "lucide-react";

const features = [
  {
    title: "Deep Project Analysis",
    description: "Analyze crypto projects to understand their potential using AI and on-chain data.",
    icon: <BarChart className="h-12 w-12 text-scryptex-blue" />,
    path: "/dashboard/analyze",
    available: true
  },
  {
    title: "Twitter Autopilot",
    description: "Automate your Twitter engagement with Web3 projects to maximize airdrop eligibility.",
    icon: <Twitter className="h-12 w-12 text-scryptex-blue" />,
    path: "/dashboard/twitter",
    available: false
  },
  {
    title: "Testnet Farming",
    description: "Automate testnet participation across multiple chains to boost your rewards.",
    icon: <Rocket className="h-12 w-12 text-scryptex-blue" />,
    path: "/dashboard/farming",
    available: false
  },
  {
    title: "Airdrop Portfolio",
    description: "Track and manage your potential airdrops in a visual portfolio dashboard.",
    icon: <PieChart className="h-12 w-12 text-scryptex-blue" />,
    path: "/dashboard/save",
    available: true
  },
  {
    title: "Smart Project Screener",
    description: "Discover high-potential projects before everyone else with AI-powered scoring.",
    icon: <Search className="h-12 w-12 text-scryptex-blue" />,
    path: "/dashboard",
    available: true
  }
];

export const FeatureGrid = () => {
  return (
    <section className="py-16 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16">
          All-in-One Crypto Research Platform
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Link to={feature.path} key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 animate-in fade-in duration-500 relative" style={{ animationDelay: `${index * 100}ms` }}>
              {!feature.available && (
                <span className="absolute top-4 right-4 bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-1 rounded-full">
                  Coming Soon
                </span>
              )}
              <div className="flex flex-col items-start">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <div className="mt-auto">
                  <span className="text-scryptex-blue font-medium flex items-center">
                    Get Started
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
