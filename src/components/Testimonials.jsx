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
    }
];

export default function Testimonials() {
    const sectionRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo(sectionRef.current,
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 80%',
                    }
                }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="testimonials" ref={sectionRef} className="py-32 w-full overflow-hidden">

            <div className="px-6 md:px-16 w-full max-w-7xl mx-auto mb-16">
                <div className="font-mono text-accent uppercase tracking-[0.3em] text-sm mb-6">Social Proof Engine</div>
                <h2 className="text-5xl md:text-7xl font-heading font-bold leading-none tracking-tight text-white mb-2">
                    Not quotes.<br />
                    <span className="font-drama italic text-primary/60 font-normal">Proof.</span>
                </h2>
            </div>

            {/* Marquee Setup */}
            <div className="relative w-full py-8 mt-12 flex flex-col gap-12">

                <div className="absolute top-0 left-0 w-32 md:w-64 h-full bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                <div className="absolute top-0 right-0 w-32 md:w-64 h-full bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

                {/* Right to Left scroll */}
                <div className="flex w-max hover:[animation-play-state:paused] animate-[marquee_50s_linear_infinite]">
                    <div className="flex shrink-0 gap-16 px-8">
                        {[...testimonials, ...testimonials].map((t, idx) => (
                            <div key={`r1-${idx}`} className="w-[600px] md:w-[800px] shrink-0 flex flex-col justify-between group cursor-grab active:cursor-grabbing">
                                <span className="font-heading text-8xl md:text-[120px] leading-none text-accent/20 block mb-4 group-hover:text-accent transition-colors duration-500">"</span>
                                <p className="text-3xl md:text-5xl font-heading font-bold text-primary mb-12 leading-tight tracking-tight">
                                    {t.quote}
                                </p>
                                <div className="flex items-center justify-between border-t border-white/10 pt-6">
                                    <div className="flex items-center gap-4">
                                        <img src={t.avatar_url} alt={t.author} className="w-12 h-12 rounded-full grayscale group-hover:grayscale-0 object-cover transition-all duration-500" />
                                        <div>
                                            <div className="font-heading font-black text-lg">{t.author}</div>
                                            <div className="font-mono text-xs uppercase tracking-widest text-primary/50">{t.role} // {t.company}</div>
                                        </div>
                                    </div>
                                    <div className="text-accent text-lg tracking-widest font-mono">
                                        ★★★★★
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Left to Right scroll */}
                <div className="flex w-max hover:[animation-play-state:paused] animate-[marquee-reverse_40s_linear_infinite]">
                    <div className="flex shrink-0 gap-16 px-8">
                        {[...testimonials, ...testimonials].reverse().map((t, idx) => (
                            <div key={`r2-${idx}`} className="w-[600px] md:w-[800px] shrink-0 flex flex-col justify-between group cursor-grab active:cursor-grabbing">
                                <span className="font-heading text-8xl md:text-[120px] leading-none text-accent/20 block mb-4 group-hover:text-accent transition-colors duration-500">"</span>
                                <p className="text-3xl md:text-5xl font-heading font-bold text-primary mb-12 leading-tight tracking-tight">
                                    {t.quote}
                                </p>
                                <div className="flex items-center justify-between border-t border-white/10 pt-6">
                                    <div className="flex items-center gap-4">
                                        <img src={t.avatar_url} alt={t.author} className="w-12 h-12 rounded-full grayscale group-hover:grayscale-0 object-cover transition-all duration-500" />
                                        <div>
                                            <div className="font-heading font-black text-lg">{t.author}</div>
                                            <div className="font-mono text-xs uppercase tracking-widest text-primary/50">{t.role} // {t.company}</div>
                                        </div>
                                    </div>
                                    <div className="text-accent text-lg tracking-widest font-mono">
                                        ★★★★★
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
