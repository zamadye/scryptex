
import React from "react";
import { CircleDollarSign, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";

interface CreditDisplayProps {
  currentCredits: number;
  maxCredits: number;
  onTopUp: () => void;
  onInvite: () => void;
}

export const CreditDisplay = ({ 
  currentCredits, 
  maxCredits,
  onTopUp,
  onInvite 
}: CreditDisplayProps) => {
  const { toast } = useToast();
  const percentage = (currentCredits / maxCredits) * 100;

  const handleInvite = () => {
    onInvite();
    toast({
      title: "Invite friends, earn credits!",
      description: "Each successful referral gives you +5 credits",
    });
  };

  return (
    <div className="flex items-center gap-2">
      <div className="flex flex-col items-end">
        <div className="flex items-center gap-2">
          <CircleDollarSign className="h-4 w-4 text-blue-500" />
          <span className="font-medium">
            {currentCredits}/{maxCredits} Credits
          </span>
        </div>
        <Progress value={percentage} className="w-32 h-1.5 mt-1" />
      </div>
      <div className="flex gap-1">
        <Button 
          variant="outline" 
          size="sm" 
          onClick={handleInvite}
          className="h-8"
        >
          <Gift className="h-4 w-4 mr-1" />
          Invite
        </Button>
      </div>
    </div>
  );
};
