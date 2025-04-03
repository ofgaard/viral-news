import Parser from "rss-parser";

const parser = new Parser();

const fetchRssFeeds = async (feed) => {
  try {
    const parsedFeed = await parser.parseURL(feed.link);

    return parsedFeed.items.map((item) => ({
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
