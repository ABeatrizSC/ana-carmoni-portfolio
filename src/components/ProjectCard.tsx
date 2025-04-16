import githubIcon from "../assets/icons/github-icon.svg";
import previewIcon from "../assets/icons/preview-icon.svg"
import { ProjectDetails } from "../types";
import { technologiesData } from "../data/technologiesData";

interface ProjectCardProps {
    projectDetails: ProjectDetails,
    style?: string
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ projectDetails, style }) => {
    const { name, description, repoLink, previewLink, imageUrl, technologies } = projectDetails;

    return (
        <div className={`bg-third-color px-3 py-4 rounded-[0.75rem] flex flex-col gap-4 h-[660px] w-full max-w-[450px] sm:min-w-[380px] min-w-[300px] shadow-md duration-200 ease-in-out transition-transform hover:scale-105 text-center ${style}`}>
            <img className="rounded-[0.75rem] w-full h-[180px] object-cover" src={imageUrl} alt={`Imagem ilustrativa do projeto ${name}`} />
            <h3 className="text-lg font-semibold uppercase">{name}</h3>
            <p>{description}</p>
            <div className="flex flex-wrap gap-4 w-full items-center justify-center my-3">
                {technologies.map((tech) => {
                    const techDetails = technologiesData.find(t => t.name === tech);
                    return (
                        <img
                            key={tech}
                            src={techDetails?.icon}
                            alt={techDetails?.alt}
                            title={tech}
                            className="w-8"
                        />
                    );
                })}
            </div>

            <div className="mt-auto flex justify-center items-center flex-wrap-reverse pt-2 gap-10 w-full border-t-2 border-secondary-color">
                <a href={repoLink} className="flex gap-2 items-center text-xs p-2" target="_blank">
                    <img className="h-full w-7" src={githubIcon} alt="Ícone do Github" />
                    Repositório
                </a>
                {previewLink && 
                    <a href={previewLink} className="flex gap-2 items-center text-xs p-2" target="_blank"> 
                        <img className="h-full w-7" src={previewIcon} alt="Ícone de um olho" />
                        Preview
                    </a>
                }
            </div>
        </div>
    )
}