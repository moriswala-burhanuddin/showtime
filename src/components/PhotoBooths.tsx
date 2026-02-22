import { motion } from 'framer-motion';

const booths = [
    { name: "360", image: "/booths/360-Photo-Booth.jpg" },
    { name: "AIRSTREAM", image: "/booths/Airstream.jpg" },
    { name: "ARRAY", image: "/booths/Array.jpg" },
    { name: "AUDIO GUEST BOOK", image: "/booths/Audio-Guestbook.jpg" },
    { name: "BOLT", image: "/booths/Bolt.jpg" },
    { name: "CLASSIC", image: "/booths/showtime-classic-booth-1536x1536.jpg" },
    { name: "GLAMBOT", image: "/booths/glambot-thumb-1536x1536.jpg" },
    { name: "HASHTAG PRINTER", image: "/booths/Hashtag-Printer.jpg" },
    { name: "INFLATABLE", image: "/booths/Inflatable.jpg" },
    { name: "JUNIOR", image: "/booths/Junior.jpg" },
    { name: "MAGAZINE", image: "/booths/showtime-magazine-booth.jpg" },
    { name: "MIRROR", image: "/booths/Mirror.jpg" },
    { name: "MOSAIC", image: "/booths/Mosaic.jpg" },
    { name: "ORIGINAL", image: "/booths/showtime-levi-booth-1536x1536.png" },
    { name: "PERMANENT INSTALL", image: "/booths/permanent-install-1536x1536.jpg" },
    { name: "PHOTOGRAPHY", image: "/booths/showtime-corporate-4.jpg" },
    { name: "PHOTO SET", image: "/booths/showtime-party-4-scaled.jpg" },
    { name: "RETRO", image: "/booths/showtime-compact-branded-2048x2048.jpg" },
    { name: "RING LIGHT", image: "/booths/615e2eceaeeacccdd8bd355ba999b77a.jpg" },
    { name: "ROAMER", image: "/booths/ai-premium.jpg" },
    { name: "SKETCHBOT", image: "/booths/keeper-microsite.jpg" },
    { name: "TOWER", image: "/booths/showtime-light-painting-1536x1536.jpg" },
    { name: "TUK TUK", image: "/booths/WhatsApp-Image-2025-02-23-at-01.07.01_9d50d4ba.jpg" },
    { name: "VOGUE", image: "/booths/WhatsApp-Image-2025-02-25-at-21.04.34_d8d92cb6.webp" }
];

export const PhotoBooths = () => {
    return (
        <section id="photo-booths" className="bg-[#0A0A0A] py-20 md:py-32 px-4 md:px-6 w-full relative z-10 text-white">

            <div className="max-w-[1400px] w-full mx-auto">
                <div className="text-center mb-16 md:mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter mb-6 text-white"
                    >
                        Choose your photo booth
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        whileInView={{ opacity: 1, scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="w-24 h-1 md:h-[6px] bg-showtime-red mx-auto mb-6 rounded-full origin-left"
                    ></motion.div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-gray-400 text-sm md:text-xl font-medium"
                    >
                        Choose from 24 different brandable photo booth experiences.
                    </motion.p>
                </div>

                {/* 24 Item 3D Perspective Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8" style={{ perspective: '1200px' }}>
                    {booths.map((booth, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, rotateX: 30, y: 50 }}
                            whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: (idx % 8) * 0.05, type: 'spring', bounce: 0.3 }}
                            whileHover={{
                                scale: 1.05,
                                rotateX: 5,
                                rotateY: -5,
                                z: 40,
                                transition: { duration: 0.3 }
                            }}
                            className="group relative aspect-square rounded-[1rem] md:rounded-[1.5rem] overflow-hidden bg-white/5 cursor-pointer shadow-[0_10px_20px_rgba(0,0,0,0.4)] hover:shadow-[20px_20px_40px_rgba(228,0,15,0.15)] border border-white/5 hover:border-white/20"
                            style={{ transformStyle: 'preserve-3d' }}
                        >
                            {/* Clear Original Image */}
                            <img
                                src={booth.image}
                                alt={booth.name || 'Photo Booth'}
                                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                            />

                            {/* Bottom Gradient for Text Legibility (No full overlay) */}
                            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none"></div>

                            {/* Crisp White Label Capsule */}
                            <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 z-20" style={{ transform: 'translateZ(30px)' }}>
                                <div className="bg-white px-3 py-1.5 md:px-5 md:py-2.5 rounded-full shadow-2xl flex items-center gap-2 md:gap-3 transition-transform duration-300">
                                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-showtime-red"></div>
                                    <span className="text-[10px] md:text-[13px] font-black tracking-widest text-[#1A1A1A] uppercase whitespace-nowrap">
                                        {booth.name}
                                    </span>
                                </div>
                            </div>

                            {/* 3D Inner Top-Right Accent */}
                            <div className="absolute top-4 right-4 w-6 h-6 border-t-[3px] border-r-[3px] border-white/40 group-hover:border-showtime-red transition-colors duration-500 rounded-tr-lg pointer-events-none" style={{ transform: 'translateZ(20px)' }}></div>

                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};
