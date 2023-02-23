import { getGuitarsByURL } from '@/app/utils';
import Image from 'next/image';
import style from './style.module.css';

type Params = {
  params: {
    url: string
  }
}

export default async function page ({ params }:Params) {
  const { url } = params;
  const guitar = await getGuitarsByURL(url);
  const { description, name, price, image } = guitar.attributes;
  const urlImage = image.data.attributes.url;

  return (
    <div className='grid grid-cols-[2fr_3fr] max-w-2xl mx-auto items-center'>
      <div className='relative w-auto h-[40rem]'>
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
        <p className='py-7'>{description}</p>
        <p className='text-primario text-6xl m-0 font-bold'>${price}</p>

        <form className='pt-3 flex flex-col'>
          <label htmlFor='cant' className='text-xl'>
            Cantidad:
          </label>
          <select name='cantidad' id='cant' className='border-primario border-2 p-3 text-center'>
            <option value=''>-- Seleccione --</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
          </select>
          <button className='defaultBottom p-1' type='submit'>Agregar al Carrito</button>
        </form>
      </div>
    </div>
  );
}
