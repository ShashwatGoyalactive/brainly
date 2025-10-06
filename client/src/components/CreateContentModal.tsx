import {Button, Input } from "./Index.ts";
import {CrossIcon} from "../icons/Index.ts";

interface CreateContentModalProps {
  open: boolean;
  onClose: () => void;
}

export const CreateContentModal = ({
  open,
  onClose,
}: CreateContentModalProps) => {
  return (
    <div>
      {open && (
        <div className="w-screen h-screen fixed top-0 left-0 bg-slate-500  border-2 opacity-85 flex justify-center">
          <div className="flex flex-col justify-center ">
              <div className="bg-white opacity-100 py-4 px-8 rounded ">
                <div
                  className="flex justify-end cursor-pointer"
                  onClick={onClose}
                >
                  <CrossIcon/>
                </div>
                <div>
                  <Input placeholder={"Title"} id="title" />
                  <Input placeholder={"Link"} id="link" />
                </div>
                <div className="flex justify-center">
                  <Button
                    variant="primary"
                    text="Submit"
                    className="!bg-blue-600"
                  />
                </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


