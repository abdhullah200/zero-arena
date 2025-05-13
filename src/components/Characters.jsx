import { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Spline from "@splinetool/react-spline";

function CustomCursor({ isHovering3D }) {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const cursorRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };
        document.addEventListener("mousemove", handleMouseMove);
        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <motion.div
            ref={cursorRef}
            className="fixed top-0 left-0 z-50 pointer-events-none mix-blend-difference"
            animate={{
                x: position.x - (isHovering3D ? 12 : 15),
                y: position.y - (isHovering3D ? 12 : 15),
                scale: isHovering3D ? 1.5 : 1,
            }}
            transition={{
                type: "spring",
                stiffness: 500,
                damping: 28,
                mass: 0.5,
            }}
        >
            <motion.div
                className={`rounded-full ${isHovering3D ? "bg-violet-500" : "bg-white"}`}
                animate={{
                    width: isHovering3D ? "24px" : "40px",
                    height: isHovering3D ? "24px" : "40px",
                }}
                transition={{ duration: 0.2 }}
            />
            {isHovering3D && (
                <motion.div
                    className="absolute inset-0 rounded-full bg-transition border border-violet-500"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 2, opacity: 0.5 }}
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                />
            )}
        </motion.div>
    );
}

const Characters = () => {
    const [selectedAvatar, setSelectedAvatar] = useState("VIKI");
    const [cursorInModelArea, setCursorInModelArea] = useState(false);

    const Avatar = {
        VIKI: {
            name: "Viki",
            power: 75,
            stable: 95,
            penetrate: 100,
            portable: 80,
            stars: 3,
        },
        EVA: {
            name: "Eva",
            power: 90,
            stable: 94,
            penetrate: 50,
            portable: 10,
            stars: 4,
        },
    };

    const currentAvatar = Avatar[selectedAvatar];

    const handle3DAreaMouseEnter = () => setCursorInModelArea(true);
    const handle3DAreaMouseLeave = () => setCursorInModelArea(false);

    return (
        <div id="Characters" className="relative w-full min-h-screen overflow-hidden pb-10 bg-black text-white">
            <CustomCursor isHovering3D={cursorInModelArea} />

            {/* Title */}
            <div className="relative z-10 pt-10 text-center">
                <h1
                    className="text-5xl font-bold tracking-widest mb-10"
                    style={{ textShadow: "0 0 10px rgba(255, 255, 255, 0.7)" }}
                >
                    FIGHTERS
                </h1>
            </div>

            {/* Main Content */}
            <div className="relative z-10 flex flex-col lg:flex-row items-center w-full px-4 gap-8">
                {/* Left Panel */}
                <div className="w-full lg:w-1/2 flex flex-col lg:ml-10">
                    {/* Info Panel */}
                    <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg p-6 mb-6 border border-gray-800 shadow-[0_0_15px_rgba(167,139,250,0.2)]">
                        <h2 className="text-2xl font-semibold mb-4">{currentAvatar.name}</h2>
                        <div className="space-y-5">
                            {["power", "stable", "penetrate", "portable"].map((stat) => (
                                <div className="flex items-center" key={stat}>
                                    <span className="w-24 capitalize text-gray-400">{stat}</span>
                                    <div className="flex-1 h-4 bg-gray-800 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-gradient-to-r from-purple-500 to-white"
                                            style={{ width: `${currentAvatar[stat]}%` }}
                                        />
                                    </div>
                                    <span className="ml-2">{currentAvatar[stat]}</span>
                                </div>
                            ))}
                        </div>
                        <div className="flex gap-3 mt-6">
                            <button className="px-4 py-2 bg-violet-900 rounded-md hover:opacity-70 transition-all">
                                Proficient
                            </button>
                            <button className="px-4 py-2 bg-violet-900 rounded-md hover:opacity-70 transition-all">
                                Redemption
                            </button>
                        </div>
                    </div>

                    {/* Avatar Select */}
                    <div className="grid grid-cols-2 gap-4">
                        {Object.entries(Avatar).map(([key, avatar]) => (
                            <div
                                key={key}
                                className="relative bg-gray-900/70 backdrop-blur-sm rounded p-3 border flex flex-col items-center cursor-pointer transition-all"
                                onClick={() => setSelectedAvatar(key)}
                            >
                                <div className="text-lg mb-2">{avatar.name}</div>
                                <div className="w-20 h-20 bg-gray-800/50 rounded-md flex justify-center items-center mb-2">
                                    <img src={`/images/${key}.png`} alt={avatar.name} />
                                </div>
                                <div className="flex">
                                    {[...Array(avatar.stars)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className="w-4 h-4 fill-violet-400 text-violet-500"
                                        />
                                    ))}
                                </div>
                                <AnimatePresence>
                                    {selectedAvatar === key && (
                                        <motion.div
                                            className="absolute inset-0 border-2 border-violet-500 rounded-lg pointer-events-none"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                        />
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Panel - 3D Avatar */}
                <div
                    className="relative w-full lg:w-1/2 h-[400px] sm:h-[500px] md:h-[600px] flex items-center justify-center"
                    onMouseEnter={handle3DAreaMouseEnter}
                    onMouseLeave={handle3DAreaMouseLeave}
                >
                    <AnimatePresence mode="wait">
                        {selectedAvatar === "VIKI" ? (
                            <motion.div
                                key="VIKI"
                                className="w-full h-full"
                                initial={{ x: "100%" }}
                                animate={{ x: 0 }}
                                exit={{ x: "-100%" }}
                                transition={{ duration: 0.5 }}
                            >
                                <Spline scene="https://prod.spline.design/0isUaMLuoij1gSwu/scene.splinecode" />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="EVA"
                                className="w-full h-full"
                                initial={{ x: "100%" }}
                                animate={{ x: 0 }}
                                exit={{ x: "-100%" }}
                                transition={{ duration: 0.5 }}
                            >
                                <Spline scene="https://prod.spline.design/5nLn1r5v-ZTQ7uTC/scene.splinecode" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default Characters;
