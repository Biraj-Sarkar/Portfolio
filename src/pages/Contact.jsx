export default function Contact() {
    return (
        <section
            id="contact"
            className="w-full py-20 md:py-28 px-5 flex justify-center"
        >
            <div className="max-w-4xl w-full">
                {/* Heading */}
                <header className="mb-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Get in Touch
                    </h2>
                    <p className="text-neutral-400 max-w-xl mx-auto">
                        I’m open to internships, collaborations, and learning opportunities.
                        Feel free to reach out.
                    </p>
                </header>

                {/* Contact Methods */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
                    {/* Email */}
                    <a 
                        href="mailto:birajsarkar786@gmail.com"
                        className="
                            p-6 rounded-xl
                            bg-white/5 border border-white/10
                            hover:bg-white/10
                            transition
                            text-center
                        "
                    >
                        <p className="text-sm text-neutral-400 mb-1">Email</p>
                        <p className="font-semibold">
                            birajsarkar786@gmail.com
                        </p>
                    </a>

                    {/* GitHub */}
                    <a 
                        href="https://github.com/Biraj-Sarkar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            p-6 rounded-xl
                            bg-white/5 border border-white/10
                            hover:bg-white/10
                            transition
                            text-center
                        "
                    >
                        <p className="text-sm text-neutral-400 mb-1">Github</p>
                        <p className="font-semibold">
                            github.com/Biraj-Sarkar
                        </p>
                    </a>

                    {/* LinkedIn */}
                    <a 
                        href="https://www.linkedin.com/in/biraj-sarkar-29a141322/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            p-6 rounded-xl
                            bg-white/5 border border-white/10
                            hover:bg-white/10
                            transition
                            text-center
                        "
                    >
                        <p className="text-sm text-neutral-400 mb-1">LinkedIn</p>
                        <p className="font-semibold">
                            Connect with me
                        </p>
                    </a>
                </div>
                
                {/* Optional small note */}
                <p className="text-center text-neutral-500 text-sm">
                    I usually respond within a day.
                </p>
            </div>
        </section>
    )
}