import { getShareCountForAll } from "@/lib/shared-count/get-share-count-for-all";
import StoryContainer from "@/components/containers/story-container";
import StoryCard from "@/components/cards/story-card";

const TopStories = async () => {
  const { topStories } = await getShareCountForAll();

  console.log("top stories", topStories);

  return (
    <div className="flex flex-col items-center gap-15">
      <StoryContainer>
        {topStories.map((story, index) => {
          return <StoryCard key={index} story={story}></StoryCard>;
        })}
      </StoryContainer>
    </div>
  );
};

export default TopStories;
