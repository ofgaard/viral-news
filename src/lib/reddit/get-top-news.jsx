import formatDate from "../helper-functions/format-date";
const GetTopNews = async () => {
  const response = await fetch(
    "https://www.reddit.com/r/Denmark/search.json?q=flair_name%3A%22news%22&restrict_sr=1&type=link&sort=top&t=week&limit=10"
  );

  console.log("Response Status:", response.status);
  console.log("Response Headers:", response.headers);

  if (!response.ok) {
    const errorText = await response.text();
    console.error("Error fetching data from Reddit:", errorText);
    throw new Error(`Error fetching Reddit data: ${response.statusText}`);
  }

  const data = await response.json();
  console.log("reddit data", data.data);

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

  return { sortedPosts, posts };
};

export default GetTopNews;
