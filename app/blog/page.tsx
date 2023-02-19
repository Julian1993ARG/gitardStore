import { getBlogs } from '../utils';

export default async function BlogPage () {
  const blogs = await getBlogs();
  console.log(blogs.data[0]?.attributes.image.data.attributes.url);

  return (
    <h1>Blogs</h1>
  );
}
