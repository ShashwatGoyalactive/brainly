import { Button, Input } from "./Index.ts";
import { CrossIcon } from "../icons/Index.ts";
import { useRef, useState } from "react";
import { BACKEND_URL } from "../config.ts";
import axios from "axios";

interface CreateContentModalProps {
  open: boolean;
  onClose: () => void;
}

const contentType = {
  Youtube: "youtube",
  Twitter: "twitter",
};

export const CreateContentModal = ({
  open,
  onClose,
}: CreateContentModalProps) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState(contentType.Youtube);

  async function addContent() {
    setLoading(true);
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;

    if (!title || !link) {
      alert("Please fill all the fields");
      setLoading(false);
      return;
    }

    try {
      await axios.post(`${BACKEND_URL}/api/v1/content`, {
        title,
        link,
        type,
      }, {
        headers : {
          "Authorization" : localStorage.getItem("token") || ""
        }
      });
      alert("Content added successfully");
    } catch (error) {
      alert("Error adding content : " + error);
    }

    setLoading(false);
    onClose();
  }

  return (
    <div>
      {open && (
        <div>
          <div className="w-screen h-screen fixed top-0 left-0 bg-slate-500  border-2 opacity-60 flex justify-center">
            
          </div>

          <div className="w-screen h-screen fixed top-0 left-0  border-2 opacity-100 flex justify-center">
            <div className="flex flex-col justify-center ">
              <div className="bg-white opacity-100 py-4 px-8 rounded ">
                <div
                  className="flex justify-end cursor-pointer"
                  onClick={onClose}
                >
                  <CrossIcon />
                </div>
                <div>
                  <Input
                    reference={titleRef}
                    placeholder={"Title"}
                    id="title"
                    type="text"
                  />
                  <Input
                    reference={linkRef}
                    placeholder={"Link"}
                    id="link"
                    type="text"
                  />
                </div>
                <div className="flex justify-center my-4 gap-4">
                  <Button
                    text="Youtube"
                    variant={
                      type === contentType.Youtube ? "primary" : "secondary"
                    }
                    className="!mx-auto"
                    onClick={() => setType(contentType.Youtube)}
                  />
                  <Button
                    text="Twitter"
                    variant={
                      type === contentType.Twitter ? "primary" : "secondary"
                    }
                    className="!mx-auto"
                    onClick={() => setType(contentType.Twitter)}
                  />
                </div>
                <div className="flex justify-center">
                  <Button
                    onClick={addContent}
                    variant="primary"
                    text="Submit"
                    className="!bg-blue-600"
                    loading={loading}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
