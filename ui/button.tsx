import Link from 'next/link';

type ButtonProps = {
	title: string;
	link: string;
};

export function Button({ title, link }: ButtonProps) {
  return (
  	<>
	  	<Link href={link}>
	      <button
	        type="button"
	        className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
	      >
	        {title}
	      </button>
	    </Link>
	  </>
  )
}
