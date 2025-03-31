import { getStoriesFromFeeds } from "./get-stories-from-feeds";
//sharedcount api key: 858105ffedad7eceb169b391497a6b7f07dcf4cf
//sample api call: https://api.sharedcount.com/v1.1?apikey=858105ffedad7eceb169b391497a6b7f07dcf4cf&url=https://www.dr.dk/nyheder/indland/carl-blev-lam-efter-han-blev-paakoert-af-elcykel-under-cykelloeb-nu-begynder

export const getShareCount = async (url) => {
  const params = new URLSearchParams({
    apikey: "858105ffedad7eceb169b391497a6b7f07dcf4cf",
    url,
  });

  const response = await fetch(`https://api.sharedcount.com/v1.1?${params}`);

  const data = await response.json();

  return data;
};
