import { Header, Footer } from './';

interface TemplateProps {
    children: React.ReactNode;
}

export const Template: React.FC<TemplateProps> = ({ children }: TemplateProps) => {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}