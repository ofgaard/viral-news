import { fetchTopRedditNews } from "@/app/api/reddit/fetch-posts";
import RedditPostContainer from "@/components/containers/reddit-post-container";
import RedditPostCard from "@/components/cards/reddit-post-card";
const Reddit = async () => {
  const { sortedPosts } = await fetchTopRedditNews();
  console.log("sortedPosts", sortedPosts[1]);

  return (
    <div className="flex flex-col items-center gap-15">
      <RedditPostContainer>
        {sortedPosts.map((post, index) => {
          return <RedditPostCard key={index} post={post}></RedditPostCard>;
        })}
      </RedditPostContainer>
    </div>
  );
};

export default Reddit;
