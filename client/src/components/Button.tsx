
interface ButtonProps {
  variant: "primary" | "secondary";
  text: string;
  startIcon?: React.ReactElement;
  onClick?: () => void;
  className?: string;
}

const variantClasses =  {
  primary: "bg-custom-purple-600 text-white",
  secondary: "bg-custom-purple-200 text-custom-purple-600",
}

const defaultStyle = "px-4 py-2 rounded-md font-light flex items-center gap-2 cursor-pointer";

export const Button = (props: ButtonProps) => {
  return (
    <button onClick={props.onClick}
      className={`${variantClasses[props.variant]} ${defaultStyle} ${props.className}`}
    >
    {props.startIcon} {props.text} 
    </button>
  );
};
