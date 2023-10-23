"use client";
import { INews } from "@/types/common";
import { Divider } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const International = ({ newses }: { newses: INews[] }) => {
  const router = useRouter();
  return (
    <div className="px-4 sm:px-10 py-4 font-roboto sm:py-10">
      <h2 className="text-xl block sm:text-3xl text-primary py-3  font-roboto font-bold">
        <Link className="no-underline" href={`/international`}>
          International
        </Link>
      </h2>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12  md:col-span-6 mb-3 lg:mb-0">
          <div className="p-3">
            <Link
              href={`/${newses[0].category}/${newses[0].subCategory}/${newses[0]._id}`}
              className="no-underline text-black group"
            >
              <div>
                <div className="overflow-hidden rounded-md">
                  <Image
                    height={500}
                    width={500}
                    src={newses[0]?.images?.img1}
                    alt=""
                    className="rounded-md w-full h-full"
                  />
                </div>
                <div>
                  <h2 className="text-xl mt-2 group-hover:text-primary font-bold">
                    {newses[0]?.heading}
                  </h2>
                  <p className="my-2 text-black/70 text-md">
                    {newses[0]?.description[0].slice(0, 100)}
                  </p>
                  <p className="">{newses[0].publishedDate}</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6">
          <div className="">
            {newses?.slice(2, 5).map((news) => (
              <Link
                key={news?._id}
                href={`/${news.category}/${news.subCategory}/${news?._id}`}
                className="no-underline text-black group"
              >
                <div className="col-span-12 imageEffect lg:col-span-4 mb-2 cursor-pointer p-2.5 border-l border-b rounded-md">
                  <div className="grid grid-cols-12">
                    <div className="col-span-8">
                      <h2 className="text-lg group-hover:text-primary font-semibold leading-6">
                        {news?.heading}
                      </h2>
                      <p className="text-sm my-1 text-black/70">
                        {news?.description[0]?.slice(0, 100)}
                      </p>
                      <p className="text-sm my-1">{news.publishedDate}</p>
                    </div>
                    <div className="col-span-4 overflow-hidden rounded-md">
                      <Image
                        height={200}
                        width={250}
                        className="w-full h-full object-cover rounded-md"
                        src={news?.images?.img1}
                        alt=""
                      />
                    </div>
                  </div>
                  <Divider className="p-0 m-0" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default International;
