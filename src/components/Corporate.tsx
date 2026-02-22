
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const corporateImages = [
    "/corporate/showtime-corporate-4.jpg",
    "/corporate/showtime-corporate-5-scaled.jpg",
    "/corporate/showtime-corporate-6.jpg",
    "/corporate/showtime-corporate-7.jpg"
];

const clientLogos = [
    "/corporate/clients/american-airlines-logo.png.webp",
    "/corporate/clients/Costco-logo-2048x1152.png",
    "/corporate/clients/t-mobile-logo-2048x414.png",
    "/corporate/clients/PwC_2025_Logo.png",
    "/corporate/clients/hershey_company-logo_brandlogos.net_pcliv.png",
    "/corporate/clients/Dior-Logo-1536x864-1.png",
    "/corporate/clients/Exxon_Mobil_Logo.svg.png",
    "/corporate/clients/Uber-Logo.wine_-2048x1365.png"
];

const reviews = [
    {
        quote: "Everything was spot on, the attendant was engaging with all of our employees and the photos were perfect quality. It's refreshing to work with someone so responsive.",
        name: "Adam Lange",
        title: "VP SMB Sales",
        logo: "/corporate/clients/e33de12ffaabc8bfa8215b86e3650d26.png", // Google
        color: "#ffffff"
    },
    {
        quote: "We were so happy to have Showtime Photo Booth attend our London Gala Dinner. The team were invested creatively and thought outside the box to develop the right photo booth experience.",
        name: "Idit Jude",
        title: "Senior Fundraiser",
        logo: "/corporate/clients/2ccb66d0fbc9c0a76efbfedde9b845db.png", // RMHC
        color: "#ffffff"
    },
    {
        quote: "First class. We have been using Showtime Photo Booth since 2016 for both our internal and external events. The only company we would use.",
        name: "Anita Jacobs",
        title: "HR Advisor",
        logo: "/corporate/clients/hershey_company-logo_brandlogos.net_pcliv.png",
        color: "#ffffff"
    },
    {
        quote: "It was a great night, and the guests thought the booth was great. We received thanks from the client even 10 minutes ago for your services. It was perfect.",
        name: "Kate Vautier",
        title: "Account Manager",
        logo: "/corporate/clients/PwC_2025_Logo.png",
        color: "#ffffff"
    }
];

