import { useEffect, useState } from "react";
import { useSeasons, type Season } from "@/hooks/useSeasons";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Trophy, Calendar, Users, ArrowRight, Crosshair, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

export default function SeasonsList() {
    const { fetchSeasons, loading } = useSeasons();
    const [seasons, setSeasons] = useState<Season[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        const loadSeasons = async () => {
            const data = await fetchSeasons();
            if (data) {
                // Sort by date descending
                setSeasons(data.sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()));
            }
        };
        loadSeasons();
    }, [fetchSeasons]);

    if (!loading && seasons.length === 0) return null;

    return (
        <section className="py-10 relative overflow-hidden bg-zinc-950/20">
            {/* Background Elements */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500/5 blur-[120px] rounded-full" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-500/5 blur-[120px] rounded-full" />

            <div className="section-container relative z-10">
                <ScrollReveal>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <Crosshair className="w-5 h-5 text-yellow-500" />
                                <span className="text-sm font-black text-zinc-500 uppercase tracking-[0.3em]">Historical Archives</span>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-teko font-bold text-white uppercase tracking-tighter leading-none">
                                All <span className="text-yellow-500">Seasons</span>
                            </h2>
                        </div>
                        <p className="max-w-md text-zinc-400 font-rajdhani text-lg leading-relaxed uppercase tracking-wide">
                            Browse through our complete tournament history, match records, and historical squad performance.
                        </p>
                    </div>
                </ScrollReveal>

                {loading ? (
                    <div className="flex gap-6 overflow-x-hidden py-4">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="min-w-[320px] h-[400px] bg-zinc-900/40 rounded-[2.5rem] border border-zinc-800/50 animate-pulse" />
                        ))}
                    </div>
                ) : (
                    <div className="flex gap-4 md:gap-6 overflow-x-auto pb-8 pt-4 hide-scrollbar snap-x snap-mandatory">
                        {seasons.map((season, index) => (
                            <ScrollReveal key={season._id} delay={index * 0.1}>
                                <motion.div
                                    whileHover={{ y: -10 }}
                                    onClick={() => navigate(`/seasons/${season._id}`)}
                                    className="min-w-[280px] md:min-w-[380px] bg-zinc-900/30 border border-zinc-800 rounded-[2.5rem] p-8 group cursor-pointer hover:border-yellow-500/50 transition-all duration-500 relative overflow-hidden snap-center"
                                >
                                    {/* Glassmorphism Effect */}
                                    <div className="absolute inset-0 bg-linear-to-b from-white/2 to-transparent pointer-events-none" />

                                    <div className="relative z-10 space-y-6">
                                        <div className="flex justify-between items-start">
                                            <div className={cn(
                                                "px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest",
                                                season.status === 'active'
                                                    ? "bg-red-500 text-white animate-pulse"
                                                    : "bg-zinc-800 text-zinc-500"
                                            )}>
                                                {season.status === 'active' ? "Live System" : "Archived"}
                                            </div>
                                            <Trophy className={cn(
                                                "w-6 h-6 transition-colors duration-500",
                                                season.status === 'active' ? "text-yellow-500" : "text-zinc-700 group-hover:text-yellow-500/50"
                                            )} />
                                        </div>

                                        <div>
                                            <h3 className="text-3xl md:text-4xl font-teko font-bold text-white uppercase leading-none tracking-tight group-hover:text-yellow-500 transition-colors">
                                                {season.title}
                                            </h3>
                                            <p className="text-zinc-500 font-teko text-lg uppercase tracking-widest mt-1">
                                                {season.subtitle || "Operation Data"}
                                            </p>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-1">
                                                <div className="flex items-center gap-2 text-zinc-600">
                                                    <Calendar className="w-3 h-3" />
                                                    <span className="text-[10px] font-black uppercase tracking-widest">Deployed</span>
                                                </div>
                                                <p className="text-white font-teko text-xl">{new Date(season.startDate).toLocaleDateString([], { month: 'short', year: 'numeric' })}</p>
                                            </div>
                                            <div className="space-y-1 text-right">
                                                <div className="flex items-center gap-2 text-zinc-600 justify-end">
                                                    <Users className="w-3 h-3" />
                                                    <span className="text-[10px] font-black uppercase tracking-widest">Squads</span>
                                                </div>
                                                <p className="text-white font-teko text-xl">{season.finalTeamCount || 20}+</p>
                                            </div>
                                        </div>

                                        <div className="pt-6 border-t border-zinc-800/50 flex items-center justify-between">
                                            <div className="flex items-center gap-2 text-yellow-500/50 group-hover:text-yellow-500 transition-colors">
                                                <Target className="w-4 h-4" />
                                                <span className="text-xs font-black uppercase tracking-widest">Open Intelligence</span>
                                            </div>
                                            <ArrowRight className="w-5 h-5 text-zinc-700 group-hover:text-yellow-500 transition-all transform group-hover:translate-x-2" />
                                        </div>
                                    </div>

                                    {/* Hover tactical texture */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                                </motion.div>
                            </ScrollReveal>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
