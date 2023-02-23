import Image from 'next/image';
import nosotrosImage from '../../public/images/nosotros.jpg';

export default function Nosotros () {
  return (
    <section className='my-6 layout '>

      <div className='grid md:grid-cols-2 items-center gap-8'>
        <div className='relative w-full h-[400px] '>
          <Image
            className='object-cover'
            src={nosotrosImage}
            alt='Imagen sobre nosotros'
            fill
          />
        </div>

        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porta, nisl vitae tristique finibus, ex erat congue felis, et ultrices velit orci ut est. Aenean ullamcorper ipsum lacus, a ullamcorper risus maximus imperdiet. Fusce volutpat nec tellus ac imperdiet. Proin sagittis vehicula vestibulum. Aenean vehicula turpis sed magna euismod, eget dapibus velit fringilla. Vivamus quam diam, pretium eget porta et, ultrices eget turpis. Nulla accumsan tristique ju</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porta, nisl vitae tristique finibus, ex erat congue felis, et ultrices velit orci ut est. Aenean ullamcorper ipsum lacus, a ullamcorper risus maximus imperdiet. Fusce volutpat nec tellus ac imperdiet. Proin sagittis vehicula vestibulum. Aenean vehicula turpis sed magna euismod, eget dapibus velit fringilla. Vivamus quam diam, pretium eget porta et, ultrices eget turpis. Nulla accumsan tristique ju
          </p>
        </div>
      </div>
    </section>
  );
}
