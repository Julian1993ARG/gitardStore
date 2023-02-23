import { GuitarResponse } from '@/models/guitarResponse';
import style from './styles.module.css';
import Image from 'next/image';
import Link from 'next/link';

type Props = GuitarResponse;

export default function CardGuitar (props: Props) {
  const { name, price, image, description, url } = props.attributes;
  const urlImage = image.data.attributes.url;
  return (
    <div className='grid grid-cols-[2fr_3fr] gap-4'>
      <div className='relative w-auto h-80'>
        <Image
          className='object-cover object-center'
          src={urlImage}
          alt={name}
          fill
          sizes='(max-width: 640px) 100vw, 640px'

        />
      </div>
      <div className='p-2'>
        <h3 className=' uppercase text-lg font-bold'>{name}</h3>
        <p className={style.description}>{description}</p>
        <p className='text-primario text-6xl m-0 font-bold'>${price}</p>
        <Link className='defaultBottom' href={`/store/${url}`}>Ver Detalles
        </Link>
      </div>
    </div>
  );
}
