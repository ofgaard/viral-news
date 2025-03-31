import AddRssFeedForm from "@/components/forms/add-rss-feed/add-rss-feed-form";
import fetchRssFeeds from "../api/stories/fetch-rss-feeds";
import { getStoriesFromFeeds } from "../api/stories/get-stories-from-feeds";
import { getShareCount } from "../api/stories/get-share-count";

const Page = async () => {
  const stories = await getStoriesFromFeeds();
  console.log(stories);

  const myLink =
    "https://www.dr.dk/nyheder/indland/carl-blev-lam-efter-han-blev-paakoert-af-elcykel-under-cykelloeb-nu-begynder";

  const shareCount = await getShareCount(myLink);
  console.log(shareCount);
  return (
    <>
      <AddRssFeedForm></AddRssFeedForm>
    </>
  );
};

export default Page;
