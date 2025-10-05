import { DeleteIcon } from "../icons/DeleteIcon";
import { PlayIcon } from "../icons/PlayIcon";
import { CrossIcon } from "../icons/CrossIcon";
import { ShareIcon } from "./../icons/ShareIcon";

interface CardProps {
  title: string;
  link: string;
  type: "twitter" | "youtube";
  tags?: string[];
}

const IconType = {
  youtube: <PlayIcon />,
  twitter: <CrossIcon />,
};

export const Card = (props: CardProps) => {
  return (
    <div>
      <div
        className={` p-4 bg-white  rounded-md border border-slate-100   outline-slate-200 min-h-48 max-w-72 `}
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

        {props.type === "youtube" ? (
          <iframe
            className="w-full pt-4"
            src={props.link.replace("watch", "embed").replace("?v=", "/")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        ) : (
          <blockquote className="twitter-tweet">
            <p lang="en" dir="ltr">
              I’m launching a Fellowship{" "}
              <a href="https://t.co/4pkaJHoLNE">pic.twitter.com/4pkaJHoLNE</a>
            </p>
            &mdash; Harkirat Singh (@kirat_tw){" "}
            <a href="https://twitter.com/kirat_tw/status/1929805164963061811?ref_src=twsrc%5Etfw">
              June 3, 2025
            </a>
          </blockquote>
        )}
      </div>

      {/* TODO : Implement the tag rendering logic here  */}
    </div>
  );
};
