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
                    <h3 className="text-lg font-semibold text-white mb-2">Estagiária Back-end Java/Spring Boot - Compass UOL</h3>
                    <p className="mb-4 text-base font-normal text-gray-500">Entreguei três projetos/desafios (individualmente e em grupo) durante o estágio, aplicando na prática o desenvolvimento de APIs REST com <TextHighLight>Java/Spring Boot</TextHighLight>, segurança e autenticação com Spring Security/JWT
                    e testes automatizados. Trabalhei com bancos de dados MySQL e MongoDB, além de microsserviços com
                    Docker e RabbitMQ. Utilizei Git/GitHub e segui a metodologia ágil Scrum. Também obtive conhecimento
                    em serviços de computação em nuvem AWS e conquistei a certificação <TextHighLight>AWS Cloud Practitioner</TextHighLight>.
                    </p>
                </li>
                <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-secondary-color rounded-full mt-1.5 -start-1.5 border border-white"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400">Abril/24 - Jul/24</time>
                    <h3 className="text-lg font-semibold text-white mb-2">Estagiária de Desenvolvimento Web - Nova Era Web</h3>
                    <p className="text-base font-normal text-gray-500">Analisei sites e implementei melhorias de usabilidade e funcionalidade, testes de qualidade e desenvolvimento de landing pages. Tecnologias utilizadas: HTML, CSS, Bootstrap,
                    JavaScript, PHP, MySQL e Git/GitHub.
                    </p>
                </li>
                <li className="ms-4">
                    <div className="absolute w-3 h-3 bg-secondary-color rounded-full mt-1.5 -start-1.5 border border-white"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400">Nov/22 - Mar/24</time>
                    <h3 className="text-lg font-semibold text-white mb-2">Estagiária de T.I. - ForALL Informática</h3>
                    <p className="text-base font-normal text-gray-500">Minha primeira experiência na área foi como estagiária de T.I., onde atuei com diagnóstico e manutenção de hardwares e softwares, atendimento/suporte ao cliente e desenvolvimento de um site utilizando WordPress.</p>
                </li>
            </ol>
        </Section>
    )
}