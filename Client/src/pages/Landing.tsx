import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import EventInfo from "@/components/sections/EventInfo";
import Schedule from "@/components/sections/Schedule";
import Rules from "@/components/sections/Rules";
import Prizes from "@/components/sections/Prizes";
import Venue from "@/components/sections/Venue";
import FAQ from "@/components/sections/FAQ";
import Sponsors from "@/components/sections/Sponsors";
import Footer from "@/components/layout/Footer";

export default function Landing() {
    return (
        <div className="bg-black min-h-screen text-gray-100 font-rajdhani selection:bg-yellow-500 selection:text-black">
            <Navbar />

            <main>
                <div id="#">
                    <Hero />
                </div>

                <div className="relative z-20 -mt-20 px-4">
                    <EventInfo />
                </div>

                <div id="schedule">
                    <Schedule />
                </div>

                <div id="prizes">
                    <Prizes />
                </div>

                <div id="rules">
                    <Rules />
                </div>

                <div id="venue">
                    <Venue />
                </div>

                <div id="faq">
                    <FAQ />
                </div>

                <div id="sponsors">
                    <Sponsors />
                </div>
            </main>

            <Footer />
        </div>
    );
}
