import { useState } from "react";
import { Section, TechBox, TechFilter, TitleBox } from "../../../components";
import { technologiesData } from "../../../data/technologiesData";

export const Technologies: React.FC = () => {
  const techCategories = ["Todas", "Back-end", "Front-end", "Outras"];
  const [currentFilter, setCurrentFilter] = useState(techCategories[0]);

  const filteredTechs =
  currentFilter === techCategories[0]
    ? technologiesData
    : technologiesData.filter((tech) => tech.category === currentFilter);

  return (
    <Section id="technologies" style="justify-center items-center flex-col">
      <TitleBox textCenter={true}>
        <h2 className="font-bold">Tecnologias</h2>
      </TitleBox>

      <TechFilter 
        filtersCategory={techCategories} 
        onFilterChange={(filter) => setCurrentFilter(filter)} 
      />

      <div className="flex gap-5 flex-wrap items-center justify-center w-full mt-10">
        {filteredTechs.map((tech, index) => (
            <TechBox key={index} techName={tech.name} techIcon={tech.icon} alt={tech.alt}/>
        ))}
      </div>
    </Section>
  );
};