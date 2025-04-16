import { Projects, Template } from "../../components"
import { About } from "./components/About"
import { Contact } from "./components/Contact"
import { Experience } from "./components/Experience"
import { Hero } from "./components/Hero"
import { Technologies } from "./components/Technologies"
import { useScrollToSection } from "../../hooks/useScrollToSection"

export const HomePage: React.FC = () => {
    useScrollToSection();
    
    return (
        <Template>
            <Hero />
            <About />
            <Experience />
            <Technologies />
            <Projects />
            <Contact />
        </Template>
    )
}