export default function Footer() {
    return (
        <footer className="w-full mt-20 pt-20 px-6 md:px-16 bg-muted/50 rounded-t-[3rem] md:rounded-t-[4rem] border-t border-accent/20 relative overflow-hidden">

            {/* Background Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-accent/5 blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 mb-20 relative z-10">

                {/* Brand Col (Span 5) */}
                <div className="md:col-span-5 flex flex-col justify-between">
                    <div>
                        <div className="font-heading font-bold text-3xl tracking-tight mb-4 text-white">minimax</div>
                        <p className="font-body text-primary/60 max-w-sm mb-8 leading-relaxed">
                            Pixel perfect web design engineered for maximum conversion.
                            We build digital instruments, not websites.
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-6 font-mono text-sm uppercase tracking-widest text-primary/60">
                        <a href="#" className="hover:text-accent hover:-translate-y-1 transition-all">Twitter [X]</a>
                        <a href="#" className="hover:text-accent hover:-translate-y-1 transition-all">Instagram</a>
                        <a href="#" className="hover:text-accent hover:-translate-y-1 transition-all">LinkedIn</a>
                    </div>
                </div>

                {/* Links Col 1 */}
                <div className="md:col-span-3">
                    <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-6">Navigation</h4>
                    <ul className="flex flex-col gap-4 font-heading text-lg">
                        {['Work', 'Services', 'Process', 'Testimonials'].map((link) => (
                            <li key={link}>
                                <a href={`#${link.toLowerCase()}`} className="text-primary/70 hover:text-white transition-colors">
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Links Col 2 */}
                <div className="md:col-span-4">
                    <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-6">Command</h4>
                    <p className="font-body text-primary/60 mb-6">Initiate project sequence. We respond within 24 operational hours.</p>

                    <button className="w-full btn-magnetic relative overflow-hidden bg-white/5 border border-white/10 text-primary px-6 py-4 rounded-full font-heading font-medium text-sm text-center group">
                        <span className="btn-magnetic-bg rounded-full border border-accent"></span>
                        <span className="relative z-10 group-hover:text-accent transition-colors">hello@minimax.agency &rarr;</span>
                    </button>
                </div>

            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/5 py-8 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10 text-sm">

                {/* System Status */}
                <div className="flex items-center gap-3 font-mono text-xs text-primary/50 uppercase tracking-widest bg-background/50 px-4 py-2 rounded-full border border-white/5">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                    </span>
                    System Operational
                </div>

                <div className="flex gap-6 font-mono text-xs text-primary/40">
                    <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                </div>

                <div className="font-mono text-xs text-primary/40">
                    &copy; {new Date().getFullYear()} minimax Studio
                </div>
            </div>
        </footer>
    );
}
