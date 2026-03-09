import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
    {
        id: "t1",
        author: "Dr. Elena Vance",
        role: "Director of Research",
        company: "Nexus Genomics",
        quote: "minimax didn't just build a site; they engineered a precise instrument that revolutionized how users interact with our data. The metrics reflect utter supremacy.",
        avatar_url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=256&h=256",
        rating: 5,
        project_type: "Web Design"
    },
    {
        id: "t2",
        author: "Marcus Thorne",
        role: "Founder",
        company: "Lumina Synth",
        quote: "The aesthetics were exactly what we needed: clinical, advanced, and relentlessly modern. Our conversion rates skyrocketed within the first 48 hours of deployment.",
        avatar_url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=256&h=256",
        rating: 5,
        project_type: "Motion & Dev"
    },
    {
        id: "t3",
        author: "Sarah Chen",
        role: "CMO",
        company: "Aether Neon",
        quote: "They understand the underlying physics of digital movement. The brand identity they built for us feels alive, responsive, and completely distinct from our competitors.",
        avatar_url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=256&h=256",
        rating: 5,
        project_type: "Brand Identity"
    },
    {
        id: "t4",
        author: "Julian Cross",
        role: "CEO",
        company: "Vanguard Tech",
        quote: "A masterclass in digital execution. The attention to detail and brutalist elegance they brought to our platform instantly elevated our market positioning.",
        avatar_url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=256&h=256",
        rating: 5,
        project_type: "Full Stack"
    },
    {
        id: "t5",
        author: "Amara Singh",
        role: "Lead Designer",
        company: "Forma",
        quote: "Working with minimax is like collaborating with an architecture firm for the web. Their structural logic and typographic discipline is simply unmatched.",
        avatar_url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=256&h=256",
        rating: 5,
        project_type: "UI/UX System"
    },
    {
        id: "t6",
        author: "David Orellana",
        role: "VP of Product",
        company: "Kinetix",
        quote: "The motion guidelines they established for us are breathtaking. They don't just animate elements; they give them weight, velocity, and purpose.",
        avatar_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=256&h=256",
        rating: 5,
        project_type: "Motion Design"
    },
    {
        id: "t7",
        author: "Chloe Dubois",
        role: "Marketing Dir.",
        company: "Aura Labs",
        quote: "Our engagement metrics doubled overnight. The ruthless simplicity of the new design forces users to focus exactly where we want them to.",
        avatar_url: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=256&h=256",
        rating: 5,
        project_type: "Web Design"
    },
    {
        id: "t8",
        author: "Viktor Petrov",
        role: "CTO",
        company: "Synergia",
        quote: "Beneath the hyper-polished facade lies incredibly robust engineering. The codebase they delivered is a work of art in itself perfectly scalable.",
        avatar_url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=256&h=256",
        rating: 5,
        project_type: "Technical Arch."
    },
    {
        id: "t9",
        author: "Priya Sharma",
        role: "Founder",
        company: "Nova Scale",
        quote: "They managed to capture our incredibly complex underlying technology and communicate it through an interface that feels effortless and premium.",
        avatar_url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=256&h=256",
        rating: 5,
        project_type: "Brand Identity"
    },
    {
        id: "t10",
        author: "Liam Neale",
        role: "Head of Growth",
        company: "Apex",
        quote: "Uncompromising quality. The design system minimax created didn't just rebrand us; it fundamentally changed how we build and ship products.",
        avatar_url: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=256&h=256",
        rating: 5,
        project_type: "Design System"
    },
    {
        id: "t11",
        author: "Sofia Rostova",
        role: "Creative Dir.",
        company: "Echo Arts",
        quote: "Everything feels intentional. Every pixel, every interaction, every millisecond of transition is calculated to create maximum impact. Pure genius.",
        avatar_url: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=256&h=256",
        rating: 5,
        project_type: "Web Design"
    },
    {
        id: "t12",
        author: "Jameson Locke",
        role: "CEO",
        company: "Oblivion",
        quote: "We asked for a website, and they delivered an experience that completely annihilated our closest competitors. We are playing a different game now.",
        avatar_url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=256&h=256",
        rating: 5,
        project_type: "Full Redesign"
    },
    {
        id: "t13",
        author: "Mei Lin",
        role: "Operations",
        company: "Quantum",
        quote: "The speed of delivery was shocking given the level of craftsmanship. They operate with a military-like precision that is rare in creative agencies.",
        avatar_url: "https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&q=80&w=256&h=256",
        rating: 5,
        project_type: "Web & Motion"
    }
];

