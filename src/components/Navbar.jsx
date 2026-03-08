import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import gsap from 'gsap';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navRef = useRef(null);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isMobileMenuOpen) {
            gsap.to(menuRef.current, { autoAlpha: 1, duration: 0.3, ease: 'power2.out' });
            gsap.fromTo('.mobile-link',
                { y: 20, autoAlpha: 0 },
                { y: 0, autoAlpha: 1, duration: 0.4, stagger: 0.1, ease: 'power2.out', delay: 0.1 }
            );
        } else {
            gsap.to(menuRef.current, { autoAlpha: 0, duration: 0.3, ease: 'power2.in' });
        }
    }, [isMobileMenuOpen]);

    return (
        <>
            <nav ref={navRef} className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 rounded-full px-6 py-3 flex items-center justify-between w-[90%] max-w-5xl ${isScrolled ? 'bg-background/80 backdrop-blur-xl border border-accent/30' : 'bg-transparent border-transparent'}`}>
                <div className="font-heading font-bold text-xl tracking-tight">minimax</div>

                <div className="hidden md:flex items-center gap-8 font-mono text-sm">
                    {['Work', 'Services', 'Process', 'Contact'].map((item) => (
                        <a key={item} href={`#${item.toLowerCase()}`} className="hover:-translate-y-px transition-transform duration-200">{item}</a>
                    ))}
                </div>

                <button className="hidden md:block btn-magnetic relative overflow-hidden bg-white text-background px-5 py-2 rounded-full font-heading font-medium text-sm group">
                    <span className="btn-magnetic-bg rounded-full"></span>
                    <span className="relative z-10 group-hover:text-white transition-colors">Start a Project &rarr;</span>
                </button>

                <button className="md:hidden text-primary" onClick={() => setIsMobileMenuOpen(true)}>
                    <Menu className="w-6 h-6" />
                </button>
            </nav>

            {/* Mobile Menu */}
            <div ref={menuRef} className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-3xl invisible flex flex-col items-center justify-center">
                <button className="absolute top-6 right-6 text-primary" onClick={() => setIsMobileMenuOpen(false)}>
                    <X className="w-8 h-8" />
                </button>
                <div className="flex flex-col gap-8 text-center text-3xl font-heading">
                    {['Work', 'Services', 'Process', 'Contact'].map((item) => (
                        <a key={item} href={`#${item.toLowerCase()}`} className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>{item}</a>
                    ))}
                </div>
            </div>
        </>
    );
}
