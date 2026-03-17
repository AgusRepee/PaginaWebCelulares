import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
    children, 
    className, 
    variant = 'primary', 
    size = 'md', 
    fullWidth = false,
    ...props 
}) => {
    const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-md";
    
    const variants = {
        primary: "bg-mobix-black text-white hover:bg-gray-800 shadow-lg shadow-gray-200 dark:shadow-none border border-transparent",
        secondary: "bg-white text-black hover:bg-gray-100 border border-transparent",
        outline: "border border-primary text-primary hover:bg-gray-50",
        ghost: "bg-transparent text-primary hover:text-mobix-black hover:bg-gray-100/50"
    };

    const sizes = {
        sm: "text-xs px-3 py-1.5",
        md: "text-sm px-5 py-2.5",
        lg: "text-base px-8 py-3"
    };

    return (
        <button 
            className={cn(
                baseStyles, 
                variants[variant], 
                sizes[size], 
                fullWidth && "w-full",
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
};