import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const reviews = [
    {
        id: 1,
        name: "Maya Jama",
        text: "I loved having Showtime at my Halloween party this year!",
        image: "/maya-jama.jpg"
    },
    {
        id: 2,
        name: "Ronnie O'Sullivan",
        text: "The 147 of photo booths.",
        image: "/ronnie.jpg"
    },
    {
        id: 3,
        name: "Chabuddy G",
        text: "Shots fired all evening, an unforgettable experience!",
        image: "/chabuddy.jpg"
    }
];

export const Reviews = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % reviews.length);
        }, 5000); // 5 seconds per slide
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="bg-[#0A0A0A] py-24 md:py-32 px-4 w-full relative overflow-hidden flex flex-col items-center justify-center min-h-[90vh]">

            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[900px] md:h-[900px] bg-showtime-red/10 blur-[100px] md:blur-[150px] rounded-full pointer-events-none"></div>

            {/* Stylized Section Header */}
            <div className="text-center mb-24 md:mb-32 z-10 relative">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter mb-6">
                    DON'T JUST TAKE <span className="text-showtime-red">OUR WORD</span> FOR IT.
                </h2>
                <div className="w-16 h-[6px] bg-showtime-red mx-auto rounded-full"></div>
            </div>

            {/* 3D Carousel Stack Container */}
            <div className="relative w-full max-w-[1200px] h-[350px] md:h-[450px] flex items-center justify-center mt-8 md:mt-12" style={{ perspective: '1500px' }}>
                {reviews.map((review, idx) => {
                    const diff = (idx - currentIndex + reviews.length) % reviews.length;

                    let x = "0%";
                    let zIndex = 20;
                    let opacity = 1;
                    let scale = 1;
                    let rotateY = 0;
                    let blur = 0;

                    // Calculate 3D spatial properties based on distance from center
                    if (diff === 0) {
                        x = "0%"; zIndex = 30; opacity = 1; scale = 1; rotateY = 0; blur = 0;
                    } else if (diff === 1) {
                        x = "60%"; zIndex = 20; opacity = 0.5; scale = 0.8; rotateY = -15; blur = 4;
                    } else {
                        x = "-60%"; zIndex = 20; opacity = 0.5; scale = 0.8; rotateY = 15; blur = 4;
                    }

                    return (
                        <motion.div
                            key={review.id}
                            className="absolute w-[90%] sm:w-[450px] md:w-[550px] cursor-pointer"
                            onClick={() => setCurrentIndex(idx)}
                            animate={{
                                x,
                                scale,
                                opacity,
                                rotateY,
                                zIndex,
                                filter: `blur(${blur}px)`
                            }}
                            transition={{ duration: 0.8, type: "spring", bounce: 0.25 }}
                            style={{ transformStyle: "preserve-3d" }}
                        >
                            <div className={`relative bg-white/5 backdrop-blur-2xl rounded-[2.5rem] p-8 md:p-12 lg:p-14 border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.5)] flex flex-col items-center text-center transition-colors duration-500 hover:border-white/20 ${diff === 0 ? 'border-showtime-red/30 shadow-[0_30px_60px_rgba(228,0,15,0.1)]' : ''}`}>

                                {/* Orbiting Image Avatar */}
                                <div className="absolute -top-16 md:-top-20 left-1/2 -translate-x-1/2 w-32 h-32 md:w-40 md:h-40 rounded-full border-[8px] border-[#0A0A0A] overflow-hidden shadow-2xl z-20 transition-transform duration-500 hover:scale-110">
                                    <img
                                        src={review.image}
                                        alt={review.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Abstract Background Quote Icon */}
                                <Quote size={80} className="text-showtime-red/10 absolute top-16 left-1/2 -translate-x-1/2 -rotate-12" />

                                <h3 className="text-white text-xl md:text-3xl font-bold tracking-tight leading-relaxed mt-16 md:mt-24 text-balance relative z-10">
                                    "{review.text}"
                                </h3>

                                <div className="mt-8 flex items-center justify-center gap-4 relative z-10">
                                    <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-showtime-red shadow-[0_0_10px_rgba(228,0,15,0.8)]"></div>
                                    <span className="text-white/80 font-black tracking-widest uppercase text-xs md:text-sm">
                                        {review.name}
                                    </span>
                                    <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-showtime-red shadow-[0_0_10px_rgba(228,0,15,0.8)]"></div>
                                </div>
                            </div>
                        </motion.div>
                    )
                })}
            </div>

            {/* Pill Pagination Indicators */}
            <div className="flex items-center gap-3 mt-24 md:mt-32 z-10">
                {reviews.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`transition-all duration-500 rounded-full ${currentIndex === idx ? 'w-12 h-3 bg-showtime-red shadow-[0_0_15px_rgba(228,0,15,0.6)]' : 'w-3 h-3 bg-white/20 hover:bg-white/40'}`}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>

        </section>
    );
};
