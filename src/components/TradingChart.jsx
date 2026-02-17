"use client";

import { useEffect, useRef } from "react";

export default function TradingChart() {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      autosize: true,
      symbol: "BINANCE:BTCUSDT",
      interval: "15",
      timezone: "Asia/Kolkata",
      theme: "dark",
      style: "1",
      locale: "en",
      allow_symbol_change: true,
      withdateranges: true,
      hide_top_toolbar: false,
    });

    ref.current.innerHTML = "";
    ref.current.appendChild(script);
  }, []);

  return <div ref={ref} className="w-full h-[450px]" />;
}
