import { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Characters from "./components/Characters";
import Arena from "./components/Arena";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";

const App = () => {
    const [loading, setLoading] = useState(true);
    const videoRef = useRef(null);

    useEffect(() => {
        const handleLoaded = () => {
            // Simulate delay to feel like it's loading assets
            setTimeout(() => setLoading(false), 1000);
        };

        const video = videoRef.current;
        if (video && video.readyState >= 3) {
            handleLoaded();
        } else {
            video?.addEventListener("canplaythrough", handleLoaded);
        }

        return () => video?.removeEventListener("canplaythrough", handleLoaded);
    }, []);

    return (
        <div className="relative">
            {loading && <LoadingScreen />}
            <div className={`${loading ? "invisible" : "visible"} transition-opacity duration-1000`}>
                <Header />
                <div id="hero">
                    <Hero videoRef={videoRef} />
                </div>
                <div id="Characters">
                    <Characters />
                </div>
                <div id="arena">
                    <Arena />
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default App;
