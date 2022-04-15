import { Meta } from '../../components/layout';
import { getAllPosts } from '../../utils/postsApi';
import type { PostType } from '../../types';

type Props = {
  allPosts: PostType[];
};

export default function BlogPage({ allPosts }: Props) {
  return (
    <>
      <Meta title='Blog | Cesario Nivar' />

      <div className='page'>
        {allPosts.map((post) => (
          <div key={post.slug}>{post.excerpt}</div>
        ))}
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
