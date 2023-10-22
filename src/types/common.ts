export interface INews {
  data: INews[];
  images: {
    [key: string]: string;
  };
  _id: string;
  heading: string;
  description: string[];
  reporter: string;
  category: string;
  subCategory: string;
  publishedDate: string;
  likes: string[];
  comments: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  id: string;
}
