export default function Education() {
    return (
        <section id="education" className="w-full py-20 md:py-28 px-5 flex justify-center">
            <div className="max-w-5xl w-full">
                {/* Heading */}
                <header className="mb-10 text-center md:text-left">
                    <h2 className="text-4xl md:text-5xl font-bold mb-3">
                        Education
                    </h2>
                    <p className="text-neutral-400 max-w-2xl">
                        My academic background and core areas of study.
                    </p>
                </header>

                {/* Education Card */}
                <div className="p-6 md:p-8 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 my-2.5">
                        {/* Left */}
                        <div className="flex justify-between items-center gap-10 flex-col md:flex-row">
                            <div>
                                <h3 className="text-xl font-semibold">
                                    Bachelor of Technology (B.Tech) in Computer Science & Engineering
                                </h3>
                                <p className="text-neutral-400 mt-1">
                                    Indian Institute of Technology Guwahati
                                </p>
                            </div>
                        </div>

                        {/* Right */}
                        <div className="text-sm text-neutral-400 md:text-right">
                            <p>2023 – Present</p>
                        </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 my-2.5">
                        {/* Left */}
                        <div className="flex justify-between items-center gap-10 flex-col md:flex-row">
                            <div>
                                <h3 className="text-xl font-semibold">
                                    Higher Secondary Education (Physics, Chemistry, Mathematics)
                                </h3>
                                <p className="text-neutral-400 mt-1">
                                    Jawahar Navodaya Vidyalaya, North 24 Parganas
                                </p>
                            </div>
                        </div>

                        {/* Right */}
                        <div className="text-sm text-neutral-400 md:text-right">
                            <p>CBSE Board</p>
                            <p>2022</p>
                        </div>
                    </div>
                </div>

                {/* Key Courses */}
                <div className="mt-6">
                    <h3 className="text-3xl font-medium mb-3 text-neutral-800">
                        Key Courses
                    </h3>

                    <div className="flex flex-wrap gap-3">
                        <span className="px-3 py-1 text-sm rounded-full bg-white/10">
                            Data Structures & Algorithms
                        </span>
                        <span className="px-3 py-1 text-sm rounded-full bg-white/10">
                            Computer Architecture
                        </span>
                        <span className="px-3 py-1 text-sm rounded-full bg-white/10">
                            Operating Systems
                        </span>
                        <span className="px-3 py-1 text-sm rounded-full bg-white/10">
                            Database Management System
                        </span>
                        <span className="px-3 py-1 text-sm rounded-full bg-white/10">
                            Machine Learning (Exploring)
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}