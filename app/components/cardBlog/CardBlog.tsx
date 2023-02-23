import { Blog } from '@/models/blogsResponse';
import formatDate from '@/app/utils/formatDate';
import Link from 'next/link';
import Image from 'next/image';
import style from './style.module.css';

interface Props {
  blog: Blog
}

export default function CardBlog ({ blog }: Props) {
  const { publishedAt, title, details, url } = blog.attributes;
  const { url: ImageUrl } = blog.attributes.image.data.attributes;
  return (
    <article>
      <div className='relative h-96 w-full'>

        <Image
          className='object-cover object-center'
          src={ImageUrl}
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
        <Link className='defaultBottom' href={`/blog/${url}`}>Leer Blog</Link>
      </div>
    </article>
  );
}
