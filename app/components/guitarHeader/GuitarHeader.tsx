'use client';

import { getLimitGuitar } from '../../utils/getGuitars';
import { useRouter } from 'next/router';

export default async function GuitarHeader () {
  const route = useRouter();
  console.log(window.location.pathname);
  const guitar = await getLimitGuitar(1);
  console.log(guitar);
  return (
    <div>{`En esta ruta ${window.location.pathname}`}</div>
  );
}
