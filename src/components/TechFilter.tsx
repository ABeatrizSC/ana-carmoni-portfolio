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
    <div className="bg-third-color p-0.5 w-fit rounded-full flex gap-3 shadow-[2px_2px_3px_#000000b4]">
      {filtersCategory.map((filter) => {
        const isActive = activeFilter === filter;
        
        return (
          <button
            key={filter}
            onClick={() => handleFilterClick(filter)}
            className={`font-semibold rounded-full transition-colors duration-300 ease-in-out p-0.5 outline-none`}
          >
            <span
              className={`
                text-sm block px-3 py-1.5 rounded-full border-2 transition-colors duration-300
                ${isActive ? "border-secondary-color shadow-xl bg-primary-color" : "border-transparent"}
              `}
            >
              {filter}
            </span>
          </button>
        );
      })}
    </div>  
  );
};
