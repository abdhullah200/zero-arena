import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Characters from "./components/Characters";
import Arena from "./components/Arena";
import Footer from "./components/Footer";
import SkeletonHero from "./components/SkeletonHero";
import SkeletonSection from "./components/SkeletonSection";

const App = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000); // Simulate loading
        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            <Header />
            <div id="hero">{loading ? <SkeletonHero /> : <Hero />}</div>
            <div id="Characters">{loading ? <SkeletonSection /> : <Characters />}</div>
            <div id="arena">{loading ? <SkeletonSection /> : <Arena />}</div>
            <Footer />
        </div>
    );
};

export default App;
