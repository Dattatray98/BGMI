import { useState, useEffect, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useSeasons } from "@/hooks/useSeasons";
import { useAxios } from "@/hooks/useAxios";
import { motion, AnimatePresence } from "framer-motion";
import {
    Calendar,
    Trophy,
    Users,
    Gamepad2,
    Clock,
    ChevronRight,
    Crosshair as CrosshairIcon,
    Search
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Match {
    _id: string;
    seasonId: { _id: string, title: string };
    matchNumber: number;
    gameName: string;
    mapName: string;
    dateTime: string;
    status: 'upcoming' | 'live' | 'completed';
    results?: any[];
}

export default function SeasonDetail() {
    const { seasonId } = useParams<{ seasonId: string }>();
    const navigate = useNavigate();
    const { fetchSeasonById } = useSeasons();
    const { request: fetchMatches, loading: matchesLoading } = useAxios<Match[]>();

    const [season, setSeason] = useState<any>(null);
    const [matches, setMatches] = useState<Match[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedTab, setSelectedTab] = useState<'overview' | 'matches'>('overview');

    useEffect(() => {
        const loadData = async () => {
            if (!seasonId) return;
            setLoading(true);
            try {
                const seasonData = await fetchSeasonById(seasonId);
                if (seasonData) setSeason(seasonData);

                const matchData = await fetchMatches({
                    url: `matches?seasonId=${seasonId}`,
                    method: 'GET'
                });
                if (matchData) setMatches(matchData);
            } catch (error) {
                console.error("Failed to load season details", error);
            } finally {
                setLoading(false);
            }
        };
        loadData();
    }, [seasonId, fetchSeasonById, fetchMatches]);

    const filteredMatches = useMemo(() => {
        return matches.filter(m =>
            m.mapName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            `Match ${m.matchNumber}`.toLowerCase().includes(searchQuery.toLowerCase())
        ).sort((a, b) => a.matchNumber - b.matchNumber);
    }, [matches, searchQuery]);

    if (loading) {
        return (
            <div className="min-h-screen bg-black flex flex-col items-center justify-center gap-4 text-center">
                <div className="w-12 h-12 border-4 border-yellow-500/20 border-t-yellow-500 rounded-full animate-spin" />
                <p className="text-yellow-500 font-teko text-xl tracking-[0.2em] animate-pulse uppercase">Decrypting Season Intel...</p>
            </div>
        );
    }

    if (!season) {
        return (
            <div className="min-h-screen bg-black flex flex-col items-center justify-center gap-4 text-center">
                <Trophy className="w-16 h-16 text-zinc-800 opacity-20" />
                <h2 className="text-3xl font-teko text-white uppercase tracking-widest">Operation Not Found</h2>
                <button onClick={() => navigate('/')} className="text-yellow-500 font-black uppercase tracking-widest underline underline-offset-8">Return to Base</button>
            </div>
        );
    }

    return (
        <div className="bg-black min-h-screen text-gray-100 font-rajdhani selection:bg-yellow-500 selection:text-black">
            <Navbar />

            <main className="pt-24 pb-20">
                {/* Hero Header */}
                <section className="py-10 relative overflow-hidden border-b border-zinc-900 bg-zinc-950/20">
                    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                    <div className="section-container relative z-10">
                        <ScrollReveal>
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
                                <div className="space-y-4">
                                    <button
                                        onClick={() => navigate(-1)}
                                        className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 hover:text-yellow-500 transition-colors flex items-center gap-2 mb-2 group"
                                    >
                                        <ChevronRight className="w-3 h-3 rotate-180" />
                                        Back to Operations
                                    </button>
                                    <div className="flex items-center gap-3">
                                        <div className={cn(
                                            "px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-[0.2em]",
                                            season.status === 'active' ? "bg-red-500 text-white" : "bg-zinc-800 text-zinc-500"
                                        )}>
                                            {season.status === 'active' ? "Active Operation" : "Archived Sector"}
                                        </div>
                                        <span className="text-zinc-500 font-teko text-2xl uppercase tracking-[0.3em]">{season.gameName || "BGMI"}</span>
                                    </div>
                                    <h1 className="text-6xl md:text-8xl font-teko font-black text-white uppercase leading-none tracking-tighter">
                                        {season.title} <span className="text-yellow-500">Intel</span>
                                    </h1>
                                    <p className="text-zinc-400 text-xl uppercase tracking-[0.2em] font-medium">
                                        {season.subtitle || "Tactical Tournament Archives"}
                                    </p>
                                </div>

                                <div className="flex gap-4">
                                    <button
                                        onClick={() => navigate(`/leaderboard?seasonId=${seasonId}`)}
                                        className="px-8 py-4 bg-yellow-500 text-black font-black uppercase tracking-widest rounded-2xl hover:scale-105 transition-all shadow-[0_0_30px_rgba(234,179,8,0.2)] flex items-center gap-2 text-sm"
                                    >
                                        <Trophy className="w-5 h-5" />
                                        Season Leaderboard
                                    </button>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* Tabs / Navigation */}
                <div className="sticky top-16 z-40 bg-black/80 backdrop-blur-md border-b border-zinc-900">
                    <div className="section-container py-0">
                        <div className="flex gap-12">
                            {(['overview', 'matches'] as const).map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setSelectedTab(tab)}
                                    className={cn(
                                        "py-6 text-sm font-black uppercase tracking-[0.3em] transition-all relative group",
                                        selectedTab === tab ? "text-yellow-500" : "text-zinc-500 hover:text-white"
                                    )}
                                >
                                    {tab}
                                    <motion.div
                                        className={cn(
                                            "absolute bottom-0 left-0 h-1 bg-yellow-500 transition-all",
                                            selectedTab === tab ? "w-full" : "w-0 group-hover:w-full"
                                        )}
                                        layoutId="tab-underline"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="section-container min-h-[60vh]">
                    <AnimatePresence mode="wait" initial={false}>
                        {selectedTab === 'overview' ? (
                            <motion.div
                                key="overview-tab"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 10 }}
                                transition={{ duration: 0.2 }}
                                className="space-y-16"
                            >
                                {/* Overview Cards */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    <div className="bg-zinc-900/40 border border-zinc-800 rounded-[2.5rem] p-10 space-y-4">
                                        <div className="w-12 h-12 bg-yellow-500/10 border border-yellow-500/20 rounded-2xl flex items-center justify-center">
                                            <Calendar className="w-6 h-6 text-yellow-500" />
                                        </div>
                                        <div>
                                            <h4 className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1">Deployment Date</h4>
                                            <p className="text-3xl font-teko font-bold text-white uppercase tracking-wider">
                                                {new Date(season.startDate).toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' })}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="bg-zinc-900/40 border border-zinc-800 rounded-[2.5rem] p-10 space-y-4">
                                        <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-2xl flex items-center justify-center">
                                            <Users className="w-6 h-6 text-blue-500" />
                                        </div>
                                        <div>
                                            <h4 className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1">Squad Deployment</h4>
                                            <p className="text-3xl font-teko font-bold text-white uppercase tracking-wider">
                                                {season.finalTeamCount || 20}+ Registered Teams
                                            </p>
                                        </div>
                                    </div>
                                    <div className="bg-zinc-900/40 border border-zinc-800 rounded-[2.5rem] p-10 space-y-4">
                                        <div className="w-12 h-12 bg-green-500/10 border border-green-500/20 rounded-2xl flex items-center justify-center">
                                            <Gamepad2 className="w-6 h-6 text-green-500" />
                                        </div>
                                        <div>
                                            <h4 className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1">Prize Manifest</h4>
                                            <p className="text-3xl font-teko font-bold text-white uppercase tracking-wider">
                                                {season.prizePool || "TBA"}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Summary Stats */}
                                <div className="bg-zinc-900/20 border border-zinc-800/50 rounded-[3rem] p-12 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/5 blur-[100px] rounded-full -mr-32 -mt-32" />
                                    <h3 className="text-4xl font-teko font-bold text-white uppercase tracking-tight mb-12 border-l-4 border-yellow-500 pl-6">
                                        Historical <span className="text-yellow-500">Summary</span>
                                    </h3>

                                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                                        <div className="space-y-2">
                                            <span className="text-5xl font-teko font-black text-white">{matches.length}</span>
                                            <p className="text-xs font-black text-zinc-500 uppercase tracking-widest">Completed Operations</p>
                                        </div>
                                        <div className="space-y-2">
                                            <span className="text-5xl font-teko font-black text-white">{matches.filter(m => m.status === 'completed').length}</span>
                                            <p className="text-xs font-black text-zinc-500 uppercase tracking-widest">Verified Results</p>
                                        </div>
                                        <div className="space-y-2">
                                            <span className="text-5xl font-teko font-black text-white">{matches.length > 0 ? [...new Set(matches.map(m => m.mapName))].length : 0}</span>
                                            <p className="text-xs font-black text-zinc-500 uppercase tracking-widest">Tactical Terrains</p>
                                        </div>
                                        <div className="space-y-2">
                                            <span className="text-5xl font-teko font-black text-yellow-500">{season.status}</span>
                                            <p className="text-xs font-black text-zinc-500 uppercase tracking-widest">Current Status</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="matches-tab"
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                transition={{ duration: 0.2 }}
                                className="space-y-8"
                            >
                                {/* Filter Bar */}
                                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                                    <h3 className="text-3xl font-teko font-bold text-white uppercase tracking-tight">
                                        Operation <span className="text-yellow-500">Logs</span>
                                    </h3>
                                    <div className="relative w-full md:w-96">
                                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                                        <input
                                            type="text"
                                            placeholder="SEARCH MATCHES OR MAPS..."
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            className="w-full bg-zinc-900/50 border border-zinc-800 rounded-2xl py-4 pl-12 pr-6 text-sm outline-none focus:border-yellow-500 transition-all font-teko tracking-widest uppercase placeholder:text-zinc-700"
                                        />
                                    </div>
                                </div>

                                {matchesLoading ? (
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {[1, 2, 3, 4, 5, 6].map(i => (
                                            <div key={i} className="h-48 bg-zinc-900/40 border border-zinc-800 rounded-3xl animate-pulse" />
                                        ))}
                                    </div>
                                ) : filteredMatches.length > 0 ? (
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {filteredMatches.map((match, idx) => (
                                            <ScrollReveal key={match._id} delay={idx * 0.05}>
                                                <div
                                                    onClick={() => navigate(`/leaderboard?seasonId=${seasonId}&matchId=${match._id}`)}
                                                    className="bg-zinc-900/30 border border-zinc-800 hover:border-yellow-500/50 rounded-3xl p-6 group cursor-pointer transition-all duration-300 relative overflow-hidden"
                                                >
                                                    <div className="flex justify-between items-start mb-6">
                                                        <div className={cn(
                                                            "px-3 py-1 rounded-lg text-[8px] font-black uppercase tracking-widest",
                                                            match.status === 'completed' ? "bg-green-500/10 text-green-500" :
                                                                match.status === 'live' ? "bg-red-500 text-white animate-pulse" :
                                                                    "bg-zinc-800 text-zinc-500"
                                                        )}>
                                                            {match.status}
                                                        </div>
                                                        <span className="text-zinc-600 font-teko font-bold text-xl group-hover:text-yellow-500 transition-colors">#{match.matchNumber}</span>
                                                    </div>

                                                    <h4 className="text-2xl font-teko font-black text-white uppercase tracking-tight mb-4 group-hover:text-yellow-500 transition-colors">
                                                        {match.mapName}
                                                    </h4>

                                                    <div className="space-y-2">
                                                        <div className="flex items-center gap-3 text-zinc-500">
                                                            <Calendar className="w-3 h-3" />
                                                            <span className="text-[10px] font-bold uppercase tracking-widest">{new Date(match.dateTime).toLocaleDateString()}</span>
                                                        </div>
                                                        <div className="flex items-center gap-3 text-zinc-500">
                                                            <Clock className="w-3 h-3" />
                                                            <span className="text-[10px] font-bold uppercase tracking-widest">{new Date(match.dateTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                                                        </div>
                                                    </div>

                                                    <div className="mt-6 pt-6 border-t border-zinc-800/50 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                                                        <span className="text-[10px] font-black text-yellow-500 uppercase tracking-widest">View Match Intel</span>
                                                        <ChevronRight className="w-4 h-4 text-yellow-500" />
                                                    </div>

                                                    {/* Tactical Decor */}
                                                    <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-yellow-500/5 rounded-full blur-2xl group-hover:bg-yellow-500/10 transition-colors" />
                                                </div>
                                            </ScrollReveal>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="text-center py-24 bg-zinc-900/10 border border-zinc-800/50 border-dashed rounded-[3rem]">
                                        <CrosshairIcon className="w-16 h-16 text-zinc-800 mx-auto opacity-20 mb-6" />
                                        <h4 className="text-2xl font-teko text-zinc-500 uppercase tracking-widest">No matching operations recorded</h4>
                                        <p className="text-zinc-600 font-rajdhani uppercase tracking-wider mt-2">Try adjusting your tactical search query</p>
                                    </div>
                                )}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </main>

            <Footer />
        </div>
    );
}
