import { Button } from "../../Atoms/Button/Button";
import { Input } from "../../Atoms/Input/Input";
import { Text } from "../../Atoms/Text/Text";
import type { FormHTMLAttributes } from "react";

export interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
    id : string;
    title?: string
    campo: { 
        label: string; 
        type?: 'text' | 'password' | 'email'| 'date'| 'file'; 
        placeholder: string; 
        id: string; 
        
    }[];
}

export const Form = ({
    id,
    campo,
    title,
    ...props
}: FormProps) => {
    return (
        <div>
            <header>
                <Text as="h1" type="title" label={title} />
            </header>
        <form
            id={id}
            {...props}
        >
            {campo.map(campo => (
                <Input
                    label={campo.label}
                    type={campo.type}
                    placeholder={campo.placeholder}
                    id={campo.id}
                />
            ))}
            <Button type="submit">enviar</Button>
        </form>
        </div>
    );
};