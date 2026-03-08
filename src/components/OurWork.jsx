import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        id: "nexus",
        client: "Nexus Flow",
        category: "Web Design",
        year: 2024,
        headline: "Accelerate data at the speed of light.",
        thumbnail_url: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80",
        tags: ["React", "GSAP"],
        result_metric: "+420% user retention",
        color_accent: "#7B61FF"
    },
    {
        id: "lumina",
        client: "Lumina Deep",
        category: "Motion",
        year: 2024,
        headline: "A new wavelength in digital audio.",
        thumbnail_url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80",
        tags: ["Identity", "Motion"],
        result_metric: "Award Winning UX",
        color_accent: "#00FFCC"
    },
    {
        id: "aether",
        client: "Aether Neon",
        category: "Dev",
        year: 2023,
        headline: "Atmospheric flow control systems.",
        thumbnail_url: "https://images.unsplash.com/photo-1542382103-f094ce02fbe8?auto=format&fit=crop&q=80",
        tags: ["Full-stack", "Optimization"],
        result_metric: "1.2s avg load time",
        color_accent: "#FF4500"
    }
];

export default function OurWork() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.work-card',
                { y: 80, opacity: 0 },
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
        <section id="work" ref={sectionRef} className="py-32 px-6 md:px-16 w-full max-w-7xl mx-auto">

            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
                <div className="max-w-2xl">
                    <div className="font-mono text-accent uppercase tracking-[0.3em] text-sm mb-6">Selected Work</div>
                    <h2 className="text-5xl md:text-7xl font-heading font-bold leading-none tracking-tight">
                        Projects that <br />
                        <span className="font-drama italic text-accent font-normal tracking-wide">move numbers.</span>
                    </h2>
                </div>
                <button className="text-accent flex items-center gap-2 hover:gap-4 transition-all pb-2 border-b border-accent font-heading font-medium">
                    View all work &rarr;
                </button>
            </div>

            {/* Full-Width Row Layout */}
            <div className="flex flex-col border-t border-white/10 mt-12 w-full gap-0">
                {projects.map((project, idx) => (
                    <div
                        key={project.id}
                        className="work-card group relative w-full border-b border-white/10 py-12 md:py-20 flex flex-col md:flex-row items-center justify-between cursor-pointer overflow-hidden px-6 md:px-12 hover:bg-white/[0.02] transition-colors duration-500"
                    >
                        {/* Hover Background Image Reveal */}
                        <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden">
                            <div className="absolute inset-0 bg-background/80 z-10" />
                            <img
                                src={project.thumbnail_url}
                                alt={project.client}
                                className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] opacity-40 grayscale group-hover:grayscale-0"
                            />
                        </div>

                        {/* Content */}
                        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between w-full gap-8">

                            <div className="flex flex-col max-w-2xl translate-x-0 group-hover:translate-x-4 transition-transform duration-500">
                                <div className="font-mono text-accent text-sm md:text-base font-bold tracking-[0.2em] uppercase mb-4 opacity-80 group-hover:opacity-100 transition-opacity">
                                    0{idx + 1} // {project.category}
                                </div>
                                <h3 className="text-5xl md:text-7xl lg:text-[90px] font-heading font-black tracking-tighter leading-[0.9] text-primary group-hover:text-white transition-colors">
                                    {project.client}
                                </h3>
                                <div className="mt-6 font-drama text-2xl md:text-4xl text-primary/60 italic font-light group-hover:text-primary/90 transition-colors">
                                    {project.headline}
                                </div>
                            </div>

                            <div className="flex flex-col items-start md:items-end gap-6 md:text-right translate-x-0 group-hover:-translate-x-4 transition-transform duration-500">
                                <div className="font-mono text-lg text-primary/80 border text-center border-white/20 rounded-full px-6 py-2 group-hover:border-accent group-hover:bg-accent group-hover:text-background transition-all duration-300 font-bold tracking-widest uppercase">
                                    {project.result_metric}
                                </div>
                                <div className="text-primary/40 font-mono text-sm uppercase tracking-widest hidden md:block">
                                    {project.year} &copy;
                                </div>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
