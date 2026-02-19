import { SCHEDULE } from "@/constants/data";
import { Flag, Trophy, Coffee, Gamepad2 } from "lucide-react";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};

export default function Schedule() {
    return (
        <section className="section-container bg-black relative">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&auto=format&fit=crop&w=2851&q=80')] bg-cover bg-center opacity-10" />
            <div className="relative z-10">
                <ScrollReveal>
                    <h2 className="text-4xl md:text-5xl font-teko text-center mb-12 text-transparent bg-clip-text bg-linear-to-r from-yellow-400 to-yellow-600">
                        EVENT SCHEDULE
                    </h2>
                </ScrollReveal>

                <motion.div
                    className="max-w-4xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {SCHEDULE.map((item, index) => (
                        <motion.div key={index} variants={itemVariants} className="flex group mb-8 last:mb-0 relative">
                            {/* Timeline Line */}
                            {index !== SCHEDULE.length - 1 && (
                                <div className="absolute left-[27px] top-8 bottom-[-32px] w-0.5 bg-zinc-800 group-hover:bg-yellow-500/50 transition-colors" />
                            )}

                            {/* Time Content */}
                            <div className="flex-none w-24 text-right pr-4 pt-1 hidden md:block">
                                <span className="font-teko text-xl text-zinc-400 group-hover:text-yellow-400 transition-colors">
                                    {item.time}
                                </span>
                            </div>

                            {/* Icon */}
                            <div className="relative z-10 flex-none w-14 h-14 rounded-full border-2 border-zinc-700 bg-zinc-900 flex items-center justify-center group-hover:border-yellow-500 group-hover:bg-yellow-500/10 group-hover:shadow-[0_0_15px_rgba(234,179,8,0.5)] transition-all duration-300">
                                {item.type === 'game' && <Gamepad2 className="w-6 h-6 text-zinc-400 group-hover:text-yellow-400" />}
                                {item.type === 'break' && <Coffee className="w-6 h-6 text-zinc-400 group-hover:text-yellow-400" />}
                                {item.type === 'ceremony' && <Trophy className="w-6 h-6 text-zinc-400 group-hover:text-yellow-400" />}
                                {item.type === 'admin' && <Flag className="w-6 h-6 text-zinc-400 group-hover:text-yellow-400" />}
                            </div>

                            {/* Details */}
                            <div className="grow pl-6 pt-1 pb-8">
                                <div className="md:hidden font-teko text-lg text-yellow-500 mb-1">
                                    {item.time}
                                </div>
                                <h3 className="text-2xl font-teko font-bold text-white group-hover:text-yellow-400 transition-colors uppercase tracking-wide">
                                    {item.event}
                                </h3>
                                <p className="text-zinc-500 font-rajdhani text-sm mt-1">
                                    {item.type === 'game' ? 'Battle Royale Mode' : 'General Event'}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
