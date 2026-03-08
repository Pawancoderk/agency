import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy() {
    const containerRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Split text simulation (without paying for SplitText plugin)
            const words = document.querySelectorAll('.philo-word');

            gsap.fromTo(words,
                { y: 50, opacity: 0, rotationX: -45 },
                {
                    y: 0,
                    opacity: 1,
                    rotationX: 0,
                    duration: 1,
                    stagger: 0.05,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top 60%',
                    }
                }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    const renderText = (text, className) => {
        return text.split(' ').map((word, i) => (
            <span key={i} className={`inline-block philo-word mr-[0.3em] overflow-hidden ${className}`}>
                {word}
            </span>
        ));
    };

    return (
        <section ref={containerRef} className="py-40 px-6 md:px-16 w-full max-w-7xl mx-auto relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-6xl mx-auto text-left relative z-10 flex flex-col md:flex-row gap-16 md:gap-32 md:items-end">

                <div className="flex-1">
                    <div className="philo-word font-mono text-xs font-bold uppercase tracking-[0.2em] text-primary/40 mb-8">[ The Industry Standard ]</div>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-primary/30 relative inline-block leading-tight">
                        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-primary/40 -translate-y-1/2 philo-word scale-x-0 origin-left" style={{ transform: 'scaleX(1) translateY(-50%)', transition: 'transform 1s 1s cubic-bezier(0.25, 1, 0.5, 1)' }}></div>
                        {renderText("Templates, decoration, and vanity metrics.")}
                    </h2>
                </div>

                <div className="flex-1">
                    <div className="philo-word font-mono text-xs font-bold uppercase tracking-[0.2em] text-accent mb-8">[ Our Obsession ]</div>
                    <h3 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black leading-[1.1] text-primary">
                        {renderText("High-contrast ", "text-primary")}
                        {renderText("systems ", "text-transparent [-webkit-text-stroke:2px_rgba(212,255,0,1)]")}
                        {renderText("built for market dominance.", "text-primary")}
                    </h3>
                </div>

            </div>
        </section>
    );
}
