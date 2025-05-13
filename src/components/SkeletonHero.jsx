const SkeletonHero = () => {
    return (
        <main className="w-full h-screen bg-black flex flex-col items-center justify-center gap-4 text-white">
            <div className="w-80 h-8 bg-gray-700 animate-pulse rounded" />
            <div className="w-64 h-6 bg-gray-700 animate-pulse rounded" />
            <div className="w-48 h-4 bg-gray-700 animate-pulse rounded" />
        </main>
    );
};

export default SkeletonHero;
