import { Outlet, Link } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { Loader2, ShieldAlert, Home, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface ProtectedRouteProps {
    allowedRoles?: string[];
}

export const ProtectedRoute = ({ allowedRoles }: ProtectedRouteProps) => {
    const { user, loading } = useAuth();

    if (loading) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                <Loader2 className="w-10 h-10 text-yellow-500 animate-spin" />
            </div>
        );
    }

    if (!user || (allowedRoles && !allowedRoles.includes(user.role))) {
        // Instead of redirecting, we show an "Access Denied" state on the current URL
        return (
            <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4 font-rajdhani">
                <div className="bg-zinc-900/50 border border-zinc-800 p-12 rounded-3xl max-w-lg w-full text-center backdrop-blur-sm relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-1 bg-red-500 opacity-50" />

                    <div className="mb-8 flex justify-center">
                        <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center border border-red-500/20 group-hover:scale-110 transition-transform duration-500">
                            <ShieldAlert className="w-10 h-10 text-red-500" />
                        </div>
                    </div>

                    <h1 className="text-4xl font-teko font-black text-white mb-4 uppercase tracking-tighter">
                        Access <span className="text-red-500">Denied</span>
                    </h1>

                    <p className="text-zinc-400 mb-10 text-lg uppercase tracking-wider leading-relaxed">
                        {!user
                            ? "This sector is restricted. Admin authentication required to proceed."
                            : "Your current clearance level is insufficient for this tactical operation."
                        }
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/">
                            <Button variant="outline" className="w-full sm:w-auto gap-2">
                                <Home className="w-4 h-4" />
                                RETURN TO BASE
                            </Button>
                        </Link>
                        {!user && (
                            <Link to="/login">
                                <Button variant="neon" className="w-full sm:w-auto gap-2">
                                    <LogIn className="w-4 h-4" />
                                    AUTHENTICATE
                                </Button>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        );
    }

    return <Outlet />;
};
