import {NavLink} from 'react-router';
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
    const baseLink = "mx-5 px-5 py-2.5 rounded-[5px] transition-colors duration-300 ease-linear hover:bg-[#eb6b56] hover:text-white";

    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const navRef = useRef(null);
    const hamburgerRef = useRef(null);

    const closeMenu = () => setMenuOpen(false);
    
    const handleScroll = () => {
        if (!navRef.current) return;

        const navHeight = navRef.current.offsetHeight;
        setIsScrolled(window.scrollY > navHeight);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (!hamburgerRef.current) return;

        if (menuOpen) {
            hamburgerRef.current.classList.add("hidden");
        } else {
            hamburgerRef.current.classList.remove("hidden");
        }
    }, [menuOpen])

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => (document.body.style.overflow = "");
    }, [menuOpen]);
    
    useEffect(() => {
        const handleKey = e => {
            if (e.key === "Escape") closeMenu();
        };
        if (menuOpen) window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [menuOpen]);


    return (
        <>
            <nav 
                ref={navRef}
                className={`
                    sticky top-0 w-full px-6 md:px-12 py-5 z-50
                    flex justify-between items-center
                    transition-all duration-300 ease-in-out
                    border-b border-white/10
                    ${isScrolled ? 'bg-black/80 backdrop-blur-lg' : 'bg-white/70 backdrop-blur-md'}
                `}
            >
                {/* Logo */}
                <NavLink to="/" className="text-[28px] font-bold text-[#eb6b56]">
                    Biraj Sarkar
                </NavLink>

                {/* Desktop Menu */}
                <ul className='hidden md:flex font-medium'>
                    {["/", "/education", "/projects", "/contact"].map((path, i) => {
                        const labels = ["Home", "Education", "Projects", "Contact"];

                        return (
                            <li key={path}>
                                <NavLink
                                    to={path}
                                    className={({isActive}) => 
                                    `${baseLink} ${isActive
                                        ? "text-[#eb6b56]"
                                        : ""
                                    }`
                                    }
                                >
                                    {labels[i]}
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>

                {/* Hamburger Button */}
                <button 
                    className='md:hidden text-white text-3xl cursor-pointer' 
                    onClick={() => setMenuOpen(prev => !prev)} 
                    aria-label='Open menu'
                    ref={hamburgerRef}
                >
                    ☰
                </button>
            </nav>

            {/* Mobile Overlay */}
            <div
                className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300
                    ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
                `}
                onClick={closeMenu}
            />

            {/* Mobile Menu Overlay */}
            <div
                className={`
                    flex justify-center
                    fixed top-0 right-0 h-full w-[75%] max-w-sm
                    bg-black/70 backdrop-blur-lg z-60
                    transform transition-transform duration-300 ease-in-out
                    ${menuOpen ? "translate-x-0" : "translate-x-full"}
                `}
                aria-hidden={!menuOpen}
            >
                {/* Close Button */}
                <button className="absolute top-6 right-8 text-4xl text-white cursor-pointer" onClick={closeMenu} aria-label='Close menu'>
                    &times;
                </button>

                <ul className="flex flex-col items-center gap-6 pt-36 text-xl font-medium">
                    {["/", "/education", "/projects", "/contact"].map((path, i) => {
                        const labels = ["Home", "Education", "Projects", "Contact"];

                        return (
                            <li key={path}>
                                <NavLink
                                    to={path}
                                    onClick={closeMenu}
                                    className={({isActive}) => 
                                    `${baseLink}  ${isActive
                                        ? "text-[#eb6b56]"
                                        : "text-white"
                                    }`
                                    }
                                >
                                    {labels[i]}
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
}