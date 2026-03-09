import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative, Mousewheel, Keyboard } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-creative';

gsap.registerPlugin(ScrollTrigger);

const baseProjects = [
    {
        id: "easings",
        title: "Easings",
        badge: "EXPECTED EARLY 2026",
        headline: "Coming soon, ready-to-paste easings for CSS and GSAP inside the Osmo Vault.",
        thumbnail_url: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&q=80",
        color_accent: "#EAEAEA", // Light Grey
        text_color: "#050505"
    },
    {
        id: "community",
        title: "Community",
        badge: "PART OF THE MEMBERSHIP",
        headline: "Connect with the people who love building great websites as much as you do.",
        thumbnail_url: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80",
        color_accent: "#6B46FF", // Purple
        text_color: "#FFFFFF"
    },
    {
        id: "vault",
        title: "The Vault",
        badge: "PART OF THE MEMBERSHIP",
        headline: "Our ever-growing dashboard packed with ready-to-go components.",
        thumbnail_url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
        color_accent: "#111111", // Black
        text_color: "#FFFFFF"
    },
    {
        id: "transition",
        title: "Page Transition",
        badge: "PART OF THE ACADEMY",
        headline: "Learn how to create page transitions that take your websites to the next level.",
        thumbnail_url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80",
        color_accent: "#BFFF00", // Neon lime
        text_color: "#050505"
    },
    {
        id: "icons",
        title: "Icons",
        badge: "PART OF THE STUDIO",
        headline: "A uniform library of clean, scalable SVG icons you can copy or download in seconds.",
        thumbnail_url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80",
        color_accent: "#FF4500", // Orange
        text_color: "#FFFFFF"
    }
];

// Duplicate the core projects robustly to create a massive, infinite-feeling loop
const projects = [
    ...baseProjects,
    ...baseProjects.map(p => ({ ...p, id: p.id + '-2' })),
    ...baseProjects.map(p => ({ ...p, id: p.id + '-3' })),
    ...baseProjects.map(p => ({ ...p, id: p.id + '-4' })),
    ...baseProjects.map(p => ({ ...p, id: p.id + '-5' }))
];

