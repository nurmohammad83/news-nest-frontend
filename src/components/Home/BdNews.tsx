import { INews } from "@/types/common";
import Title from "antd/es/typography/Title";
import Image from "next/image";
import Link from "next/link";

const BdNews = ({ newses }: { newses: INews[] }) => {
  return (
    <div className="px-4 sm:px-10 py-4 sm:py-10">
      <h2 className="text-xl block sm:text-3xl  py-3  font-roboto font-bold">
        <Link className="no-underline text-primary" href={`/bangladesh`}>Bangladesh</Link>
      </h2>
      <section className="font-roboto">
        <div className="space-y-6 sm:space-y-12">
          <Link
            href={`/${newses[11].category}/${newses[11].subCategory}/${newses[11]._id}`}
            className="block no-underline text-black group lg:grid lg:grid-cols-12 "
          >
            <Image
              src={newses[11].images.img1}
              height={400}
              width={400}
              alt=""
              className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 "
            />
            <div className="p-6 space-y-2 lg:col-span-5">
              <h3 className="text-2xl group-hover:text-primary font-semibold sm:text-4xl">
                {newses[11].heading}
              </h3>
              <span className="text-xs text-gray-400">
                {newses[11].publishedDate}
              </span>
              <p className="text-black/70 ">{newses[11].description[0]}</p>
            </div>
          </Link>
          <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {newses.slice(0,3).map((news) => (
              <Link
              href={`/${news.category}/${news.subCategory}/${news._id}`}
                key={news._id}
                className=" group text-black no-underline  "
              >
                <Image
                  height={300}
                  width={400}
                  alt="image"
                  role="presentation"
                  className="object-cover w-full rounded h-44 "
                  src={news.images.img1}
                />
                <div className="space-y-2 text-black/70">
                  <Title
                    ellipsis
                    className="text-2xl font-semibold group-hover:text-primary"
                  >
                    {news.heading}
                  </Title>
                  <span className="text-xs ">{news.publishedDate}</span>
                  <p>{news.description[0].slice(0, 100)}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
export default BdNews;
