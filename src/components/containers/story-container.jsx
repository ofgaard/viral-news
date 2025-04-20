import DropDown from "../buttons/organisation-selector/drop-down";
import { getOrganisations } from "@/lib/rss/get-organisations";

const StoryContainer = async ({ children, org }) => {
  console.log("container org", org);
  const organisations = await getOrganisations();
  return (
    <div className="flex flex-col items-center py-5 md:px-5 gap-15">
      <h1>Top Stories in Danish Media</h1>
      <DropDown organisations={organisations} selected={org} />
      <div className="flex flex-col md:px-30 md:gap-2 items-center w-screen">
        {children}
      </div>
    </div>
  );
};

export default StoryContainer;
