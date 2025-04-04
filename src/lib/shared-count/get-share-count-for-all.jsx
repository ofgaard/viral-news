import { cache } from "react";
import { getStoriesFromFeeds } from "../rss/get-stories-from-feeds";
import { fetchShareCount } from "../../app/api/shared-count/fetch-share-count";

export const getShareCountForAll = cache(async () => {
  const stories = await getStoriesFromFeeds();

  const shareCountPromises = stories.map(async (story) => {
    const shareData = await fetchShareCount(story.link);
    return { ...story, shares: shareData.Facebook.share_count };
  });

  const storiesWithShareCounts = await Promise.all(shareCountPromises);

  const storiesSorted = storiesWithShareCounts.sort(
    (a, b) => b.shares - a.shares
  );

  const topStories = storiesSorted.slice(0, 10);

  return { storiesSorted, topStories };
});
