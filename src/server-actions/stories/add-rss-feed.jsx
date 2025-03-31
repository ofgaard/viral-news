import { prisma } from "@/db/client";

export const AddRssFeed = async (formData) => {
  "use server";
  const link = formData.get("link");
  const title = formData.get("title");
  const organisation = formData.get("organisation");

  await prisma.feeds.create({
    data: {
      link,
      title,
      organisation,
    },
  });
};
