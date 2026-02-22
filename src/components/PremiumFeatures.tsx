import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const features = [
    { id: 1, name: "AI", image: "/premium/ai-premium.jpg" },
    { id: 2, name: "KARDASHIAN", image: "/premium/kardashian-premium.jpg" },
    { id: 3, name: "SPOTLIGHT", image: "/premium/spotlight.jpg" },
    { id: 4, name: "TRADING CARDS", image: "/premium/trading-cards.jpg" },
    // Duplicate the list to enable continuous looping in the queue
    { id: 5, name: "AI", image: "/premium/ai-premium.jpg" },
    { id: 6, name: "KARDASHIAN", image: "/premium/kardashian-premium.jpg" },
    { id: 7, name: "SPOTLIGHT", image: "/premium/spotlight.jpg" },
    { id: 8, name: "TRADING CARDS", image: "/premium/trading-cards.jpg" },
];

export const PremiumFeatures = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-slider logic
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % (features.length / 2));
        }, 3000); // Slide every 3 seconds

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="bg-[#212121] py-20 px-4 md:px-8 w-full overflow-hidden">
            <div className="max-w-[1400px] w-full mx-auto">

                {/* Header */}
                <div className="mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight flex flex-col items-center md:items-start">
                        Premium features
                        <div className="w-16 h-1 md:h-1.5 bg-[#E4000F] mt-3"></div>
                    </h2>

                    <p className="text-white/80 text-sm md:text-base max-w-2xl text-center md:text-left">
                        Create original content. Upgrade your photo booth rental experience by adding stylish effects and new technologies.
                    </p>
                </div>

                {/* Queue / Slider Track */}
                <div className="relative w-full overflow-hidden h-[450px]">

                    <motion.div
                        className="flex gap-4 md:gap-6 absolute left-0 top-0 h-full"
                        animate={{
                            // Calculate transformation to shift the track left. 
                            // Using a fixed card width + gap width to slide seamlessly.
                            x: `calc(-${currentIndex * 25}% - ${currentIndex * 1.5}rem)`
                        }}
                        transition={{
                            ease: [0.25, 1, 0.5, 1], // Custom cubic-bezier for a smooth snap
                            duration: 0.8
                        }}
                    >
                        {features.map((feature, idx) => (
                            <div
                                key={idx}
                                className="w-[85vw] sm:w-[320px] md:w-[280px] lg:w-[320px] xl:w-[340px] shrink-0 h-[400px] relative rounded-[1.5rem] md:rounded-[2rem] overflow-hidden group cursor-pointer"
                            >
                                <img
                                    src={feature.image}
                                    alt={feature.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />

                                {/* Bottom Left Label Pill (Exact match to screenshot) */}
                                <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6">
                                    <div className="bg-white px-3 py-1 md:px-4 md:py-1.5 rounded-sm md:rounded-md shadow-sm">
                                        <span className="text-black font-extrabold text-[10px] md:text-xs tracking-wider uppercase">
                                            {feature.name}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>

                </div>

                {/* Indicators & More Button */}
                <div className="flex flex-col md:flex-row items-center justify-between mt-8 gap-6 md:gap-0">

                    {/* Yellow Pagination Pills */}
                    <div className="flex items-center gap-2">
                        {features.slice(0, 4).map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`h-2.5 rounded-full transition-all duration-300 ${currentIndex === idx ? 'w-8 bg-[#E4000F]' : 'w-2.5 bg-white'}`}
                                aria-label={`Go to feature ${idx + 1}`}
                            />
                        ))}
                    </div>

                    <button className="bg-[#E4000F] hover:bg-[#c0000d] text-white font-bold py-2.5 px-8 rounded-full transition-colors text-sm uppercase tracking-wider">
                        More
                    </button>

                </div>

            </div>
        </section>
    );
};