export default function OurWork({ isLoaded }) {
    const sectionRef = useRef(null);

    useEffect(() => {
        if (!isLoaded) return;
        const ctx = gsap.context(() => {
            gsap.fromTo(sectionRef.current,
                { opacity: 0, y: 100 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.5,
                    ease: 'expo.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 70%',
                    }
                }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, [isLoaded]);

    return (
        <section id="work" ref={sectionRef} className="py-24 md:py-32 w-full relative overflow-hidden bg-background">

            {/* Straight Dotted Line SVG (Track) */}
            <div className="absolute top-[50%] left-0 w-full h-[2px] pointer-events-none z-0 opacity-20 transform -translate-y-1/2">
                <svg width="100%" height="2" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0" y1="1" x2="100%" y2="1" stroke="currentColor" strokeWidth="2" strokeDasharray="8 12" />
                </svg>
            </div>

            {/* Section Header */}
            <div className="px-6 md:px-16 w-full max-w-7xl mx-auto mb-16 relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div className="max-w-2xl">
                    <div className="font-mono text-accent uppercase tracking-[0.3em] text-sm mb-6">03 // Selected Work</div>
                    <h2 className="text-4xl md:text-6xl font-heading font-black leading-none tracking-tight text-white mb-2">
                        Projects that <br />
                        <span className="font-drama italic text-accent font-normal tracking-wide">move numbers.</span>
                    </h2>
                </div>
            </div>

            {/* Swiper Slider */}
            <div className="w-full relative z-10 custom-swiper-container pb-20">
                <style>{`
                    .custom-swiper-container {
                        width: 100%;
                        max-width: 1400px;
                        padding-top: 50px;
                        padding-bottom: 50px;
                        overflow: visible; /* Allows side cards to bleed perfectly off screen */
                    }
                    .custom-swiper-container .swiper {
                        width: 100%;
                        padding-top: 50px;
                        padding-bottom: 50px;
                        overflow: visible;
                    }
                    .custom-swiper-container .swiper-slide {
                        width: 480px !important;
                        height: 650px !important;
                        opacity: 0; /* Base state is invisible, EffectCreative manages the 3 visible ones */
                        transition: opacity 0.5s;
                    }
                    .custom-swiper-container .swiper-slide-active {
                        opacity: 1;
                    }
                    /* Base Inactive Card Styling */
                    .custom-swiper-container .swiper-slide .card-inner {
                        background-color: var(--card-color, #0F0F0F); 
                        color: var(--text-color, #FFFFFF);
                        transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1);
                        border-radius: 2rem;
                    }

                    /* Text adjustments using CSS variables passed via inline styles */
                    .custom-swiper-container .swiper-slide .card-inner .badge {
                        background: rgba(128,128,128,0.15);
                        border: 1px solid rgba(128,128,128,0.3);
                        color: var(--text-color, #000);
                        opacity: 0.9;
                    }
                    .custom-swiper-container .swiper-slide .card-inner .project-title {
                        color: var(--text-color, #000);
                    }
                    .custom-swiper-container .swiper-slide .card-inner .project-headline {
                        color: var(--text-color, #000);
                        opacity: 0.8;
                    }
                    .custom-swiper-container .swiper-slide .card-inner .star-icon {
                        color: var(--text-color, #000);
                    }

                    /* Interactive Drag Circular Button on Hover */
                    .custom-swiper-container .swiper-slide .drag-hint {
                        opacity: 0;
                        transform: scale(0.5);
                    }
                    .custom-swiper-container .swiper-slide:hover .drag-hint {
                        opacity: 1;
                        transform: scale(1);
                    }
                    
                    @media (max-width: 768px) {
                        .custom-swiper-container .swiper-slide {
                            width: 300px !important;
                            height: 480px !important;
                        }
                    }
                    
                    /* Custom drag cursor area and buttery smooth spring easing for the whole track */
                    .swiper-wrapper {
                        cursor: grab;
                        transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1) !important;
                    }
                    .swiper-wrapper:active {
                        cursor: grabbing;
                    }
                `}</style>
                <Swiper
                    effect={'creative'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    initialSlide={1}
                    loop={true}
                    speed={1200} /* Slower animation speed makes the easing curve feel much smoother */
                    resistanceRatio={0.5} /* Bouncier edges */
                    touchRatio={2} /* Reacts twice as fast to finger/mouse drag */
                    longSwipesRatio={0.1} /* Very little distance needed to trigger a swipe */
                    mousewheel={{
                        forceToAxis: true,
                        sensitivity: 1,
                    }}
                    keyboard={true}
                    loopedSlides={10} /* Keep large buffer for infinite effect */
                    creativeEffect={{
                        limitProgress: 2, // Strictly limit visibility scope
                        prev: {
                            shadow: true,
                            translate: ['-160%', '2%', -400], // Increased X gap from 115% to 160%
                            rotate: [0, 25, -3],
                        },
                        next: {
                            shadow: true,
                            translate: ['160%', '2%', -400], // Increased X gap from 115% to 160%
                            rotate: [0, -25, 3],
                        },
                        active: {
                            translate: [0, 0, 0],
                            rotate: [0, 0, 0],
                            scale: 1,
                        }
                    }}
                    modules={[EffectCreative, Mousewheel, Keyboard]}
                    className="w-full"
                >
                    {projects.map((project, idx) => (
                        <SwiperSlide key={`${project.id}-${idx}`} style={{ '--card-color': project.color_accent, '--text-color': project.text_color }}>
                            <div className="card-inner w-full h-full flex flex-col justify-start items-center relative overflow-hidden p-8 px-10">

                                {/* Top Badge */}
                                <div className="badge font-mono text-[10px] md:text-[11px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mt-2 transition-colors duration-500">
                                    {project.badge}
                                </div>

                                {/* Large Asterisk Star */}
                                <div className="star-icon mt-16 mb-6 transition-colors duration-500 flex justify-center items-center">
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 2v20M17 5l-10 14M22 12H2M19 19 5 5" />
                                    </svg>
                                </div>

                                {/* Text Content */}
                                <div className="w-full text-center flex flex-col items-center flex-1">
                                    <h3 className="project-title text-[40px] md:text-[50px] font-heading font-medium tracking-tight leading-[1.1] mb-6 transition-colors duration-500">
                                        {project.title}
                                    </h3>
                                    <p className="project-headline font-mono text-sm md:text-base max-w-[90%] mx-auto leading-relaxed transition-colors duration-500">
                                        {project.headline}
                                    </p>
                                </div>

                                {/* Centered Drag Hint (Only visible on active card) */}
                                <div className="drag-hint absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#1A1A1A] text-white rounded-full flex items-center justify-center font-mono text-[10px] uppercase font-bold tracking-widest pointer-events-none z-20 shadow-2xl transition-all duration-500 ease-out">
                                    Drag
                                </div>

                                {/* Bottom Interactive Box */}
                                <div className="w-full h-40 md:h-[180px] bg-black rounded-2xl overflow-hidden relative shadow-2xl group mt-auto border border-white/5">
                                    <img
                                        src={project.thumbnail_url}
                                        className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                                        alt={project.title}
                                    />
                                    {/* Action button overlay */}
                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-black font-mono text-[10px] uppercase tracking-widest px-6 py-2 rounded-sm font-bold shadow-lg opacity-0 translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                        Discover
                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
