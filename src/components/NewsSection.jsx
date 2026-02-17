"use client";

export default function NewsSection() {
    const cards = [
        {
            tag: "Newsletter",
            date: "Feb 16, 2026",
            title: "Crypto recovers as inflation cools",
            desc: "Market sentiment improves as inflation data softens and major coins rebound with strong volume support.",
            img: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=1200",
        },
        {
            tag: "Newsletter",
            date: "Feb 12, 2026",
            title: "Institutions advance as crypto markets recalibrate",
            desc: "Institutional flows increase while portfolios rebalance toward digital assets and ETFs.",
            img: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=1200",
        },
        {
            tag: "Announcement",
            date: "Feb 12, 2026",
            title: "New Listing: Ethena (ENA)",
            desc: "ENA token goes live with high liquidity pairs and early trading incentives for active users.",
            img: "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=1200",
        },
        {
            tag: "Market",
            date: "Feb 10, 2026",
            title: "Bitcoin volatility drops ahead of breakout zone",
            desc: "Price compression signals possible breakout as volatility hits multi-week lows.",
            img: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=1200",
        },
        {
            tag: "Signals",
            date: "Feb 08, 2026",
            title: "AI signal model detects bullish momentum shift",
            desc: "Signal engine flags trend reversal patterns across top traded crypto pairs.",
            img: "https://images.unsplash.com/photo-1559526324-593bc073d938?w=1200",
        },
        {
            tag: "Platform",
            date: "Feb 05, 2026",
            title: "New chart indicators and strategy tester launched",
            desc: "Advanced indicators and backtesting tools added for pro strategy development.",
            img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200",
        },
    ];

    return (
        <section className="bg-black text-white py-12">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <h2 className="text-4xl font-semibold text-center mb-4">
                    Latest Crypto & <span className="text-green-400">Trading Updates</span>
                </h2>

                <p className="text-center text-white/70 max-w-2xl mx-auto mb-10">
                    Stay updated with the latest market moves, platform announcements,
                    trading signals and crypto insights — all in one place for smarter decisions.
                </p>


                {/* Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

                    {cards.map((card, i) => (
                        <div
                            key={i}
                            className="group rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 hover:border-green-400/40 transition"
                        >

                            {/* Image */}
                            <div className="h-44 overflow-hidden">
                                <img
                                    src={card.img}
                                    alt={card.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6">

                                <div className="flex items-center gap-3 mb-4 text-xs">
                                    <span className="px-3 py-1 rounded bg-green-400/15 text-green-400 border border-green-400/20">
                                        {card.tag}
                                    </span>
                                    <span className="text-white/50 uppercase tracking-wide">
                                        {card.date}
                                    </span>
                                </div>

                                <h3 className="text-xl font-semibold leading-snug group-hover:text-green-400 transition">
                                    {card.title}
                                </h3>

                                <p className="mt-3 text-sm text-white/70 leading-relaxed">
                                    {card.desc}
                                </p>

                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}
