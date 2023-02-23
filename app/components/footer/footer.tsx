import style from './style.module.css';
import Link from 'next/link';

export default function Footer () {
  return (
    <footer className='bg-dark py-11 mt-11 text-white'>
      <div className='layout flex flex-col items-center md:justify-between'>
        <nav className={`${style.navegation}  md:mt-0 flex gap-3 flex-col md:flex-row items-center`}>
          <Link href='/'>Inicio</Link>
          <Link href='/nosotros'>Nosotros</Link>
          <Link href='/blog'>Blog</Link>
          <Link href='/store'>Tienda</Link>
        </nav>
        <p className='uppercase pt-3 md:pt-0'>Todos los derechos reservados</p>
      </div>
    </footer>
  );
}
