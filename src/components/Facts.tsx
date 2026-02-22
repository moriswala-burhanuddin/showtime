
import { motion } from 'framer-motion';
import { Lightbulb, Calendar, Camera, Heart, Users, Award } from 'lucide-react';

const factsData = [
    {
        id: "01",
        text: "The first coin-operated photo booth was invented in 1925 in New York City.",
        icon: Camera
    },
    {
        id: "02",
        text: "Showtime Photo Booth has been the #1 provider in NYC for over a decade.",
        icon: Award
    },
    {
        id: "03",
        text: "We offer 24 unique photo booth styles to match any event aesthetic.",
        icon: Calendar
    },
    {
        id: "04",
        text: "Every rental includes a professional, friendly on-site booth attendant.",
        icon: Users
    },
    {
        id: "05",
        text: "We've captured over 1 million memories for happy couples and brands.",
        icon: Heart
    }
];

export const Facts = () => {
    return (
        <section className="relative py-24 md:py-40 bg-showtime-gray text-white overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <Lightbulb className="text-showtime-red" size={24} />
                            <span className="text-showtime-red font-black tracking-[0.3em] text-xs uppercase">Trivia & Facts</span>
                        </div>
                        <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none">
                            Did you <br /> <span className="text-white/20">know?</span>
                        </h2>
                    </motion.div>
                </div>

                <div className="flex flex-col lg:flex-row min-h-[500px] border border-white/5 rounded-[3rem] overflow-hidden bg-showtime-dark shadow-3xl">
                    {factsData.map((fact, idx) => {
                        const Icon = fact.icon;
                        return (
                            <motion.div
                                key={fact.id}
                                initial={{ flex: 1 }}
                                whileHover={{ flex: 2.5 }}
                                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                className={`group relative min-h-[350px] lg:min-h-0 border-b lg:border-b-0 lg:border-r border-white/5 p-10 flex flex-col justify-between transition-all duration-500 hover:bg-showtime-red/5 ${idx === factsData.length - 1 ? 'lg:border-r-0' : ''}`}
                            >
                                {/* Static State Content */}
                                <div className="flex lg:flex-col items-center justify-between h-full">
                                    <span className="text-5xl lg:text-7xl font-black text-white/5 group-hover:text-showtime-red transition-colors duration-500 whitespace-nowrap">
                                        {fact.id}
                                    </span>

                                    <div className="p-4 bg-white/5 rounded-2xl lg:mb-12 group-hover:bg-showtime-red group-hover:text-white transition-all">
                                        <Icon size={32} strokeWidth={1.5} />
                                    </div>

                                    {/* Vertical Text for Vertical Alignment on Desktop */}
                                    <span className="hidden lg:block text-xs font-black uppercase tracking-[0.4em] opacity-20 group-hover:opacity-100 transition-opacity [writing-mode:vertical-lr] rotate-180">
                                        Inspiration
                                    </span>
                                </div>

                                {/* Hover State Expanded Text */}
                                <div className="absolute inset-0 p-12 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150 pointer-events-none lg:pointer-events-auto">
                                    <p className="text-2xl md:text-3xl font-black leading-tight tracking-tight text-center max-w-[280px]">
                                        {fact.text}
                                    </p>
                                </div>

                                {/* Mobile/Small screen fallback text */}
                                <div className="lg:hidden mt-6">
                                    <p className="text-gray-400 font-medium leading-relaxed italic">
                                        {fact.text}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
