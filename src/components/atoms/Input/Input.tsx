interface InputProps {
  id: string;
  label: string;
  placeholder?: string;
  type?: "text" | "password" | "email" | "date" | "file";
  className?: string;
  errorMessage?: string;
  ariaLabel?: string
}

export function Input({
  id,
  label,
  placeholder,
  type = "text",
  className,
  errorMessage,
  ariaLabel
}: InputProps) {
  const describedBy = errorMessage ? `${id}-error` : undefined;

  return (
    <div className={className}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        aria-label={ariaLabel}
        name={id}
        type={type}
        placeholder={placeholder}
        aria-describedby={describedBy}
        aria-invalid={!!errorMessage}
      />
      {errorMessage && (
        <span id={describedBy} role="alert">
          {errorMessage}
        </span>
      )}
    </div>
  );
}
