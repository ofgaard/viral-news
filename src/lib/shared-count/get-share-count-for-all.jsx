import { unstable_cache } from "next/cache";
import { getStoriesFromFeeds } from "../rss/get-stories-from-feeds";
import { fetchShareCount } from "../../app/api/shared-count/fetch-share-count";

export const getShareCountForAll = unstable_cache(
  async () => {
    const stories = await getStoriesFromFeeds();

    const seen = new Set();
    const uniqueStories = stories.filter((story) => {
      if (seen.has(story.link)) {
        return false;
      }
      seen.add(story.link);
      return true;
    });

    const shareCountPromises = uniqueStories.map(async (story) => {
      try {
        const shareData = await fetchShareCount(story.link);

        return { ...story, shares: shareData?.Facebook?.share_count || 0 };
      } catch (error) {
        console.error(`Error fetching share count for ${story.link}:`, error);

        return { ...story, shares: 0 };
      }
    });
    const storiesWithShareCounts = await Promise.all(shareCountPromises);

    const storiesSorted = storiesWithShareCounts.sort(
      (a, b) => b.shares - a.shares
    );

    const topStories = storiesSorted.slice(0, 10);

    return { storiesSorted, topStories };
  },
  ["share-counts"],
  {
    revalidate: 3600,
    tags: ["share-counts"],
  }
);
