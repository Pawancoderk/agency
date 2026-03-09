import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function MarqueeStrip({ isLoaded }) {
    const skewContainerRef = useRef(null);

    useEffect(() => {
        if (!isLoaded) return;

        let proxy = { skew: 0 },
            skewSetter = gsap.quickSetter(skewContainerRef.current, "skewY", "deg"), // Skewing Y creates a very dynamic 'leaning' effect
            clamp = gsap.utils.clamp(-15, 15);

        const ctx = gsap.context(() => {
            ScrollTrigger.create({
                onUpdate: (self) => {
                    let skew = clamp(self.getVelocity() / -300);
                    // only do it if the velocity is significantly changing
                    if (Math.abs(skew) > Math.abs(proxy.skew)) {
                        proxy.skew = skew;
                        gsap.to(proxy, {
                            skew: 0,
                            duration: 0.8,
                            ease: "power3",
                            overwrite: true,
                            onUpdate: () => skewSetter(proxy.skew)
                        });
                    }
                }
            });
            gsap.set(skewContainerRef.current, { transformOrigin: "center center", force3D: true });
        });

        return () => ctx.revert();
    }, [isLoaded]);
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

            <div ref={skewContainerRef} className="flex w-[200%] hover:[animation-play-state:paused] animate-[marquee_35s_linear_infinite]">
                <ul className="flex flex-1 justify-around items-center min-w-full gap-8 md:gap-16 pr-8">
                    {items.map((item, idx) => (
                        <li key={`a-${idx}`} className={`flex items-center gap-6 md:gap-12 font-heading text-4xl md:text-6xl font-black uppercase whitespace-nowrap ${item.outline ? 'text-transparent [-webkit-text-stroke:2px_rgba(250,250,250,0.4)]' : 'text-primary'}`}>
                            {item.text}
                            <span className="w-3 h-3 md:w-6 md:h-6 rounded-full bg-accent"></span>
                        </li>
                    ))}
                </ul>
                <ul className="flex flex-1 justify-around items-center min-w-full gap-8 md:gap-16 pr-8" aria-hidden="true">
                    {items.map((item, idx) => (
                        <li key={`b-${idx}`} className={`flex items-center gap-6 md:gap-12 font-heading text-4xl md:text-6xl font-black uppercase whitespace-nowrap ${item.outline ? 'text-transparent [-webkit-text-stroke:2px_rgba(250,250,250,0.4)]' : 'text-primary'}`}>
                            {item.text}
                            <span className="w-3 h-3 md:w-6 md:h-6 rounded-full bg-accent"></span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
