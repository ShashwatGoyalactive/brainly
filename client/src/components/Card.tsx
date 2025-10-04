import { DeleteIcon } from '../icons/DeleteIcon';
import { PlayIcon } from '../icons/PlayIcon';
import { NotebookIcon  } from '../icons/NotebookIcon';
import { TweetIcon } from '../icons/TweetIcon';
import { ShareIcon } from './../icons/ShareIcon';



interface CardProps {
  link?: string;
  type: "tweet" | "youtube" | "article";
  title: string;
  tags?: string[];
}

const IconType = {
"youtube": <PlayIcon/>,
"article" : <NotebookIcon/>,
"tweet": <TweetIcon/>
}


export const Card = (props :CardProps) => {
  return (
    <div>
      <div
        className={` p-4 bg-white  rounded-md border border-slate-100   outline-slate-200 max-w-72 `}
      >
        <div className="flex justify-between  ">
          <div className="flex items-center ">
            <div className="text-gray-500 pr-2">{IconType[props.type]}</div>
            <h1 className='text-sm font-bold'>{props.title}</h1>
          </div>
          <div className="flex gap-4 items-center text-gray-500 ">
            <ShareIcon />
            <DeleteIcon />
          </div>
        </div>
      </div>
    </div>
  );
};
