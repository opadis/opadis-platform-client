import { cn } from "../../../utils/cn";
import styles from "./Input.module.css";

export interface InputProps {
  label?: string;
  type?: "text" | "password" | "email" | "date" | "file";
  placeholder?: string;
  id: string;
  hasError?: boolean;
  className?: string;
  errorMessage?: string;
}

export function Input({
  label,
  id,
  placeholder,
  type,
  hasError,
  className,
  errorMessage,
  ...props
}: InputProps) {
  return (
    <div className={styles.containerInput}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>

      <input
        className={cn(styles.input, hasError && styles.error, className)}
        id={id}
        type={type ?? "text"}
        placeholder={placeholder}
        {...props}
      />

      {hasError && (
        <p className={cn(styles["error-message"])}>{errorMessage}</p>
      )}
    </div>
  );
}
