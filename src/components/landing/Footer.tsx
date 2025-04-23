import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 flex items-center">
            <img
              src="/media/logo.png" // Path ke logo
              alt="Scryptex Logo"
              className="h-20 w-auto"
            />
            <p className="text-gray-500 text-sm mt-1 ml-3">
              Crypto Analysis & Research Platform
            </p>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Scryptex. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
