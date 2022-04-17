import type { Params } from 'next/dist/server/router';
import { Meta } from '../../components/layout';
import type { PostType } from '../../types';
import markdownToHtml from '../../utils/markdownToHtml';
import { getPostBySlug, getAllPosts } from '../../utils/postsApi';

type Props = {
  post: PostType;
};

export default function PostPage({ post }: Props) {
  return (
    <>
      <Meta title={`${post.title} | Cesario Nivar`} />
      <div className='single-post page'>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </>
  );
}

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'content',
    'ogImage',
    'coverImage',
  ]);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
