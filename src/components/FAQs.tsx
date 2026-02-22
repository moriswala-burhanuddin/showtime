
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, Plus, Minus, MessageCircle } from 'lucide-react';

const faqData = [
    {
        question: "How long does it take to set up?",
        answer: "We typically arrive 60-90 minutes before your rental period begins to ensure everything is set up and tested perfectly. Setup time does not count against your rental hours."
    },
    {
        question: "Is there a limit on the number of prints?",
        answer: "No! All our packages include unlimited prints. Your guests can take as many photos as they like throughout the duration of the rental."
    },
    {
        question: "Do you provide props?",
        answer: "Yes, we provide a wide variety of high-quality, fun props ranging from hats and glasses to custom signage that matches your event theme."
    },
    {
        question: "What are the power requirements?",
        answer: "We just need one standard 110V power outlet within 15 feet of the booth setup area. We bring our own extension cords and cable covers."
    },
    {
        question: "Is an attendant included?",
        answer: "Every rental includes a professional and friendly photo booth attendant who will stay with the booth to help your guests and ensure everything runs smoothly."
    }
];

export const FAQs = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    return (
        <section id="faqs" className="py-24 md:py-40 bg-showtime-dark text-white overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col lg:flex-row gap-20 lg:gap-32">

                    {/* Left: Branding & CTA */}
                    <div className="w-full lg:w-1/3">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="flex items-center gap-3 mb-8">
                                <div className="p-2 bg-white/5 rounded-lg border border-white/10">
                                    <HelpCircle className="text-showtime-red" size={20} />
                                </div>
                                <span className="text-white font-black tracking-[0.3em] text-xs uppercase">Your Questions Answered</span>
                            </div>

                            <h2 className="text-5xl md:text-8xl font-black mb-10 leading-[0.85] tracking-tighter uppercase">
                                Common <br /> <span className="text-showtime-red">Queries</span>
                            </h2>

                            <div className="w-24 h-2 bg-showtime-red mb-12 rounded-full"></div>

                            <p className="text-2xl font-bold text-white/50 leading-relaxed max-w-sm mb-12 italic">
                                "Everything you need to know about our photo booth rental service in NYC."
                            </p>

                            <motion.button
                                whileHover={{ scale: 1.05, x: 10 }}
                                className="group flex items-center gap-4 px-8 py-5 bg-showtime-gray border border-white/5 rounded-2xl hover:bg-showtime-red hover:border-showtime-red transition-all"
                            >
                                <MessageCircle className="text-showtime-red group-hover:text-white" />
                                <span className="text-white font-black uppercase text-sm tracking-widest">Still have questions?</span>
                            </motion.button>
                        </motion.div>
                    </div>

                    {/* Right: Bespoke Accordion */}
                    <div className="w-full lg:w-2/3">
                        <div className="space-y-4">
                            {faqData.map((faq, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1, duration: 0.8 }}
                                    className={`rounded-[2.5rem] border transition-all duration-500 overflow-hidden ${activeIndex === idx ? 'bg-showtime-red border-showtime-red shadow-[0_30px_60px_rgba(228,0,15,0.3)]' : 'bg-showtime-gray border-white/5 hover:border-white/20'}`}
                                >
                                    <button
                                        onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                                        className="w-full px-10 py-10 flex items-center justify-between text-left group"
                                    >
                                        <span className={`text-2xl md:text-3xl font-black tracking-tighter uppercase leading-none ${activeIndex === idx ? 'text-white' : 'text-white group-hover:text-showtime-red transition-colors'}`}>
                                            {faq.question}
                                        </span>
                                        <div className={`shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 shadow-xl ${activeIndex === idx ? 'bg-white text-showtime-red' : 'bg-showtime-dark text-white'}`}>
                                            {activeIndex === idx ? <Minus size={24} /> : <Plus size={24} />}
                                        </div>
                                    </button>

                                    <AnimatePresence>
                                        {activeIndex === idx && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                            >
                                                <div className="px-10 pb-12">
                                                    <div className="h-px w-full bg-white/20 mb-8"></div>
                                                    <p className="text-xl md:text-2xl font-bold leading-relaxed text-white max-w-2xl italic">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
