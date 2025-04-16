import React, { useState } from "react"
import { Section, Template, ProjectCard, TechFilter } from "../../components"
import { projects } from "../../data/projectData"

export const ProjectsPage: React.FC = () => {
    const projectsCategories = ["Todos", "Full stack", "Back-end", "Front-end"];
    const [currentFilter, setCurrentFilter] = useState(projectsCategories[0]);

    const filteredProjects = currentFilter == projectsCategories[0] ? projects : projects.filter((project) => project.category.includes(currentFilter));

    return (
        <Template>
            <Section style="pt-[8rem] flex-col items-center justify-center gap-5 md:gap-10">
                <TechFilter 
                    filtersCategory={projectsCategories}
                    onFilterChange={(filter) => setCurrentFilter(filter)}
                />
                <div className="w-full grid gap-6 justify-center place-items-center lg:grid-cols-2 [@media(min-width:1024px)]:[grid-template-columns:repeat(auto-fit,minmax(450px,1fr))]">
                    {filteredProjects.map((project, key) => (
                        <ProjectCard key={key} style={"lg:w-[450px] md:w-[450px] sm:w-[450px] w-full"} projectDetails={project} />
                    ))}
                </div>
            </Section>
        </Template>
    )
}