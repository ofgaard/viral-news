import { getShareCountForAll } from "@/lib/shared-count/get-share-count-for-all";
import StoryContainer from "@/components/containers/story-container";
import StoryCard from "@/components/cards/story-card";
import DropDown from "@/components/buttons/organisation-selector/drop-down";
import { getOrganisations } from "@/lib/rss/get-organisations";

const TopStories = async () => {
  const { topStories } = await getShareCountForAll();
  const organisations = await getOrganisations();

  const 

  console.log("topStories", );
  return (
    <div className="flex flex-col items-center p-5 gap-15">
      <DropDown organisations={organisations}></DropDown>
      <StoryContainer>
        {topStories.map((story) => {
          return <StoryCard key={story.id} story={story}></StoryCard>;
        })}
      </StoryContainer>
    </div>
  );
};

export default TopStories;
