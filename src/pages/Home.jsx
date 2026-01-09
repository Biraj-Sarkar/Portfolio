import myPhoto from "../assets/MyPhoto.png";
import myResume from "../assets/MyResume.pdf";
import html from "../assets/tech/html.png";
import css from "../assets/tech/css.png";
import js from "../assets/tech/js.png";
import python from "../assets/tech/python.png";
import cImg from "../assets/tech/c-removebg-preview.png";
import CImg from "../assets/tech/c++-removebg-preview.png";
import git from "../assets/tech/git.png";
import mongoDb from "../assets/tech/mongoDb.png";
import reactJs from "../assets/tech/reactJs.png";
import tailwind from "../assets/tech/tailwind.png";
import sql from "../assets/tech/sql.png";
import featuredProjects from "../data/projects";

export default function Home() {
    return (
        <>
            <section
                id="hero-section"
                className="
                    relative
                    min-h-screen w-full    
                    flex flex-col justify-center items-center
                    gap-8 md:gap-12 
                    text-center px-5
                    motion-safe:animate-heroReveal
                    delay-2000
                "
            >
                {/* Background Image */}
                <div
                    className="
                        absolute inset-0
                        bg-[url('/src/assets/bg.png')]
                        bg-cover bg-center bg-no-repeat
                        z-0
                    "
                />

                {/* Gradient Overlay */}
                <div
                    className="
                        absolute inset-0
                        bg-linear-to-b
                        from-white/90 via-white/60 to-white/90
                        z-10
                    "
                />
                {/* Content */}
                <div className="relative z-20">
                    <h1 className="text-4xl md:text-5xl font-bold">Hello, I'm <span className="text-[#eb6b56]">Biraj Sarkar</span></h1>
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <img 
                            className="h-40 w-40 rounded-full object-cover"
                            src={myPhoto} alt="Profile"
                            loading="lazy"
                        />
                        <div className="max-w-md">
                            <p className="text-lg mb-6">Web Developer | UI/UX Enthusiast | Problem Solver</p>
                            <a href={myResume} 
                                className="
                                    inline-block
                                    bg-linear-to-br from-[#eb6b56] to-[#ff7a65]
                                    px-8.5 py-3.5
                                    rounded-4xl
                                    text-white font-semibold tracking-wide cursor-pointer

                                    transition-[transform,box-shadow,background,filter]
                                    duration-220 ease-in-out

                                    hover:scale-[1.08]
                                    hover:shadow-[0_10px_25px_rgba(235,107,86,0.35),0_4px_10px_rgba(0,0,0,0.15)]
                                    hover:brightness-[1.08]
                                    
                                    active:scale-103
                                    active:shadow-[0_5px_12px_rgba(0, 0, 0, 0.2)]

                                    focus-visible:outline-none
                                    focus-visible:shadow-[0_0_0_3px_rgba(235, 107, 86, 0.4)]
                                "
                            >
                                View My Resume
                            </a>
                        </div>
                    </div>
                    <span className="mt-12 opacity-60 animate-bounce">
                        ↓ Scroll
                    </span>
                </div>
            </section>
            
            <section
                id="about"
                className="w-full py-20 md:py-28 px-5 flex justify-center"
            >
                <div className="max-w-5xl w-full">
                    {/* Heading */}
                    <header className="mb-10 text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold mb-3">About Me</h2>
                        <p className="text-neutral-400 max-w-2xl">A quick snapshot of who I am and how I approach building software.</p>
                    </header>

                    {/* Content */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                        {/* Left: Narrative */}
                        <div className="space-y-5 text-lg leading-relaxed text-neutral-300">
                            <p>
                                I’m a Computer Science undergraduate who enjoys building clean,
                                structured web applications with a strong focus on usability
                                and maintainability.
                            </p>

                            <p>
                                I primarily work with modern frontend tools like React and Tailwind,
                                while also caring about how things work beneath the surface —
                                from data flow to system-level concepts.
                            </p>

                            <p>
                                I like solving problems that sit at the intersection of
                                design, logic, and performance.
                            </p>

                            <p className="text-neutral-400">
                                Currently exploring full-stack development and machine learning,
                                and building projects that reflect real-world workflows.
                            </p>
                        </div>

                        {/* Right: Focus Pillars */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-6">
                            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                                <h3 className="font-semibold text-lg mb-2">
                                    Frontend Engineering
                                </h3>
                                <p className="text-sm text-neutral-400">
                                    Building responsive, accessible interfaces using modern React and Tailwind.
                                </p>
                            </div>
                            
                            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                                <h3 className="font-semibold text-lg mb-2">
                                    Problem Solving
                                </h3>
                                <p className="text-sm text-neutral-400">
                                    Strong foundation in DSA and logical thinking, applied to real-world features.
                                </p>
                            </div>
                            
                            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                                <h3 className="font-semibold text-lg mb-2">
                                    Machine Learning (Exploring)
                                </h3>
                                <p className="text-sm text-neutral-400">
                                    Learning the fundamentals of machine learning and experimenting with data-driven models.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section
                id="skills"
                className="w-full py-20 md:py-28 px-5 flex justify-center"
            >
                <div className="max-w-5xl w-full">
                    {/* Heading */}
                    <header>
                        <h2 className="text-3xl md:text-4xl font-bold mb-3">My Skills</h2>
                        <p className="text-neutral-400 max-w-2xl">A curated set of tools I use for frontend development, problem solving, and exploring machine learning workflows.</p>
                    </header>

                    <div>
                        <h3 className="font-semibold text-lg mb-2">
                            Technical Languages
                        </h3>
                        <div className="flex flex-wrap justify-center gap-6 md:gap-16 my-10 w-full">
                            <div className="animate-hover bg-[linear-gradient(-45.13deg,#d7b090_40%,#383850_100%)] flex items-center justify-center rounded-full p-4">
                                <img title="C" src={cImg} alt="C" className=" hover:animate-spin w-12 h-12 md:w-20 md:h-20 object-contain" />
                            </div>
                            <div className="animate-hover bg-[linear-gradient(-45.13deg,#d7b090_40%,#383850_100%)] flex items-center justify-center rounded-full p-4">
                                <img title="C++" src={CImg} alt="C++" className=" hover:animate-spin w-12 h-12 md:w-20 md:h-20 object-contain" />
                            </div>
                            <div className="animate-hover bg-[linear-gradient(-45.13deg,#d7b090_40%,#383850_100%)] flex items-center justify-center rounded-full p-4">
                                <img title="Python" src={python} alt="Python" className=" hover:animate-spin w-12 h-12 md:w-20 md:h-20 object-contain" />
                            </div>
                            <div className="animate-hover bg-[linear-gradient(-45.13deg,#d7b090_40%,#383850_100%)] flex items-center justify-center rounded-full p-4">
                                <img title="HTML" src={html} alt="HTML" className=" hover:animate-spin w-12 h-12 md:w-20 md:h-20 object-contain" />
                            </div>
                            <div className="animate-hover bg-[linear-gradient(-45.13deg,#d7b090_40%,#383850_100%)] flex items-center justify-center rounded-full p-4">
                                <img title="CSS" src={css} alt="CSS" className=" hover:animate-spin w-12 h-12 md:w-20 md:h-20 object-contain" />
                            </div>
                            <div className="animate-hover bg-[linear-gradient(-45.13deg,#d7b090_40%,#383850_100%)] flex items-center justify-center rounded-full p-4">
                                <img title="JavaScript" src={js} alt="JavaScript" className=" hover:animate-spin w-12 h-12 md:w-20 md:h-20 object-contain" />
                            </div>
                            <div className="animate-hover bg-[linear-gradient(-45.13deg,#d7b090_40%,#383850_100%)] flex items-center justify-center rounded-full p-4">
                                <img title="SQL" src={sql} alt="SQL" className=" hover:animate-spin w-12 h-12 md:w-20 md:h-20 object-contain" />
                            </div>
                            <div className="animate-hover bg-[linear-gradient(-45.13deg,#d7b090_40%,#383850_100%)] flex items-center justify-center rounded-full p-4">
                                <img title="MongoDB" src={mongoDb} alt="MongoDB" className=" hover:animate-spin w-12 h-12 md:w-20 md:h-20 object-contain" />
                            </div>
                        </div>
                        
                        <h3 className="font-semibold text-lg mb-2">
                            Technologies and Frameworks
                        </h3>
                        <div className="flex flex-wrap justify-center gap-6 md:gap-16 my-10 w-full">
                            <div className="animate-hover bg-[linear-gradient(-45.13deg,#d7b090_40%,#383850_100%)] flex items-center justify-center rounded-full p-4">
                                <img title="React" src={reactJs} alt="React" className=" hover:animate-spin w-12 h-12 md:w-20 md:h-20 object-contain" />
                            </div>
                            <div className="animate-hover bg-[linear-gradient(-45.13deg,#d7b090_40%,#383850_100%)] flex items-center justify-center rounded-full p-4">
                                <img title="Taiwind" src={tailwind} alt="Tailwind" className=" hover:animate-spin w-12 h-12 md:w-20 md:h-20 object-contain" />
                            </div>
                            <div className="animate-hover bg-[linear-gradient(-45.13deg,#d7b090_40%,#383850_100%)] flex items-center justify-center rounded-full p-4">
                                <img title="Git" src={git} alt="Git" className=" hover:animate-spin w-12 h-12 md:w-20 md:h-20 object-contain" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section
                id="projects"
                className="w-full py-20 md:py-28 px-5 flex justify-center"
            >
                <div className="max-w-5xl w-full">
                    {/* Heading */}
                    <header className="mb-10 text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold mb-3">Featured Projects</h2>
                        <p className="text-neutral-400 max-w-2xl">A few projects that showcase my work in frontend, full-stack, and problem-solving.</p>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featuredProjects.map(project => {
                        return (
                            <div key={project.id} 
                                className="
                                flex flex-col 
                                p-6 rounded-xl 
                                bg-white/5 
                                border border-white/10
                                hover:-translate-y-0.5
                                hover:shadow-lg
                                transition-all duration-300
                            ">
                                <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                                <p className="text-sm text-neutral-400">{project.description}</p>
                                <p className="text-xs uppercase tracking-wide text-neutral-500 mt-2">{project.techStack.join(" · ")}</p>
                                <div className="mt-3 flex gap-4 text-sm font-medium">
                                    {project.links?.github && (
                                        <a 
                                            href={project.links.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[#eb6b56] hover:underline"
                                        >
                                            GitHub
                                        </a>
                                    )}
                                    {project.links?.live && (
                                        <a 
                                            href={project.links.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[#eb6b56] hover:underline"
                                        >
                                            Live
                                        </a>
                                    )}
                                </div>
                            </div>
                        )
                    })}
                    </div>
                </div>
            </section>

            <section
                id="cta"
                className="w-full py-20 md:py-28 px-5 flex justify-center"
            >
                <div className="
                    max-w-4xl w-full
                    text-center
                    rounded-2xl
                    bg-white/5 
                    border border-white/10
                    px-6 md:px-12 py-14
                ">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Let’s build something meaningful
                    </h2>

                    <p className="text-neutral-400 max-w-2xl mx-auto mb-10">
                        I’m open to internships, collaborations, and learning opportunities.
                        Feel free to reach out if you’d like to connect.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a
                            href="/contact"
                            className="
                            inline-block
                            bg-linear-to-br from-[#eb6b56] to-[#ff7a65]
                            px-8 py-3.5
                            rounded-full
                            text-white font-semibold
                            transition-all duration-300
                            hover:scale-[1.06]
                            hover:shadow-[0_10px_25px_rgba(235,107,86,0.35)]
                            focus-visible:outline-none
                            focus-visible:shadow-[0_0_0_3px_rgba(235,107,86,0.4)]
                            "
                        >
                            Contact Me
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}