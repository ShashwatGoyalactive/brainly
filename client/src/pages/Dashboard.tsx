import { useState, useEffect } from "react";
import { CrossIcon, PlusIcon, ShareIcon } from "../icons/Index";
import {
  Sidebar,
  Button,
  Card,
  CreateContentModal,
} from "../components/Index.ts";
import axios from "axios";
import { useContent } from "../hooks/useContent.tsx";
import { v4 as uuidv4 } from "uuid";
import { BACKEND_URL, FRONTEND_URL } from "../config.ts";

export function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const { contents, refresh } = useContent();

  useEffect(() => {
    refresh();
  }, [modalOpen]);

  function logout() {
    localStorage.removeItem("token");
    axios.defaults.headers.common["Authorization"] = "";
    window.location.href = "/signin";
    alert("Logged out successfully");
  }

  async function shareBrain() {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/share`,
        {
          share: true,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );

      const shareUrl = `${FRONTEND_URL}/brain/${response.data.hash}`;
      await navigator.clipboard.writeText(shareUrl);
      alert("Shareable link copied to clipboard : " + shareUrl);
    } catch (error) {
      alert("Error sharing brain : " + error);
    }
  }

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
            onClick={shareBrain}
            variant="secondary"
            text="Share Brain"
            startIcon={<ShareIcon />}
          />

          <Button
            onClick={logout}
            variant="primary"
            text="Logout"
            startIcon={<CrossIcon />}
          />
        </div>

        <div className="flex gap-4">
          {contents &&
            contents.map(({ type, link, title }) => (
              <Card key={uuidv4()} title={title} type={type} link={link} />
            ))}
        </div>
      </div>
    </div>
  );
}
