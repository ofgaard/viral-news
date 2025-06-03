import { getShareCountForAll } from "@/lib/shared-count/get-share-count-for-all";
import StoryCard from "@/components/cards/story-card";
import StoryContainer from "@/components/containers/story-container";

const TopStoriesByOrganisation = async ({ params }) => {
  const decodedOrg = decodeURIComponent(params.organisation);
  const { storiesSorted } = await getShareCountForAll();
  console.log("decodedOrg", decodedOrg);
  console.log(
    "All stories:",
    storiesSorted.map((s) => s.organisation)
  );
  console.log("Decoded org:", decodedOrg);

  const filteredStories = storiesSorted
    .filter(
      (story) => story.organisation.toLowerCase() === decodedOrg.toLowerCase()
    )
    .slice(0, 10);

  return (
    <div className="flex flex-col items-center gap-15">
      <StoryContainer org={decodedOrg}>
        {filteredStories.map((story, index) => (
          <StoryCard key={index} story={story} />
        ))}
      </StoryContainer>
    </div>
  );
};

export default TopStoriesByOrganisation;
