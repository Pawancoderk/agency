import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.hero-anim',
                { y: 40, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, stagger: 0.12, ease: 'power3.out', delay: 0.2 }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section
            id="hero"
            ref={containerRef}
            className="relative w-full h-[100dvh] flex items-end pb-20 pl-6 md:pl-16 overflow-hidden bg-background"
        >
            {/* Minimalist Abstract Orb Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
            <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="absolute inset-0 z-10 bg-gradient-to-t from-background via-background/60 to-transparent pointer-events-none" />

            {/* Content */}
            <div className="relative z-20 w-full max-w-7xl flex flex-col items-start gap-4 md:gap-6">

                <div className="hero-anim text-accent font-mono uppercase tracking-[0.2em] text-[12px] md:text-[14px] font-bold">
                    [ award-winning digital studio ]
                </div>

                <h1 className="hero-anim flex flex-col -gap-2 max-w-[1100px]">
                    <span className="font-heading text-6xl md:text-[90px] lg:text-[130px] font-extrabold tracking-tighter leading-[0.9] text-primary">
                        We craft digital
                    </span>
                    <span className="font-drama text-5xl md:text-[80px] lg:text-[120px] leading-[1.1] ml-0 md:ml-12 text-primary/80 mt-2 md:mt-0">
                        experiences that <span className="text-accent italic font-light">refuse</span>
                    </span>
                    <span className="font-heading text-6xl md:text-[90px] lg:text-[130px] font-extrabold tracking-tighter leading-[0.9] text-primary">
                        to be ignored.
                    </span>
                </h1>

                <p className="hero-anim mt-4 md:mt-8 font-body text-lg md:text-2xl text-primary/60 max-w-[540px] leading-relaxed font-light">
                    Transforming complex ideas into pixel-perfect realities. We exist at the intersection of stunning design and flawless engineering.
                </p>

                <div className="hero-anim mt-8 md:mt-12">
                    <button className="btn-magnetic relative overflow-hidden bg-accent text-background px-8 py-5 rounded-full font-heading font-bold text-lg leading-none group hover:shadow-[0_0_40px_rgba(212,255,0,0.3)] transition-shadow duration-500">
                        <span className="btn-magnetic-bg rounded-full bg-white"></span>
                        <span className="relative z-10 group-hover:text-background transition-colors flex items-center gap-2">
                            Start a Project
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-1 transition-transform">
                                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                    </button>
                </div>

            </div>

            {/* Decorative Assets */}
            <div className="hero-anim absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 opacity-60">
                <span className="font-mono text-[10px] uppercase tracking-widest text-primary/50">Scroll</span>
                <span className="block w-[1px] h-16 bg-gradient-to-b from-primary/50 to-transparent"></span>
            </div>

            <div className="hero-anim absolute top-24 right-8 z-20 hidden md:block text-right">
                <div className="font-mono text-xs text-primary/40 uppercase tracking-widest">Global Deployments</div>
                <div className="font-mono text-primary mt-1 flex items-center justify-end gap-2 text-sm">
                    <span className="inline-block w-2 h-2 rounded-full bg-accent shadow-[0_0_10px_rgba(212,255,0,0.8)] animate-pulse"></span>
                    142_live_projects
                </div>
            </div>
        </section>
    );
}
