import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
    {
        num: "01",
        label: "Discovery",
        duration: "Day 1–3",
        title: "We sample your corporate DNA.",
        description: "Extracting the vital nodes that drive value. Before writing a line of code or pushing a single pixel, we align seamlessly with your core operational objectives.",
        deliverables: ["Stakeholder Interviews", "Brand Alignment", "Goal Definition"]
    },
    {
        num: "02",
        label: "Strategy",
        duration: "Day 4–7",
        title: "Mapping the neural pathways.",
        description: "Every pixel requires a logical imperative. We architect the structural foundation, plotting user journeys that guarantee maximum conversion density.",
        deliverables: ["User Journey Mapping", "Information Architecture", "Content Outline"]
    },
    {
        num: "03",
        label: "Build & Launch",
        duration: "Week 2–4",
        title: "Compiling the final artifact.",
        description: "Synthesizing the visual layer and executing the code. High-contrast aesthetics built for digital natives, deployed to a global edge network.",
        deliverables: ["High-Fidelity UI", "React Engineering", "Performance Optimization"]
    }
];

export default function HowWeWork({ isLoaded }) {
    const containerRef = useRef(null);

    useEffect(() => {
        if (!isLoaded) return;
        let ctx = gsap.context(() => {
            const cards = gsap.utils.toArray('.process-card');

            cards.forEach((card, i) => {
                // Pinning mechanism
                ScrollTrigger.create({
                    trigger: card,
                    start: 'top top',
                    pin: true,
                    pinSpacing: false,
                    endTrigger: containerRef.current,
                    end: 'bottom bottom',
                });

                // Scale down previous cards
                if (i !== cards.length - 1) {
                    gsap.to(card, {
                        scale: 0.90,
                        y: -20,
                        opacity: 0.5,
                        filter: 'blur(10px)',
                        ease: "none",
                        scrollTrigger: {
                            trigger: cards[i + 1],
                            start: "top center",
                            end: "top top",
                            scrub: true,
                        }
                    });
                }

                // Animate content INSIDE the card when it arrives
                const contentElements = card.querySelectorAll('.process-content-item');
                if (contentElements.length > 0) {
                    gsap.fromTo(contentElements,
                        { y: 50, opacity: 0, filter: "blur(5px)" },
                        {
                            y: 0,
                            opacity: 1,
                            filter: "blur(0px)",
                            duration: 0.8,
                            stagger: 0.1,
                            ease: 'power3.out',
                            scrollTrigger: {
                                trigger: card,
                                start: 'top 60%', // Trigger when the card itself is about 60% down the screen
                                toggleActions: "play none none reverse" // Play on enter, reverse on leave back
                            }
                        }
                    );
                }
            });
        }, containerRef);
        return () => ctx.revert();
    }, [isLoaded]);

    return (
        <section id="process" ref={containerRef} className="relative w-full bg-background border-t border-white/5 py-40">
            {steps.map((step, index) => (
                <div
                    key={step.num}
                    className="process-card w-full min-h-[80dvh] flex items-center justify-center relative my-20"
                >
                    <div className="w-full max-w-7xl relative flex flex-col lg:flex-row px-8 md:px-16 gap-12 lg:gap-24 items-center">

                        {/* Huge Editorial Number */}
                        <div className="absolute top-0 left-0 lg:-left-12 -translate-y-1/2 text-[100px] md:text-[200px] font-heading font-black text-transparent [-webkit-text-stroke:2px_rgba(250,250,250,0.05)] select-none pointer-events-none origin-bottom-left z-0">
                            {step.num}
                        </div>

                        {/* Left Content Area (Text) */}
                        <div className="flex-1 flex flex-col justify-center relative z-10 w-full">
                            <div className="process-content-item flex items-center gap-6 mb-8 md:mb-12">
                                <div className="h-[2px] w-12 bg-accent"></div>
                                <div className="font-mono text-xs uppercase tracking-[0.2em] font-bold text-accent">
                                    [ Phase {step.num} ]
                                </div>
                            </div>

                            <h3 className="process-content-item text-3xl md:text-5xl lg:text-6xl font-heading font-black mb-6 leading-[1.1] max-w-2xl text-primary">
                                {step.title}
                            </h3>

                            <p className="process-content-item font-body text-xl md:text-2xl text-primary/60 max-w-xl mb-12 leading-relaxed font-light">
                                {step.description}
                            </p>

                            <div className="process-content-item grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 font-mono text-sm border-t border-white/10 pt-8 mt-auto">
                                <div className="col-span-1 md:col-span-2 text-primary/40 uppercase tracking-widest text-xs mb-2">Deliverables</div>
                                {step.deliverables.map((d, i) => (
                                    <div key={i} className="flex items-center gap-4 text-primary font-bold">
                                        <span className="w-1.5 h-1.5 bg-accent"></span> {d}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Area (Timeline & Abstract Visuals) */}
                        <div className="lg:w-[400px] w-full flex flex-col justify-between h-full relative z-10">

                            <div className="process-content-item bg-[#0A0A0A] border border-[#D4AF37]/50 rounded-2xl p-8 flex flex-col gap-2 relative overflow-hidden group hover:border-[#D4AF37] transition-colors duration-500 shadow-[0_0_15px_rgba(212,175,55,0.05)]">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                                <div className="text-[#D4AF37]/70 font-mono text-xs uppercase tracking-widest relative z-10">Est. Timeline</div>
                                <div className="text-3xl font-heading font-black text-primary relative z-10">{step.duration}</div>
                            </div>

                            <div className="process-content-item hidden lg:flex flex-1 mt-8 rounded-2xl border border-white/5 relative overflow-hidden items-center justify-center bg-gradient-to-b from-transparent to-white/[0.02]">
                                {/* Simple abstract line animations */}
                                {index === 0 && (
                                    <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-accent to-transparent opacity-50 relative overflow-hidden">
                                        <div className="absolute top-0 left-0 w-full h-1/3 bg-accent animate-[translate_2s_linear_infinite_alternate]" />
                                    </div>
                                )}
                                {index === 1 && (
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,255,0,0.1)_0%,transparent_70%)] animate-pulse" />
                                )}
                                {index === 2 && (
                                    <div className="grid grid-cols-4 gap-4 w-full h-full p-8 opacity-20">
                                        {[...Array(16)].map((_, i) => (
                                            <div key={i} className="w-full h-full border border-accent/50 rounded-full" />
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                    </div>
                </div>
            ))}
        </section>
    );
}
