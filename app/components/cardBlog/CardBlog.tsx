import { Blog } from '@/models/blogsResponse';
import formatDate from '@/app/utils/formatDate';
import Link from 'next/link';
import Image from 'next/image';
import style from './style.module.css';

interface Props {
  blog: Blog
}

export default function CardBlog ({ blog }: Props) {
  const { id } = blog;
  const { publishedAt, title, details } = blog.attributes;
  const { url } = blog.attributes.image.data.attributes;
  return (
    <article>
      <div className='relative h-96 w-full'>

        <Image
          className='object-cover object-center'
          src={url}
          alt={title}
          fill
          sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
        />
      </div>

      <div className='p-5 '>
        <h3 className='font-bold text-lg m-0 leading-5
        '
        >{title}
        </h3>
        <p className='text-xs text-primario my-4'>{formatDate(publishedAt)}</p>
        <p className={style.details}>{details}</p>
        <Link className='py-2 mt-5 block text-center uppercase text-sm font-bold text-black border-2 border-primario hover:text-white hover:bg-primario transition-colors ' href={`/blog/${id}`}>Leer Blog</Link>
      </div>
    </article>
  );
}
