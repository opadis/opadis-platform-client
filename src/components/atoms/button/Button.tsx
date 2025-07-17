
import type {ButtonHTMLAttributes} from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    ariaLabel?: string;
    onClick?: () => void;
    className?: string;
    children: React.ReactNode;
}


export const Button = ({ 
    children,
    className,
    ariaLabel,
    onClick, 
    ...props }: ButtonProps) => {
    return (
        <button
            type="button"
            className={`btn ${className || ''}`}
            onClick={onClick}
            aria-label={ariaLabel || undefined}
            {...props}
        >
            {children}
        </button>
    );
}





