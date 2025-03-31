import { AddRssFeed } from "@/server-actions/stories/add-rss-feed";

const AddRssFeedForm = () => {
  return (
    <form action={AddRssFeed}>
      <input type="text" id="title" name="title" placeholder="title" />
      <input type="text" id="link" name="link" placeholder="url" />
      <input
        type="text"
        id="organisation"
        name="organisation"
        placeholder="organisation"
      />
      <button type="submit"> submit</button>
    </form>
  );
};

export default AddRssFeedForm;
