
import { motion } from 'framer-motion';

const locations = [
    "Brooklyn", "Long Island", "Manhattan", "Queens",
    "Staten Island", "The Bronx", "Westchester"
];

export const CoverageMap = () => {
    return (
        <section id="coverage" className="py-24 md:py-40 bg-showtime-dark text-white overflow-hidden relative">
            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Left: Content */}
                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-5xl md:text-8xl font-black mb-8 leading-[0.85] tracking-tighter uppercase whitespace-pre-line">
                                Areas <br />
                                <span className="text-showtime-red">We Cover</span>
                            </h2>

                            <div className="w-24 h-2 bg-white mb-10 rounded-full"></div>

                            <p className="text-2xl font-bold mb-12 text-white/50 leading-relaxed max-w-lg">
                                Our photo booth rental service operates across New York City and the surrounding areas.
                            </p>

                            <div className="flex flex-wrap gap-3 mb-12">
                                {locations.map((loc) => (
                                    <div
                                        key={loc}
                                        className="px-6 py-4 rounded-full border-2 border-showtime-red/30 bg-showtime-dark text-white font-black text-sm uppercase tracking-tighter hover:bg-showtime-red hover:border-showtime-red transition-all cursor-default"
                                    >
                                        {loc}
                                    </div>
                                ))}
                            </div>

                            <div className="inline-block border-b-2 border-showtime-red pb-1 mb-16">
                                <span className="text-white font-black uppercase text-sm tracking-widest">All locations</span>
                            </div>

                            <div className="flex items-center gap-8 mt-16 pt-12 border-t border-white/5">
                                <p className="text-sm font-medium text-white/40 italic text-center w-full">
                                    If your venue is located outside of the areas listed above, a travel fee will be charged.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Map Image Visual */}
                    <div className="w-full lg:w-1/2 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, x: 50 }}
                            whileInView={{ opacity: 1, scale: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, type: "spring" }}
                            className="relative flex items-center justify-center p-4 md:p-8 bg-showtime-gray rounded-[2.5rem] border border-white/5 shadow-2xl overflow-hidden"
                        >
                            <img
                                src="/map.png"
                                alt="Showtime Coverage Map"
                                className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(228,0,15,0.3)]"
                            />
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};
