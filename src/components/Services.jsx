import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Fingerprint, Monitor, Activity } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.service-card',
                { y: 60, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 75%',
                    }
                }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="services" ref={sectionRef} className="py-32 px-6 md:px-16 w-full max-w-[1400px] mx-auto">

            {/* Section Header */}
            <div className="flex flex-col mb-16 md:mb-24">
                <div className="font-mono text-accent uppercase tracking-[0.2em] text-xs font-bold mb-6">[ Our Expertise ]</div>
                <h2 className="text-5xl md:text-7xl lg:text-[100px] font-heading font-black leading-[0.9] tracking-tighter text-primary max-w-4xl">
                    Engineered for <br />
                    <span className="text-transparent [-webkit-text-stroke:2px_rgba(250,250,250,1)]">Domination.</span>
                </h2>
            </div>

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[450px]">

                {/* Card 1: Brand Strategy (Span 7) */}
                <div className="service-card md:col-span-7 group relative glass-card rounded-3xl p-10 md:p-14 flex flex-col justify-between overflow-hidden border border-white/10 hover:border-accent/50 transition-colors duration-500 bg-[#0A0A0A]">
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 group-hover:bg-accent/20 transition-colors duration-700 pointer-events-none" />

                    <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center mb-12 relative z-10">
                        <div className="w-8 h-8 rounded-full bg-primary animate-pulse" />
                    </div>

                    <div className="relative z-10">
                        <h3 className="text-3xl md:text-5xl font-heading font-bold mb-4">Brand Strategy</h3>
                        <p className="font-body text-primary/60 text-lg md:text-xl max-w-md mb-8">We construct narrative frameworks that position your brand as the undisputed authority in your category.</p>

                        <div className="flex flex-wrap gap-2 text-sm font-mono text-primary/80">
                            <span className="px-4 py-2 rounded-full border border-white/10">Positioning</span>
                            <span className="px-4 py-2 rounded-full border border-white/10">Verbal Identity</span>
                            <span className="px-4 py-2 rounded-full border border-white/10">Market Audits</span>
                        </div>
                    </div>
                </div>

                {/* Card 2: UI/UX (Span 5) */}
                <div className="service-card md:col-span-5 group relative glass-card rounded-3xl p-10 md:p-14 flex flex-col justify-between overflow-hidden border border-white/10 hover:border-white/30 transition-colors duration-500 bg-[#0A0A0A]">
                    {/* Abstract Grid Background */}
                    <div className="absolute inset-0 z-0 opacity-20 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)]" />

                    <div className="relative z-10 w-full h-32 border border-white/10 rounded-xl mb-12 flex items-center justify-center bg-background/50 backdrop-blur-sm overflow-hidden group-hover:border-white/30 transition-colors">
                        <div className="w-full h-[1px] bg-white/20 absolute top-1/2 -translate-y-1/2" />
                        <div className="w-[1px] h-full bg-white/20 absolute left-1/2 -translate-x-1/2" />
                        <div className="w-4 h-4 rounded-full bg-white absolute" />
                    </div>

                    <div className="relative z-10">
                        <h3 className="text-3xl font-heading font-bold mb-4">UI/UX Architecture</h3>
                        <p className="font-body text-primary/60 text-lg mb-0">Designing frictionless, conversion-optimized interfaces that feel inevitable.</p>
                    </div>
                </div>

                {/* Card 3: Creative Eng (Span 12) */}
                <div className="service-card md:col-span-12 group relative glass-card rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between overflow-hidden border border-white/10 hover:border-accent transition-colors duration-500 bg-accent text-background">
                    <div className="relative z-10 max-w-2xl mb-12 md:mb-0">
                        <div className="font-mono text-background/60 tracking-widest uppercase text-xs font-bold mb-6">[ Technical Execution ]</div>
                        <h3 className="text-4xl md:text-6xl font-heading font-black mb-6 leading-none">Creative Engineering</h3>
                        <p className="font-body text-background/80 text-xl md:text-2xl mb-8 leading-relaxed font-medium">
                            We build blazingly fast, scale-ready WebGL and React applications. Performance is our primary metric.
                        </p>
                        <div className="flex flex-wrap gap-3 text-sm font-mono font-bold">
                            <span className="px-5 py-2.5 rounded-full bg-background text-primary">React / Next.js</span>
                            <span className="px-5 py-2.5 rounded-full bg-background text-primary">Three.js / WebGL</span>
                            <span className="px-5 py-2.5 rounded-full bg-background text-primary">GSAP Animation</span>
                        </div>
                    </div>

                    {/* Technical Graphic */}
                    <div className="relative z-10 w-full md:w-[400px] h-[250px] md:h-full border border-background/20 rounded-2xl flex items-center justify-center bg-background/5 overflow-hidden">
                        <div className="font-mono text-9xl font-light tracking-tighter opacity-20 select-none">{'</>'}</div>
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                    </div>
                </div>

            </div>

        </section>
    );
}
