import { useState } from "react";
import featuredProjects from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import ProjectPreview from "../components/ProjectPreview";

export default function Projects() {
    const [activeProject, setActiveProject] = useState(featuredProjects[0]);

    const onSelect = (project) => {
        setActiveProject(project);
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-8 py-8">
            <div className="flex flex-col gap-4">
                {featuredProjects.map((project) => (
                    <ProjectCard project={project} isActive={project.id === activeProject?.id} onSelect={onSelect} key={project.id} />
                ))}
            </div>

            <div>
                <ProjectPreview project={activeProject} />
            </div>
        </div>
    )
}