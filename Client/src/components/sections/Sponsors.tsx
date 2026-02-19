import { SPONSORS } from "@/constants/data";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function Sponsors() {
    return (
        <section className="section-container bg-black py-20 border-t border-zinc-900">
            <ScrollReveal>
                <h3 className="text-xl text-center text-zinc-500 font-rajdhani uppercase tracking-[0.3em] mb-12">
                    Official Partners
                </h3>
            </ScrollReveal>

            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-80 hover:opacity-100 transition-opacity">
                {SPONSORS.map((sponsor, index) => (
                    <ScrollReveal key={index} delay={index * 0.1} width="fit-content">
                        <div
                            className="group flex flex-col items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer hover:scale-105"
                        >
                            {/* Logo Placeholder */}
                            <div className="w-32 h-16 md:w-48 md:h-24 bg-zinc-900/50 border border-zinc-800 rounded flex items-center justify-center relative overflow-hidden group-hover:border-yellow-500/30 group-hover:bg-zinc-900 group-hover:shadow-[0_0_20px_rgba(250,204,21,0.1)] transition-all">
                                <span className="text-2xl md:text-3xl font-teko font-bold text-zinc-600 group-hover:text-white transition-colors">
                                    {sponsor.logo}
                                </span>
                                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer" />
                            </div>

                            <span className="mt-4 text-sm text-zinc-600 font-rajdhani uppercase tracking-widest group-hover:text-yellow-500 transition-colors">
                                {sponsor.name}
                            </span>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </section>
    );
}
