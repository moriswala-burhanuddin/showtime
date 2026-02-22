
import { motion } from 'framer-motion';
import { Camera, Sparkles, Building2, Users } from 'lucide-react';

export const Features = () => {
    const features = [
        {
            icon: <Building2 size={40} className="text-showtime-red" />,
            title: "Corporate Events",
            description: "Elevate your next corporate gathering with professional photo booths that encourage team building and create lasting memories."
        },
        {
            icon: <Sparkles size={40} className="text-showtime-red" />,
            title: "Brand Activations",
            description: "Experiential marketing at its finest. Customized photo experiences that amplify your brand's reach and engagement."
        },
        {
            icon: <Users size={40} className="text-showtime-red" />,
            title: "Weddings",
            description: "Capture the magic of your special day. Elegant setups, premium props, and high-quality prints for your guests to cherish."
        },
        {
            icon: <Camera size={40} className="text-showtime-red" />,
            title: "Private Parties",
            description: "Birthdays, anniversaries, and celebrations of all kinds. Add a touch of glamour and fun to any private event."
        }
    ];

    return (
        <section id="services" className="py-24 bg-showtime-dark relative">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
                    >
                        Premium Photo Experiences
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="h-1 w-24 bg-showtime-red mx-auto"
                    ></motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-8 rounded-2xl bg-showtime-gray border border-white/5 hover:border-showtime-red/30 transition-all duration-300 group hover:-translate-y-2"
                        >
                            <div className="mb-6 bg-showtime-dark inline-block p-4 rounded-xl group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
