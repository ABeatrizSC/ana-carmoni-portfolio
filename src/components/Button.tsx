import React from "react";

interface ButtonProps {
    bgColor?: string;
    style ?: string;
    onClick?: ((event: React.MouseEvent<HTMLButtonElement>) => void) | (() => void);
    hover?: boolean,
    type?: "submit" | "button" | "reset";
    disabled?: boolean;
    children?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
    bgColor = "primary-color", 
    style,
    children,
    onClick, 
    hover = true,
    type = "button", 
    disabled = false 
}) => {

    return (
        <button 
            className={`relative h-[55px] flex items-center justify-center gap-2 min-w-fit rounded-lg px-3 py-2 outline-none rounded-lg border-2 border-secondary-color bg-${bgColor} shadow-md
            ${hover && "after:-z-20 after:absolute after:h-1 after:w-1 after:bg-secondary-color-hover after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 hover:border-secondary-color-hover"}
            ${disabled ? "opacity-50 cursor-not-allowed" : "hover:brightness-100"}
            ${style}`}
            onClick={onClick} 
            type={type}
            disabled={disabled}
        >
            {children}
        </button>
    );
};
