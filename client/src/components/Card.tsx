import {
  YoutubeIcon,
  TwitterIcon,
  ShareIcon,
  DeleteIcon,
} from "../icons/Index.ts";

interface CardProps {
  title: string;
  link: string;
  cardKey? : string | undefined;
  type: "twitter" | "youtube";
  tags?: string[];
}

const IconType = {
  youtube: <YoutubeIcon />,
  twitter: <TwitterIcon />,
};

export const Card = (props: CardProps) => {
  return (
    <div  key={props.cardKey}>
      <div
        className={` p-4 bg-white  rounded-md border border-slate-100   outline-slate-200 min-h-48 max-w-72 hover:transform hover:scale-105 transition-all duration-150`}
      >
        <div className="flex justify-between  ">
          <div className="flex items-center ">
            <div className="text-gray-500 pr-2">{IconType[props.type]}</div>
            <h1 className="text-sm font-bold">{props.title}</h1>
          </div>
          <div className="flex gap-4 items-center text-gray-500 cursor-pointer">
            <a
              href={props.link.replace("watch", "embed").replace("?v=", "/")}
              target="_blank"
            >
              <ShareIcon />
            </a>
            <DeleteIcon />
          </div>
        </div>

        <div className="pt-4">
          {props.type === "youtube" && (
            <iframe
              className="w-full"
              src={props.link.replace("watch", "embed").replace("?v=", "/")}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          )}

          {props.type === "twitter" && (
            <blockquote className="twitter-tweet">
              <a href={props.link.replace("x.com", "twitter.com")}></a>
            </blockquote>
          )}
        </div>
      </div>

      {/* TODO : Implement the tag rendering logic here  */}
    </div>
  );
};
