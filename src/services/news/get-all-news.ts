export const getAllNews = async () => {
  const res = await fetch(`http://localhost:4000/api/v1/news`, {
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
