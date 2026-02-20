import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Shield, Lock, Eye, FileText } from "lucide-react";

export default function PrivacyPolicy() {
    return (
        <div className="bg-black min-h-screen text-gray-100 font-rajdhani selection:bg-yellow-500 selection:text-black">
            <Navbar />

            <main className="pt-32 pb-16 section-container max-w-4xl mx-auto">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 mb-4">
                            <Shield className="w-4 h-4 text-yellow-500" />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-yellow-500">Legal Document</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-teko font-black text-white uppercase tracking-tighter italic">
                            Privacy <span className="text-yellow-500">Policy</span>
                        </h1>
                        <p className="text-zinc-500 uppercase tracking-widest text-sm mt-4">Effective Date: February 20, 2026</p>
                    </div>
                </ScrollReveal>

                <div className="space-y-12 bg-zinc-900/20 border border-zinc-800 p-8 md:p-12 rounded-3xl backdrop-blur-sm">
                    <section className="space-y-4">
                        <h2 className="text-2xl font-teko text-white uppercase tracking-widest flex items-center gap-3">
                            <Eye className="w-6 h-6 text-yellow-500" /> 1. Information Collection
                        </h2>
                        <p className="text-zinc-400 leading-relaxed">
                            To facilitate the GENESIS ESPORTS 2.0 tournament, we collect essential team information including leader names, email addresses, phone numbers, and identifying documentation. This data is used solely for verification and communication purposes related to the event.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-teko text-white uppercase tracking-widest flex items-center gap-3">
                            <Lock className="w-6 h-6 text-yellow-500" /> 2. Data Security
                        </h2>
                        <p className="text-zinc-400 leading-relaxed">
                            We implement industry-standard security measures, including Cloudinary encryption for document uploads and MongoDB safe storage, to protect your personal information against unauthorized access or disclosure.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-teko text-white uppercase tracking-widest flex items-center gap-3">
                            <FileText className="w-6 h-6 text-yellow-500" /> 3. Third-Party Sharing
                        </h2>
                        <p className="text-zinc-400 leading-relaxed">
                            We do not sell or trade your personal data. Information is only shared with tournament administrators and platform providers (like Cloudinary) for the sole purpose of processing your registration.
                        </p>
                    </section>

                    <section className="border-t border-zinc-800 pt-8 mt-12">
                        <p className="text-zinc-500 text-sm italic">
                            By registering for the tournament, you consent to the storage and processing of your data as described in this policy. For any privacy-related queries, contact us at contact@genesisesports.com.
                        </p>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
}
