
import { motion } from 'framer-motion';
import { Instagram, Facebook, Linkedin, Twitter, CreditCard } from 'lucide-react';

export const Footer = () => {
    return (
        <footer id="contact" className="bg-showtime-dark pt-32 pb-12 border-t border-white/5 relative overflow-hidden">
            {/* Subtle Gradient Background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-showtime-red to-transparent opacity-50"></div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 mb-24">

                    {/* Brand Info */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-4 mb-8">
                            <img src="/logo.png" alt="Showtime Logo" className="h-16 w-16 object-contain" />
                            <div>
                                <h3 className="text-3xl font-black tracking-tighter text-white uppercase italic">
                                    Showtime
                                </h3>
                                <p className="text-showtime-red font-black text-xs tracking-[0.3em] uppercase">Photo Booth</p>
                            </div>
                        </div>
                        <p className="text-gray-400 font-medium leading-relaxed mb-10 max-w-md text-lg">
                            The premier photo booth rental company in New York City. Capturing memories and elevating events since 2013 with cutting-edge technology and bespoke experiences.
                        </p>

                        <div className="flex gap-4">
                            {[Instagram, Facebook, Twitter, Linkedin].map((Icon, i) => (
                                <motion.a
                                    key={i}
                                    href="#"
                                    whileHover={{ y: -5, color: '#E4000F' }}
                                    className="p-3 bg-white/5 rounded-xl text-gray-400 border border-white/5 transition-colors"
                                >
                                    <Icon size={20} />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Quick links */}
                    <div>
                        <h4 className="text-sm font-black uppercase tracking-[0.2em] mb-8 text-white/30">Company</h4>
                        <ul className="space-y-4">
                            {['Photo Booths', 'Corporate Events', 'Weddings', 'Branding', 'Our Work'].map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-gray-400 hover:text-white font-bold transition-all flex items-center gap-2 group">
                                        <div className="w-0 h-0.5 bg-showtime-red group-hover:w-4 transition-all"></div>
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Payment & Trust */}
                    <div>
                        <h4 className="text-sm font-black uppercase tracking-[0.2em] mb-8 text-white/30">Payments</h4>
                        <p className="text-gray-400 font-bold mb-6 text-sm">We accept all major payment networks for your convenience.</p>

                        {/* Payment Icons Grid */}
                        <div className="grid grid-cols-3 gap-3 mb-10">
                            {['Visa', 'Mastercard', 'Amex', 'PayPal', 'Zelle', 'Apple Pay'].map((pay) => (
                                <div key={pay} className="bg-white/5 border border-white/10 rounded-lg p-2 flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-default">
                                    <span className="text-[10px] font-black text-white/40 uppercase tracking-tighter">{pay}</span>
                                </div>
                            ))}
                        </div>

                        <div className="p-4 bg-showtime-red/10 border border-showtime-red/20 rounded-2xl flex items-center gap-4">
                            <div className="p-2 bg-showtime-red rounded-lg">
                                <CreditCard size={16} className="text-white" />
                            </div>
                            <span className="text-[11px] font-black text-white uppercase tracking-wider">Secure Checkout</span>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12">
                        <p className="text-gray-500 font-bold text-xs uppercase tracking-widest">
                            &copy; {new Date().getFullYear()} Showtime NYC.
                        </p>
                        <div className="flex gap-8">
                            <a href="#" className="text-gray-600 hover:text-white text-xs font-black uppercase tracking-widest transition-colors">Privacy</a>
                            <a href="#" className="text-gray-600 hover:text-white text-xs font-black uppercase tracking-widest transition-colors">Terms</a>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-xs font-black text-gray-500 uppercase tracking-widest">System Status: Online</span>
                    </div>
                </div>
            </div>

            {/* Background Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        </footer>
    );
};
