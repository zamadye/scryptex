
import React from "react";
import { Search } from "lucide-react";
// Changed import from Card.tsx to cardui.tsx which has the CardDescription export
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/cardui";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const SavedProjectsPage = () => {
  // Sample saved projects data
  const savedProjects = [
    {
      id: 1,
      name: "Aptos",
      category: "Layer 1",
      description: "Aptos is a Layer 1 blockchain built with Move, focused on safety and scalability.",
      dateAdded: "2023-11-15",
      score: 87
    },
    {
      id: 2,
      name: "HyperDrop",
      category: "DeFi",
      description: "Decentralized yield farming protocol with innovative tokenomics.",
      dateAdded: "2023-11-10",
      score: 92
    },
    {
      id: 3,
      name: "Solana",
      category: "Layer 1",
      description: "High-performance blockchain supporting smart contracts and decentralized applications.",
      dateAdded: "2023-10-25",
      score: 78
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Saved Projects</h1>
        <p className="text-muted-foreground">
          View and manage your saved crypto projects
        </p>
      </div>
      
      <div className="flex items-center space-x-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            placeholder="Search saved projects..."
            className="pl-8"
          />
        </div>
        <Button variant="outline">Filter</Button>
        <Button variant="outline">Sort</Button>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {savedProjects.map((project) => (
          <Card key={project.id}>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>{project.name}</CardTitle>
                  <CardDescription>{project.category}</CardDescription>
                </div>
                <div className="bg-scryptex-light text-scryptex-blue font-medium rounded-full px-2.5 py-1 text-sm">
                  Score: {project.score}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">{project.description}</p>
              <p className="text-xs text-gray-500 mt-2">Added on {project.dateAdded}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm">View Details</Button>
              <Button size="sm">Analyze Again</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SavedProjectsPage;
