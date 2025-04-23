
import React from "react";
import { Link } from "react-router-dom";
import { BarChart, Rocket, Twitter, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
// Changed import from Card.tsx to cardui.tsx which has the CardDescription export
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/cardui";

const DashboardPage = () => {
  const agents = [
    {
      title: "Project Analysis",
      description: "Analyze crypto projects using AI and on-chain data",
      icon: <BarChart className="h-6 w-6" />,
      path: "/dashboard/analyze",
      available: true
    },
    {
      title: "Testnet Farming",
      description: "Automate testnet participation across multiple chains",
      icon: <Rocket className="h-6 w-6" />,
      path: "/dashboard/farming",
      available: false
    },
    {
      title: "Twitter Autopilot",
      description: "Automate Twitter engagement with Web3 projects",
      icon: <Twitter className="h-6 w-6" />,
      path: "/dashboard/twitter",
      available: false
    },
    {
      title: "Saved Projects",
      description: "View and manage your saved crypto projects",
      icon: <Save className="h-6 w-6" />,
      path: "/dashboard/save",
      available: true
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Welcome to Scryptex</h1>
        <p className="text-muted-foreground">
          Use our agents to analyze and track crypto projects
        </p>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {agents.map((agent) => (
          <Card key={agent.title} className="relative">
            {!agent.available && (
              <span className="absolute top-2 right-2 bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-1 rounded-full">
                Coming Soon
              </span>
            )}
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {agent.title}
              </CardTitle>
              <div className="h-10 w-10 rounded-full bg-scryptex-light flex items-center justify-center text-scryptex-blue">
                {agent.icon}
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-3">{agent.description}</CardDescription>
              <Link to={agent.path}>
                <Button 
                  variant={agent.available ? "default" : "outline"} 
                  className="w-full"
                  disabled={!agent.available}
                >
                  {agent.available ? "Launch" : "Coming Soon"}
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent className="text-sm">
            <div className="space-y-4">
              <div className="border-b pb-2">
                <p className="font-medium">Analyzed Aptos project</p>
                <p className="text-gray-500 text-xs">2 hours ago</p>
              </div>
              <div className="border-b pb-2">
                <p className="font-medium">Added HyperDrop to saved projects</p>
                <p className="text-gray-500 text-xs">Yesterday</p>
              </div>
              <div>
                <p className="font-medium">Checked testnet farming opportunities</p>
                <p className="text-gray-500 text-xs">3 days ago</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Credit Usage</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Available Credits</span>
              <span className="text-scryptex-blue font-bold">125</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-scryptex-blue h-2.5 rounded-full" style={{ width: "45%" }}></div>
            </div>
            <Link to="/topup">
              <Button variant="outline" size="sm" className="w-full">
                Top Up Credits
              </Button>
            </Link>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Link to="/dashboard/analyze">
                <Button variant="secondary" className="w-full justify-start">
                  <BarChart className="mr-2 h-4 w-4" />
                  New Analysis
                </Button>
              </Link>
              <Link to="/dashboard/save">
                <Button variant="secondary" className="w-full justify-start">
                  <Save className="mr-2 h-4 w-4" />
                  View Saved Projects
                </Button>
              </Link>
              <Link to="/referral">
                <Button variant="secondary" className="w-full justify-start">
                  <Twitter className="mr-2 h-4 w-4" />
                  Refer a Friend
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardPage;
