const fetchRssFeeds = async (feed) => {
  const params = new URLSearchParams({
    rss_url: feed.link,
    api_key: "amf1pqbndtiy9lituzi0kumhg0ptxkbfkwiaa3xy",
    count: 10,
  });

  const response = await fetch(
    `https://api.rss2json.com/v1/api.json?${params}`
  );

  const data = await response.json();

  return data.items.map((item) => ({
    title: item.title,
    link: item.link,
    pubDate: item.pubDate,
    description: item.description,
    content: item.content,
    image: item.image,
    organisation: feed.organisation,
  }));
};

export default fetchRssFeeds;
