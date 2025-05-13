const SkeletonSection = () => {
    return (
        <section className="w-full h-96 bg-black flex flex-col items-center justify-center gap-4 text-white">
            <div className="w-64 h-6 bg-gray-700 animate-pulse rounded" />
            <div className="w-48 h-5 bg-gray-700 animate-pulse rounded" />
        </section>
    );
};

export default SkeletonSection;
