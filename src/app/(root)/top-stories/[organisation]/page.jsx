import { getShareCountForAll } from "@/lib/shared-count/get-share-count-for-all";
import StoryCard from "@/components/cards/story-card";
import StoryContainer from "@/components/containers/story-container";
import { getOrganisations } from "@/lib/rss/get-organisations";
import DropDown from "@/components/buttons/organisation-selector/drop-down";

const TopStoriesByOrganisation = async ({ params }) => {
  const decodedOrg = decodeURIComponent(params.organisation);
  const { storiesSorted } = await getShareCountForAll();
  const organisations = await getOrganisations();

  const filteredStories = storiesSorted
    .filter(
      (story) => story.organisation.toLowerCase() === decodedOrg.toLowerCase()
    )
    .slice(0, 10);

  return (
    <div className="flex flex-col items-center p-5 gap-15">
      <DropDown organisations={organisations} selected={decodedOrg} />
      <StoryContainer>
        {filteredStories.map((story) => (
          <StoryCard key={story.id} story={story} />
        ))}
      </StoryContainer>
    </div>
  );
};

export default TopStoriesByOrganisation;
