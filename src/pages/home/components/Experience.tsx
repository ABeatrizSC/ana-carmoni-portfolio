import { Section, TextHighLight, TitleBox } from "../../../components"

export const Experience: React.FC = () => {
    return (
        <Section style="flex-col" id="experience">
            <TitleBox>
                <h2>Experiência</h2>
            </TitleBox>
            <ol className="relative border-s border-secondary-color">                  
                <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-secondary-color rounded-full mt-1.5 -start-1.5 border border-white"></div>
                    <time className="mb-1text-sm font-normal leading-none text-gray-400">Ago/24 - Jan/25</time>
                    <h3 className="text-lg font-semibold text-white mb-2">Estagiária backend Java/Spring Boot - Compass UOL</h3>
                    <p className="ml-4 mb-2 text-base font-normal text-gray-500">
                    - <TextHighLight>Entreguei de três projetos/desafios</TextHighLight> (individuais e em grupo) que cumprissem com os requisitos propostos e boas práticas de desenvolvimento;
                    </p>
                    <p className="ml-4 mb-2 text-base font-normal text-gray-500">
                    - Desenvolvi <TextHighLight>APIs RESTful</TextHighLight> com <TextHighLight>Java 17+</TextHighLight> e <TextHighLight>Spring Boot</TextHighLight>, implementando autenticação/autorização com <TextHighLight>Spring Security</TextHighLight> e <TextHighLight>JWT</TextHighLight>;
                    </p>
                    <p className="ml-4 mb-2 text-base font-normal text-gray-500">
                    - Documentei APIs com <TextHighLight>Swagger OpenAPI</TextHighLight>;
                    </p>
                    <p className="ml-4 mb-2 text-base font-normal text-gray-500">
                    - Trabalhei com bancos de dados relacionais e não relacionais: <TextHighLight>MySQL</TextHighLight> e <TextHighLight>MongoDB</TextHighLight>;
                    </p>
                    <p className="ml-4 mb-2 text-base font-normal text-gray-500">
                    - Implementei <TextHighLight>testes automatizados</TextHighLight> de integração e unitários com <TextHighLight>JUnit</TextHighLight> e <TextHighLight>Mockito</TextHighLight>;
                    </p>
                    <p className="ml-4 mb-2 text-base font-normal text-gray-500">
                    - Utilizei arquitetura de <TextHighLight>padrão MVC</TextHighLight> e <TextHighLight>microsserviços</TextHighLight> com mensageria (<TextHighLight>RabbitMQ</TextHighLight>) e <TextHighLight>Docker</TextHighLight>;
                    </p>
                    <p className="ml-4 mb-2 text-base font-normal text-gray-500">
                    - Apliquei versionamento de código com <TextHighLight>Git/GitHub</TextHighLight> e segui a metodologia ágil <TextHighLight>Scrum</TextHighLight>;
                    </p>
                    <p className="ml-4 mb-2 text-base font-normal text-gray-500">
                    - Aprendi conceitos de computação em nuvem e serviços <TextHighLight>AWS</TextHighLight>, conquistando a certificação <TextHighLight>AWS Cloud Practitioner</TextHighLight>.
                    </p>

                </li>
                <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-secondary-color rounded-full mt-1.5 -start-1.5 border border-white"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400">Abril/24 - Jul/24</time>
                    <h3 className="text-lg font-semibold text-white mb-2">Estagiária de desenvolvimento web - Nova Era Web</h3>
                    <p className="ml-4 mb-2 text-base font-normal text-gray-500">
                        - <TextHighLight>Analisei sites</TextHighLight> existentes, <TextHighLight>corrigindo falhas</TextHighLight> e implementando <TextHighLight>melhorias de usabilidade/atualizações</TextHighLight>;
                    </p>
                    <p className="ml-4 mb-2 text-base font-normal text-gray-500">
                        - <TextHighLight>Criei de landing pages</TextHighLight> responsivas e versionei códigos com <TextHighLight>Git e Github</TextHighLight>;
                    </p>
                    <p className="ml-4 mb-2 text-base font-normal text-gray-500">
                        - Tecnologias aplicadas: <TextHighLight>HTML5, CSS3, Bootstrap, JavaScript, PHP e MySQL.</TextHighLight>
                    </p>
                </li>
                <li className="ms-4">
                    <div className="absolute w-3 h-3 bg-secondary-color rounded-full mt-1.5 -start-1.5 border border-white"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400">Nov/22 - Mar/24</time>
                    <h3 className="text-lg font-semibold text-white mb-2">Estagiária de T.I. - ForALL Informática</h3>
                    <p className="ml-4 mb-2 text-base font-normal text-gray-500">
                        - <TextHighLight>Desenvolvi</TextHighLight> um site utilizando o CMS <TextHighLight>Wordpress</TextHighLight> para uma empresa de consultoria e treinamentos com drones, e me <TextHighLight>familiarizei com serviços de hospedagem web</TextHighLight>;
                    </p>
                    <p className="ml-4 mb-2 text-base font-normal text-gray-500">
                        - Atuei em <TextHighLight>suporte técnico</TextHighLight> e <TextHighLight>atendimento ao cliente</TextHighLight>;
                    </p>
                    <p className="ml-4 mb-2 text-base font-normal text-gray-500">
                        - Auxiliei na <TextHighLight>manutenção</TextHighLight> e identificação de falhas em <TextHighLight>hardwares e softwares</TextHighLight>.
                    </p>
                </li>
            </ol>
        </Section>
    )
}