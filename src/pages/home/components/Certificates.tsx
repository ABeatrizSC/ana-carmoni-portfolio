import { Section, TitleBox } from "../../../components"
import awsBadge from "../../../assets/images/badge-aws.webp"
import toeicLogo from "../../../assets/images/toeic-logo.png"
import fatecLogo from "../../../assets/images/fatec-logo.png"

export const Certificates: React.FC = () => {
    return (
        <Section id="certificates" style="justify-center items-center flex-col">
            <TitleBox textCenter={true}>
                <h2>Formação & Certificações</h2>
            </TitleBox>
            <div className="flex gap-8 flex-wrap justify-center items-stretch w-full mt-5">
                <div className="flex flex-col items-center text-center max-w-[250px] min-h-[250px] mx-5">
                    <img 
                        src={fatecLogo} 
                        alt="Logo Faculdade de Tecnologia de Botucatu (FATEC)" 
                        className="sm:w-[160px] sm:h-[150px] w-[170px] h-[110px] object-contain mb-2 duration-200 ease-in-out transition-transform hover:scale-110"
                    />
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-3">Graduação</h3>
                        <p className="font-semibold text-gray-500">
                            Análise e Desenvolvimento de Sistemas
                        </p>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-between text-center max-w-[250px] min-h-[250px] mx-5">
                    <img 
                        src={awsBadge} 
                        alt="Badge AWS Cloud Practitioner" 
                        className="w-[150px] h-[150px] object-contain mb-2 duration-200 ease-in-out transition-transform hover:scale-110"
                    />
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-3">Certificação</h3>
                        <p className="font-semibold text-gray-500">
                            AWS Cloud Practitioner (CLF-C02)
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center text-center max-w-[250px] min-h-[250px] mx-5">
                    <img 
                        src={toeicLogo} 
                        alt="Logo TOEIC" 
                        className="w-[160px] h-[150px] object-contain mb-2 duration-200 ease-in-out transition-transform hover:scale-110"
                    />
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-3">Certificação</h3>
                        <p className="font-semibold text-gray-500">
                            TOEIC – Inglês Intermediário
                        </p>
                    </div>
                </div>
            </div>
        </Section>
    )
}
