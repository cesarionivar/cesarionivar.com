import { Meta } from '../components/layout';
import { Banner, Resume, HireMe } from '../components/ui';
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
