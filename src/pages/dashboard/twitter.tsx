
import React from "react";
import { Clock } from "lucide-react";
// Changed import from Card.tsx to cardui.tsx which has the CardDescription export
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/cardui";

const TwitterAgentPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Twitter Autopilot</h1>
        <p className="text-muted-foreground">
          Automate your Twitter engagement with Web3 projects
        </p>
      </div>
      
      <Card className="bg-amber-50 border-amber-200">
        <CardHeader>
          <CardTitle className="text-amber-800 flex items-center">
            <Clock className="h-5 w-5 mr-2" />
            Coming Soon
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-amber-700">
            We're working hard to bring you Twitter Autopilot. This feature will allow you to automate your Twitter engagement with Web3 projects to maximize your airdrop eligibility.
          </CardDescription>
        </CardContent>
      </Card>
      
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>What to Expect</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 list-disc pl-5">
              <li>Automated likes, retweets and follows</li>
              <li>Engagement tracking dashboard</li>
              <li>Custom filters for project types</li>
              <li>Airdrop eligibility monitoring</li>
              <li>Integration with wallet activity</li>
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Join the Waitlist</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Be the first to know when Twitter Autopilot is ready. Join our waitlist to receive early access.</p>
            <div className="flex items-center border rounded-md overflow-hidden">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 flex-1 focus:outline-none"
              />
              <button className="bg-scryptex-blue text-white px-4 py-2 font-medium">
                Subscribe
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TwitterAgentPage;
