import { NavLink } from "react-router";
import myResume from "../assets/myResume.pdf";

export default function Footer() {
    return (
        <footer className="w-full px-12 py-5 bg-black/90 backdrop-blur-md text-white">
            <h2 className="w-full text-center sm:text-left text-3xl md:text-5xl font-bold">Biraj Sarkar</h2>

            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5  py-6">
                <div className="flex flex-col justify-center sm:col-span-2 md:col-auto">
                    <p>Computer Science Undergraduate</p>
                    <p>Frontend / Full-Stack Developer</p>
                    <a href="mailto:birajsarkar786@gmail.com" className="font-extralight">birajsarkar786@gmail.com</a>
                </div>

                <nav className="flex md:justify-center items-center">
                    <ul className="space-y-2">
                        {["/", "/projects", "/contact"].map((path, i) => {
                            const labels = ["Home", "Projects", "Contact"];

                            return (
                                <li key={path}>
                                    <NavLink to={path}>
                                        {labels[i]}
                                    </NavLink>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                <nav className="flex md:justify-end items-center">
                    <ul className="space-y-2">
                        <li><a href="https://github.com/Biraj-Sarkar">GitHub</a></li>
                        <li><a href="https://www.linkedin.com/in/biraj-sarkar-29a141322/">LinkedIn</a></li>
                        <li><a href={myResume}>Resume</a></li>
                    </ul>
                </nav>
            </section>

            <small className="block w-full text-center">&copy; 2026 Biraj Sarkar | All Rights Reserved</small>
        </footer>
    )
}