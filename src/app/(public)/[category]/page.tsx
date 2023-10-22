import { getAllNews } from "@/services/news/get-all-news";

const Category =async ({
    params: { category },
  }: {
    params: { category: string };
  }) => {
    const result = await getAllNews()
  return (
    <div>Category {category}</div>
  )
}
export default Category