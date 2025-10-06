interface SidebarItemProps {
  text: string;
  icon: React.ReactElement;
}
export const SidebarItem = (props: SidebarItemProps) => {
  return (
    <div className="flex text-gray-700 my-4 cursor-pointer max-w-48 hover:bg-slate-300 pl-2  py-1 transition-all duration-150 rounded-md ">
      <div className="pr-2">{props.icon}</div>
      <div>{props.text}</div>
    </div>
  );
};
