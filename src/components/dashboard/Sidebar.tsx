
import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  BarChart2,
  Rocket,
  Twitter,
  Save,
  Settings,
  User,
  ExternalLink,
} from "lucide-react";

export const DashboardSidebar = () => {
  const location = useLocation();
  
  const navigationItems = [
    { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
    { name: "Analyze", path: "/dashboard/analyze", icon: BarChart2 },
    { 
      name: "Farming", 
      path: "/dashboard/farming", 
      icon: Rocket,
      badge: "Coming Soon"
    },
    { 
      name: "Twitter Agent", 
      path: "/dashboard/twitter", 
      icon: Twitter,
      badge: "Coming Soon"
    },
    { name: "Saved Projects", path: "/dashboard/save", icon: Save },
  ];

  const accountItems = [
    { name: "Profile", path: "/dashboard/profile", icon: User },
    { name: "Settings", path: "/dashboard/settings", icon: Settings },
  ];

  return (
    <aside className="w-64 hidden md:block bg-white border-r border-gray-200 h-screen overflow-y-auto">
      <div className="p-4 border-b border-gray-200">
        <Link to="/" className="flex items-center">
          <span className="text-xl font-bold text-scryptex-blue">Scryptex</span>
        </Link>
      </div>
      
      <nav className="p-4 space-y-8">
        <div>
          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
            Main
          </div>
          <ul className="space-y-1">
            {navigationItems.map((item) => (
              <li key={item.name}>
                <Link 
                  to={item.path}
                  className={`flex items-center justify-between p-2 rounded-md group ${
                    location.pathname === item.path
                      ? "bg-scryptex-light text-scryptex-blue"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <div className="flex items-center">
                    <item.icon className="w-5 h-5 mr-3" />
                    <span>{item.name}</span>
                  </div>
                  {item.badge && (
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
            Account
          </div>
          <ul className="space-y-1">
            {accountItems.map((item) => (
              <li key={item.name}>
                <Link 
                  to={item.path}
                  className={`flex items-center p-2 rounded-md ${
                    location.pathname === item.path
                      ? "bg-scryptex-light text-scryptex-blue"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="pt-4 border-t border-gray-200">
          <Link
            to="/"
            className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-md"
          >
            <ExternalLink className="w-5 h-5 mr-3" />
            <span>Back to Home</span>
          </Link>
        </div>
      </nav>
    </aside>
  );
};
