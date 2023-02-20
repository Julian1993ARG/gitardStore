import { getBlogById } from '@/app/utils';

interface Props {
  params: {
    id: string
  }
}
export default async function page ({ params }:Props) {
  const idBlog = params.id;
  const { attributes } = await getBlogById(idBlog);
  const { description, details, image, title } = attributes;
  console.log(description, details, image, title);
  return (
    <div>page</div>
  );
}
