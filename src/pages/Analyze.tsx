
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/cardui";
import { FetcherButtons } from "@/components/analyze/FetcherButtons";
import { FetcherOutput } from "@/components/analyze/FetcherOutput";
import { analyzeProject } from "@/services/api";
import { toast } from "@/components/ui/use-toast";

export default function Analyze() {
  const [projectName, setProjectName] = useState("");
  const [projectWebsite, setProjectWebsite] = useState("");
  const [projectChain, setProjectChain] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<any>(null);
  const [activeFetcher, setActiveFetcher] = useState<string | null>(null);

  const handleAnalyze = async () => {
    if (!projectName || !projectWebsite || !projectChain) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields before analyzing.",
        variant: "destructive",
      });
      return;
    }

    setIsAnalyzing(true);
    setAnalysisResult(null);
    setActiveFetcher(null);

    try {
      const res = await analyzeProject({
        project_name: projectName,
        website: projectWebsite,
      });

      const result = res.data?.data;

      setAnalysisResult({
        name: result.project_name,
        description: result.summary || result.about || "No summary available.",
        aiScore: result.ai_score || 75,
        vcBackers: result.vc_backers || [],
        tokenomics: result.tokenomics || [],
      });

      localStorage.setItem("current_project_id", result.project_id || "");

      toast({
        title: "Analysis Complete",
        description: `${projectName} has been successfully analyzed.`,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to analyze the project. Please try again.",
        variant: "destructive",
      });
    }

    setIsAnalyzing(false);
  };

  return (
    <Card className="mt-4">
      <CardHeader>
        <CardTitle>Analyze Project</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input
          placeholder="Project Name"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />
        <Input
          placeholder="Website (https://...)"
          value={projectWebsite}
          onChange={(e) => setProjectWebsite(e.target.value)}
        />
        <Input
          placeholder="Chain (Ethereum, Solana, etc)"
          value={projectChain}
          onChange={(e) => setProjectChain(e.target.value)}
        />
        <Button onClick={handleAnalyze} disabled={isAnalyzing}>
          {isAnalyzing ? "Analyzing..." : "Analyze Project"}
        </Button>

        {analysisResult && (
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">Result</h2>
            <p><strong>Description:</strong> {analysisResult.description}</p>
            <p><strong>AI Score:</strong> <Badge>{Math.round(analysisResult.aiScore)}</Badge></p>
          </div>
        )}

        <FetcherButtonsProps
          onFetcherSelect={setActiveFetcher}
          activeFetcher={activeFetcher}
          setActiveFetcher={setActiveFetcher}
          isLoading={isAnalyzing}
        />

        {activeFetcher && (
          <FetcherOutput
            type={activeFetcher}
            projectName={projectName}
          />
        )}
      </CardContent>
    </Card>
  );
}

