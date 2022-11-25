import DUMMY_POSTS from './dummyBlogs';

export async function getAllBlogs() {
  return DUMMY_POSTS;
}

export async function getSpecificBlog(slug: string) {
  const result = DUMMY_POSTS.find((post) => post.slug === slug)
  return result;
}
