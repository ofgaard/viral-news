import { FaExternalLinkAlt } from "react-icons/fa";

const RedditPostCard = ({ post }) => {
  return (
    <a
      className="flex md:flex-row flex-row-reverse border-b-1 md:border-1 md:rounded-md p-3 gap-5 w-full hover:bg-muted transition-all duration-50 ease-in-out cursor-pointer"
      key={post.id}
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex-shrink-0">
        <img
          src={post.image}
          alt="Post Image"
          className="object-cover w-15 h-15 md:w-30 md:h-30 rounded-md"
        />
      </div>
      <div className="flex flex-col w-full gap-2">
        <h3 className="font-bold text-sm">{post.title}</h3>
        <div className="flex mt-auto ml-auto">
          <div className="flex gap-2 text-xs text-slate-500 items-center">
            <p>{post.date}</p>
            <p>|</p>
            <p>{post.domain}</p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default RedditPostCard;
