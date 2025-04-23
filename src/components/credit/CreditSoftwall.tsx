
import React from "react";
import { Gift, CircleDollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/cardui";

interface CreditSoftwallProps {
  onTopUp: () => void;
  onInvite: () => void;
  creditsRequired: number;
}

export const CreditSoftwall = ({ onTopUp, onInvite, creditsRequired }: CreditSoftwallProps) => {
  return (
    <div className="relative">
      {/* Blurred content container */}
      <div className="filter blur-sm pointer-events-none">
        {/* This will wrap the original content */}
        <div className="h-64 bg-gray-100 rounded-lg animate-pulse" />
      </div>
      
      {/* Overlay card */}
      <Card className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white/95 backdrop-blur border shadow-lg animate-in fade-in duration-300">
        <CardHeader className="text-center">
          <CardTitle>Want to see more?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-center text-muted-foreground">
            You've reached your free quota. Unlock this insight for {creditsRequired} credits.
          </p>
          
          <div className="grid grid-cols-2 gap-4">
            <Button onClick={onTopUp} variant="outline" className="w-full">
              <CircleDollarSign className="mr-2 h-4 w-4" />
              Top Up Credits
            </Button>
            <Button onClick={onInvite} variant="default" className="w-full">
              <Gift className="mr-2 h-4 w-4" />
              Invite & Earn
            </Button>
          </div>
          
          <p className="text-xs text-center text-muted-foreground">
            Invite a friend to instantly unlock access & earn 5 bonus credits!
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
