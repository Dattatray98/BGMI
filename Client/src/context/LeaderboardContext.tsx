import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { type Team } from "@/constants/leaderboardData";
import { useAuth } from "./AuthContext";
import { useTeams } from "@/hooks/useTeams";

interface LeaderboardContextType {
    teams: Team[];
    updateTeams: (newTeams: Team[]) => Promise<void>;
    addTeam: (teamData: Partial<Team>) => void;
    verifyTeam: (teamName: string) => void;
    resetTeams: () => void;
    loading: boolean;
}

const LeaderboardContext = createContext<LeaderboardContextType | undefined>(undefined);

export function LeaderboardProvider({ children }: { children: ReactNode }) {
    const { user } = useAuth();
    const { fetchTeams: getTeamsApi, updateTeamsScore: pushTeamsApi } = useTeams();
    const [teams, setTeams] = useState<Team[]>([]);
    const [loading, setLoading] = useState(true);

    const loadTeams = async () => {
        setLoading(true);
        try {
            const data = await getTeamsApi();
            setTeams(data);
        } catch (error) {
            console.error("Failed to load teams", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadTeams();
    }, [user]);

    const updateTeams = async (newTeams: Team[]) => {
        // Optimistic update
        setTeams(newTeams);

        if (user && user.role === 'admin') {
            try {
                await pushTeamsApi(newTeams);
            } catch (error) {
                console.error('Failed to update teams on server', error);
                // Rollback if needed
            }
        }

        localStorage.setItem("bgmi_leaderboard", JSON.stringify(newTeams));
    };

    const addTeam = (teamData: Partial<Team>) => {
        const newTeam: Team = {
            rank: teams.length + 1,
            teamName: teamData.teamName || "Unknown Team",
            totalKills: 0,
            placementPoints: 0,
            totalPoints: 0,
            wins: 0,
            isVerified: false,
            ...teamData
        };
        updateTeams([...teams, newTeam]);
    };

    const verifyTeam = (teamName: string) => {
        const updatedTeams = teams.map(team =>
            team.teamName === teamName ? { ...team, isVerified: true } : team
        );
        updateTeams(updatedTeams);
    };

    const resetTeams = () => {
        setTeams([]);
        localStorage.removeItem("bgmi_leaderboard");
    };

    return (
        <LeaderboardContext.Provider value={{ teams, updateTeams, addTeam, verifyTeam, resetTeams, loading }}>
            {children}
        </LeaderboardContext.Provider>
    );
}

export function useLeaderboard() {
    const context = useContext(LeaderboardContext);
    if (context === undefined) {
        throw new Error("useLeaderboard must be used within a LeaderboardProvider");
    }
    return context;
}
