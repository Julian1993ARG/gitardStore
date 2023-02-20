import { getBlogs } from '../utils';
import { CardBlog } from '../components';

export default async function BlogPage () {
  const { data } = await getBlogs();

  return (
    <main className='layout'>
      <h1 className='heading'>Blog</h1>
      <div className='grid gap-10 md:grid-cols-2 lg:grid-cols-3'>

        {
        data.map((blog) => (
          <CardBlog key={blog.id} blog={blog} />

        ))
      }
      </div>

    </main>
  );
}
