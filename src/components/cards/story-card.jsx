import { FaExternalLinkAlt } from "react-icons/fa";

const StoryCard = ({ story }) => {
  return (
    <div
      className="flex flex-col gap-2 border-1 rounded-md p-3 w-full md:w-[40%] lg:w-[30%] "
      key={story.id}
    >
      <p className="text-xs">{story.organisation}</p>
      <h3 className="font-bold text-sm">{story.title}</h3>
      <a
        className="ml-auto"
        href={story.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaExternalLinkAlt></FaExternalLinkAlt>
      </a>
    </div>
  );
};

export default StoryCard;
