/* eslint-disable react-hooks/rules-of-hooks */
'use client';

import { useRouter } from 'next/navigation';

export default function page () {
  const router = useRouter();
  router.push('/home');
  return (
    <h1>no estar aqui</h1>
  );
}