export const Corporate = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % corporateImages.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % corporateImages.length);
    const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + corporateImages.length) % corporateImages.length);

    return (
        <section id="corporate" className="relative w-full z-20 -mt-16 md:-mt-24 pt-24 md:pt-40 pb-24 bg-showtime-red rounded-t-[3rem] md:rounded-t-[8vw] overflow-hidden shadow-[0_-20px_50px_rgba(228,0,15,0.2)]">

            {/* Decorative Background Elements */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 50% 0%, #ffffff 0%, transparent 60%)' }}></div>
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                <div className="absolute top-1/4 right-0 w-96 h-96 bg-white rounded-full blur-[150px]"></div>
                <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-white rounded-full blur-[150px]"></div>
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">

                {/* Header & Main Content */}
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 mb-32">

                    {/* Left: 3D Image Slider */}
                    <div className="w-full lg:w-1/2" style={{ perspective: '2000px' }}>
                        <motion.div
                            initial={{ opacity: 0, rotateY: -10, x: -50 }}
                            whileInView={{ opacity: 1, rotateY: 0, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, type: 'spring' }}
                            className="relative group"
                        >
                            {/* Card Container with 3D shadow */}
                            <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-[30px_50px_100px_rgba(0,0,0,0.4)] border-4 border-white transform-gpu transition-all duration-700 group-hover:rotate-y-5">
                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={currentIndex}
                                        src={corporateImages[currentIndex]}
                                        alt={`Corporate ${currentIndex}`}
                                        initial={{ opacity: 0, scale: 1.2 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ duration: 0.8 }}
                                        className="w-full h-full object-cover"
                                    />
                                </AnimatePresence>

                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                                {/* Overlay Controls */}
                                <button onClick={prevSlide} className="absolute left-6 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/20 backdrop-blur-xl text-white hover:bg-white hover:text-showtime-red opacity-0 group-hover:opacity-100 transition-all">
                                    <ChevronLeft size={28} />
                                </button>
                                <button onClick={nextSlide} className="absolute right-6 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/20 backdrop-blur-xl text-white hover:bg-white hover:text-showtime-red opacity-0 group-hover:opacity-100 transition-all">
                                    <ChevronRight size={28} />
                                </button>

                                <div className="absolute bottom-10 left-10 flex gap-3">
                                    {corporateImages.map((_, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setCurrentIndex(idx)}
                                            className={`h-2.5 rounded-full transition-all duration-500 ${idx === currentIndex ? 'bg-white w-10' : 'bg-white/40 w-2.5'}`}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Floating badge */}
                            <div className="absolute -top-8 -right-8 w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-xl rotate-12 animate-pulse z-20 border-4 border-showtime-red">
                                <span className="text-showtime-red font-black text-center leading-none text-sm px-2">#1 IN NYC SINCE 2013</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Text Content */}
                    <div className="w-full lg:w-1/2 text-white">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-[0.9] tracking-tighter uppercase drop-shadow-2xl">
                                Corporate <br />
                                <span className="underline decoration-white/30 decoration-8 underline-offset-8">Clients</span>
                            </h2>
                            <p className="text-xl md:text-2xl font-bold mb-10 leading-relaxed max-w-xl opacity-90 italic">
                                "For over a decade, we have been chosen by some of the biggest and most influential companies..."
                            </p>
                            <div className="space-y-6 text-lg md:text-xl font-medium opacity-90 leading-relaxed max-w-xl">
                                <p>With 24 photo booths for you to choose from, Showtime Photo Booth is your go-to company for corporate photo booth rental in NYC.</p>
                                <p>Your company's social gathering demands a big splash of entertainment. Our booths will keep everyone entertained for hours.</p>
                                <p>Explore our physical and digital <span className="font-black text-black bg-white px-2 py-0.5 rounded">branding</span> options for activations and launches.</p>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.05, x: 10 }}
                                className="mt-12 flex items-center gap-6 group"
                            >
                                <span className="text-2xl font-black tracking-tighter">OUR CLIENT LIST</span>
                                <div className="w-20 h-2 bg-black rounded-full relative overflow-hidden">
                                    <div className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
                                </div>
                            </motion.button>
                        </motion.div>
                    </div>
                </div>

                {/* Clients Grid */}
                <div className="mb-40">
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center bg-white/10 backdrop-blur-xl p-12 rounded-[3rem] border border-white/20 shadow-2xl">
                        {clientLogos.map((logo, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ scale: 1.15, rotate: 5 }}
                                className="h-16 w-full flex items-center justify-center p-2"
                            >
                                <img
                                    src={logo}
                                    alt="Client"
                                    className="max-h-full max-w-full object-contain brightness-0 invert"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Testimonials */}
                <div>
                    <div className="text-center mb-20 flex flex-col items-center">
                        <h3 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-4 uppercase shadow-sm">
                            Happy Customers
                        </h3>
                        <div className="h-2 w-48 bg-black rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {reviews.map((review, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: idx * 0.15 }}
                                whileHover={{ y: -20, rotate: idx % 2 === 0 ? 2 : -2 }}
                                className="bg-white p-10 rounded-[2.5rem] relative flex flex-col justify-between shadow-[0_20px_40px_rgba(0,0,0,0.2)]"
                            >
                                <Quote className="absolute top-6 right-8 text-showtime-red/10" size={60} />

                                <p className="text-showtime-dark text-lg font-bold leading-relaxed mb-10 relative z-10">
                                    "{review.quote}"
                                </p>

                                <div className="flex items-center justify-between mt-auto border-t-2 border-showtime-red/10 pt-8">
                                    <div>
                                        <h4 className="font-black text-showtime-dark text-xl leading-none mb-1">{review.name}</h4>
                                        <p className="text-showtime-red text-xs font-black uppercase tracking-widest">{review.title}</p>
                                    </div>
                                    <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-showtime-red/5 p-2">
                                        <img
                                            src={review.logo}
                                            alt="Partner"
                                            className="max-h-full max-w-full object-contain"
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};