export default function Testimonials({ isLoaded }) {
    const sectionRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        if (!isLoaded) return;

        let ctx = gsap.context(() => {
            // Main section dramatic fade up
            gsap.fromTo(sectionRef.current,
                { y: 150, opacity: 0, filter: "blur(20px)" },
                {
                    y: 0,
                    opacity: 1,
                    filter: "blur(0px)",
                    duration: 1.5,
                    ease: 'expo.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 80%',
                    }
                }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, [isLoaded]);

    return (
        <section id="testimonials" ref={sectionRef} className="py-24 bg-background">
            <div className="w-full relative flex flex-col justify-center overflow-hidden">

                {/* Background Ambient Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

                {/* Header */}
                <div className="px-6 md:px-16 w-full max-w-7xl mx-auto mb-12 z-20">
                    <div className="font-mono text-accent uppercase tracking-[0.3em] text-sm mb-4">04 // Social Proof Engine</div>
                    <h2 className="text-3xl md:text-5xl font-heading font-black leading-none tracking-tight text-white mb-2">
                        Not quotes. <span className="font-drama italic text-primary/60 font-normal">Proof.</span>
                    </h2>
                </div>

                {/* Infinite Marquee Slider */}
                <div className="relative w-full overflow-hidden pb-12 pt-4 z-20 flex mask-image-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]" style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)' }}>
                    <div className="flex shrink-0 gap-6 md:gap-12 px-3 md:px-6 hover:[animation-play-state:paused] animate-[marquee_120s_linear_infinite]">
                        {[...testimonials, ...testimonials].map((t, idx) => (
                            <div
                                key={`${t.id}-${idx}`}
                                className="shrink-0 w-[90vw] md:w-[800px] h-[450px] md:h-[550px] bg-[#0A0A0A] border border-white/10 rounded-[2.5rem] p-8 md:p-14 flex flex-col justify-between shadow-[0_30px_60px_rgba(0,0,0,0.8)]"
                            >
                                {/* Top decorative elements */}
                                <div className="flex justify-between items-start w-full">
                                    <span className="font-heading text-6xl md:text-8xl leading-none text-accent/30 mt-[-20px] md:mt-[-10px]">"</span>
                                    <div className="hidden md:flex flex-col items-end text-right">
                                        <div className="text-accent text-xl tracking-widest font-mono mb-2">★★★★★</div>
                                        <div className="font-mono text-xs uppercase tracking-[0.2em] text-primary/40">Verified deployment</div>
                                    </div>
                                </div>

                                {/* Core Quote */}
                                <div className="flex-1 flex items-center mb-6 mt-4">
                                    <p className="text-xl md:text-3xl lg:text-4xl font-heading font-bold text-primary leading-[1.2] tracking-tight">
                                        {t.quote}
                                    </p>
                                </div>

                                {/* Author Block */}
                                <div className="flex items-center justify-between border-t border-white/10 pt-6 mt-auto">
                                    <div className="flex items-center gap-4 md:gap-6">
                                        <div className="relative">
                                            <img src={t.avatar_url} alt={t.author} className="w-14 h-14 md:w-20 md:h-20 rounded-full object-cover filter grayscale" />
                                            <div className="absolute -bottom-1 -right-1 w-4 h-4 md:w-5 md:h-5 bg-accent rounded-full border-4 border-[#0A0A0A]" />
                                        </div>
                                        <div>
                                            <div className="font-heading font-black text-lg md:text-2xl mb-1">{t.author}</div>
                                            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                                                <span className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-primary/60">{t.role}</span>
                                                <span className="text-accent hidden sm:inline">//</span>
                                                <span className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-primary/60">{t.company}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="font-mono text-[10px] md:text-xs uppercase font-bold tracking-[0.2em] text-primary/30 border border-white/10 px-3 py-2 md:px-4 md:py-2 rounded-full hidden sm:block">
                                        Project: {t.project_type}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
