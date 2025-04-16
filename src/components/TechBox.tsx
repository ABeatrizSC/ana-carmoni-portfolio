interface TechBoxProps {
    techName?: string
    techIcon: string,
    alt: string
}

export const TechBox: React.FC<TechBoxProps> = ({ techName, techIcon, alt }) => {
    return (
        <div className="relative bg-third-color h-fit w-fit py-2 px-5 rounded-[0.75rem] flex items-center justify-center wrap gap-2 overflow-hidden shadow-md ease-in-out transition-transform duration-300 hover:scale-105">
            <img className="h-[25px]" src={techIcon} alt={alt} />
            {techName && 
                <p className="text-sm text-shadow-2xs font-stretch-extra-condensed">{techName}</p>
            }
            <div className="absolute bottom-0 border-b-2 border-secondary-color shadow-md w-full" />
        </div>
    )
}