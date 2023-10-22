import { INews } from "@/types/common";

export const getAllNews = async (): Promise<INews> => {
  const res = await fetch(`http://localhost:4000/api/v1/news/?limit=20`, {
    next: {
      revalidate: 24 * 60 * 60,
      tags: ["all-news"],
    },
  });
  const { data } = await res.json();
  if (res.ok && data) {
    return data;
  } else {
    return [];
  }
};
