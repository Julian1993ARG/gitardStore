import { getBlogById, formatDate } from '@/app/utils';
import Image from 'next/image';

interface Props {
  params: {
    id: string
  }
}
export default async function page ({ params }:Props) {
  const idBlog = params.id;
  const { attributes } = await getBlogById(idBlog);
  const { description, image, title, createdAt } = attributes;
  const urlImage = image.data.attributes.url;
  return (
    <main className='max-w-3xl mx-auto'>
      <h1 className='heading'>{title}</h1>
      <article>
        <div className='relative w-auto h-96   '>
          <Image
            className='object-contain'
            src={urlImage}
            alt={title}
            fill
          />
        </div>
        <div>
          <p className='text-xs text-primario my-4'>{formatDate(createdAt)}</p>
          <div style={{ whiteSpace: 'pre-wrap' }} dangerouslySetInnerHTML={{ __html: description }} />
        </div>

      </article>

    </main>
  );
}
