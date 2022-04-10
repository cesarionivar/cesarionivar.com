export interface IProjects {
  id: string;
  name: string;
  description: string;
  imgUrl: string;
  previewUrl: string;
  code: string;
}

export type Author = {
  name: string;
  picture: string;
};

export type PostType = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  author: Author;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
};
