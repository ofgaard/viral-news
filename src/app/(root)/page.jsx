import AddRssFeedForm from "@/components/forms/add-rss-feed/add-rss-feed-form";
import fetchRssFeeds from "../api/stories/fetch-rss-feeds";
import { getStoriesFromFeeds } from "../api/stories/get-stories-from-feeds";
import { getShareCount } from "../api/stories/get-share-count";

const Page = async () => {
  const stories = await getStoriesFromFeeds();

  const { storiesSorted, topStories } = await getShareCount();

  console.log("here is the share count", storiesSorted);

  const filteredStories = storiesSorted.filter(
    (item) => item.organisation === "Berlingske"
  );
  console.log("here is the filtered stories", filteredStories);
  return (
    <>
      <AddRssFeedForm></AddRssFeedForm>
    </>
  );
};

export default Page;
