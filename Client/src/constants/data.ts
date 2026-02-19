export const TOURNAMENT_INFO = {
    name: "BATTLE GROUNDS MOBILE INDIA",
    subtitle: "OFFLINE CHAMPIONSHIP 2026",
    date: "MARCH 15, 2026",
    location: "KORAMANGALA INDOOR STADIUM, BENGALURU",
    prizePool: "₹ 5,00,000",
    totalTeams: 25,
    mode: "TPP / SQUAD",
    mapRotation: ["ERANGEL", "MIRAMAR", "SANHOK", "ERANGEL", "MIRAMAR"],
    reportingTime: "09:00 AM",
    startTime: "10:30 AM"
};

export const SCHEDULE = [
    { time: "09:00 AM", event: "CHECK-IN & REGISTRATION", type: "admin" },
    { time: "10:00 AM", event: "OPENING CEREMONY", type: "ceremony" },
    { time: "10:30 AM", event: "MATCH 1: ERANGEL", type: "game" },
    { time: "11:15 AM", event: "MATCH 2: MIRAMAR", type: "game" },
    { time: "12:00 PM", event: "LUNCH BREAK", type: "break" },
    { time: "01:00 PM", event: "MATCH 3: SANHOK", type: "game" },
    { time: "01:45 PM", event: "MATCH 4: ERANGEL", type: "game" },
    { time: "02:30 PM", event: "MATCH 5: MIRAMAR", type: "game" },
    { time: "03:30 PM", event: "PRIZE DISTRIBUTION", type: "ceremony" }
];

export const PRIZES = [
    { rank: "1st", amount: "₹ 2,50,000", color: "text-yellow-400", border: "border-yellow-400" },
    { rank: "2nd", amount: "₹ 1,50,000", color: "text-gray-300", border: "border-gray-300" },
    { rank: "3rd", amount: "₹ 75,000", color: "text-orange-600", border: "border-orange-600" },
    { rank: "MVP", amount: "₹ 25,000", color: "text-purple-400", border: "border-purple-400" }
];

export const RULES = [
    "Use of emulators is strictly prohibited.",
    "Teams must check-in 30 mins before match start.",
    "In-game voice chat only. Discord allowed for communication.",
    "Any form of hacking or exploits results in instant disqualification.",
    "Wait for admin instructions before joining the lobby."
];

export const SPONSORS = [
    { name: "TechGear", logo: "TG" },
    { name: "EnergyX", logo: "EX" },
    { name: "StreamPro", logo: "SP" },
    { name: "GamingHub", logo: "GH" }
];

export const CONTACT = {
    address: "Koramangala Indoor Stadium, 80 Feet Road, Bengaluru, Karnataka 560034",
    email: "events@bgmichampionship.com",
    phone: "+91 98765 43210",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.599763784136!2d77.6204043148216!3d12.933423990880757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae144e5fae58d9%3A0xe1b46f4d22187f54!2sKoramangala%20Indoor%20Stadium!5e0!3m2!1sen!2sin!4v1645523456789!5m2!1sen!2sin"
};
