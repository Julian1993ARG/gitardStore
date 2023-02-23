import { getAllGuitars } from '../utils';
import { CardGuitar } from '../components';

export default async function StorePage () {
  const guitars = await getAllGuitars();
  return (
    <section className='layout'>
      <h1 className='heading'>Nuestra Colección</h1>
      <div className='grid gap-9 md:grid-cols-2 lg:grid-cols-3 items-center'>

        {
        guitars.map((guitar) => (

          <CardGuitar
            key={guitar.id}
            {...guitar}
          />
        ))
      }
      </div>
    </section>
  );
}
