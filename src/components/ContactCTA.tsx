
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const ContactCTA = () => {
    const contactInfo = [
        {
            icon: <Phone className="text-showtime-red" size={24} />,
            label: "Call Us",
            value: "(631) 697-2192",
            href: "tel:+16316972192"
        },
        {
            icon: <Mail className="text-showtime-red" size={24} />,
            label: "Email Us",
            value: "newyork@showtimephotobooth.com",
            href: "mailto:newyork@showtimephotobooth.com"
        },
        {
            icon: <MapPin className="text-showtime-red" size={24} />,
            label: "Visit Us",
            value: "357 Scally Pl, Westbury, NY 11590",
            href: "https://maps.google.com/?q=357+Scally+Pl,+Westbury,+NY+11590"
        },
        {
            icon: <Clock className="text-showtime-red" size={24} />,
            label: "Hours",
            value: "Mon - Sun, 8am - 10pm",
            href: null
        }
    ];

    return (
        <section id="contact" className="relative py-24 md:py-32 overflow-hidden bg-showtime-dark">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-showtime-red to-transparent opacity-30"></div>
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-showtime-red/10 rounded-full blur-[100px]"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-showtime-red/10 rounded-full blur-[100px]"></div>

            {/* Large Background Text */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none select-none">
                <span className="text-[15vw] font-black leading-none tracking-tighter uppercase">Showtime</span>
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

                    {/* Left Content */}
                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-none">
                                GET IN <span className="text-showtime-red">TOUCH</span>
                            </h2>
                            <p className="text-xl text-gray-400 mb-12 max-w-lg leading-relaxed">
                                Ready to make your next event unforgettable? Our team is standing by to help you choose the perfect photo booth experience.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                {contactInfo.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="group"
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="mt-1 p-3 rounded-xl bg-showtime-gray border border-white/5 group-hover:border-showtime-red/30 transition-all duration-300">
                                                {item.icon}
                                            </div>
                                            <div>
                                                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">{item.label}</p>
                                                {item.href ? (
                                                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-lg font-bold hover:text-showtime-red transition-colors duration-300">
                                                        {item.value}
                                                    </a>
                                                ) : (
                                                    <p className="text-lg font-bold">{item.value}</p>
                                                )}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Content - CTA Card */}
                    <div className="w-full lg:w-5/12">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
                            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-showtime-red rounded-[2.5rem] blur-2xl opacity-20 animate-pulse"></div>
                            <div className="relative p-10 md:p-12 rounded-[2.5rem] bg-showtime-gray border border-white/10 backdrop-blur-xl shadow-2xl overflow-hidden group">
                                {/* Decorative elements inside card */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-showtime-red/20 rounded-full -mr-16 -mt-16 blur-2xl group-hover:scale-150 transition-transform duration-700"></div>

                                <h3 className="text-3xl font-black mb-6 relative z-10 leading-tight">
                                    BRING THE SHOW TO YOUR EVENT
                                </h3>
                                <p className="text-gray-400 mb-8 relative z-10">
                                    Join hundreds of happy clients across New York who chose Showtime for their premium event needs.
                                </p>

                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full py-5 rounded-2xl bg-showtime-red text-white font-black text-xl shadow-[0_10px_30px_rgba(228,0,15,0.4)] hover:shadow-[0_15px_40px_rgba(228,0,15,0.6)] transition-all duration-300 relative z-10 uppercase tracking-tighter"
                                >
                                    Book Your Booth
                                </motion.button>

                                <div className="mt-8 flex items-center justify-center gap-4 relative z-10">
                                    <div className="flex -space-x-3">
                                        {[1, 2, 3, 4].map((i) => (
                                            <div key={i} className="w-10 h-10 rounded-full border-2 border-showtime-gray bg-showtime-dark overflow-hidden">
                                                <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Client" className="w-full h-full object-cover" />
                                            </div>
                                        ))}
                                    </div>
                                    <p className="text-sm font-medium text-gray-400">
                                        <span className="text-white font-bold">500+</span> Happy Clients
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};
