interface InputProps {
  onChange?: () => void;
  placeholder: string;
  id: string;
  type : string;
}

export function Input(props: InputProps) {
  return (
    <div>
      <input
        id={props.id}
        type={props.type || "text"}
        className="px-4 py-2 my-4 rounded-md border border-slate-400"
        onChange={props.onChange}
        placeholder={props.placeholder}
        required
      ></input>
    </div>
  );
}
