import { prisma } from "@/db/client";

export const getOrganisations = async () => {
  const feeds = await prisma.feeds.findMany();
  const organisations = Array.from(
    new Set(feeds.map((feed) => feed.organisation))
  );
  return organisations;
};
