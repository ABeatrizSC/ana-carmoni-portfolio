import { NavLink, Logo, SocialIconsList } from './';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-primary-color rounded-lg w-full px-5 py-5 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center sm:justify-between flex-col sm:flex-row gap-10">
                <Logo />
                <ul className="flex flex-wrap flex-col sm:flex-row items-center justify-center text-sm font-medium text-gray-400 gap-5">
                    <li>
                        <NavLink href='/' style="pb-1">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink href='/#about' style="pb-1">
                            Sobre mim
                        </NavLink>
                    </li>
                    <li>
                        <NavLink href='/#experience' style="pb-1">
                            Experiência
                        </NavLink>
                    </li>
                    <li>
                        <NavLink href='/#technologies' style="pb-1">
                            Tecnologias
                        </NavLink>
                    </li>
                    <li>
                        <NavLink href='/#projects' style="pb-1">
                            Projetos
                        </NavLink>
                    </li>
                    <li>
                        <NavLink href='/#contact' style="pb-1">
                            Contato
                        </NavLink>  
                    </li>
                </ul>
            </div>
            <SocialIconsList />
            <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
            <span className="block text-sm text-center text-gray-400">  
                <a href="https://github.com/ABeatrizSC" target='_blank' className="hover:underline !text-sm">ABeatrizSC </a> 
                © 2025. All Rights Reserved.
            </span>
        </footer>
    )
}