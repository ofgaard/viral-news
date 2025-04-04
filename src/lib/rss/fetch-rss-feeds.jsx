import Parser from "rss-parser";

const parser = new Parser();

const fetchRssFeeds = async (feed) => {
  try {
    const parsedFeed = await parser.parseURL(feed.link);
    const fiveDaysAgo = new Date();
    fiveDaysAgo.setDate(fiveDaysAgo.getDate() - 5);

    return parsedFeed.items
      .filter((item) => {
        const pubDate = new Date(item.pubDate || item.isoDate);
        return !isNaN(pubDate) && pubDate >= fiveDaysAgo;
      })
      .map((item) => ({
        title: item.title || "No Title",
        link: item.link || "",
        pubDate: item.pubDate || item.isoDate || new Date().toISOString(),
        description: item.contentSnippet || item.description || "",
        content: item.content || "",
        image: item.enclosure?.url || "",
        organisation: feed.organisation,
      }));
  } catch (error) {
    console.error(`Error fetching from ${feed.link}:`, error.message);
    return [];
  }
};

export default fetchRssFeeds;
