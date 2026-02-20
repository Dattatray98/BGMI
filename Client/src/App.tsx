import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "@/pages/Landing";
import Leaderboard from "@/pages/Leaderboard";
import Admin from "@/pages/Admin";
import TeamEntry from "@/pages/TeamEntry";
import TeamDetails from "@/pages/TeamDetails";
import Login from "@/pages/Login";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsConditions from "@/pages/TermsConditions";
import { LeaderboardProvider } from "@/context/LeaderboardContext";
import { AuthProvider } from "@/context/AuthContext";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <LeaderboardProvider>
        <Router>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Landing />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />

            {/* Admin Only Routes */}
            <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
              <Route path="/admin/leaderboard/update" element={<Admin />} />
              <Route path="/admin/entry" element={<TeamEntry />} />
              <Route path="/admin/teams" element={<TeamDetails />} />
            </Route>
          </Routes>
        </Router>
      </LeaderboardProvider>
    </AuthProvider>
  );
}

export default App;