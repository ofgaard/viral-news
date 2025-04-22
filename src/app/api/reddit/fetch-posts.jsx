import { getRedditAccessToken } from "./auth";
import formatDate from "@/lib/helper-functions/format-date";

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

  const posts = data.data.children.map((post) => ({
    title: post.data.title,
    url: post.data.url,
    likes: post.data.ups,
    comments: post.data.num_comments,
    domain: post.data.domain,
    date: formatDate(post.data.created_utc),
    image: post.data.thumbnail,
  }));

  const sortedPosts = posts.sort((a, b) => b.likes - a.likes);

  return { sortedPosts };
};
