import React from "react";

export const DataSourcesSection = () => {
  const dataSources = [
    { name: "coinMarketCap", category: "data", logo: "/media/coinmarketcap.png" },
    { name: "coinGecko", category: "data", logo: "/media/coingecko.png" },
    { name: "cryptoRank", category: "data", logo: "/media/cryptorank.png" },
    { name: "LinkedIn", category: "data", logo: "/media/Linkedin.png" },
    { name: "dune", category: "data", logo: "/media/dune.png" },
    { name: "nansen", category: "data", logo: "/media/nansen.png" },
    { name: "twitter", category: "sentiment", logo: "/media/twitter.png" },
    { name: "Reddit", category: "sentiment", logo: "/media/Reddit.png" },
    { name: "messari", category: "sentiment", logo: "/media/messari.png" },
    { name: "lunarcrush", category: "sentiment", logo: "/media/lunarcrush.png" },
    { name: "theblock", category: "sentiment", logo: "/media/theblock.png" },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Powered by Comprehensive Data
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We pull from trusted sources to ensure you get the most accurate information
          </p>
        </div>
        
        {/* Data Sources */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-center text-gray-800">Data Sources</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {dataSources.filter(source => source.category === "data").map((source, index) => (
              <div key={index} className="flex items-center justify-center w-24 h-24 bg-white rounded-full shadow-sm border border-gray-200">
                <img
                  src={source.logo}
                  alt={source.name}
                  className={`object-contain ${
                    source.name === "twitter" ? "h-16 w-16" : "h-20 w-20"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Sentiment Sources */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-center text-gray-800">Sentiment Sources</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {dataSources.filter(source => source.category === "sentiment").map((source, index) => (
              <div key={index} className="flex items-center justify-center w-24 h-24 bg-white rounded-full shadow-sm border border-gray-200">
                <img
                  src={source.logo}
                  alt={source.name}
                  className={`object-contain ${
                    source.name === "twitter" ? "h-10 w-10" : "h-20 w-20"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
