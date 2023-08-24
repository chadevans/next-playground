import Image from "next/image"
import Link from "next/link"

type CharacterList = {
  info: ResultsInfo;
  results: Character[];
}

type ResultsInfo = {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

type Character = {
  id: number;
  name: string;
  image: string;
  status: string;
  species: string;
  gender: string;
}

async function getData(page: string):Promise<CharacterList> {
  const res = await fetch(`https://rickandmortyapi.com/api/character/?name=rick&page=${page}`, {
    // next: { revalidate: 86400 }, // Revalidate once every day
    cache: 'no-store',
  })
  return await res.json();
}

export default async function Page({ params }: { params: { page: string } }) {
  const data: CharacterList = await getData(params.page);
  
	return (
    <>
      <p>Results: {data.info.count}</p>
      <p>Pages: {data.info.pages}</p>
      {data.results.map(character => (
        <div className="my-12 block w-full" key={`${character.id}`}>
          <Link className="inline-block" href={`/routes-example/${character.id}`} >
            <Image 
              src={`${character.image}`}
              alt={`Image of ${character.name}`}
              width={300}
              height={300}
              className="rounded-2xl"
            />
            <p className="mt-4">{character.name}</p>
          </Link>
        </div>
      ))}
    </>
  )
}
