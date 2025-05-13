import 'boxicons/css/boxicons.min.css';

export default function Header() {
    const toggleMobileMenu = () => {
        const mobileMenu = document.getElementById("mobileMenu");
        mobileMenu.classList.toggle("hidden");
    };

    const navLinkClasses = `relative py-1 text-lg hover:text-purple-300 transition-colors
    duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5
    after:bg-purple-400 after:left-0 after:bottom-0 after:transition-all
    hover:after:w-full text-nowrap`;

    return (
        <header className="py-1 px-7 flex justify-between items-center sticky top-0 z-50 w-full border-b-[0.3px] border-[#babaff] bg-black">
            {/* Left section */}
            <div className="flex lg:gap-14 gap-4 items-center">
                <img className="md:w-16 w-12" src="public/images/logo.png" alt="logo" />
            </div>

            {/* Desktop menu */}
            <nav className="hidden md:flex lg:gap-8 gap-4">
                <a href="#hero" className={navLinkClasses}><i className='bx bx-user'></i> Hero</a>
                <a href="#Characters" className={navLinkClasses}><i className='bx bxs-chevrons-up'></i> Characters</a>
                <a href="#arena" className={navLinkClasses}><i className='bx bx-diamond'></i> Arena</a>
            </nav>

            {/* Mobile menu toggle */}
            <button onClick={toggleMobileMenu} className="text-3xl p-2 md:hidden">
                <i className='bx bx-menu'></i>
            </button>

            {/* Mobile menu */}
            <div id="mobileMenu" className="hidden fixed top-14 right-0 left-0 bg-black p-5 md:hidden">
                <nav className="flex flex-col gap-4 items-center">
                    <a href="#hero" className={navLinkClasses}><i className='bx bx-user'></i> Hero</a>
                    <a href="#Characters" className={navLinkClasses}><i className='bx bxs-chevrons-up'></i> Characters</a>
                    <a href="#arena" className={navLinkClasses}><i className='bx bx-diamond'></i> Arena</a>
                </nav>

            </div>
        </header>
    );
}
