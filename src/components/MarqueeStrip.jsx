export default function MarqueeStrip() {
    const items = [
        { text: "Digital Experience", outline: false },
        { text: "Brand Identity", outline: true },
        { text: "UI/UX Architecture", outline: false },
        { text: "Motion Graphics", outline: true },
        { text: "Creative Dev", outline: false },
        { text: "Full-Stack Strategy", outline: true }
    ];

    return (
        <section className="relative w-full py-12 md:py-20 overflow-hidden bg-background border-y border-white/5">
            {/* Gradient Masks */}
            <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

            <div className="flex w-[200%] hover:[animation-play-state:paused] animate-[marquee_35s_linear_infinite]">
                <ul className="flex flex-1 justify-around items-center min-w-full gap-8 md:gap-16 pr-8">
                    {items.map((item, idx) => (
                        <li key={`a-${idx}`} className={`flex items-center gap-6 md:gap-12 font-heading text-5xl md:text-8xl font-black uppercase whitespace-nowrap ${item.outline ? 'text-transparent [-webkit-text-stroke:2px_rgba(250,250,250,0.4)]' : 'text-primary'}`}>
                            {item.text}
                            <span className="w-3 h-3 md:w-6 md:h-6 rounded-full bg-accent"></span>
                        </li>
                    ))}
                </ul>
                <ul className="flex flex-1 justify-around items-center min-w-full gap-8 md:gap-16 pr-8" aria-hidden="true">
                    {items.map((item, idx) => (
                        <li key={`b-${idx}`} className={`flex items-center gap-6 md:gap-12 font-heading text-5xl md:text-8xl font-black uppercase whitespace-nowrap ${item.outline ? 'text-transparent [-webkit-text-stroke:2px_rgba(250,250,250,0.4)]' : 'text-primary'}`}>
                            {item.text}
                            <span className="w-3 h-3 md:w-6 md:h-6 rounded-full bg-accent"></span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
