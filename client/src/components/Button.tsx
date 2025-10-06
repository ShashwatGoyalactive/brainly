interface ButtonProps {
  variant: "primary" | "secondary";
  text: string;
  startIcon?: React.ReactElement;
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
  loading?: boolean;
  type? : "button" | "submit";
}

const variantClasses = {
  primary: "bg-custom-purple-600 text-white",
  secondary: "bg-custom-purple-200 text-custom-purple-600",
};

const defaultStyle =
  "px-4 py-2 rounded-md font-light justify-center flex items-center gap-2  cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

export const Button = (props: ButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      className={`${variantClasses[props.variant]} ${defaultStyle} ${
        props.className
      } ${props.fullWidth ? "w-full" : ""} `}
      disabled={props.loading}
      type={props.type || "button"}
    >
      {props.startIcon} {props.text}
    </button>
  );
};
