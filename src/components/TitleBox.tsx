interface TitleBoxProps {
    children: React.ReactNode,
    textCenter?: boolean,
    style?: string
}

export const TitleBox: React.FC<TitleBoxProps> = ({ children, textCenter = false, style }) => {
    return (
        <div className={`flex flex-col mb-8 ${textCenter ? 'items-center' : ''} ${style}`}>
            {children}
            <div className="border-b-2 border-secondary-color shadow-md w-10" />
        </div>
    )
}