import Image from "next/image"

type Character = {
  id: number;
  name: string;
  image: string;
  status: string;
  species: string;
  gender: string;
}

async function getData(id: string): Promise<Character> {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`, {
    // next: { revalidate: 86400 }, // Revalidate once every day
    cache: 'no-store',
  })
  return await res.json();
}

// @link https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes
export default async function Page({ params }: { params: { id: string } }) {
  const character: Character = await getData(params.id);

  return (
    <>
      <div className="my-12">
        <Image
          src={`${character.image}`}
          alt={`Image of ${character.name}`}
          width={300}
          height={300}
          className="rounded-2xl"
        />
        <h1 className="text-5xl my-6">{character.name}</h1>
        <ul>
          <li>Species: {character.species}</li>
          <li>Gender: {character.gender}</li>
          <li>Status: {character.status}</li>
        </ul>
      </div>
    </>
  )
}
