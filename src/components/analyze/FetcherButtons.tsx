import { Button } from "@/components/ui/button";
import { useState } from "react";

interface FetcherButtonsProps {
  onFetcherSelect: (type: string) => void;
  activeFetcher: string | null;
  isLoading: boolean;
}

export const FetcherButtons = ({ onFetcherSelect, activeFetcher, isLoading }: FetcherButtonsProps) => {
  const handleFetchClick = (type: string) => {
    onFetcherSelect(type);
  };
  
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      <Button
        variant="outline"
        size="sm"
        onClick={() => handleFetchClick('tokenomics')}
        disabled={isLoading}
      >
        {isLoading && activeFetcher === 'tokenomics' ? 'Loading...' : 'Fetch Tokenomics'}
      </Button>
      
      <Button
        variant="default"
        size="sm"
        onClick={() => handleFetchClick('airdrop')}
        disabled={isLoading}
      >
        {isLoading && activeFetcher === 'airdrop' ? 'Loading...' : 'Fetch Airdrop'}
      </Button>
      
      <Button
        variant="outline"
        size="sm"
        onClick={() => handleFetchClick('social')}
        disabled={isLoading}
      >
        {isLoading && activeFetcher === 'social' ? 'Loading...' : 'Fetch Socials'}
      </Button>

      <Button
        variant="outline"
        size="sm"
        onClick={() => handleFetchClick('contract')}
        disabled={isLoading}
      >
        {isLoading && activeFetcher === 'contract' ? 'Loading...' : 'Fetch Contract'}
      </Button>
    </div>
  );
};
