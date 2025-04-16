import React, { useState } from "react";

interface TechFilterProps {
  onFilterChange?: (filter: string) => void,
  filtersCategory: string[]
}

export const TechFilter: React.FC<TechFilterProps> = ({ onFilterChange, filtersCategory }) => {
  const [activeFilter, setActiveFilter] = useState(filtersCategory[0]);

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
    onFilterChange?.(filter);
  };

  return (
    <div className="bg-third-color rounded-full shadow-[2px_2px_3px_#000000b4] overflow-x-auto md:overflow-visible px-2 py-1 scrollbar-hide">
      <div className="flex flex-nowrap md:flex-wrap justify-center gap-2 md:gap-3 w-max md:w-fit">
        {filtersCategory.map((filter) => {
          const isActive = activeFilter === filter;
    
          return (
            <button
              key={filter}
              onClick={() => handleFilterClick(filter)}
              className="font-semibold rounded-full transition-colors duration-300 ease-in-out outline-none flex-shrink-0"
            >
              <span
                className={`
                  text-xs sm:text-sm md:text-base px-3 py-1.5 block rounded-full border-2 transition-colors duration-300
                  ${isActive ? "border-secondary-color shadow-xl bg-primary-color" : "border-transparent"}
                `}
              >
                {filter}
              </span>
            </button>
          );
        })}
      </div>
    </div>  
  );
};
