import {AcademicIcon, YoutubeIcon, TwitterIcon, DocumentIcon, LinkIcon, TagIcon} from "../icons/Index.ts";
import { SidebarItem } from "./Index.ts";

export const Sidebar = () => {
  return (
    <div className="h-screen bg-white border-r w-72 border-slate-300 flex flex-col fixed left-0 top-0 py-4">
      <div className="flex text-2xl pl-4 pt-4 items-center">
        <div className="text-custom-purple-600 pr-2 cursor-pointer">
          <AcademicIcon />
        </div>
        <h1>Brainly</h1>
      </div>
      <div className="pl-4 pt-4">
        <SidebarItem text="Twitter" icon={<TwitterIcon />} />
        <SidebarItem text="Youtube" icon={<YoutubeIcon />} />
        <SidebarItem text="Document" icon={<DocumentIcon />} />
        <SidebarItem text="Links" icon={<LinkIcon />} />
        <SidebarItem text="Tags" icon={<TagIcon />} />
      </div>
    </div>
  );
};
