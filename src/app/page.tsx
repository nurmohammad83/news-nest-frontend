import BdNews from "@/components/Home/BdNews"
import Home from "@/components/Home/Home"
import International from "@/components/Home/International"
import LatestNews from "@/components/Home/LatestNews"
import SubHeader from "@/components/SubHeader"
import { getAllNews } from "@/services/news/get-all-news"
import { INews } from "@/types/common"

const Homepage =async () => {
  const result= await getAllNews() as any
  const bdNews = result.filter((news:INews)=>news.category === 'bangladesh')
  const international = result.filter((news:INews)=>news.category === 'international')
 return (
  <div>
    <SubHeader />
    <Home newses={result}/>
    <LatestNews newses={result}/>
    <BdNews newses={bdNews}/>
    <International newses={international}/>
  </div>
 )
}
export default Homepage