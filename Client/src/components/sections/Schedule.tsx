import { SCHEDULE, TOURNAMENT_INFO } from "@/constants/data";
import { Flag, Trophy, Coffee, Gamepad2, Clock } from "lucide-react";
import { motion, useScroll, useTransform, useSpring, type Variants } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useRef } from "react";
import { cn } from "@/lib/utils";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.98, y: 15 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
};

export default function Schedule() {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start 75%", "end 25%"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 120,
        damping: 35,
        restDelta: 0.001
    });

    return (
        <section id="schedule" ref={sectionRef} className="section-container bg-black relative pt-20 pb-64 overflow-hidden">
            {/* Background Decor */}
            <div className="absolute inset-0 bg-linear-to-b from-zinc-950/30 to-black" />

            <div className="relative z-10 container mx-auto px-4">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/5 border border-yellow-500/10 mb-4">
                            <Clock className="w-3.5 h-3.5 text-yellow-500" />
                            <span className="text-yellow-500 font-teko text-[10px] uppercase tracking-[0.3em] font-bold">Timeline</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-teko font-black text-white uppercase tracking-tighter leading-none">
                            {TOURNAMENT_INFO.name.split(' ')[0]} <span className="text-yellow-500 uppercase font-black">Timeline</span>
                        </h2>
                    </div>
                </ScrollReveal>

                <div className="relative max-w-5xl mx-auto">
                    {/* Compact Progress Track */}
                    <div className="absolute left-[29px] md:left-1/2 md:-translate-x-1/2 top-4 bottom-4 w-0.5 bg-zinc-900 rounded-full" />

                    {/* Compact Animated Progress Bar */}
                    <motion.div
                        style={{ scaleY }}
                        className="absolute left-[29px] md:left-1/2 md:-translate-x-1/2 top-4 bottom-4 w-0.5 bg-linear-to-b from-yellow-600 via-yellow-400 to-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.4)] z-10 rounded-full origin-top"
                    />

                    {/* Progress Pulse Head */}
                    <motion.div
                        style={{
                            top: useTransform(scaleY, [0, 1], ["16px", "calc(100% - 16px)"]),
                            opacity: useTransform(scaleY, [0, 0.02], [0, 1])
                        }}
                        className="absolute left-[29px] md:left-1/2 md:-translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-yellow-400 rounded-full z-20 shadow-[0_0_15px_rgba(234,179,8,1)] hidden md:block"
                    >
                        <div className="absolute inset-0 bg-yellow-400 rounded-full animate-ping opacity-60 scale-150" />
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="space-y-12 md:space-y-0"
                    >
                        {SCHEDULE.map((item: { time: string; event: string; type: string }, index: number) => {
                            const isEven = index % 2 === 0;

                            return (
                                <div key={index} className={cn(
                                    "relative flex flex-col md:flex-row items-center w-full md:pb-24 pb-16",
                                    isEven ? "md:flex-row-reverse" : ""
                                )}>
                                    {/* Compact Diamond Indicator */}
                                    <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center z-30">
                                        <motion.div
                                            whileHover={{ scale: 1.1, rotate: 135 }}
                                            className="w-12 h-12 bg-zinc-950 border border-zinc-800 rotate-45 flex items-center justify-center group hover:border-yellow-500 transition-all duration-300 shadow-xl relative"
                                        >
                                            <div className="-rotate-45 relative z-10">
                                                {item.type === 'game' && <Gamepad2 className="w-5 h-5 text-yellow-500" />}
                                                {item.type === 'break' && <Coffee className="w-5 h-5 text-zinc-500 group-hover:text-yellow-400 transition-colors" />}
                                                {item.type === 'ceremony' && <Trophy className="w-5 h-5 text-yellow-500" />}
                                                {item.type === 'admin' && <Flag className="w-5 h-5 text-zinc-500 group-hover:text-yellow-400 transition-colors" />}
                                            </div>
                                        </motion.div>
                                    </div>

                                    {/* Compact Content Card */}
                                    <motion.div
                                        variants={itemVariants}
                                        className={cn(
                                            "w-full md:w-[44%] pl-20 md:pl-0",
                                            isEven ? "md:text-left" : "md:text-right"
                                        )}
                                    >
                                        <div className={cn(
                                            "bg-zinc-900/40 border border-white/5 p-6 rounded-2xl backdrop-blur-md relative overflow-hidden group hover:bg-zinc-900/60 transition-all duration-500",
                                            isEven ? "rounded-tl-none border-l-2 border-l-yellow-500" : "rounded-tr-none border-r-2 border-r-yellow-500"
                                        )}>
                                            <div className={cn(
                                                "flex items-center gap-2 mb-3",
                                                isEven ? "justify-start" : "md:justify-end justify-start"
                                            )}>
                                                <div className="bg-yellow-500 text-black px-2.5 py-0.5 rounded font-teko font-bold text-lg tracking-widest shadow-lg">
                                                    {item.time}
                                                </div>
                                            </div>

                                            <h3 className="text-2xl md:text-3xl font-teko font-black text-white uppercase tracking-tight group-hover:text-yellow-400 transition-colors leading-none mb-2">
                                                {item.event}
                                            </h3>

                                            <p className="text-zinc-500 font-rajdhani text-xs uppercase tracking-[0.2em] font-bold">
                                                {item.type === 'game' ? 'Combat Phase' :
                                                    item.type === 'break' ? 'Rest Period' :
                                                        item.type === 'admin' ? 'Administrative' : 'Ceremony Phase'}
                                            </p>

                                            <div className={cn(
                                                "mt-4 h-px w-12 bg-zinc-800 transition-all duration-500 group-hover:w-full group-hover:bg-yellow-500/20",
                                                isEven ? "" : "md:ml-auto"
                                            )} />
                                        </div>
                                    </motion.div>

                                    {/* Placeholder */}
                                    <div className="hidden md:block md:w-[44%]" />
                                </div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
