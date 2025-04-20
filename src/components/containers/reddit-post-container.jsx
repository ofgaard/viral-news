const RedditPostContainer = async ({ children }) => {
  return (
    <div className="flex flex-col items-center gap-15">
      <h1>Top Stories on Reddit Denmark</h1>
      <div className="flex flex-col md:px-30 md:gap-2">{children}</div>
    </div>
  );
};

export default RedditPostContainer;
