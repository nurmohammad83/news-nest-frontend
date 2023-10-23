import BdNews from "@/components/Home/BdNews"
import Home from "@/components/Home/Home"
import International from "@/components/Home/International"
import LatestNews from "@/components/Home/LatestNews"
import SubHeader from "@/components/SubHeader"
import { getAllNews } from "@/services/news/get-all-news"

const Homepage =async () => {
  const result = await getAllNews()
  const bdNews = result.filter(news=>news.category === 'bangladesh')
  const international = result.filter(news=>news.category === 'international')
  console.log(result)
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