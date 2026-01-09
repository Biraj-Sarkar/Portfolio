import github from "../assets/github.svg";
import live from "../assets/live.svg";
import { useState, useEffect } from "react";

function useIsMobile() {
    const [isMobile, setIsMobile] = useState(
        window.innerWidth < 768
    );

    useEffect(() => {
        const onResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    return isMobile;
}

export default function ProjectPreview({project}) {
    const [showLive, setShowLive] = useState(false);
    const isMobile = useIsMobile();

    useEffect(() => {
        setShowLive(false);
    }, [project?.id]);

    if (!project) {
        return (
            <div className="flex items-center justify-center h-full text-neutral-400">
                Select a project to view details
            </div>
        )
    }

    const isLive = project.preview?.type === "live";

    return (
        <div
            className="
                w-full h-full
                rounded-2xl
                border border-white/10
                bg-white/5
                p-8
                flex flex-col
                gap-6
            "
        >
            {/* Preview Area */}
            <div className="w-full h-64 rounded-xl overflow-hidden bg-black/10 relative">
                {/* Image Preview */}
                {(!isLive || !showLive || isMobile) && (
                    <div>
                        <img 
                            src={isLive ? project.fallbackImage : project.preview.src}
                            alt={project.title} 
                            className="w-full h-full object-contain"
                        />

                        {isLive && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm">
                                {isMobile ? (
                                    <a 
                                        href={project.preview.src}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="
                                            px-6 py-3
                                            rounded-lg
                                            bg-[#eb6b56]
                                            text-white font-semibold
                                        "
                                    >
                                        Open Live Demo
                                    </a>
                                ) : (
                                    <button
                                        onClick={() => setShowLive(true)}
                                        className="
                                            px-6 py-3
                                            rounded-lg
                                            bg-[#eb6b56]
                                            text-white font-semibold
                                            hover:opacity-90
                                        "
                                    >
                                        View Live Demo
                                    </button>
                                )}
                            </div>                            
                        )}
                    </div>
                )} 
                
                {/* Live iframe (desktop only) */}
                {isLive && showLive && !isMobile && (
                    <iframe
                        src={project.preview.src}
                        title={`${project.title} live demo`}
                        className="w-full h-full border-none"
                        loading="lazy"
                        allow="fullscreen"
                    />
                )}
            </div>

            {/* Title */}
            <h3 className="text-2xl font-semibold flex items-center gap-2">
                {project.title}
                {project.links?.github && (
                    <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={github} alt="Github" className="h-8 w-8" />
                    </a>
                )}
                
                {project.links?.live && (
                    <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={live} alt="Live Demo" className="h-8 w-8" />
                    </a>
                )}
            </h3>

            

            {/* Long Description */}
            <p className="text-neutral-400 leading-relaxed">
                {project.longDescription}
            </p>

            {/* Tech Stack */}
            <div>
                <p className="text-sm font-medium text-neutral-400 mb-2">
                    Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                    {project.techStack?.map((tech) => (
                        <span
                            key={tech}
                            className="
                                px-3 py-1
                                text-sm
                                rounded-full
                                bg-white/10
                                text-neutral-400
                                font-semibold
                            "
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}