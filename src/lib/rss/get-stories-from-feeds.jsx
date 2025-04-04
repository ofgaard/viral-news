import fetchRssFeeds from "./fetch-rss-feeds";
import { prisma } from "@/db/client";

export const getStoriesFromFeeds = async () => {
  const feeds = await prisma.feeds.findMany();

  const storyPromises = feeds.map((feed) => {
    fetchRssFeeds(feed);
    return fetchRssFeeds(feed);
  });

  const storiesArray = await Promise.all(storyPromises);

  const allStories = storiesArray.flat();

  return allStories;
};
