import Link from 'next/link';
import { Meta } from '../../components/layout';
import { getAllPosts } from '../../utils/postsApi';
import type { PostType } from '../../types';
import { formatDate } from '../../utils/formatDate';

type Props = {
  allPosts: PostType[];
};

export default function BlogPage({ allPosts }: Props) {
  return (
    <>
      <Meta title='Blog | Cesario Nivar' />

      <div className='blog page'>
        <h2 className='page__title'>Recent Posts</h2>
        <div className='posts'>
          {allPosts.length === 0 ? (
            <h2 className='posts__empty'>
              There&apos;s not posts yet🙈, come back soon!!!😏
            </h2>
          ) : (
            allPosts.map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.slug} passHref>
                <a className='post__link'>
                  <img src={post.coverImage} alt={post.title} />
                  <div>
                    <span className='post__linkTitle'>
                      {post.title}{' '}
                      <span className='post__linkDate'>
                        {formatDate(new Date(post.date))}
                      </span>
                    </span>
                    <p>
                      <span className='post__linkExcerpt'>{post.excerpt}</span>
                    </p>
                  </div>
                </a>
              </Link>
            ))
          )}
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
