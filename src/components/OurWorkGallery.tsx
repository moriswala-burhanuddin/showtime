
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Instagram, Share2, MoreHorizontal, MessageCircle, Heart, Bookmark, Copy } from 'lucide-react';

const galleryImages = [
    { id: 1, src: "/wedding/showtime-wedding-1-scaled.jpg", type: "Wedding", caption: "We brought our Open Air Photo Booth to the legendary @langansbrasserie for the wedding of Mr. and Mrs. Harris.", hashtags: "#wedding #nycphotobooth #openair" },
    { id: 2, src: "/corporate/showtime-corporate-5-scaled.jpg", type: "Corporate", caption: "Capturing corporate excellence with our sleek branding options.", hashtags: "#corporatevent #branding #nyc" },
    { id: 3, src: "/party photo booth rental in NYC/showtime-party-1-scaled.jpg", type: "Party", caption: "Birthday celebrations in Brooklyn with the best crew!", hashtags: "#birthday #partytime #brooklyn" },
    { id: 4, src: "/wedding/showtime-wedding-2-scaled.jpg", type: "Wedding", caption: "Chic and fun additions to the dance floor.", hashtags: "#weddingfun #elegance #nyc" },
    { id: 5, src: "/corporate/showtime-corporate-6.jpg", type: "Corporate", caption: "Innovation meets entertainment at our latest activation.", hashtags: "#activation #marketing #eventtech" },
    { id: 6, src: "/party photo booth rental in NYC/showtime-party-2-scaled.jpg", type: "Party", caption: "Memories captured in style.", hashtags: "#memories #style #showtime" },
    { id: 7, src: "/wedding/showtime-wedding-3.jpg", type: "Wedding", caption: "Elegant vibes for a beautiful night.", hashtags: "#weddingvibes #nycwedding" },
    { id: 8, src: "/corporate/showtime-corporate-7.jpg", type: "Corporate", caption: "Client appreciation events made better.", hashtags: "#clientevent #pwc #nyc" }
];

export const OurWorkGallery = () => {
    const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

    return (
        <section id="our-work" className="py-24 md:py-40 bg-white">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col items-center mb-16 text-center">
                    <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-4 text-[#2D3E50]">
                        Our <span className="text-showtime-red">Work</span>
                    </h2>
                    <div className="w-24 h-2 bg-showtime-red mb-8 rounded-full"></div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                    {galleryImages.map((image) => (
                        <motion.div
                            key={image.id}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="relative aspect-square rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden group cursor-pointer shadow-lg border-2 border-transparent hover:border-showtime-red transition-all"
                            onClick={() => setSelectedImage(image)}
                        >
                            <img src={image.src} alt={image.type} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <Instagram className="text-white" size={32} />
                            </div>

                            {/* Content indicator like in mockup */}
                            <div className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-md rounded-lg">
                                <Copy className="text-white" size={16} />
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <button className="px-10 py-4 border-2 border-showtime-red text-showtime-red font-black rounded-full hover:bg-showtime-red hover:text-white transition-all uppercase tracking-widest text-sm">
                        Load more
                    </button>
                </div>
            </div>

            {/* Instagram Style Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedImage(null)}
                            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
                        ></motion.div>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 50 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 50 }}
                            className="relative w-full max-w-6xl bg-white rounded-[2rem] md:rounded-[3rem] overflow-hidden flex flex-col md:flex-row shadow-[0_50px_100px_rgba(0,0,0,0.5)] h-[90vh] md:h-auto max-h-[90vh]"
                        >
                            {/* Left: Image Container */}
                            <div className="w-full md:w-[60%] bg-black flex items-center justify-center overflow-hidden">
                                <img src={selectedImage.src} alt="Gallery item" className="w-full h-full object-contain" />

                                <button
                                    onClick={() => setSelectedImage(null)}
                                    className="absolute top-6 left-6 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-all md:hidden z-50"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            {/* Right: Instagram Sidebar */}
                            <div className="w-full md:w-[40%] flex flex-col h-full bg-white">
                                {/* Header */}
                                <div className="p-6 border-b flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-showtime-red rounded-full flex items-center justify-center text-white font-black shadow-lg">
                                            S
                                        </div>
                                        <div>
                                            <h4 className="font-black text-sm tracking-tight">@showtimephotobooth</h4>
                                            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">New York City</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <MoreHorizontal className="text-gray-400 cursor-pointer" size={20} />
                                        <button
                                            onClick={() => setSelectedImage(null)}
                                            className="hidden md:block p-2 hover:bg-gray-100 rounded-full text-gray-400 transition-all"
                                        >
                                            <X size={24} />
                                        </button>
                                    </div>
                                </div>

                                {/* Body / Caption */}
                                <div className="flex-1 p-8 overflow-y-auto">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-showtime-red rounded-full flex-shrink-0 flex items-center justify-center text-white font-black text-sm">S</div>
                                        <div className="space-y-4">
                                            <p className="text-sm font-bold leading-relaxed text-[#2D3E50]">
                                                {selectedImage.caption}
                                            </p>
                                            <p className="text-showtime-red font-black text-xs uppercase tracking-widest flex flex-wrap gap-2">
                                                {selectedImage.hashtags.split(' ').map((tag, i) => (
                                                    <span key={i} className="hover:underline cursor-pointer">{tag}</span>
                                                ))}
                                            </p>
                                            <div className="pt-4 flex items-center gap-4 text-xs font-black text-gray-300">
                                                <span>1 / 16</span>
                                                <div className="flex items-center gap-2 cursor-pointer hover:text-showtime-red transition-colors">
                                                    <Share2 size={14} /> Share
                                                </div>
                                                <div className="flex items-center gap-2 cursor-pointer hover:text-showtime-red transition-colors">
                                                    <Instagram size={14} /> Instagram
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Interaction Bar */}
                                <div className="p-6 border-t mt-auto">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-4">
                                            <Heart className="text-[#2D3E50] cursor-pointer hover:text-showtime-red transition-colors" size={24} />
                                            <MessageCircle className="text-[#2D3E50] cursor-pointer hover:text-showtime-red transition-colors" size={24} />
                                            <Share2 className="text-[#2D3E50] cursor-pointer hover:text-showtime-red transition-colors" size={24} />
                                        </div>
                                        <Bookmark className="text-[#2D3E50] cursor-pointer hover:bg-gray-100 p-1 rounded transition-all" size={24} />
                                    </div>
                                    <p className="text-sm font-black text-[#2D3E50]">Captured with {selectedImage.type} Booth</p>
                                    <p className="text-[10px] text-gray-400 font-bold uppercase mt-2 tracking-widest">February 22, 2026</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};
