
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Calendar, MessageSquare, Send, User, Building, Camera, Zap } from 'lucide-react';

export const QuoteRequest = () => {
    return (
        <section id="quote" className="py-24 md:py-40 bg-showtime-dark text-white overflow-hidden relative">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col lg:flex-row gap-0 rounded-[3rem] overflow-hidden shadow-[0_50px_100px_rgba(228,0,15,0.1)] border border-white/5">

                    {/* Left Side: Form */}
                    <div className="w-full lg:w-[65%] p-8 md:p-16 bg-showtime-gray">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter uppercase text-white">
                                Quote <span className="text-showtime-red">Request</span>
                            </h2>
                            <div className="w-20 h-2 bg-showtime-red mb-8 rounded-full"></div>
                            <p className="text-lg font-bold text-white/50 mb-12">We respond to quote requests within 3 hours.</p>

                            <form className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-xs font-black uppercase tracking-widest text-white/30">Full Name*</label>
                                        <div className="relative">
                                            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                                            <input type="text" className="w-full pl-12 pr-6 py-4 bg-showtime-dark border-2 border-transparent focus:border-showtime-red rounded-2xl outline-none transition-all font-bold text-white" placeholder="Your name" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-black uppercase tracking-widest text-white/30">Phone Number</label>
                                        <div className="relative">
                                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                                            <input type="tel" className="w-full pl-12 pr-6 py-4 bg-showtime-dark border-2 border-transparent focus:border-showtime-red rounded-2xl outline-none transition-all font-bold text-white" placeholder="Phone number" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-black uppercase tracking-widest text-white/30">Email Address*</label>
                                        <div className="relative">
                                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                                            <input type="email" className="w-full pl-12 pr-6 py-4 bg-showtime-dark border-2 border-transparent focus:border-showtime-red rounded-2xl outline-none transition-all font-bold text-white" placeholder="Watch out for typos" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-black uppercase tracking-widest text-white/30">Company Name</label>
                                        <div className="relative">
                                            <Building className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                                            <input type="text" className="w-full pl-12 pr-6 py-4 bg-showtime-dark border-2 border-transparent focus:border-showtime-red rounded-2xl outline-none transition-all font-bold text-white" placeholder="Company" />
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                                    <div className="md:col-span-1 space-y-2">
                                        <label className="text-xs font-black uppercase tracking-widest text-white/30">Date</label>
                                        <div className="relative">
                                            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                                            <input type="date" className="w-full pl-12 pr-4 py-4 bg-showtime-dark border-2 border-transparent focus:border-showtime-red rounded-2xl outline-none transition-all font-bold text-sm text-white [color-scheme:dark]" />
                                        </div>
                                    </div>
                                    <div className="md:col-span-1 space-y-2">
                                        <label className="text-xs font-black uppercase tracking-widest text-white/30">Event Type</label>
                                        <select className="w-full px-6 py-4 bg-showtime-dark border-2 border-transparent focus:border-showtime-red rounded-2xl outline-none transition-all font-bold text-sm text-white appearance-none">
                                            <option>Select</option>
                                            <option>Wedding</option>
                                            <option>Corporate</option>
                                            <option>Party</option>
                                        </select>
                                    </div>
                                    <div className="md:col-span-1 space-y-2">
                                        <label className="text-xs font-black uppercase tracking-widest text-white/30">Start Time</label>
                                        <div className="flex gap-2">
                                            <select className="w-1/2 px-4 py-4 bg-showtime-dark border-2 border-transparent focus:border-showtime-red rounded-2xl outline-none transition-all font-bold text-sm text-white appearance-none">
                                                <option>HH</option>
                                                {Array.from({ length: 24 }).map((_, i) => <option key={i}>{i.toString().padStart(2, '0')}</option>)}
                                            </select>
                                            <select className="w-1/2 px-4 py-4 bg-showtime-dark border-2 border-transparent focus:border-showtime-red rounded-2xl outline-none transition-all font-bold text-sm text-white appearance-none">
                                                <option>MM</option>
                                                <option>00</option><option>15</option><option>30</option><option>45</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="md:col-span-1 space-y-2">
                                        <label className="text-xs font-black uppercase tracking-widest text-white/30">Duration</label>
                                        <select className="w-full px-6 py-4 bg-showtime-dark border-2 border-transparent focus:border-showtime-red rounded-2xl outline-none transition-all font-bold text-sm text-white appearance-none">
                                            <option>3 Hours</option>
                                            <option>4 Hours</option>
                                            <option>5+ Hours</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-white/30">Location</label>
                                    <div className="relative">
                                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                                        <input type="text" className="w-full pl-12 pr-6 py-4 bg-showtime-dark border-2 border-transparent focus:border-showtime-red rounded-2xl outline-none transition-all font-bold text-white" placeholder="Start with venue name or address" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-white/30">Choose your photo booth</label>
                                    <div className="relative">
                                        <Camera className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                                        <select className="w-full pl-12 pr-6 py-4 bg-showtime-dark border-2 border-transparent focus:border-showtime-red rounded-2xl outline-none transition-all font-bold text-white appearance-none">
                                            <option>Select</option>
                                            <option>Open Air Booth</option>
                                            <option>Mirror Booth</option>
                                            <option>360 Video Booth</option>
                                            <option>Vintage Booth</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-white/30">Additional Information</label>
                                    <div className="relative">
                                        <MessageSquare className="absolute left-4 top-6 text-white/20" size={18} />
                                        <textarea className="w-full pl-12 pr-6 py-4 bg-showtime-dark border-2 border-transparent focus:border-showtime-red rounded-2xl outline-none transition-all font-bold text-white min-h-[150px]" placeholder="Please use this box to share any additional requirements..."></textarea>
                                    </div>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="px-12 py-5 bg-showtime-red text-white font-black text-xl rounded-2xl shadow-xl shadow-showtime-red/30 transition-all uppercase tracking-tighter flex items-center justify-center gap-4 w-full md:w-fit"
                                >
                                    Submit Request
                                    <Send size={20} />
                                </motion.button>
                            </form>
                        </motion.div>
                    </div>

                    {/* Right Side: Contact Info */}
                    <div className="w-full lg:w-[35%] bg-showtime-dark p-8 md:p-16 text-white relative border-l border-white/5">
                        {/* Decorative Corner Accent */}
                        <div className="absolute top-0 right-0 w-24 h-24 border-t-8 border-r-8 border-showtime-red"></div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="h-full flex flex-col"
                        >
                            <h2 className="text-5xl font-black mb-4 tracking-tighter uppercase">Contact</h2>
                            <div className="w-16 h-2 bg-white mb-12 rounded-full"></div>

                            <div className="space-y-12">
                                <div className="flex items-start gap-6 group">
                                    <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-showtime-red transition-colors border border-white/5">
                                        <Clock className="text-white" size={24} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-black uppercase tracking-widest text-white/30 mb-1">Available</p>
                                        <p className="text-lg font-bold">Monday - Sunday</p>
                                        <p className="text-lg font-bold text-white/50">8.00am - 10.00pm</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6 group">
                                    <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-showtime-red transition-colors border border-white/5">
                                        <Phone className="text-white" size={24} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-black uppercase tracking-widest text-white/30 mb-1">Direct Line</p>
                                        <p className="text-2xl font-black tracking-tighter">(631) 697-2192</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6 group cursor-pointer">
                                    <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-showtime-red transition-colors border border-white/5">
                                        <Mail className="text-white" size={24} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-black uppercase tracking-widest text-white/30 mb-1">Email Us</p>
                                        <p className="text-lg font-bold break-all">newyork@showtimephotobooth.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6 group">
                                    <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-showtime-red transition-colors border border-white/5">
                                        <MapPin className="text-white" size={24} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-black uppercase tracking-widest text-white/30 mb-1">Location</p>
                                        <p className="text-lg font-bold">357 Scally Pl,</p>
                                        <p className="text-lg font-bold text-white/50">Westbury, NY 11590</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-auto pt-16">
                                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-5">
                                    <div className="p-3 bg-red-600 rounded-xl animate-pulse">
                                        <Zap className="text-white fill-white" size={20} />
                                    </div>
                                    <p className="text-sm font-bold leading-tight text-white/70">For the fastest response, please call the number above.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};
