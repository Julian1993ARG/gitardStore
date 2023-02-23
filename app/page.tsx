import StorePage from './store/page';
import { getCourse, getLimitBlogs } from './utils';
import CardBlog from './components/cardBlog/CardBlog';

export default async function page () {
  const course = await getCourse();
  const { content, image, title } = course.attributes;
  const urlImage = image.data.attributes.url;
  const blogs = await getLimitBlogs(3);

  const style = {
    backgroundImage: `linear-gradient(to right, rgb(0 0 0 / .65), rgb(0 0 0 / .7)), url(${urlImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };

  return (
    <>
      <section className='layaut'>
        {/* @ts-expect-error Server Component */}
        <StorePage />

      </section>

      <section style={style} className='mt-3 md:grid grid-cols-2 gap-5'>
        <div className='py-24 layout items-center text-white flex flex-col'>
          <h2 className='heading'>{title}</h2>
          <p className='text-xl text-center'>{content}</p>
          <a className='defaultBottom p-4 text-white' href='#'>Mas información</a>
        </div>
      </section>

      <section className='grid gap-2 md:grid-cols-2 lg:grid-cols-3 pt-5 layout'>
        {
          blogs.map((blog) => (
            <CardBlog key={blog.id} blog={blog} />
          ))
        }
      </section>
    </>
  );
}
