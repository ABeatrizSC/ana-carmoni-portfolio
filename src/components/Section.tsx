interface SectionProps {
    id?: string,
    style ?: string,
    children: React.ReactNode
}

export const Section: React.FC<SectionProps> = ({ id, style, children }) => {
    return (
        <section id={id} className={`flex px-5 pb-[100px] sm:px-6 lg:px-10 scroll-mt-[7rem] ${style}`}>
            {children}
        </section>
    )
}