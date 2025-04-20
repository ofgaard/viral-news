import { getRedditAccessToken } from "./auth";

export const fetchTopRedditNews = async () => {
  const token = await getRedditAccessToken();

  const response = await fetch(
    "https://oauth.reddit.com/r/Denmark/search?q=flair_name%3A%22news%22&restrict_sr=1&sort=top&t=week&limit=10",
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "User-Agent": "MyRedditFetcher/1.0 by your-username",
      },
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(`Reddit API error: ${JSON.stringify(data)}`);
  }

  return data.data.children.map((post) => post.data);
};
