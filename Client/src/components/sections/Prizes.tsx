import { PRIZES } from "@/constants/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Trophy, Medal, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function Prizes() {
    const getIcon = (rank: string) => {
        switch (rank) {
            case "1st": return <Trophy className="w-12 h-12 mb-4 text-yellow-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]" />;
            case "2nd": return <Medal className="w-10 h-10 mb-4 text-gray-300" />;
            case "3rd": return <Medal className="w-10 h-10 mb-4 text-orange-600" />;
            default: return <Star className="w-10 h-10 mb-4 text-purple-400" />;
        }
    };

    return (
        <section className="section-container bg-black py-24 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-3xl pointer-events-none" />

            <ScrollReveal>
                <h2 className="text-4xl md:text-5xl font-teko text-center mb-16 text-white uppercase tracking-wider relative z-10">
                    Prize <span className="text-yellow-500">Pool</span>
                </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                {PRIZES.map((prize, index) => (
                    <ScrollReveal key={index} delay={index * 0.15} className="h-full">
                        <div className="group relative h-full">
                            <div className={cn(
                                "absolute -inset-0.5 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-500",
                                prize.border.replace('border-', 'bg-')
                            )}></div>
                            <Card className={cn(
                                "relative h-full flex flex-col items-center justify-center text-center py-10 border-2 bg-zinc-900",
                                prize.border
                            )}>
                                {getIcon(prize.rank)}
                                <CardHeader className="pb-2">
                                    <CardTitle className={cn("text-5xl font-teko font-bold", prize.color)}>
                                        {prize.rank}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-3xl font-rajdhani font-semibold text-white tracking-widest">
                                        {prize.amount}
                                    </p>
                                    {prize.rank === "1st" && <span className="text-xs text-yellow-500 uppercase tracking-[0.2em] mt-2 block">Grand Champion</span>}
                                </CardContent>
                            </Card>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </section>
    );
}
