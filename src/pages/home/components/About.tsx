import { Button, Section, TextHighLight, TitleBox } from "../../../components"
import aboutImage from "../../../assets/images/about-image.jpg"
import linkedinIcon from "../../../assets/icons/linkedin-icon.svg"

export const About: React.FC = () => {
    return (
        <Section id="about" style="flex-col">
            <TitleBox style="items-center md:items-start lg:mb-3">
                <h2 className="font-bold">Sobre mim</h2>
            </TitleBox>

            <div className="flex flex-col-reverse justify-between md:flex-row gap-8 items-center">
                <div className="flex-1 flex flex-col gap-5 text-center items-center md:text-start md:items-start w-full md:max-w-3xl">
                    <p>
                        Sou graduanda em <TextHighLight>Análise e Desenvolvimento de Sistemas</TextHighLight> e apaixonada pela possibilidade de transformar ideias em soluções através de linhas de código.
                    </p>

                    <p>
                        Iniciei minha jornada estudando tecnologias de Desenvolvimento Web <TextHighLight>Front-end</TextHighLight> (JavaScript e React.js), e, posteriormente, ampliei meus conhecimentos também para a área de <TextHighLight>Back-end</TextHighLight> com Java e Spring Boot.
                    </p>

                    <p>
                        Como desenvolvedora, busco o aprendizado e evolução contínuos, explorando novas tecnologias e me desafiando com projetos pessoais em meu tempo livre.
                    </p>

                    <a href="https://www.linkedin.com/in/ana-carmoni/" target="_blank">
                        <Button>
                            <img className="h-[35px]" src={linkedinIcon} alt="Ícone do Linkedin" />
                            Linkedin
                        </Button>

                    </a>
                </div>

                <div className="flex justify-center w-full md:w-auto">
                    <img
                        className="object-cover rounded-full object-center h-[250px] w-[250px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px]"
                        alt="Desenho ilustrativo de uma garota sentada à frente de um computador, sorrindo e com fone nos ouvidos."
                        src={aboutImage}
                    />
                </div>
            </div>
        </Section>
    )
}