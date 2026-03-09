import { useEffect, useState } from 'react';

export default function Footer() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="w-full bg-[#050505] text-white pt-32 pb-8 px-6 md:px-12 lg:px-16 flex flex-col relative overflow-hidden rounded-t-[3rem] md:rounded-t-[4rem] border-t border-white/5">

            {/* Ambient Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[400px] bg-accent/10 blur-[150px] rounded-full pointer-events-none" />

            {/* Top Massive CTA Area */}
            <div className="w-full flex justify-center items-center mb-24 relative z-10 flex-col">
                <h2 className="font-heading font-black text-[8vw] leading-none tracking-tighter text-center uppercase pointer-events-none select-none text-white mix-blend-difference whitespace-nowrap">
                    Let&apos;s Work
                </h2>

                {/* Floating Action Button overlapping text */}
                <div className="mt-[-2vw] md:mt-[-4vw] relative z-20">
                    <a href="mailto:hello@minimax.agency" className="group relative flex items-center justify-center w-32 h-32 md:w-48 md:h-48 bg-accent text-[#050505] rounded-full hover:scale-105 transition-transform duration-500 hover:shadow-[0_0_50px_rgba(212,255,0,0.4)]">
                        <span className="font-mono text-sm md:text-base font-bold uppercase tracking-widest text-center leading-tight">
                            Start <br /> Project
                        </span>
                        {/* Hover ring */}
                        <div className="absolute inset-0 rounded-full border border-accent scale-[1.1] opacity-0 group-hover:scale-[1.2] group-hover:opacity-100 transition-all duration-700 ease-out" />
                        <div className="absolute inset-0 rounded-full border border-accent scale-[1.2] opacity-0 group-hover:scale-[1.4] group-hover:opacity-50 transition-all duration-1000 ease-out delay-75" />
                    </a>
                </div>
            </div>

            {/* Inner Grid / Links & Info */}
            <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 mb-16 relative z-10">

                {/* Brand / Status (Col 5) */}
                <div className="md:col-span-5 flex flex-col justify-between">
                    <div>
                        <div className="font-heading font-black text-4xl tracking-tight mb-6">minimax.</div>
                        <p className="font-mono text-sm uppercase tracking-widest text-white/50 leading-relaxed max-w-sm mb-12">
                            High-contrast digital systems built for market dominance.
                        </p>
                    </div>

                    {/* Operational Status indicator */}
                    <div className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-widest bg-white/5 px-4 py-2.5 rounded-full border border-white/10 w-fit backdrop-blur-md">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                        </span>
                        Available for new projects
                    </div>
                </div>

                {/* Navigation (Col 3) */}
                <div className="md:col-span-3">
                    <h4 className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] text-accent mb-8">Sitemap</h4>
                    <ul className="flex flex-col gap-5 font-heading text-2xl font-medium">
                        {['Work', 'Services', 'Process', 'Studio'].map((item) => (
                            <li key={item}>
                                <a href={`#${item.toLowerCase()}`} className="text-white/70 hover:text-white transition-colors relative group inline-block">
                                    {item}
                                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent group-hover:w-full transition-all duration-300 ease-out" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Socials & Location (Col 4) */}
                <div className="md:col-span-4 flex flex-col justify-between">
                    <div>
                        <h4 className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] text-accent mb-8">Socials</h4>
                        <ul className="flex flex-col gap-4 font-mono text-sm uppercase tracking-widest">
                            {['Twitter / X', 'Instagram', 'LinkedIn', 'Dribbble'].map((social) => (
                                <li key={social}>
                                    <a href="#" className="flex items-center justify-between group border-b border-white/10 pb-4 hover:border-accent transition-colors duration-300">
                                        <span className="text-white/70 group-hover:text-white group-hover:translate-x-2 transition-all duration-300">{social}</span>
                                        <span className="text-accent opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">&rarr;</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mt-12 font-mono text-sm text-white/50 uppercase tracking-widest">
                        <span className="block mb-2 text-white/30 text-xs">Local Time</span>
                        {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })} EST
                    </div>
                </div>

            </div>

            {/* Bottom Strip */}
            <div className="border-t border-white/10 pt-8 mt-12 w-full flex flex-col md:flex-row items-center justify-between gap-6 relative z-10 text-xs font-mono uppercase tracking-widest text-white/40">
                <div className="flex gap-6">
                    <a href="#" className="hover:text-white transition-colors">Privacy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms</a>
                    <a href="#" className="hover:text-white transition-colors">Cookies</a>
                </div>

                <div className="flex items-center gap-6">
                    <p>&copy; {new Date().getFullYear()} minimax</p>
                    <button onClick={scrollToTop} className="flex items-center gap-2 hover:text-accent transition-colors">
                        Back to Top &uarr;
                    </button>
                </div>
            </div>

        </footer>
    );
}
