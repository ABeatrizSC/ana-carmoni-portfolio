import { Link } from "react-router-dom"
import { Button, Section, TitleBox, ProjectCard } from "../../../components"
import { projects } from "../../../data/projectsData"

export const Projects: React.FC = () => {
    return (
        <Section id="projects" style="justify-center items-center flex-col">
            <TitleBox textCenter={true} >
                <h2>Projetos</h2>
            </TitleBox>
            <div className="flex gap-6 md:gap-5 lg:gap-5 flex-wrap justify-center">
                {projects.filter(project => project.showOnHome)
                    .map(project => (
                        <ProjectCard key={project.name} style={"flex-1 h-[675px]"} projectDetails={project} />
                    )
                )}
            </div>
            <Link to="/projects">
                <Button style="mt-10">
                    Ver todos
                </Button>
            </Link>
        </Section>
    )
}