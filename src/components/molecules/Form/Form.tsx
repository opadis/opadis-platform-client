import { Button } from "@/components/atoms/button/button";
import { Input } from "@/components/atoms/input/input";
import { Text } from "@/components/atoms/text/text";
import type { FormHTMLAttributes } from "react";

export interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  id: string;
  title?: string;
  field: {
    label: string;
    type?: "text" | "password" | "email" | "date" | "file";
    placeholder?: string;
    ariaLabel?: string;
    id: string;
  }[];
  submitInput?: string;
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
          <Text as="h2" type="title" label={title} />
        </header>
      )}
      <form id={id} {...props}>
        {field.map((field, index) => (
          <Input
            key={index + 1}
            label={field.label}
            type={field.type ?? "text"}
            aria-label={field.ariaLabel}
            placeholder={field.placeholder}
            id={field.id}
          />
        ))}
        <Button type="submit">
          <Text as="p" type="title" label={submitInput ?? "Enviar"} />
        </Button>
      </form>
    </div>
  );
};
