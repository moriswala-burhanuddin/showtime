import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Mail, Camera, Star, CalendarDays } from 'lucide-react';

export const Hero = () => {
    const brands = [
        { name: 'Cosmopolitan', src: '/cosmopolitan-logo.png' },
        { name: 'Grazia', src: '/grazia-logo.png' },
        { name: 'Marie Claire', src: '/marie-claire-logo.png' },
        { name: 'Phoenix', src: '/phoenix-logo.png' },
        { name: 'Huck', src: '/huck-logo.png' },
    ];

    const stats = [
        { icon: <Mail size={32} strokeWidth={1.5} />, number: "3", label: "We respond within 3 hours of your inquiry" },
        { icon: <Camera size={32} strokeWidth={1.5} />, number: "24", label: "Choice of 24 photo booth experiences" },
        { icon: <Star size={32} strokeWidth={1.5} />, number: "721", label: "Over 700 5★ Google reviews" },
        { icon: <CalendarDays size={32} strokeWidth={1.5} />, number: "2,114", label: "Chosen for over 2,100 events in New York City" },
    ];

    const [poseIndex, setPoseIndex] = useState(0);
    const [isFlashing, setIsFlashing] = useState(false);
    const [showCam, setShowCam] = useState(false);

    const poses = [
        "/pose1-Photoroom.png",
        "/16-9-kardashian-scale.png",
        "/pose-2.png"
    ];

    useEffect(() => {
        let isMounted = true;
        const sequence = async () => {
            if (!isMounted) return;

            // Wait with current pose
            await new Promise(r => setTimeout(r, 2000));
            if (!isMounted) return;

            // Show Camera
            setShowCam(true);
            await new Promise(r => setTimeout(r, 600));
            if (!isMounted) return;

            // Flash
            setIsFlashing(true);
            setTimeout(() => { if (isMounted) setIsFlashing(false); }, 150);

            // Change Pose right after flash starts
            setPoseIndex((prev) => (prev + 1) % poses.length);

            // Hold camera for a bit
            await new Promise(r => setTimeout(r, 400));
            if (!isMounted) return;
            setShowCam(false);

            // Repeat
            sequence();
        };

        sequence();
        return () => { isMounted = false; };
    }, [poses.length]);

    return (
        <section className="bg-[#0D0D0D] min-h-[100svh] pt-[90px] md:pt-[140px] px-2 md:px-6 pb-4 lg:pb-12 flex flex-col gap-4 md:gap-6 w-full max-w-[1920px] mx-auto overflow-hidden">
            {/* White Bento Box Hero Card */}
            <div className="relative w-full h-[75vh] md:h-[calc(100vh-180px)] min-h-[450px] md:min-h-[600px] bg-[#EEEEEE] rounded-[1.8rem] md:rounded-[3rem] overflow-hidden flex flex-col items-center justify-center shadow-2xl shrink-0">

                {/* Flash Overlay */}
                <AnimatePresence>
                    {isFlashing && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-white z-[100] pointer-events-none"
                        />
                    )}
                </AnimatePresence>

                {/* Subtle vertical background grid lines */}
                <div className="absolute inset-0 flex justify-between px-[10%] opacity-[0.03] pointer-events-none">
                    <div className="w-[1px] h-full bg-black"></div>
                    <div className="w-[1px] h-full bg-black"></div>
                    <div className="w-[1px] h-full bg-black"></div>
                    <div className="w-[1px] h-full bg-black"></div>
                </div>

                {/* Top Headers */}
                <div className="absolute top-6 left-6 md:top-10 md:left-12 z-20 text-[#1A1A1A] font-medium text-xs md:text-2xl tracking-tight hidden sm:block">
                    //Photo Booth Rental
                </div>
                <div className="absolute top-4 right-4 md:top-10 md:right-12 z-20 text-[#1A1A1A] font-bold text-sm md:text-xl hidden md:flex flex-col items-end">
                    <div className="flex items-center gap-1">
                        <span className="text-showtime-red tracking-tighter">SHOWTIME</span>
                        <div className="w-1 h-3 bg-showtime-red -rotate-12 ml-1"></div>
                    </div>
                    <span className="font-medium tracking-wider text-[10px] md:text-sm">premium</span>
                </div>

                {/* UNIFIED TEXT BEHIND IMAGE - PREVENTS CUTOFF ON MOBILE/DESKTOP */}
                <div className="absolute inset-0 flex flex-col items-center justify-start pointer-events-none z-10 select-none px-4 pt-[15%] sm:pt-[15%] md:pt-[10%] overflow-hidden w-full">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.1 }}
                        className="flex flex-col items-center shrink-0 w-full z-10 md:translate-y-6"
                    >
                        <h1 className="text-[17vw] sm:text-[12vw] md:text-[10vw] lg:text-[11vw] font-black tracking-tighter leading-[0.8] uppercase text-[#1A1A1A] text-center w-full flex flex-col xl:flex-row justify-center items-center xl:gap-[3vw]">
                            <span>ELEVATE</span>
                            <span>EXPERIENCE</span>
                        </h1>
                        <div className="flex flex-row flex-wrap justify-center gap-2 md:gap-6 mt-4 md:mt-8 text-[9px] sm:text-xs lg:text-sm font-bold text-[#1A1A1A]/80 max-w-[90%] md:max-w-full">
                            <span className="flex items-center gap-1 whitespace-nowrap"><span className="text-showtime-red text-base md:text-lg font-normal leading-none">+</span> Weddings</span>
                            <span className="flex items-center gap-1 whitespace-nowrap"><span className="text-showtime-red text-base md:text-lg font-normal leading-none">+</span> Brand Activations</span>
                            <span className="flex items-center gap-1 whitespace-nowrap"><span className="text-showtime-red text-base md:text-lg font-normal leading-none">+</span> Corporate</span>
                            <span className="flex items-center gap-1 whitespace-nowrap"><span className="text-showtime-red text-base md:text-lg font-normal leading-none">+</span> Private Parties</span>
                        </div>
                    </motion.div>
                </div>

                {/* Animated Photoshoot Sequence */}
                <div className="absolute inset-x-0 bottom-0 z-20 w-full h-full flex justify-center items-end overflow-hidden pb-0">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={poses[poseIndex]}
                            src={poses[poseIndex]}
                            alt="Photoshoot Subject"
                            initial={{ opacity: 0, scale: 1.05, y: 30 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.98, y: -10 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="max-h-[60%] sm:max-h-[85%] md:max-h-[95%] max-w-full object-contain object-bottom pointer-events-auto origin-bottom drop-shadow-2xl translate-y-2"
                        />
                    </AnimatePresence>

                    {/* Camera Overlay */}
                    <AnimatePresence>
                        {showCam && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.7, y: 50, rotate: -5 }}
                                animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
                                exit={{ opacity: 0, scale: 0.8, y: 20, rotate: 5 }}
                                className="absolute inset-0 z-50 flex items-center justify-center pointer-events-none"
                            >
                                <div className="relative">
                                    <img
                                        src="/cam.png"
                                        alt="Camera"
                                        className="w-[180px] md:w-[300px] lg:w-[450px] drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                                    />

                                    {/* Lens Shine/Refraction */}
                                    <motion.div
                                        animate={{
                                            opacity: [0.1, 0.4, 0.1],
                                            scale: [1, 1.2, 1],
                                            rotate: [0, 45, 0]
                                        }}
                                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30%] h-[30%] bg-gradient-to-tr from-white/20 to-transparent rounded-full blur-md"
                                    />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Bottom Stats Boxes (Left) - Hidden on extra small mobile to focus on core visual, visible on small and up */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="absolute bottom-4 left-4 md:bottom-10 md:left-10 flex flex-col sm:flex-row gap-2 sm:gap-4 z-40 hidden sm:flex"
                >
                    <div className="bg-[#1A1A1A] rounded-[1rem] md:rounded-[1.8rem] p-3 md:p-5 pr-6 md:pr-12 flex items-center gap-3 md:gap-5 text-white relative hover:bg-black transition-colors shadow-xl">
                        <span className="text-3xl md:text-6xl font-light tracking-tighter">1K</span>
                        <div className="text-[8px] md:text-xs leading-tight text-white/50 max-w-[80px]">
                            Events<br />Completed
                        </div>
                        <ArrowUpRight size={14} className="absolute top-2 right-2 md:top-4 md:right-4 text-white/30" />
                    </div>
                </motion.div>

                {/* Bottom Stats Boxes (Right) */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="absolute bottom-4 right-4 left-4 sm:left-auto md:bottom-10 md:right-10 flex gap-2 sm:gap-4 z-40 justify-center sm:justify-end"
                >
                    <div className="bg-[#1A1A1A] rounded-[1.2rem] md:rounded-[1.8rem] p-3 md:p-5 pr-8 md:pr-12 flex items-center gap-3 md:gap-5 text-white relative hover:bg-black transition-colors shadow-xl hidden xl:flex">
                        <span className="text-4xl md:text-6xl font-light tracking-tighter">10</span>
                        <div className="text-[10px] md:text-xs leading-tight text-white/50 max-w-[80px]">
                            Years of<br />Experience
                        </div>
                        <ArrowUpRight size={16} className="absolute top-4 right-4 text-white/30" />
                    </div>

                    {/* Dark Call to Action Button imitating the stats box style */}
                    <a href="#contact" className="bg-[#1A1A1A] w-[200px] sm:w-auto flex flex-col items-center justify-center rounded-[1.2rem] md:rounded-[1.8rem] py-3 md:py-6 px-6 lg:px-12 text-white hover:bg-showtime-red transition-all duration-300 cursor-pointer shadow-xl group border border-transparent hover:border-red-400">
                        <span className="font-bold text-sm md:text-lg tracking-wider uppercase group-hover:scale-105 transition-transform duration-300">BOOK NOW</span>
                        <span className="text-[8px] md:text-[10px] text-white/50 mt-1 uppercase hidden sm:block">Let's talk</span>
                    </a>
                </motion.div>
            </div>

            {/* Brands Bento Grid */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="w-full grid grid-cols-2 lg:grid-cols-5 gap-3 md:gap-6 shrink-0"
            >
                {brands.map((brand, idx) => (
                    <div
                        key={idx}
                        className={`bg-[#181818] rounded-[1.5rem] md:rounded-[2rem] p-4 md:p-6 flex flex-col items-center justify-center border border-white/5 hover:border-white/20 transition-all duration-300 h-20 sm:h-24 lg:h-32 shadow-xl group relative overflow-hidden ${idx === 4 ? 'col-span-2 lg:col-span-1' : ''}`}
                    >
                        {/* Subtle background glow effect inside card */}
                        <div className="absolute inset-0 bg-showtime-red opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300 backdrop-blur-3xl"></div>
                        <img
                            src={brand.src}
                            alt={brand.name}
                            className="max-h-full max-w-[70%] object-contain opacity-[0.35] group-hover:opacity-100 transition-opacity duration-500 brightness-0 invert"
                        />
                    </div>
                ))}
            </motion.div>

            {/* Stats Bento Grid - Red Outline Circles (From SS) */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 shrink-0"
            >
                {stats.map((stat, idx) => (
                    <div
                        key={idx}
                        className="bg-[#181818] rounded-[1.5rem] md:rounded-[2rem] p-6 lg:p-10 flex flex-col items-center justify-center text-center gap-3 md:gap-4 hover:bg-[#222] transition-colors border border-white/5 shadow-xl relative overflow-hidden group"
                    >
                        {/* Red Accent Glow in Background */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-showtime-red/5 rounded-full blur-3xl group-hover:bg-showtime-red/10 transition-colors duration-500 transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

                        {/* Circle Icon */}
                        <div className="w-[4.5rem] h-[4.5rem] md:w-[5.5rem] md:h-[5.5rem] rounded-full border-2 border-[#E4000F] flex items-center justify-center text-white mb-2 shadow-[0_0_15px_rgba(228,0,15,0.1)] group-hover:shadow-[0_0_25px_rgba(228,0,15,0.3)] transition-all duration-500 bg-[#0D0D0D] relative z-10 shrink-0">
                            {stat.icon}
                        </div>

                        {/* Stat Value */}
                        <div className="text-4xl lg:text-5xl font-black text-white shrink-0 tracking-tighter relative z-10">
                            {stat.number}
                        </div>

                        {/* Stat Label */}
                        <div className="text-[11px] md:text-xs lg:text-sm text-gray-400 font-medium leading-relaxed max-w-[200px] relative z-10 text-balance tracking-wide">
                            {stat.label}
                        </div>
                    </div>
                ))}
            </motion.div>
        </section>
    );
};
