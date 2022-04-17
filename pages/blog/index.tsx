import Link from 'next/link';
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

      <div className='blog page'>
        <h1 className='page__title'>Recent Posts</h1>
        <div className='posts'>
          {allPosts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug} passHref>
              <a className='post__link'>{post.title}</a>
            </Link>
          ))}
        </div>
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
