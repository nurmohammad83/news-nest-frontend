const SubCategory = ({
    params: { subcategory },
  }: {
    params: { subcategory: string };
  }) => {
  return (
    <div>SubCategory {subcategory}</div>
  )
}
export default SubCategory