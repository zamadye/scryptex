import React, { useState, useEffect } from "react";
import { ArrowLeft, ChevronRight, Copy, Check, RefreshCw, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/cardui";
import { analyzeFetcher } from "@/services/api";

interface FetcherOutputProps {
  type: string | null;
  onBack: () => void;
  projectName: string;
  projectId: string;
}

export const FetcherOutput = ({ type, onBack, projectName, projectId }: FetcherOutputProps) => {
  const [output, setOutput] = useState<{ title: string; content: string } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (type) {
      fetchFetcherData();
    }
  }, [type]);

  const fetchFetcherData = async () => {
    setIsLoading(true);
    try {
      const response = await analyzeFetcher({
        project_id: projectId,
        fetcher_type: type!,
      });

      if (response.success) {
        setOutput({
          title: response.data.title || "Analysis",
          content: response.data.content || "No data available for this type of analysis.",
        });
      } else {
        setOutput({
          title: "Error",
          content: response.message || "Failed to fetch data.",
        });
      }
    } catch (error) {
      setOutput({
        title: "Error",
        content: "An unexpected error occurred while fetching data.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await fetchFetcherData();
    setIsRefreshing(false);
  };

  const copyToClipboard = () => {
    if (output) {
      navigator.clipboard.writeText(output.content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!type) return null;

  return (
    <Card className="mt-4 animate-in fade-in duration-300">
      <CardHeader className="flex flex-row items-center justify-between bg-gray-50 border-b">
        <div className="flex items-center">
          <Button variant="ghost" size="sm" onClick={onBack} className="mr-2">
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <CardTitle className="text-lg">{output?.title || "Loading..."}</CardTitle>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" onClick={handleRefresh} disabled={isRefreshing}>
            {isRefreshing ? <Loader2 className="h-4 w-4 animate-spin" /> : <RefreshCw className="h-4 w-4" />}
          </Button>
          <Button variant="outline" size="sm" onClick={copyToClipboard}>
            {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
          </Button>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        {isLoading ? (
          <div className="flex justify-center items-center">
            <Loader2 className="h-6 w-6 animate-spin" />
          </div>
        ) : (
          <div className="whitespace-pre-line text-gray-700 text-sm leading-relaxed">
            {output?.content || "No data available."}
          </div>
        )}
        <div className="mt-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Badge variant="outline" className="text-xs">
              AI Generated
            </Badge>
            <Badge variant="outline" className="text-xs">
              Last updated: Today
            </Badge>
          </div>
          <Button variant="outline" size="sm" className="text-xs">
            View Full Report
            <ChevronRight className="ml-1 h-3 w-3" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
