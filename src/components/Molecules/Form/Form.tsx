import { Button } from "../../Atoms/Button/Button";
import { Input } from "../../Atoms/Input/Input";
import { Text } from "../../Atoms/Text/Text";
import type { FormHTMLAttributes } from "react";

export interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
    id: string;
    title?: string;
    field: { 
        label: string; 
        type?: 'text' | 'password' | 'email'| 'date'| 'file'; 
        placeholder?:string; 
        id: string; 
    }[];
    submitInput?: string
}

export const Form = ({
    id,
    field,
    title,
    submitInput,
    ...props
}: FormProps) => {
    return (
        <div>
            {title && (
                <header>
                <Text as="h1" type="title" label={title} />
                </header>)
            }
        <form
            id={id}
            {...props}
        >
            {field.map((field, index) => (
                <Input
                    key={index + 1}
                    label={field.label}
                    type={field.type ?? 'text'}
                    placeholder={field.placeholder}
                    id={field.id}
                />
            ))}
            <Button type="submit"><Text as="p" type="title" label={submitInput ?? 'Enviar'} /></Button>
        </form>
        </div>
    );
};