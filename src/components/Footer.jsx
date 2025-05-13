import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

const Footer = () => {
    return (
        <footer className="flex flex-col items-center lg:mt-[15%] mt-[25%] py-8 md:px-16 px-8 border-t-[0.3px] border-[#babaff]">
            {/* Main content row */}
            <div className="w-full flex items-center justify-between">
                <img className="h-10" src="public/images/illu-text.png" alt="Illu-text" />

                <img className="h-16 md:inline hidden" src="public/images/illu-logo.png" alt="Illu-logo" />

                <div className="flex gap-4">
                    <a
                        className="md:text-3xl text-2xl hover:text-violet-600 duration-300"
                        href="https://www.linkedin.com/in/abdhullah-ariff-9a5715297/"
                    >
                        <FaLinkedin size={24} />
                    </a>

                    <a
                        className="md:text-3xl text-2xl hover:text-violet-600 duration-300"
                        href="https://github.com/abdhullah200"
                    >
                        <FaGithub size={24} />
                    </a>

                    <a
                        className="md:text-3xl text-2xl hover:text-violet-600 duration-300"
                        href="https://www.instagram.com/abdhullah_ariff/"
                    >
                        <FaInstagram size={24} />
                    </a>

                    <a
                        className="md:text-3xl text-2xl hover:text-violet-600 duration-300"
                        href="https://abdhullahariffdev.vercel.app/"
                    >
                        <CgWebsite size={24} />
                    </a>
                </div>
            </div>

            {/* Copyright line */}
            <p className="text-sm text-gray-400 mt-6 text-center">
                © 2025 Abdhullah Ariff. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
