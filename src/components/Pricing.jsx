export default function Pricing() {
    const tiers = [
        {
            name: "Essential Node",
            price: "5k",
            cycle: "/project",
            description: "Core digital identity and foundational web presence.",
            features: ["Brand Identity Audit", "5-Page Custom Web Design", "Basic Animations", "SEO Readiness", "1 Month Post-Launch Support"],
            highlighted: false,
            cta: "Initialize"
        },
        {
            name: "Performance Matrix",
            price: "12k",
            cycle: "/project",
            description: "The complete cinematic builder protocol. Maximum conversion fidelity.",
            features: ["Full Brand Architecture", "8+ Page Advanced Platform", "Complete GSAP Choreography", "Technical SEO Domination", "CMS Integration", "3 Months Optimization"],
            highlighted: true,
            cta: "Select Uplink"
        },
        {
            name: "Enterprise Cluster",
            price: "Custom",
            cycle: "retainer",
            description: "Ongoing algorithmic supremacy and continuous deployment.",
            features: ["Dedicated Development Cell", "Growth Engineering", "Unlimited Revisions", "A/B Testing Pipelines", "24/7 Priority SLA"],
            highlighted: false,
            cta: "Contact Command"
        }
    ];

    return (
        <section id="pricing" className="py-32 px-6 md:px-16 w-full max-w-7xl mx-auto">

            <div className="text-center md:text-left mb-20 max-w-2xl mx-auto md:mx-0">
                <div className="font-mono text-accent uppercase tracking-[0.3em] text-sm mb-6">Execution Tiers</div>
                <h2 className="text-5xl md:text-7xl font-heading font-bold leading-none tracking-tight">
                    Select your <span className="font-drama italic text-primary/60 font-normal">uplink.</span>
                </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-end mt-16">
                {tiers.map((tier, i) => (
                    <div
                        key={i}
                        className={`relative rounded-3xl p-10 flex flex-col transition-all duration-500 hover:-translate-y-2
              ${tier.highlighted
                                ? 'bg-accent text-background border-none shadow-[0_0_60px_rgba(212,255,0,0.15)] lg:scale-105 z-10 h-auto md:h-[600px]'
                                : 'bg-[#0A0A0A] border border-white/10 hover:border-white/30 text-primary h-auto md:h-[550px]'}`}
                    >
                        {tier.highlighted && (
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background text-primary font-mono text-[10px] uppercase tracking-widest px-6 py-2 rounded-full z-20 border border-white/10 shadow-xl">
                                Recommended Configuration
                            </div>
                        )}

                        <div className="mb-8">
                            <h3 className="text-3xl font-heading font-black mb-3">{tier.name}</h3>
                            <p className={`font-body text-sm leading-relaxed min-h-[40px] ${tier.highlighted ? 'text-background/80' : 'text-primary/60'}`}>
                                {tier.description}
                            </p>
                        </div>

                        <div className={`mb-8 pb-8 border-b flex items-baseline gap-2 ${tier.highlighted ? 'border-background/20' : 'border-white/10'}`}>
                            {tier.price !== "Custom" && <span className={`text-2xl font-heading ${tier.highlighted ? 'text-background/50' : 'text-primary/40'}`}>$</span>}
                            <span className="text-6xl font-heading font-black tracking-tighter">{tier.price}</span>
                            <span className={`font-mono text-xs uppercase tracking-widest ${tier.highlighted ? 'text-background/60' : 'text-primary/40'}`}>
                                {tier.cycle}
                            </span>
                        </div>

                        <ul className="flex-1 space-y-4 mb-10">
                            {tier.features.map((feature, idx) => (
                                <li key={idx} className="flex flex-col gap-1">
                                    <div className={`flex items-start gap-3 text-sm font-medium ${tier.highlighted ? 'text-background/90' : 'text-primary/80'}`}>
                                        <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${tier.highlighted ? 'bg-background' : 'bg-accent'}`}></span>
                                        {feature}
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <button className={`w-full py-5 rounded-full font-heading font-bold tracking-wide transition-all duration-300 text-lg
               ${tier.highlighted
                                ? 'bg-background text-primary hover:bg-black hover:scale-[1.02]'
                                : 'bg-white/5 border border-white/10 hover:bg-accent hover:text-background hover:border-accent'}`}>
                            {tier.cta}
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}
