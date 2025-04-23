import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DashboardSidebar } from "@/components/dashboard/Sidebar";
import { DashboardTopbar } from "@/components/dashboard/Topbar";
import { OutOfCreditsModal } from "@/components/ui/OutOfCreditsModal";
import { FloatingFeedbackButton } from "@/components/support/FloatingFeedbackButton";
import { SupportChatWidget } from "@/components/support/SupportChatWidget";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const [showCreditsModal, setShowCreditsModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
    
    if (!loggedIn) {
      navigate("/login");
    }
  }, [navigate]);

  useEffect(() => {
    const checkCredits = () => {
      const savedCredits = localStorage.getItem('userCredits');
      if (savedCredits === '0') {
        setShowCreditsModal(true);
      }
    };
    
    checkCredits();
    
    window.addEventListener('storage', checkCredits);
    
    return () => {
      window.removeEventListener('storage', checkCredits);
    };
  }, []);

  const handleTopUp = () => {
    navigate("/topup");
    setShowCreditsModal(false);
  };
  
  const handleReferral = () => {
    navigate("/referral");
    setShowCreditsModal(false);
  };

  if (!isLoggedIn) {
    return null; // Will redirect to login
  }

  return (
    <TooltipProvider>
      <div className="flex h-screen bg-gray-50">
        <DashboardSidebar />
        <div className="flex flex-col flex-1 overflow-hidden">
          <DashboardTopbar />
          <main className="flex-1 overflow-y-auto p-4 md:p-6 relative">
            {children}
            <FloatingFeedbackButton />
            <SupportChatWidget />
          </main>
        </div>
        
        <OutOfCreditsModal 
          isOpen={showCreditsModal}
          onClose={() => setShowCreditsModal(false)}
          onTopUp={() => { navigate("/topup"); setShowCreditsModal(false); }}
          onReferral={() => { navigate("/referral"); setShowCreditsModal(false); }}
        />
        <Toaster />
        <Sonner />
      </div>
    </TooltipProvider>
  );
};
