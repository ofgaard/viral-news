import GetTopNews from "@/lib/reddit/get-top-news";
import RedditPostContainer from "@/components/containers/reddit-post-container";
import RedditPostCard from "@/components/cards/reddit-post-card";
const Reddit = async () => {
  const { sortedPosts } = await GetTopNews();
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
