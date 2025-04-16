import { Section, TitleBox } from "../../../components"
import emailIcon from '../../../assets/icons/email-icon.svg'
import linkedinIcon from '../../../assets/icons/linkedin-icon.svg'
import githubIcon from '../../../assets/icons/github-icon.svg'

export const Contact: React.FC = () => {
    return (
        <Section id="contact" style="flex-col items-center">
            <TitleBox textCenter={true}>
                <h2>
                    Contato
                </h2>
            </TitleBox>
            <p className="text-center">Estou disponível para novas oportunidades, projetos e parcerias. Entre em contato!</p>
            <div className="flex mt-10">
{/*                 <form className="relative w-full md:w-[630px] bg-third-color py-7 px-6 rounded-[0.75rem] shadow-md overflow-hidden">
                    <div className="relative z-0 w-full mb-7 group">
                        <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white focus:outline-none focus:ring-0 focus:border-secondary-color peer" placeholder=" " required />
                        <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-secondary-color peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nome</label>
                    </div>
                    <div className="relative z-0 w-full mb-7 group">
                        <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white focus:outline-none focus:ring-0 focus:border-secondary-color peer" placeholder=" " required />
                        <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-secondary-color peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                    </div>
                    <div className="relative z-0 w-full mb-7 group">
                        <input type="text" name="floating_text" id="floating_text" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white focus:outline-none focus:ring-0 focus:border-secondary-color peer min-h-[100px]" placeholder=" " required />
                        <label htmlFor="floating_text" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-secondary-color peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Mensagem</label>
                    </div>
                    <Button type="submit" bgColor="third-color" style="mt-10 mx-auto w-[100px]">
                        Enviar
                    </Button>
                    <div className="absolute right-0 bottom-0 border-b-2 border-secondary-color shadow-md w-full" />
                </form> */}
                <div className="flex flex-col gap-5">
                    <div className="relative bg-third-color rounded-[0.75rem] shadow-md overflow-hidden ease-in-out transition-transform duration-300 hover:scale-105">
                        <a href='mailto:anabeatrizscarmoni@gmail.com' target='_blank' className="flex gap-5 items-center cursor-pointer my-3 mx-5">
                            <img className='w-10 duration-200 ease-in-out hover:translate-y-[-2px]' src={emailIcon} alt="Ícone de envelope" />
                            <span>anabeatrizscarmoni@gmail.com</span>
                        </a>
                        <div className="absolute bottom-0 border-b-2 border-secondary-color shadow-md w-full" />
                    </div>
                    <div className="relative bg-third-color rounded-[0.75rem] shadow-md overflow-hidden ease-in-out transition-transform duration-300 hover:scale-105">
                        <a href='https://www.linkedin.com/in/ana-carmoni/' target='_blank' className="flex gap-5 items-center cursor-pointer my-3 mx-5">
                            <img className='w-10 duration-200 ease-in-out hover:translate-y-[-2px]' src={linkedinIcon} alt="Ícone do Linkedin" />
                            <span>Ana Beatriz Santucci Carmoni</span>
                        </a>
                        <div className="absolute bottom-0 border-b-2 border-secondary-color shadow-md w-full" />
                    </div>
                    <div className="relative bg-third-color rounded-[0.75rem] shadow-md overflow-hidden ease-in-out transition-transform duration-300 hover:scale-105">
                        <a href='https://github.com/ABeatrizSC' target='_blank' className="flex gap-5 items-center cursor-pointer my-3 mx-5">
                            <img className='w-10 duration-200 ease-in-out hover:translate-y-[-2px]' src={githubIcon} alt="Ícone do GitHub" />
                            <span>ABeatrizSC</span>
                        </a>
                        <div className="absolute bottom-0 border-b-2 border-secondary-color shadow-md w-full" />
                    </div>
                </div>
            </div>
        </Section>
    )
}