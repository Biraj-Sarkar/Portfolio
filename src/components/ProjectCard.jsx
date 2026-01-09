export default function ProjectCard({project, isActive, onSelect}) {
    return (
        <button
            onClick={() => onSelect(project)}
            className={`
                w-full text-left
                px-6 py-5
                rounded-xl
                border
                flex justify-between items-center
                transition-all duration-300
                ${isActive
                    ? "bg-black text-white border-black"
                    : "bg-white border-neutral-300 hover:bg-neutral-100"
                }   
            `}
            aria-pressed={isActive}
        >
            <span className="font-semibold tracking-wide">
                {project.title}
            </span>

            <span
                className={`
                    transition-transform duration-300
                    ${isActive ? "rotate-180" : ""}
                `}
            >
                ▼
            </span>
        </button>
    )
}