"use client";

import { useEffect, useState } from "react";

export default function LiveMarketData() {
  const [marketData, setMarketData] = useState([
    {
      symbol: "SPY",
      name: "S&P 500 ETF",
      price: 681.75,
      change: 0.48,
      changePercent: 0.07,
      timestamp: "02/13 04:00 PM ET",
    },

    {
      symbol: "BTCUSDT",
      name: "Bitcoin / USDT",
      price: 105432.15,
      change: 1245.80,
      changePercent: 1.20,
      timestamp: "Live",
    },
    {
      symbol: "ETHUSDT",
      name: "Ethereum / USDT",
      price: 4289.50,
      change: -32.10,
      changePercent: -0.74,
      timestamp: "Live",
    },
  ]);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-6">
      {/* Main Card */}
      <div className="bg-[#0f0f17] border border-gray-800/50 rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-gray-950 to-black border-b border-gray-800">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
              <span className="text-green-400 text-xl">📈</span>
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-white">
              Live Market Data
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-sm text-green-400 font-medium">Real-time</span>
          </div>
        </div>

        {/* Rows */}
        <div className="divide-y divide-gray-800/50">
          {marketData.map((item, index) => (
            <div
              key={index}
              className="px-6 py-3 hover:bg-gray-900/30 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                  <div className="text-white font-medium text-base">
                    {item.symbol} {item.name && `• ${item.name}`}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    {item.timestamp}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xl md:text-2xl font-bold text-white">
                    ${item.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </div>
                  <div
                    className={`text-sm font-medium mt-1 ${
                      item.change >= 0 ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    {item.change >= 0 ? "+" : ""}
                    {item.change.toFixed(2)} (
                    {item.change >= 0 ? "+" : ""}
                    {item.changePercent.toFixed(2)}%)
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-black/60 text-center text-xs text-gray-500 border-t border-gray-800">
          Powered by real-time market data
        </div>
      </div>
    </div>
  );
}