export const Logo: React.FC = () => {
    return (
        <div>
            <a href="/" className="flex font-bold text-3xl relative w-fit">
                ABSC
                <div className="h-2 w-2 bg-secondary-color rounded-full absolute bottom-2 right-0 translate-x-3" />
            </a>
        </div>
    )
}