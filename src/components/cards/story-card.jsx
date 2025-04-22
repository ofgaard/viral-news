import formatDate from "@/lib/helper-functions/format-date";

const StoryCard = ({ story }) => {
  return (
    <a
      className="flex flex-col gap-2 border-b-1 md:border-1 md:rounded-md p-3 w-full  hover:bg-muted transition-all duration-50 ease-in-out cursor-pointer"
      key={story.id}
      href={story.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <p className="text-xs">{story.organisation}</p>
      <h3 className="font-bold text-sm">{story.title}</h3>
      <div className="flex justify-between mt-auto">
        <p className="text-xs text-slate-500">{formatDate(story.pubDate)}</p>
      </div>
    </a>
  );
};

export default StoryCard;
