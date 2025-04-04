import Link from "next/link";
const GetTopNews = async (scope) => {
  const response = await fetch(
    "https://www.reddit.com/r/Denmark/search.json?q=flair_name%3A%22news%22&restrict_sr=1&type=link&sort=top&t=week&limit=10"
  );
  const data = await response.json();
  const posts = data.data.children.map((post) => ({
    title: post.data.title,
    url: post.data.url,
    likes: post.data.ups,
    comments: post.data.num_comments,
  }));

  const sortedPosts = posts.sort((a, b) => b.likes - a.likes);

  return (
    <div>
      {sortedPosts.map((post, index) => (
        <div key={index}>
          <Link href={post.url} target="_blank" rel="noopener noreferrer">
            {post.title}
          </Link>
          <p>{post.likes} Likes</p>
        </div>
      ))}
    </div>
  );
};

export default GetTopNews;
