import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero({ isLoaded }) {
    const containerRef = useRef(null);

    useEffect(() => {
        if (!isLoaded) return;

        const ctx = gsap.context(() => {
            // Mind-blowing 3D Character Reveal for the main headline
            gsap.fromTo('.hero-char',
                {
                    opacity: 0,
                    y: () => gsap.utils.random(50, 150),
                    z: () => gsap.utils.random(-200, 200),
                    rotationX: () => gsap.utils.random(-80, 80),
                    rotationY: () => gsap.utils.random(-80, 80),
                    rotationZ: () => gsap.utils.random(-20, 20),
                    scale: () => gsap.utils.random(0.5, 1.5),
                    filter: "blur(15px)"
                },
                {
                    opacity: 1,
                    y: 0,
                    z: 0,
                    rotationX: 0,
                    rotationY: 0,
                    rotationZ: 0,
                    scale: 1,
                    filter: "blur(0px)",
                    duration: 1.8,
                    stagger: {
                        amount: 1.2,
                        from: "random" // Randomly reveals characters across the whole headline
                    },
                    ease: 'expo.out',
                    delay: 0.2
                }
            );

            // Simple fade in for secondary content after the headline finishes
            gsap.fromTo('.hero-anim-fade',
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: 'power3.out', delay: 1.4 }
            );
        }, containerRef);
        return () => ctx.revert();
    }, [isLoaded]);

    // Helper component to split text into strictly animatable characters
    const TextSplitter = ({ text, className }) => (
        <span className={`inline-block whitespace-nowrap ${className || ''}`} style={{ perspective: '1000px' }}>
            {text.split('').map((char, i) => (
                <span
                    key={i}
                    className="hero-char inline-block"
                    style={{ transformStyle: 'preserve-3d', willChange: 'transform, opacity, filter' }}
                >
                    {char === ' ' ? '\u00A0' : char}
                </span>
            ))}
        </span>
    );

    return (
        <section
            id="hero"
            ref={containerRef}
            className="relative w-full min-h-screen pt-40 pb-20 px-6 md:px-16 xl:px-24 flex flex-col justify-center overflow-hidden bg-background"
        >
            {/* Minimalist Abstract Orb Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
            <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="absolute inset-0 z-10 bg-gradient-to-t from-background via-background/60 to-transparent pointer-events-none" />

            {/* Content Container - Centered horizontally max-width, strictly left aligned content */}
            <div className="relative z-20 w-full max-w-[1400px] mx-auto flex flex-col items-start gap-8">

                {/* Eyebrow Badge */}
                <div className="hero-anim-fade text-accent font-mono uppercase tracking-[0.2em] text-[12px] md:text-[14px] font-bold border-l-2 border-accent pl-4 py-1">
                    [ Award-winning digital studio ]
                </div>

                {/* Massive Flush-Left Headline */}
                <h1 className="flex flex-col max-w-[1200px]">
                    <span className="font-heading text-[3.5rem] leading-[1] md:text-7xl lg:text-[110px] font-black tracking-tighter text-primary">
                        <TextSplitter text="We craft digital" />
                    </span>
                    <span className="font-drama text-[3.5rem] leading-[1] md:text-7xl lg:text-[110px] text-primary/90 mt-2 md:mt-4">
                        <TextSplitter text="experiences that" /> <span className="text-accent italic font-light"><TextSplitter text="refuse" /></span>
                    </span>
                    <span className="font-heading text-[3.5rem] leading-[1] md:text-7xl lg:text-[110px] font-black tracking-tighter text-primary mt-2 md:mt-4">
                        <TextSplitter text="to be ignored." />
                    </span>
                </h1>

                {/* Paragraph */}
                <p className="hero-anim-fade font-body text-lg md:text-2xl text-primary/60 max-w-[650px] leading-relaxed font-light mt-2">
                    Transforming complex ideas into pixel-perfect realities. We exist at the intersection of stunning design and flawless engineering.
                </p>

                {/* CTA Button */}
                <div className="hero-anim-fade mt-4">
                    <button className="btn-magnetic relative overflow-hidden bg-accent text-background px-10 py-5 rounded-full font-heading font-black text-xl leading-none group hover:shadow-[0_0_40px_rgba(212,255,0,0.4)] transition-shadow duration-500">
                        <span className="btn-magnetic-bg rounded-full bg-white"></span>
                        <span className="relative z-10 group-hover:text-background transition-colors flex items-center gap-3">
                            Start a Project
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-2 transition-transform duration-300">
                                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                    </button>
                </div>

            </div>

            {/* Decorative Assets */}
            <div className="hero-anim-fade absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 opacity-60">
                <span className="font-mono text-[10px] uppercase tracking-widest text-primary/50">Scroll</span>
                <span className="block w-[1px] h-16 bg-gradient-to-b from-primary/50 to-transparent"></span>
            </div>

            <div className="hero-anim-fade absolute top-24 right-8 z-20 hidden md:block text-right">
                <div className="font-mono text-xs text-primary/40 uppercase tracking-widest">Global Deployments</div>
                <div className="font-mono text-primary mt-1 flex items-center justify-end gap-2 text-sm">
                    <span className="inline-block w-2 h-2 rounded-full bg-accent shadow-[0_0_10px_rgba(212,255,0,0.8)] animate-pulse"></span>
                    142_live_projects
                </div>
            </div>
        </section>
    );
}
