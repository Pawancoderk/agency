import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Preloader({ onComplete }) {
    const loaderRef = useRef(null);
    const counterRef = useRef(null);
    const textRef = useRef(null);
    const counterValue = useRef({ val: 0 });

    useEffect(() => {
        // Prevent scrolling while loader is active
        document.body.style.overflow = 'hidden';

        const tl = gsap.timeline({
            onComplete: () => {
                document.body.style.overflow = '';
                if (onComplete) onComplete();
            }
        });

        // 1. Fast Counter 0 to 100
        tl.to(counterValue.current, {
            val: 100,
            duration: 2.2,
            ease: "circ.inOut",
            onUpdate: function () {
                if (counterRef.current) {
                    counterRef.current.innerHTML = Math.round(counterValue.current.val).toString().padStart(3, '0') + '%';
                }
            }
        });

        // 2. Hide counter quickly
        tl.to(counterRef.current, {
            scale: 0.5,
            opacity: 0,
            filter: 'blur(10px)',
            duration: 0.4,
            ease: "power3.in"
        }, "-=0.2");

        // 3. Flash outlined text
        tl.fromTo(textRef.current,
            { opacity: 0, scale: 0.8, filter: 'blur(20px)' },
            { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 0.8, ease: "expo.out" },
            "-=0.1"
        );
        tl.to(textRef.current, {
            scale: 2,
            opacity: 0,
            filter: 'blur(10px)',
            duration: 0.6,
            ease: "power3.in"
        });

        // 4. Cinematic Panel Slice (staggered curtain open)
        tl.to('.preloader-panel-1', { yPercent: -100, duration: 1.2, ease: "expo.inOut" }, "-=0.4");
        tl.to('.preloader-panel-2', { yPercent: 100, duration: 1.2, ease: "expo.inOut" }, "-=1.0");
        tl.to('.preloader-panel-3', { yPercent: -100, duration: 1.2, ease: "expo.inOut" }, "-=1.0");

        // 5. Unmount loader wrapper
        tl.to(loaderRef.current, { autoAlpha: 0, duration: 0.1 });

        return () => {
            tl.kill();
            document.body.style.overflow = '';
        };
    }, [onComplete]);

    return (
        <div ref={loaderRef} className="fixed inset-0 z-[100000] flex items-center justify-center font-mono pointer-events-none">
            {/* Dark curtain panels */}
            <div className="preloader-panel-1 absolute top-0 left-0 w-[33.333%] h-full bg-[#050505] border-r border-[#1a1a1a]" />
            <div className="preloader-panel-2 absolute top-0 left-[33.333%] w-[33.334%] h-full bg-[#050505] border-r border-[#1a1a1a]" />
            <div className="preloader-panel-3 absolute top-0 left-[66.667%] w-[33.333%] h-full bg-[#050505]" />

            {/* Glowing orb accent behind text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-accent/20 rounded-full blur-[100px] z-0" />

            {/* Dynamic Content */}
            <div className="relative z-10 flex flex-col items-center justify-center mix-blend-difference text-white w-full h-full">
                <div
                    ref={counterRef}
                    className="absolute text-[12vw] md:text-[200px] font-black tracking-tighter text-accent mix-blend-normal"
                >
                    000%
                </div>

                <div
                    ref={textRef}
                    className="absolute text-5xl md:text-8xl lg:text-[120px] font-heading font-black text-transparent [-webkit-text-stroke:2px_#D4FF00] uppercase tracking-widest opacity-0"
                >
                    minimax
                </div>
            </div>
        </div>
    );
}
