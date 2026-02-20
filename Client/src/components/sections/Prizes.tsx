import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Clock, IndianRupee } from "lucide-react";
import { motion } from "framer-motion";
import { TOURNAMENT_INFO } from "@/constants/data";

export default function Prizes() {
    return (
        <section id="prizes" className="bg-black pt-16 pb-32 relative overflow-hidden">
            {/* Background Aesthetic */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-500/10 rounded-full blur-[120px] pointer-events-none opacity-50" />

            <div className="relative z-10 w-full mt-8">
                <ScrollReveal>
                    <div className="text-center mb-10 px-4">
                        {/* Technical Label */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-yellow-500/5 border border-yellow-500/10 mb-8 backdrop-blur-md"
                        >
                            <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse" />
                            <Clock className="w-3.5 h-3.5 text-yellow-500" />
                            <span className="text-yellow-500 font-teko text-[11px] uppercase tracking-[0.4em] font-bold">Protocol: Rewards_Engaged</span>
                        </motion.div>

                        <h2 className="text-4xl md:text-5xl font-teko font-black text-white uppercase tracking-tighter leading-none mb-4">
                            Tournament <span className="text-yellow-500 uppercase font-black drop-shadow-[0_0_15px_rgba(234,179,8,0.3)]">Prize Pool</span>
                        </h2>
                        <div className="h-0.5 w-16 bg-yellow-500/30 mx-auto rounded-full mt-6" />
                    </div>

                    <div className="relative py-12 md:py-16 overflow-hidden w-full group">
                        {/* Background Texture & Gradient */}
                        <div className="absolute inset-0 bg-linear-to-r from-black via-yellow-500/15 to-black h-full" />
                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

                        {/* Tactical Borders */}
                        <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-yellow-500/20 to-transparent" />
                        <div className="absolute bottom-0 inset-x-0 h-px bg-linear-to-r from-transparent via-yellow-500/20 to-transparent" />

                        {/* Animated Scanning Line */}
                        <motion.div
                            animate={{ x: ['-100%', '200%'] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 w-1/3 bg-linear-to-r from-transparent via-yellow-500/5 to-transparent skew-x-12 pointer-events-none"
                        />

                        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="flex items-center gap-2 md:gap-6"
                            >
                                <IndianRupee className="w-12 h-12 md:w-28 md:h-28 text-yellow-500 filter drop-shadow-[0_0_15px_rgba(234,179,8,0.4)]" strokeWidth={2.5} />
                                <h3 className="text-7xl md:text-[10rem] font-teko font-black text-white tracking-tighter tabular-nums leading-none drop-shadow-[0_0_50px_rgba(234,179,8,0.25)]">
                                    {TOURNAMENT_INFO.prizePool.replace(/[^0-9,]/g, '')}
                                </h3>
                            </motion.div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
