import { motion } from 'framer-motion';

const brandingItems = [
    { title: "Photo Booth", image: "/booths/showtime-classic-booth-1536x1536.jpg" },
    { title: "Prints", image: "/booths/Mosaic.jpg" },
    { title: "Backdrops", image: "/booths/showtime-party-4-scaled.jpg" },
    { title: "Videos", image: "/booths/glambot-thumb-1536x1536.jpg" },
    { title: "GIFs", image: "/booths/Array.jpg" },
    { title: "Boomerangs", image: "/booths/360-Photo-Booth.jpg" },
    { title: "UI Screens", image: "/premium/ai-premium.jpg" },
    { title: "SMS & Email", image: "/booths/Hashtag-Printer.jpg" },
    { title: "Microsites", image: "/booths/keeper-microsite.jpg" }
];

export const Branding = () => {
    return (
        <section id="branding" className="relative w-full z-20 py-24 md:py-40 bg-showtime-red rounded-t-[3rem] md:rounded-t-[8vw] overflow-hidden shadow-[0_-20px_50px_rgba(228,0,15,0.2)]">

            {/* Background Texture / Glows for the Red Section */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 50% 0%, #ffffff 0%, transparent 60%)' }}></div>

            <div className="max-w-[1400px] w-full mx-auto px-4 md:px-8 relative z-10">

                {/* Header Section */}
                <div className="text-center mb-16 md:mb-24 flex flex-col items-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tighter mb-6 underline decoration-white/30 underline-offset-[12px] decoration-8"
                    >
                        Branding
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-white/90 text-sm md:text-xl font-medium max-w-3xl leading-relaxed mt-6"
                    >
                        Ensure your design and marketing objectives are met. Our in-house digital and print team can brand every aspect of your photo booth rental in New York City, including the photo booth, how guests share their content, and everything in between.
                    </motion.p>
                </div>

                {/* 3D 9-Grid Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-x-12 md:gap-y-16" style={{ perspective: '1500px' }}>

                    {brandingItems.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 50, rotateX: 20 }}
                            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.7, delay: (idx % 3) * 0.15, type: 'spring', bounce: 0.4 }}
                            whileHover={{
                                y: -15,
                                rotateX: 10,
                                rotateY: -10,
                                z: 50,
                                transition: { duration: 0.4 }
                            }}
                            className="flex flex-col items-center group cursor-pointer"
                            style={{ transformStyle: 'preserve-3d' }}
                        >
                            {/* Card Image Container */}
                            <div className="w-full aspect-square md:aspect-[4/3] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden bg-black/20 shadow-[0_20px_40px_rgba(0,0,0,0.3)] group-hover:shadow-[0_40px_60px_rgba(0,0,0,0.5)] border-2 border-white/10 group-hover:border-white/40 transition-all duration-500 relative">

                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                />

                                {/* Interactive Glass Overlay styling */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                            </div>

                            {/* 3D Floating Title Below Image */}
                            <div className="mt-6 md:mt-8 transition-transform duration-500" style={{ transform: 'translateZ(40px)' }}>
                                <h3 className="text-white font-black text-2xl md:text-3xl tracking-tight text-center drop-shadow-md group-hover:scale-110 group-hover:text-black transition-all duration-300">
                                    {item.title}
                                </h3>
                                {/* Hover interactive underline */}
                                <div className="h-1 bg-black w-0 group-hover:w-full transition-all duration-500 mt-2 rounded-full mx-auto"></div>
                            </div>

                        </motion.div>
                    ))}

                </div>

            </div>
        </section>
    );
};
