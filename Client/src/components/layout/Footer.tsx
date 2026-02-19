import { CONTACT } from "@/constants/data";
import { Facebook, Twitter, Instagram, Mail, ChevronUp } from "lucide-react";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="bg-zinc-950 border-t border-zinc-900 text-zinc-400 py-16 font-rajdhani">
            <div className="section-container relative">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl font-teko text-white font-bold uppercase tracking-wider mb-2">
                            BGMI <span className="text-yellow-500">CHAMPIONSHIP</span>
                        </h2>
                        <p className="text-sm opacity-70 max-w-xs">
                            The ultimate battle royale esports experience. Join the legends.
                        </p>
                    </div>

                    <div className="flex gap-6">
                        <a href="#" className="p-2 bg-zinc-900 rounded-full hover:bg-yellow-500 hover:text-black transition-colors">
                            <Twitter className="w-5 h-5" />
                        </a>
                        <a href="#" className="p-2 bg-zinc-900 rounded-full hover:bg-pink-600 hover:text-white transition-colors">
                            <Instagram className="w-5 h-5" />
                        </a>
                        <a href="#" className="p-2 bg-zinc-900 rounded-full hover:bg-blue-600 hover:text-white transition-colors">
                            <Facebook className="w-5 h-5" />
                        </a>
                        <a href={`mailto:${CONTACT.email}`} className="p-2 bg-zinc-900 rounded-full hover:bg-green-500 hover:text-white transition-colors">
                            <Mail className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm uppercase tracking-wider">
                    <p>© 2026 BGMI Championship. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-yellow-500 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-yellow-500 transition-colors">Terms of Service</a>
                    </div>
                </div>

                <button
                    onClick={scrollToTop}
                    className="absolute right-4 top-0 -translate-y-1/2 p-3 bg-yellow-500 text-black rounded-full shadow-[0_0_15px_rgba(234,179,8,0.5)] hover:bg-yellow-400 transition-colors animate-bounce"
                    aria-label="Scroll to top"
                >
                    <ChevronUp className="w-5 h-5" />
                </button>
            </div>
        </footer>
    );
}
