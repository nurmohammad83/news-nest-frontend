import { INews } from "@/types/common"
import Paragraph from "antd/es/typography/Paragraph"
import Title from "antd/es/typography/Title"
import Image from "next/image"
import Link from "next/link"

const LatestNews = ({ newses }:{newses:INews[]}) => {
  return (
    <div className="px-4 py-4 sm:py-10 sm:px-10">
      <h2 className="text-xl sm:text-3xl text-primary py-3  font-roboto font-bold">Latest News</h2>
      <div className="grid grid-cols-1 font-poppins gap-4 sm:grid-cols-2 md:grid-cols-4 ">
        {
          newses.slice(13,17).map(news=>(
            <Link href={`/${news.category}/${news.subCategory}/${news._id}`} key={news._id} className="group no-underline">
            <div className="w-full h-[200px]">
              <Image src={news.images.img1} width={400} height={300} className="w-full h-full" alt="imge"/>
            </div>
            <div className="p-2">
              <Title ellipsis className="text-black group-hover:text-primary text-base font-bold font-poppins">{news.heading}</Title>
              <Paragraph className='text-black/70 mt-2 text-sm md:text-md pr-5'>{news?.description[0].slice(0,75)}...</Paragraph>
            </div>
        </Link>
          ))
        }
      </div>
    </div>
  )
}
export default LatestNews