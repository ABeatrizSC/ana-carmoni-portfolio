interface MenuLinkProps {
    children: React.ReactNode
    href: string,
    style?: string,
    onClick?: () => void
}

export const NavLink: React.FC<MenuLinkProps> = ({ children, href, style, onClick }) => {
    return (
        <a href={href} onClick={onClick} className={`${style} !text-sm font-medium transition-all duration-200 relative after:block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-secondary-color after:transition-all after:duration-300 hover:after:w-full hover:text-secondary-color`}>
            {children}
        </a>
    );
}