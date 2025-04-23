
import React from "react";
import { Medal, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

interface BadgeProgressProps {
  currentTier: "bronze" | "silver" | "gold" | "legendary";
  progress: number;
  nextMilestone: number;
  reward: number;
}

export const BadgeProgress = ({ currentTier, progress, nextMilestone, reward }: BadgeProgressProps) => {
  const tiers = {
    bronze: { color: "bg-amber-600", textColor: "text-amber-600" },
    silver: { color: "bg-gray-400", textColor: "text-gray-400" },
    gold: { color: "bg-yellow-500", textColor: "text-yellow-500" },
    legendary: { color: "bg-purple-500", textColor: "text-purple-500" }
  };

  const percentage = (progress / nextMilestone) * 100;

  return (
    <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
      <div className={`p-2 rounded-full ${tiers[currentTier].color}`}>
        <Medal className="h-5 w-5 text-white" />
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h4 className={`font-medium capitalize ${tiers[currentTier].textColor}`}>
            {currentTier} User
          </h4>
          <Badge variant="outline" className="font-normal">
            <Star className="h-3 w-3 mr-1" />
            +{reward} credits at next tier
          </Badge>
        </div>
        <Progress value={percentage} className="h-1.5 mt-2" />
        <p className="text-xs text-muted-foreground mt-1">
          {nextMilestone - progress} more to next tier
        </p>
      </div>
    </div>
  );
};
