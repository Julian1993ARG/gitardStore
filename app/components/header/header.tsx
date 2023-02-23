
import Link from 'next/link';
import style from './style.module.css';
import Image from 'next/image';

const Header = function () {
  return (
    <header className={`${style.header} text-white py-12 `}>
      <div className='layout'>
        <div className='flex flex-col items-center md:flex-row justify-between '>
          <Link href='/' className='relative h-[5.5rem] w-80'>
            <Image
              priority
              src='/whiteLogo.svg'
              alt='logo'
              sizes='100vw'
              fill
            />
          </Link>
          <nav className={`${style.navegation} mt-10 md:mt-0 flex gap-3`}>
            <Link href='/'>Inicio</Link>
            <Link href='/nosotros'>Nosotros</Link>
            <Link href='/blog'>Blog</Link>
            <Link href='/store'>Tienda</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
