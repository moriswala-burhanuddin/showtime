
import { motion, AnimatePresence } from 'framer-motion';
import { PartyPopper, Sparkles, Camera, Star, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';

const partyImages = [
    "/party photo booth rental in NYC/showtime-party-1-scaled.jpg",
    "/party photo booth rental in NYC/showtime-party-2-scaled.jpg",
    "/party photo booth rental in NYC/showtime-party-4-scaled.jpg"
];

export const Party = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % partyImages.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="party" className="relative py-24 md:py-40 bg-showtime-dark overflow-hidden">
            {/* Ambient Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-showtime-red/5 rounded-full blur-[150px] animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">

                    {/* Content Section - Responsive Order */}
                    <div className="w-full lg:w-1/2 order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="flex items-center gap-3 mb-8">
                                <div className="p-2 bg-showtime-red rounded-lg">
                                    <Star className="text-white fill-white" size={16} />
                                </div>
                                <span className="text-white font-black tracking-[0.3em] text-xs uppercase">Premium Social Events</span>
                            </div>

                            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-10 leading-[0.85] tracking-tighter uppercase">
                                Party <br />
                                <span className="text-showtime-red">Photo Booth</span> <br />
                                Rental NYC
                            </h2>

                            <div className="space-y-8 text-xl md:text-2xl text-gray-400 font-medium leading-relaxed max-w-2xl">
                                <p>Whether you are celebrating a <span className="text-white border-b-2 border-showtime-red">birthday</span>, Bar or Bat Mitzvah, engagement, anniversary, or graduation, a photo booth will be a popular addition to your event.</p>
                                <p>Every party photo booth rental includes delivery, a friendly assistant, a minimum 3 hour rental period, and unlimited prints. <span className="text-white font-black italic">Pose, print, and party!</span></p>
                            </div>

                            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="group p-6 bg-showtime-gray border border-white/5 rounded-[2rem] flex items-center gap-5 hover:border-showtime-red/30 transition-all">
                                    <div className="p-4 bg-showtime-red/10 rounded-2xl group-hover:bg-showtime-red transition-colors">
                                        <Sparkles className="text-showtime-red group-hover:text-white" size={24} />
                                    </div>
                                    <span className="text-white font-black text-lg uppercase tracking-tighter">Unlimited Prints</span>
                                </div>
                                <div className="group p-6 bg-showtime-gray border border-white/5 rounded-[2rem] flex items-center gap-5 hover:border-showtime-red/30 transition-all">
                                    <div className="p-4 bg-showtime-red/10 rounded-2xl group-hover:bg-showtime-red transition-colors">
                                        <Zap className="text-showtime-red group-hover:text-white" size={24} />
                                    </div>
                                    <span className="text-white font-black text-lg uppercase tracking-tighter">Pro Attendant</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Image Section - Bespoke 3D Presentation */}
                    <div className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center items-center">
                        <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">
                            {/* Decorative Animated Rings */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 border-[1px] border-white/5 rounded-full"
                            ></motion.div>
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-4 border-[1px] border-showtime-red/10 rounded-full"
                            ></motion.div>

                            {/* Image Stack */}
                            <div className="relative w-full h-full flex items-center justify-center">
                                <AnimatePresence mode="wait">
                                    {partyImages.map((src, idx) => (
                                        idx === activeIndex && (
                                            <motion.div
                                                key={src}
                                                initial={{ opacity: 0, scale: 0.8, rotate: -15, y: 50 }}
                                                animate={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
                                                exit={{ opacity: 0, scale: 1.1, rotate: 15, y: -50 }}
                                                transition={{ duration: 0.8, type: "spring", damping: 15 }}
                                                className="absolute inset-0 rounded-[3rem] overflow-hidden border-8 border-white shadow-[0_50px_100px_rgba(0,0,0,0.5)] z-20 transform-gpu"
                                            >
                                                <img src={src} alt="Party" className="w-full h-full object-cover" />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                                                {/* Floating Label */}
                                                <div className="absolute bottom-10 left-10 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                                                    <Camera className="text-white" size={24} />
                                                </div>
                                            </motion.div>
                                        )
                                    ))}
                                </AnimatePresence>

                                {/* Background depth cards */}
                                <div className="absolute inset-6 rounded-[3rem] bg-showtime-red translate-x-12 translate-y-12 -rotate-6 opacity-20 -z-10"></div>
                                <div className="absolute inset-10 rounded-[3rem] bg-white translate-x-[-30px] translate-y-[-20px] rotate-3 opacity-10 -z-20"></div>
                            </div>

                            {/* Interactive Floating Icon */}
                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="absolute -top-10 -right-10 w-24 h-24 bg-showtime-red rounded-full flex items-center justify-center shadow-2xl z-30 border-4 border-white rotate-12"
                            >
                                <PartyPopper className="text-white" size={32} />
                            </motion.div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
