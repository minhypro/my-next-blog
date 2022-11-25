import DUMMY_POSTS from './dummyBlogs';

export function getAllBlogs() {
  return DUMMY_POSTS;
}

export function getSpecificBlog(slug: string) {
  return DUMMY_POSTS.find((post) => post.slug === slug);
}
