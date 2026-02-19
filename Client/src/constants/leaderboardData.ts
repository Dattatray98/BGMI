export interface Team {
    rank: number;
    teamName: string;
    totalKills: number;
    placementPoints: number;
    totalPoints: number;
    wins: number;
}

export const LEADERBOARD_DATA: Team[] = [
    { rank: 1, teamName: "GodLike Esports", totalKills: 45, placementPoints: 60, totalPoints: 105, wins: 3 },
    { rank: 2, teamName: "Team Soul", totalKills: 42, placementPoints: 50, totalPoints: 92, wins: 2 },
    { rank: 3, teamName: "XSpark", totalKills: 38, placementPoints: 45, totalPoints: 83, wins: 1 },
    { rank: 4, teamName: "Blind Esports", totalKills: 35, placementPoints: 40, totalPoints: 75, wins: 1 },
    { rank: 5, teamName: "OR Esports", totalKills: 30, placementPoints: 35, totalPoints: 65, wins: 0 },
    { rank: 6, teamName: "Global Esports", totalKills: 28, placementPoints: 30, totalPoints: 58, wins: 0 },
    { rank: 7, teamName: "TSM", totalKills: 25, placementPoints: 28, totalPoints: 53, wins: 0 },
    { rank: 8, teamName: "Team 8Bit", totalKills: 22, placementPoints: 25, totalPoints: 47, wins: 0 },
    { rank: 9, teamName: "Enigma Gaming", totalKills: 20, placementPoints: 22, totalPoints: 42, wins: 0 },
    { rank: 10, teamName: "Hyderabad Hydras", totalKills: 18, placementPoints: 20, totalPoints: 38, wins: 0 },
    { rank: 11, teamName: "Orangutan", totalKills: 15, placementPoints: 18, totalPoints: 33, wins: 0 },
    { rank: 12, teamName: "Revenant Esports", totalKills: 12, placementPoints: 15, totalPoints: 27, wins: 0 },
    { rank: 13, teamName: "Numen Gaming", totalKills: 10, placementPoints: 12, totalPoints: 22, wins: 0 },
    { rank: 14, teamName: "Gods Reign", totalKills: 8, placementPoints: 10, totalPoints: 18, wins: 0 },
    { rank: 15, teamName: "Team INSane", totalKills: 6, placementPoints: 8, totalPoints: 14, wins: 0 },
    { rank: 16, teamName: "Entity Gaming", totalKills: 4, placementPoints: 5, totalPoints: 9, wins: 0 }
];
