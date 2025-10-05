import { Button } from "./Button";
import { CrossIcon } from "../icons/CrossIcon";

interface CreateContentModalProps {
  open: boolean;
  onClose: () => void;
}

export const CreateContentModal = ({ open, onClose } : CreateContentModalProps) => {
  return (
    <div>
      {open && (
        <div className="w-screen h-screen fixed top-0 left-0 bg-slate-500 opacity-60 flex justify-center">
          <div className="flex flex-col justify-center ">
            <div className="bg-white opacity-100 py-4 px-8 rounded ">
              <div className="flex justify-end cursor-pointer" onClick={onClose}>
                <CrossIcon  />
              </div>
              <div >
                <Input placeholder={"Title"} />
                <Input placeholder={"Link"} />
              </div>
              <div className="flex justify-center">
              <Button variant="primary" text="Submit" className="!bg-blue-600"/>

              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

function Input({
  onChange,
  placeholder,
}: {
  onChange: () => void;
  placeholder: string;
}) {
  return (
    <div>
      <input
        type="text"
        className="px-4 py-2 my-4 rounded-md border border-slate-400"
        onChange={onChange}
        placeholder={placeholder}
      ></input>
    </div>
  );
}
