interface TextHighLightProps {
    children: React.ReactNode
}

export const TextHighLight: React.FC<TextHighLightProps> = ({ children }) => {
    return (
        <span className="text-secondary-color font-semibold">
            {children}
        </span>
    )
}