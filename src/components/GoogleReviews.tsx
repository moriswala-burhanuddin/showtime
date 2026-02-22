import { motion } from 'framer-motion';
import { Star, CheckCircle2, Quote } from 'lucide-react';

const reviewsData = [
    { name: "Rosie & Jonny We...", time: "2 weeks ago", text: "We booked the open air photo booth for Rosie & Jonny's wedding and it was great. With unlimited shoots and bespoke design prints it was a hit!", color: "#6B21A8" },
    { name: "Mireia Puignou", time: "2 weeks ago", text: "Great service \u2013 Monty was fantastic and super helpful throughout the event and the quality of the photos is fantastic. Couldn't fault them.", color: "#78350F" },
    { name: "Kevin Tomes", time: "3 weeks ago", text: "We hired the photobooth for our Xmas Party, and both in the leadup to the event and at the event itself, communication was clear.", color: "#0891B2" },
    { name: "Sam Winter", time: "3 weeks ago", text: "Great service and very easy to work with. Monty the operator was a hero on the night. Highly recommend.", color: "#1F2937" },
    { name: "Lorna Ashcroft", time: "1 month ago", text: "We booked Showtime Photobooths for our Winter Party and they were absolutely fantastic from start to finish. Monty was brilliant.", color: "#0369A1" },
    { name: "Kate Corrie", time: "1 month ago", text: "Thanks so much everything went perfectly on Friday, the team loved it and the Photo Booth was a huge hit! Huge thanks to Joe for the...", color: "#451A03" }
];

export const GoogleReviews = () => {
    return (
        <section className="py-24 md:py-40 bg-showtime-dark text-white overflow-hidden relative">
            {/* Background Branding */}
            <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-[0.02] flex items-center justify-center">
                <h2 className="text-[30vw] font-black uppercase tracking-tighter">REVIEWS</h2>
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-10">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <Star className="text-showtime-red fill-showtime-red" size={20} />
                            <span className="text-white font-black tracking-[0.3em] text-xs uppercase">Proof, Captured</span>
                        </div>
                        <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-4">
                            Happy <br /> <span className="text-showtime-red underline decoration-white/10 underline-offset-8">Clients</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-showtime-gray p-8 rounded-[2.5rem] border border-white/5 flex flex-col items-center gap-4 min-w-[300px] shadow-2xl"
                    >
                        <div className="flex items-center gap-4">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-10 h-10" />
                            <div className="flex flex-col">
                                <span className="text-3xl font-black leading-none">4.9 / 5</span>
                                <span className="text-xs font-black uppercase tracking-widest text-showtime-red">725+ Reviews</span>
                            </div>
                        </div>
                        <div className="flex gap-1.5 px-4 py-2 bg-white/5 rounded-full">
                            {[1, 2, 3, 4, 5].map((s) => (
                                <Star key={s} className="text-yellow-400 fill-yellow-400" size={18} />
                            ))}
                        </div>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reviewsData.map((review, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1, duration: 0.8 }}
                            whileHover={{ y: -15, scale: 1.02 }}
                            className="bg-showtime-gray p-10 rounded-[3rem] border border-white/5 relative group transition-all hover:bg-white/5"
                        >
                            <Quote className="absolute top-10 right-10 text-white/5 group-hover:text-showtime-red/10 transition-colors" size={64} />

                            <div className="flex items-center gap-5 mb-8">
                                <div
                                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-xl transform group-hover:rotate-6 transition-transform"
                                    style={{ backgroundColor: review.color }}
                                >
                                    {review.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-black text-xl tracking-tight">{review.name}</h4>
                                    <div className="flex items-center gap-2">
                                        <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.2em]">{review.time}</p>
                                        <div className="w-1 h-1 bg-showtime-red rounded-full"></div>
                                        <div className="flex items-center gap-1">
                                            <CheckCircle2 size={12} className="text-blue-400" />
                                            <span className="text-blue-400 text-[10px] font-black uppercase">Verified</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-1 mb-8 bg-white/5 w-fit px-4 py-2 rounded-full">
                                {[1, 2, 3, 4, 5].map((s) => (
                                    <Star key={s} className="text-yellow-500 fill-yellow-500" size={14} />
                                ))}
                            </div>

                            <p className="text-white/80 leading-relaxed font-bold text-lg mb-8 italic">
                                "{review.text}"
                            </p>

                            <motion.button
                                whileHover={{ x: 5 }}
                                className="inline-flex items-center gap-2 text-showtime-red font-black text-xs uppercase tracking-widest border-b-2 border-showtime-red/20 pb-1"
                            >
                                Read full review
                            </motion.button>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="px-12 py-5 bg-white text-showtime-dark font-black text-xl rounded-2xl shadow-2xl transition-all uppercase tracking-tighter hover:bg-showtime-red hover:text-white"
                    >
                        See All 725 Reviews
                    </motion.button>
                </div>
            </div>
        </section>
    );
};
