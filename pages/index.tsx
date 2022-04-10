import { Banner } from '../components/Banner';
import { HireMe } from '../components/HireMe';
import { Meta } from '../components/Meta';
import { Resume } from '../components/Resume';
import { getAllPosts } from '../utils/postsApi';
import type { PostType } from '../types';

type Props = {
  allPosts: PostType[];
};

export default function Home({ allPosts }: Props) {
  console.log(allPosts);
  return (
    <>
      <div className='landing page'>
        <Meta />

        <Banner />
        <Resume />
        <HireMe />
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'coverImage',
    'excerpt',
  ]);

  return {
    props: { allPosts },
  };
};
