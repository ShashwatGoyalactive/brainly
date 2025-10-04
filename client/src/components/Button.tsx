
interface ButtonProps {
  variant: "primary" | "secondary";
  text: string;
  startIcon: React.ReactElement;
}

const variantClasses =  {
  primary: "bg-custom-purple-600 text-white",
  secondary: "bg-custom-purple-200 text-custom-purple-600",
}

const defaultStyle = "px-4 py-2 rounded-md font-light flex items-center gap-2 ";

export const Button = (props: ButtonProps) => {
  return (
    <button
      className={`${variantClasses[props.variant]} ${defaultStyle} `}
    >
    {props.startIcon}   {props.text}
    </button>
  );
};
