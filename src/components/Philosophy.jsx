import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy({ isLoaded }) {
    const containerRef = useRef(null);
    const strikeRef = useRef(null);

    useEffect(() => {
        if (!isLoaded) return;
        let ctx = gsap.context(() => {
            // Scrubbing Strikethrough animation
            gsap.to(strikeRef.current, {
                width: '100%',
                ease: 'none',
                scrollTrigger: {
                    trigger: '.philo-strike-trigger',
                    start: 'top 75%',
                    end: 'bottom 40%',
                    scrub: 1,
                }
            });

            // Dramatic reveal character by character
            gsap.fromTo('.philo-char',
                {
                    opacity: 0,
                    y: 80,
                    rotationX: -90,
                    filter: "blur(10px)",
                    scale: 0.8
                },
                {
                    opacity: 1,
                    y: 0,
                    rotationX: 0,
                    filter: "blur(0px)",
                    scale: 1,
                    duration: 0.8,
                    stagger: 0.02,
                    ease: 'back.out(1.5)',
                    scrollTrigger: {
                        trigger: '.philo-reveal-trigger',
                        start: 'top 80%',
                    }
                }
            );
        }, containerRef);
        return () => ctx.revert();
    }, [isLoaded]);

    const TextSplitter = ({ text, className }) => (
        <span className={`inline-block whitespace-nowrap ${className || ''}`}>
            {text.split('').map((char, i) => (
                <span key={i} className="philo-char inline-block origin-bottom" style={{ transformStyle: 'preserve-3d' }}>
                    {char === ' ' ? '\u00A0' : char}
                </span>
            ))}
        </span>
    );

    return (
        <section ref={containerRef} className="py-32 md:py-48 px-6 md:px-16 w-full max-w-[1400px] mx-auto relative flex flex-col items-center overflow-hidden">

            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 blur-[150px] rounded-full pointer-events-none" />

            {/* Top section: The old way */}
            <div className="w-full max-w-5xl mb-32 md:mb-56 philo-strike-trigger relative">
                <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary/40 mb-10 border-l border-primary/20 pl-4 py-1">
                    01 // The Industry Standard
                </div>

                <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-medium text-primary/40 leading-[1.3] relative inline-block pr-8">
                    We reject templates, <br className="hidden md:block" />
                    aesthetic decoration, <br className="hidden md:block" />
                    and vanity metrics.

                    {/* The Strikethrough Line animating in */}
                    <div
                        ref={strikeRef}
                        className="absolute top-1/2 left-0 h-[3px] md:h-[5px] bg-primary/70 origin-left w-0 -translate-y-1/2 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                        style={{ mixBlendMode: 'difference' }}
                    />
                </h2>
            </div>

            {/* Bottom section: The new way */}
            <div className="w-full max-w-5xl flex flex-col items-end text-right philo-reveal-trigger relative z-10">
                <div className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-10 border-r border-accent/40 pr-4 py-1">
                    02 // Our Obsession
                </div>

                <h3 className="text-4xl md:text-6xl lg:text-[80px] font-heading font-black leading-[1.1] text-primary tracking-tighter max-w-4xl flex flex-wrap justify-end gap-x-4 gap-y-2 pb-4" style={{ perspective: '1000px' }}>
                    <TextSplitter text="High-contrast" />
                    <TextSplitter text="systems" className="text-transparent [-webkit-text-stroke:2px_rgba(212,255,0,1)]" />
                    <TextSplitter text="built" />
                    <TextSplitter text="for" />
                    <TextSplitter text="market" />
                    <TextSplitter text="dominance." />
                </h3>
            </div>

        </section>
    );
}
