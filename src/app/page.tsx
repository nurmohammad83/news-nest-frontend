import Home from "@/components/Home"
import LatestNews from "@/components/LatestNews"
import SubHeader from "@/components/SubHeader"
import { getAllNews } from "@/services/news/get-all-news"

const Homepage =async () => {
  const result = await getAllNews()
 return (
  <div>
    <SubHeader />
    <Home newses={result.data}/>
    <LatestNews newses={result.data}/>
  </div>
 )
}
export default Homepage