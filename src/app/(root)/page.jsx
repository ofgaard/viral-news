import AddRssFeedForm from "@/components/forms/add-rss-feed/add-rss-feed-form";
import fetchRssFeeds from "../../lib/rss/fetch-rss-feeds";
import { getStoriesFromFeeds } from "../../lib/rss/get-stories-from-feeds";
import { getShareCountForAll } from "../../lib/shared-count/get-share-count-for-all";
import GetTopNews from "@/lib/reddit/get-top-news";
import { Button } from "@/components/ui/button";

const Page = async () => {
  const stories = await getStoriesFromFeeds();

  const { storiesSorted, topStories } = await getShareCountForAll();

  console.log(storiesSorted);
  console.log(topStories);

  const filter = (organisation) => {
    return storiesSorted.filter((item) => item.organisation === organisation);
  };

  return <></>;
};

export default Page;
