
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';

const weddingImages = [
    "/wedding/showtime-wedding-1-scaled.jpg",
    "/wedding/showtime-wedding-2-scaled.jpg",
    "/wedding/showtime-wedding-3.jpg",
    "/wedding/showtime-wedding-4.png"
];

const venueLogos = [
    { name: "Madison Square Garden", logo: "/venue/Madison.png" },
    { name: "MoMA", logo: "/venue/MoMA.png" },
    { name: "Javits Center", logo: "/venue/Javits.png" },
    { name: "Radio City Music Hall", logo: "/venue/RadioCityMusic.png" },
    { name: "Cipriani", logo: "/venue/Cipriani.png" }
];

export const Wedding = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % weddingImages.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % weddingImages.length);
    const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + weddingImages.length) % weddingImages.length);

    return (
        <section id="wedding" className="bg-white text-showtime-dark">
            <div className="container mx-auto px-6 md:px-12 pt-24 pb-32">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 mb-32">

                    {/* Content Column */}
                    <div className="w-full lg:w-1/2 order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tight text-[#2D3E50]">
                                Wedding photo booth <br /> rental in NYC
                            </h2>

                            <div className="w-24 h-2 bg-[#2D3E50] mb-12 rounded-full"></div>

                            <div className="space-y-8 text-xl text-[#2D3E50]/80 leading-relaxed font-medium">
                                <p>
                                    Let Showtime Photo Booth take care of entertaining guests on your big day with our wedding photo booth rental service in NYC. Read our five star <span className="text-showtime-red font-bold">Google reviews</span> from our happy couples.
                                </p>
                                <p>
                                    Enjoy unlimited prints, personalized with your names, fonts, and colors. A guest book and props are popular upgrades for your wedding photo booth rental.
                                </p>
                                <p>
                                    Whichever photo booth you choose, it's guaranteed to be a chic and fun addition to your wedding entertainment. Your photos and messages are the proof it happened!
                                </p>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                className="mt-12 inline-flex items-center gap-3 px-8 py-4 bg-showtime-red text-white font-black text-xl rounded-2xl shadow-xl hover:shadow-showtime-red/30 transition-all uppercase tracking-tighter"
                            >
                                <Heart className="fill-white" size={24} />
                                View Wedding Packages
                            </motion.button>
                        </motion.div>
                    </div>

                    {/* Image Column */}
                    <div className="w-full lg:w-1/2 order-1 lg:order-2">
                        <motion.div
                            initial={{ opacity: 0, rotateY: 10, x: 50 }}
                            whileInView={{ opacity: 1, rotateY: 0, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="relative group"
                        >
                            <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-[20px_40px_80px_rgba(0,0,0,0.15)] border-4 border-white">
                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={currentIndex}
                                        src={weddingImages[currentIndex]}
                                        alt={`Wedding Event ${currentIndex + 1}`}
                                        initial={{ opacity: 0, scale: 1.1 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.8 }}
                                        className="w-full h-full object-cover"
                                    />
                                </AnimatePresence>
                                <div className="absolute inset-x-8 bottom-8 flex gap-2">
                                    {weddingImages.map((_, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setCurrentIndex(idx)}
                                            className={`h-2 rounded-full transition-all duration-500 ${idx === currentIndex ? 'bg-white w-12' : 'bg-white/40 w-2'}`}
                                        />
                                    ))}
                                </div>
                                <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/50 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                                    <ChevronLeft size={24} />
                                </button>
                                <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/50 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                                    <ChevronRight size={24} />
                                </button>
                            </div>
                            {/* Decorative badge */}
                            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-showtime-red p-4 rotate-12">
                                <p className="text-showtime-red font-black text-center text-xs leading-none uppercase">Elegance in Every Frame</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Venues Footer Section */}
            <div className="bg-[#1F1F1F] text-white py-24">
                <div className="container mx-auto px-6 md:px-12 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-5xl font-black mb-6 uppercase tracking-tighter">Venues</h3>
                        <div className="w-24 h-1.5 bg-yellow-400 mx-auto mb-12 rounded-full"></div>
                        <p className="text-xl max-w-4xl mx-auto mb-20 text-gray-300 leading-relaxed">
                            With over a decade of photo booth rental experience, our photo booths are regularly seen at some of the most iconic venues in New York City. If you need a <span className="font-bold text-white">COI</span> or <span className="font-bold text-white">W-9</span> documentation, we’ve got it covered.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 items-center justify-items-center opacity-70 hover:opacity-100 transition-opacity duration-500">
                        {venueLogos.map((venue, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ scale: 1.1 }}
                                className="h-16 w-full flex items-center justify-center p-2"
                            >
                                <img src={venue.logo} alt={venue.name} className="max-h-full max-w-full object-contain brightness-0 invert" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
