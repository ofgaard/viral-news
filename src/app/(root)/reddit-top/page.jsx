// import GetTopNews from "@/lib/reddit/get-top-news";
import { fetchTopRedditNews } from "@/app/api/reddit/fetch-posts";
import RedditPostContainer from "@/components/containers/reddit-post-container";
import RedditPostCard from "@/components/cards/reddit-post-card";
const Reddit = async () => {
  const posts = await fetchTopRedditNews();
  console.log("posts", posts);
  return (
    <div className="flex flex-col items-center gap-15">
      <RedditPostContainer>
        {posts.map((post, index) => {
          return <RedditPostCard key={index} post={post}></RedditPostCard>;
        })}
      </RedditPostContainer>
    </div>
  );
};

export default Reddit;
