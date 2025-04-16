import emailIcon from '../assets/icons/email-icon.svg'
import linkedinIcon from '../assets/icons/linkedin-icon.svg'
import githubIcon from '../assets/icons/github-icon.svg'

interface SocialIconsListProps {
    style?: string
}

export const SocialIconsList: React.FC<SocialIconsListProps> = ({ style }) => {
    return (
        <div className={`flex justify-center items-center gap-7 mt-5 ${style}`}>
            <a href='mailto:anabeatrizscarmoni@gmail.com' target='_blank' className="transition-all duration-300 hover:text-secondary-color focus:text-secondary-color cursor-pointer">
                <img className='w-9 duration-200 ease-in-out hover:translate-y-[-2px]' src={emailIcon} alt="Ícone de um envelope (Email)" />
            </a>
            <a href='https://www.linkedin.com/in/ana-carmoni/' target='_blank' className="transition-all duration-300 hover:text-secondary-color focus:text-secondary-color cursor-pointer">
                <img className='w-10 duration-200 ease-in-out hover:translate-y-[-2px]' src={linkedinIcon} alt="Ícone do Linkedin" />
            </a>
            <a href='https://github.com/ABeatrizSC' target='_blank' className="transition-all ease-in-out duration-400 hover:text-secondary-color focus:text-secondary-color cursor-pointer">
                <img className='w-10 duration-200 ease-in-out hover:translate-y-[-2px]' src={githubIcon} alt="Ícone do GitHub" />
            </a>
        </div>
    )
}