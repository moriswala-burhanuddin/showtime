import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '../utils';

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="fixed top-4 left-4 right-4 md:top-6 md:left-6 md:right-6 z-[60]"
            >
                <div className={cn(
                    "w-full bg-[#E4000F] rounded-[2rem] md:rounded-[3rem] px-4 md:px-6 py-3 md:py-6 flex items-center justify-between text-white overflow-hidden relative shadow-2xl transition-all duration-300",
                    isScrolled ? "py-3 md:py-4 shadow-[0_10px_40px_rgba(228,0,15,0.4)]" : ""
                )}>
                    {/* Subtle curved background lines pattern inside the nav */}
                    <div
                        className="absolute inset-0 opacity-20 pointer-events-none"
                        style={{
                            backgroundImage: 'repeating-radial-gradient(circle at top left, transparent, transparent 10px, white 10px, white 11px)',
                            backgroundSize: '100% 200%'
                        }}
                    ></div>

                    {/* Nav Links Container */}
                    <div className="relative z-10 w-full flex items-center justify-between xl:px-12 font-medium text-xs md:text-sm lg:text-base tracking-wide">

                        {/* Left Section */}
                        <div className="flex-1 hidden md:flex items-center gap-4 md:gap-8">
                            <a href="#photo-booths" className="hover:text-white/80 transition-colors whitespace-nowrap font-black uppercase tracking-tighter">Photo Booths</a>
                            {/* Connecting Line */}
                            <div className="h-[1px] flex-1 bg-white/40 hidden md:block max-w-[200px] xl:max-w-[400px]"></div>
                            <span className="hidden sm:block whitespace-nowrap font-black uppercase tracking-tighter opacity-50">Est. 2013</span>
                        </div>

                        {/* Center Section: LOGO */}
                        <a href="#" className="md:mx-12 shrink-0 group flex items-center">
                            <div className="text-xl md:text-3xl font-black italic tracking-widest flex items-center gap-2 group-hover:scale-105 transition-transform duration-300">
                                <div className="bg-white/10 p-1.5 md:p-2 rounded-full backdrop-blur-sm border border-white/20">
                                    <img src="/logo.png" className="h-5 w-auto md:h-10 object-contain drop-shadow-md" alt="logo" />
                                </div>
                                <span className="drop-shadow-md">SHOWTIME</span>
                            </div>
                        </a>

                        {/* Right Section */}
                        <div className="flex-1 hidden md:flex items-center gap-4 md:gap-8 justify-end">
                            <a href="#branding" className="hidden sm:block hover:text-white/80 transition-colors whitespace-nowrap font-black uppercase tracking-tighter">Branding</a>
                            {/* Connecting Line */}
                            <div className="h-[1px] flex-1 bg-white/40 hidden md:block max-w-[200px] xl:max-w-[400px]"></div>
                            <a href="#contact" className="hover:text-white/80 transition-colors whitespace-nowrap font-black uppercase tracking-tighter">Contact</a>
                        </div>

                        {/* Mobile Menu Icon */}
                        <button
                            onClick={toggleMenu}
                            className="md:hidden flex items-center justify-center p-2 hover:bg-white/10 rounded-full transition-colors ml-auto mr-1 relative z-20"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>

                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, clipPath: 'circle(0% at 90% 5%)' }}
                        animate={{ opacity: 1, clipPath: 'circle(150% at 90% 5%)' }}
                        exit={{ opacity: 0, clipPath: 'circle(0% at 90% 5%)' }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 bg-[#E4000F] z-[55] flex flex-col items-center justify-center px-10 text-white"
                    >
                        <div className="flex flex-col gap-8 text-center">
                            {['Photo Booths', 'Corporate', 'Weddings', 'Branding', 'Contact'].map((item, idx) => (
                                <motion.a
                                    key={item}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 + idx * 0.1 }}
                                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                                    onClick={() => setIsOpen(false)}
                                    className="text-4xl sm:text-6xl font-black uppercase tracking-tighter hover:scale-110 transition-transform"
                                >
                                    {item}
                                </motion.a>
                            ))}
                        </div>

                        <div className="absolute bottom-20 left-10 right-10 flex flex-col items-center gap-4 opacity-50">
                            <div className="w-12 h-1 bg-white/30 rounded-full"></div>
                            <p className="text-xs font-black uppercase tracking-widest">New York City • Est. 2013</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
