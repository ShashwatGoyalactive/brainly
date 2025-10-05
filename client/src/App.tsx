import { useState } from "react";
import { Button } from "./components/Button";
import { Card } from "./components/Card";
import { CreateContentModal } from "./components/CreateContentModal";
import { PlusIcon } from "./icons/PlusIcon";
import { ShareIcon } from "./icons/ShareIcon";

function App() {
  const [modalOpen, setModalOpen] = useState(true);
  return (
    <div className="p-4">
      <CreateContentModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      />
      <div className="flex justify-end gap-4">
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

      <div className="flex justify-start gap-2 ">
        <Card
          title="Sample Video"
          type="youtube"
          link="https://www.youtube.com/embed/-udp7nFQhv0?si=nG158Pf0zYVC5Ql5"
        />
        <Card
          title="Sample Tweet"
          type="twitter"
          link="https://twitter.com/kirat_tw/status/1929805164963061811?ref_src=twsrc%5Etfw"
        />
      </div>
    </div>
  );
}

export default App;
