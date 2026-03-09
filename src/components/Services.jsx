import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Fingerprint, Monitor, Activity } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Services({ isLoaded }) {
    const sectionRef = useRef(null);

    useEffect(() => {
        if (!isLoaded) return;
        const ctx = gsap.context(() => {
            gsap.fromTo('.service-card',
                { y: 120, opacity: 0, rotationX: -25, scale: 0.9, filter: "blur(10px)" },
                {
                    y: 0,
                    opacity: 1,
                    rotationX: 0,
                    scale: 1,
                    filter: "blur(0px)",
                    duration: 1.2,
                    stagger: 0.15,
                    ease: 'expo.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 75%',
                    }
                }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, [isLoaded]);

    return (
        <section id="services" ref={sectionRef} className="py-32 px-6 md:px-16 w-full max-w-[1400px] mx-auto">

            {/* Section Header */}
            <div className="flex flex-col mb-16 md:mb-24">
                <div className="font-mono text-accent uppercase tracking-[0.2em] text-xs font-bold mb-6">[ Our Expertise ]</div>
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-heading font-black leading-[0.9] tracking-tighter text-primary max-w-4xl">
                    Engineered for <br />
                    <span className="text-transparent [-webkit-text-stroke:2px_rgba(250,250,250,1)]">Domination.</span>
                </h2>
            </div>

            {/* Injected Hover Physics & Glow CSS */}
            <style>{`
                .service-card {
                    transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1);
                    transform-style: preserve-3d;
                }
                .service-card:hover {
                    transform: translateY(-8px) scale(1.01);
                    box-shadow: 0 30px 60px -15px rgba(0,0,0,0.8), 0 0 40px -10px rgba(212,255,0,0.05);
                    z-index: 10;
                }
                .service-card::after {
                    content: '';
                    position: absolute;
                    inset: 0;
                    border-radius: inherit;
                    opacity: 0;
                    box-shadow: inset 0 0 0 1px rgba(255,255,255,0.1);
                    transition: opacity 0.5s;
                    pointer-events: none;
                }
                .service-card:hover::after {
                    opacity: 1;
                    box-shadow: inset 0 0 0 1px rgba(212,255,0,0.2);
                }
            `}</style>

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[450px]">

                {/* Card 1: Brand Strategy (Span 7) */}
                <div className="service-card md:col-span-7 group relative glass-card rounded-3xl p-10 md:p-14 flex flex-col justify-between overflow-hidden border border-white/5 transition-colors duration-500 bg-[#0A0A0A]">
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 group-hover:bg-accent/20 group-hover:scale-150 transition-all duration-[1s] pointer-events-none" />

                    <div className="w-16 h-16 rounded-full border border-white/10 group-hover:border-accent/50 flex items-center justify-center mb-12 relative z-10 transition-colors duration-500 bg-black/50 backdrop-blur-md">
                        <div className="w-6 h-6 rounded-full bg-primary/20 group-hover:bg-accent group-hover:shadow-[0_0_20px_rgba(212,255,0,0.8)] transition-all duration-500 animate-pulse" />
                    </div>

                    <div className="relative z-10 transform group-hover:-translate-y-2 transition-transform duration-500">
                        <h3 className="text-2xl md:text-4xl font-heading font-bold mb-4">Brand Strategy</h3>
                        <p className="font-body text-primary/60 text-lg md:text-xl max-w-md mb-8">We construct narrative frameworks that position your brand as the undisputed authority in your category.</p>

                        <div className="flex flex-wrap gap-2 text-sm font-mono text-primary/80">
                            <span className="px-4 py-2 rounded-full border border-white/10 hover:border-accent hover:text-accent hover:-translate-y-1 transition-all duration-300 cursor-pointer">Positioning</span>
                            <span className="px-4 py-2 rounded-full border border-white/10 hover:border-accent hover:text-accent hover:-translate-y-1 transition-all duration-300 cursor-pointer">Verbal Identity</span>
                            <span className="px-4 py-2 rounded-full border border-white/10 hover:border-accent hover:text-accent hover:-translate-y-1 transition-all duration-300 cursor-pointer">Market Audits</span>
                        </div>
                    </div>
                </div>

                {/* Card 2: UI/UX (Span 5) */}
                <div className="service-card md:col-span-5 group relative glass-card rounded-3xl p-10 md:p-14 flex flex-col justify-between overflow-hidden border border-white/5 transition-colors duration-500 bg-[#0A0A0A]">
                    {/* Abstract Grid Background that animates on hover */}
                    <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-30 group-hover:scale-110 transition-all duration-[1.5s] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)]" />

                    {/* Animated Interface Element */}
                    <div className="relative z-10 w-full h-32 border border-white/5 rounded-xl mb-12 flex items-center justify-center bg-background/50 backdrop-blur-sm overflow-hidden group-hover:border-white/20 transition-colors duration-500 shadow-2xl">
                        <div className="w-full h-[1px] bg-white/10 group-hover:bg-accent/50 group-hover:scale-x-150 absolute top-1/2 -translate-y-1/2 transition-all duration-700 delay-100" />
                        <div className="w-[1px] h-full bg-white/10 group-hover:bg-accent/50 group-hover:scale-y-150 absolute left-1/2 -translate-x-1/2 transition-all duration-700 delay-100" />
                        <div className="w-2 h-2 rounded-full bg-white/30 group-hover:bg-accent group-hover:shadow-[0_0_15px_rgba(212,255,0,1)] absolute transition-all duration-300 group-hover:scale-150" />
                    </div>

                    <div className="relative z-10 transform group-hover:-translate-y-2 transition-transform duration-500">
                        <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/50 transition-colors">UI/UX Architecture</h3>
                        <p className="font-body text-primary/60 text-lg mb-0">Designing frictionless, conversion-optimized interfaces that feel inevitable.</p>
                    </div>
                </div>

                {/* Card 3: Creative Eng (Span 12) */}
                <div className="service-card md:col-span-12 group relative rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between overflow-hidden border border-white/5 transition-colors duration-500 bg-[#0A0A0A]">

                    {/* Ambient Glow */}
                    <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-[1s] pointer-events-none" />

                    <div className="relative z-10 max-w-2xl mb-12 md:mb-0 transform group-hover:translate-x-4 transition-transform duration-[0.8s] ease-out">
                        <div className="font-mono text-white/30 group-hover:text-accent/80 transition-colors duration-500 tracking-widest uppercase text-xs font-bold mb-6">[ Technical Execution ]</div>
                        <h3 className="text-3xl md:text-5xl font-heading font-black mb-6 leading-none text-primary">Creative Engineering</h3>
                        <p className="font-body text-primary/70 text-[1.125rem] md:text-xl mb-8 leading-relaxed font-light group-hover:text-primary transition-colors duration-300">
                            We build blazingly fast, scale-ready WebGL and React applications. Performance is our primary metric.
                        </p>
                        <div className="flex flex-wrap gap-4 text-sm font-mono font-bold">
                            <span className="px-5 py-2.5 rounded-full border border-white/5 text-primary/80 group-hover:border-white/10 group-hover:text-primary hover:!bg-accent hover:!text-background hover:!scale-105 hover:!-translate-y-1 transition-all duration-300 cursor-pointer">React / Next.js</span>
                            <span className="px-5 py-2.5 rounded-full border border-white/5 text-primary/80 group-hover:border-white/10 group-hover:text-primary hover:!bg-accent hover:!text-background hover:!scale-105 hover:!-translate-y-1 transition-all duration-300 cursor-pointer">Three.js / WebGL</span>
                            <span className="px-5 py-2.5 rounded-full border border-white/5 text-primary/80 group-hover:border-white/10 group-hover:text-primary hover:!bg-accent hover:!text-background hover:!scale-105 hover:!-translate-y-1 transition-all duration-300 cursor-pointer">GSAP Animation</span>
                        </div>
                    </div>

                    {/* Technical Graphic */}
                    <div className="relative z-10 w-full md:w-[400px] h-[250px] md:h-full border border-white/5 rounded-2xl flex items-center justify-center bg-background/50 overflow-hidden group-hover:border-accent/20 transition-colors duration-500 group-hover:shadow-[0_0_50px_rgba(212,255,0,0.05)]">
                        <div className="font-mono text-9xl font-light tracking-tighter opacity-10 text-primary select-none group-hover:text-accent group-hover:opacity-30 group-hover:scale-110 transition-all duration-[1s]">{'</>'}</div>
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-accent/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[1.5s] ease-in-out" />
                    </div>
                </div>

            </div>

        </section>
    );
}
