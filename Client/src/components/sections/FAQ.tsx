import { useState } from "react";
import { FAQS } from "@/constants/data";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="bg-black py-24 relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="section-container relative z-10">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 mb-4">
                            <HelpCircle className="w-4 h-4 text-yellow-500" />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-yellow-500">Support Center</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-teko font-black text-white uppercase tracking-tighter">
                            Frequently Asked <span className="text-yellow-500 italic">Questions</span>
                        </h2>
                        <p className="text-zinc-500 uppercase tracking-widest text-sm mt-4">Everything you need to know before joining the fray</p>
                    </div>
                </ScrollReveal>

                <div className="max-w-3xl mx-auto space-y-4">
                    {FAQS.map((faq, index) => (
                        <ScrollReveal key={index} delay={index * 0.1}>
                            <div
                                className={cn(
                                    "group border transition-all duration-300 rounded-2xl overflow-hidden",
                                    openIndex === index
                                        ? "bg-zinc-900/50 border-yellow-500/30"
                                        : "bg-zinc-900/20 border-zinc-800 hover:border-zinc-700"
                                )}
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full px-6 py-5 flex items-center justify-between text-left"
                                >
                                    <span className={cn(
                                        "text-lg font-teko uppercase tracking-wider transition-colors",
                                        openIndex === index ? "text-yellow-500" : "text-zinc-300"
                                    )}>
                                        {faq.question}
                                    </span>
                                    <div className={cn(
                                        "w-8 h-8 rounded-full flex items-center justify-center transition-all",
                                        openIndex === index ? "bg-yellow-500 text-black rotate-0" : "bg-zinc-800 text-zinc-500 rotate-90"
                                    )}>
                                        {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                    </div>
                                </button>

                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                        >
                                            <div className="px-6 pb-6 text-zinc-400 font-rajdhani leading-relaxed">
                                                <div className="h-px bg-zinc-800/50 mb-4" />
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
