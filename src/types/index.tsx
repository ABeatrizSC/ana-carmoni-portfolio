export interface ProjectDetails {
    name: string,
    description: string,
    repoLink: string,
    previewLink?: string,
    imageUrl: string,
    technologies: string[],
    showOnHome: boolean,
    category: string[]
}