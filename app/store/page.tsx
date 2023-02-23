import { getAllGuitars } from '../utils';
import { CardGuitar } from '../components';

export default async function StorePage () {
  const guitars = await getAllGuitars();
  return (
    <main>
      <h1 className='heading'>Nuestra Colección</h1>
      <section className='grid gap-9 md:grid-cols-2 lg:grid-cols-3 items-center'>

        {
        guitars.map((guitar) => (

          <CardGuitar
            key={guitar.id}
            {...guitar}
          />
        ))
      }
      </section>
    </main>
  );
}
