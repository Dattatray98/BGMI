import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Gavel, AlertTriangle, CheckSquare, Target } from "lucide-react";

export default function TermsConditions() {
    return (
        <div className="bg-black min-h-screen text-gray-100 font-rajdhani selection:bg-yellow-500 selection:text-black">
            <Navbar />

            <main className="pt-32 pb-16 section-container max-w-4xl mx-auto">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 mb-4">
                            <Gavel className="w-4 h-4 text-yellow-500" />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-yellow-500">Player Agreement</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-teko font-black text-white uppercase tracking-tighter italic">
                            Terms & <span className="text-yellow-500">Conditions</span>
                        </h1>
                        <p className="text-zinc-500 uppercase tracking-widest text-sm mt-4">Last Updated: February 20, 2026</p>
                    </div>
                </ScrollReveal>

                <div className="space-y-12 bg-zinc-900/20 border border-zinc-800 p-8 md:p-12 rounded-3xl backdrop-blur-sm">
                    <section className="space-y-4">
                        <h2 className="text-2xl font-teko text-white uppercase tracking-widest flex items-center gap-3">
                            <CheckSquare className="w-6 h-6 text-yellow-500" /> 1. Eligibility
                        </h2>
                        <ul className="list-disc list-inside text-zinc-400 space-y-2 leading-relaxed">
                            <li>All participants must be at least 16 years of age.</li>
                            <li>Players must use their own registered BGMI accounts.</li>
                            <li>Emulators and external controllers are strictly prohibited.</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-teko text-white uppercase tracking-widest flex items-center gap-3">
                            <AlertTriangle className="w-6 h-6 text-yellow-500" /> 2. Fair Play Policy
                        </h2>
                        <p className="text-zinc-400 leading-relaxed">
                            Any form of cheating, including wall-hacks, aim-bots, or teaming with other squads, will result in immediate disqualification and a permanent ban from all future Genesis Esports events.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-teko text-white uppercase tracking-widest flex items-center gap-3">
                            <Target className="w-6 h-6 text-yellow-500" /> 3. Tournament Conduct
                        </h2>
                        <p className="text-zinc-400 leading-relaxed">
                            Teams must report at the venue (IIC-SIT, Lonavala) at least 60 minutes before the first match. Failure to check-in on time may result in your slot being forfeited without a refund.
                        </p>
                    </section>

                    <section className="border-t border-zinc-800 pt-8 mt-12">
                        <p className="text-zinc-500 text-sm italic">
                            Genesis Esports reserves the right to amend these rules at any time. Decisions made by tournament administrators are final and binding.
                        </p>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
}
