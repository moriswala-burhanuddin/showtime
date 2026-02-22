import { motion } from 'framer-motion';

export const WhyChooseUs = () => {
    const reasons = [
        {
            title: "We never subcontract",
            description: "There are zero degrees of separation between what we offer and what we deliver. All photo booth equipment is owned, managed and operated by Showtime Photo Booth."
        },
        {
            title: "Ahead of schedule",
            description: "We always arrive in good time to ensure a super smooth start to your photo booth rental. In this industry, we believe, if you are on time you are late."
        },
        {
            title: "Chosen by big brands",
            description: "Ninety-three Fortune 500 companies choose Showtime Photo Booth for their photo booth experiences. See our client list."
        },
        {
            title: "We've been there and done it",
            description: "When you choose us, you'll feel the benefit of 10 years experience. That's why we have more Google reviews than any other photo booth rental company in the world!"
        }
    ];

    return (
        <section className="bg-[#0D0D0D] py-16 md:py-24 px-4 md:px-6 w-full max-w-[1920px] mx-auto text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 w-full">

                {/* Left side text items */}
                <div className="flex flex-col gap-8 md:gap-12 bg-[#1A1A1A] rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 lg:p-16 shadow-xl border border-white/5 order-2 lg:order-1">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-6 text-[#EEEEEE] leading-[1.1]">
                            Why choose<br />Showtime?
                        </h2>
                        <div className="w-16 h-[6px] bg-[#333333] mb-8 rounded-full"></div>
                    </motion.div>

                    <div className="flex flex-col gap-10">
                        {reasons.map((reason, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.15 }}
                                className="group"
                            >
                                <h3 className="text-xl md:text-2xl font-bold mb-3 text-[#DFDDDD] group-hover:text-showtime-red transition-colors duration-300 tracking-tight">
                                    {reason.title}
                                </h3>
                                <p className="text-[#A3A3A3] text-sm md:text-base leading-relaxed max-w-lg font-medium">
                                    {reason.title === "Chosen by big brands" ? (
                                        <>Ninety-three Fortune 500 companies choose Showtime Photo Booth for their photo booth experiences. See our <span className="text-showtime-red hover:underline cursor-pointer font-bold">client list</span>.</>
                                    ) : (
                                        reason.description
                                    )}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Right side images bento - Stacking on Top in Mobile via order-1 */}
                <div className="flex flex-col gap-4 md:gap-6 order-1 lg:order-2">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="relative h-[300px] md:h-[400px] lg:h-[450px] w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl group border border-white/5"
                    >
                        <img
                            src="/why-choose-1.jpg"
                            alt="Photo Booth Experience"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-showtime-red/10 group-hover:bg-transparent transition-colors duration-500"></div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="relative flex-1 min-h-[300px] md:min-h-[400px] lg:min-h-[450px] w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl group border border-white/5 bg-[#0D0D0D]"
                    >
                        <img
                            src="/why-choose-2.jpg"
                            alt="Top Time Prints"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};
