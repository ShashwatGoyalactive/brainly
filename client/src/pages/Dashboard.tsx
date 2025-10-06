import { useState } from "react";
import { PlusIcon, ShareIcon } from "../icons/Index";
import {
  Sidebar,
  Button,
  Card,
  CreateContentModal,
} from "../components/Index.ts";

export function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="">
      <Sidebar />

      <div className=" min-h-screen p-4 ml-72 h-min-screen bg-gray-100 ">
        <CreateContentModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
        />
        {/* Main Content Buttons  */}
        <div className="flex justify-end gap-4 my-4">
          <Button
            variant="primary"
            text="Add Content"
            startIcon={<PlusIcon />}
            onClick={() => {
              setModalOpen(true);
            }}
          />
          <Button
            variant="secondary"
            text="Share Brain"
            startIcon={<ShareIcon />}
          />
        </div>

        <div className="flex gap-4">
          <Card
            title="Sample Tweet"
            type="twitter"
            link="https://twitter.com/kirat_tw/status/1929805164963061811?ref_src=twsrc%5Etfw"
          />
          <Card
            title="Sample Video"
            type="youtube"
            link="https://www.youtube.com/embed/-udp7nFQhv0?si=nG158Pf0zYVC5Ql5"
          />
        </div>
      </div>
    </div>
  );
}
