import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, Bell, User } from "lucide-react";
import { CreditDisplay } from "@/components/credit/CreditDisplay";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const DashboardTopbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    navigate("/");
  };

  const handleTopUp = () => {
    navigate("/topup");
  };

  const handleInvite = () => {
    navigate("/referral");
  };

  return (
    <header className="bg-white border-b border-gray-200 py-4 px-6 flex items-center justify-between">
      <div className="flex items-center md:hidden">
        <Button
          variant="ghost"
          size="sm"
          className="p-0 h-9 w-9"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>

      <div className="hidden md:block">
        <h1 className="font-semibold text-xl text-gray-800">Dashboard</h1>
      </div>

      <div className="flex items-center space-x-4">
        <CreditDisplay 
          currentCredits={6}
          maxCredits={10}
          onTopUp={handleTopUp}
          onInvite={handleInvite}
        />
        
        <Button variant="ghost" size="sm" className="p-0 h-9 w-9 text-gray-500">
          <Bell className="h-5 w-5" />
          <span className="sr-only">Notifications</span>
        </Button>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="p-0 h-9 w-9 rounded-full bg-gray-100">
              <User className="h-5 w-5 text-gray-600" />
              <span className="sr-only">User menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => navigate("/dashboard/profile")}>
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => navigate("/dashboard/settings")}>
              Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => navigate("/topup")}>
              Top Up Credits
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => navigate("/referral")}>
              Referral Program
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout}>
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};
