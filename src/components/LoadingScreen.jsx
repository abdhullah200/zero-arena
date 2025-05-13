const LoadingScreen = () => {
    return (
        <div className="fixed inset-0 z-[999] bg-black text-white flex flex-col justify-center items-center">
            <div className="text-2xl font-bold animate-pulse">Loading...</div>
            <div className="mt-4 w-20 h-1 bg-purple-500 animate-ping rounded" />
        </div>
    );
};

export default LoadingScreen;
