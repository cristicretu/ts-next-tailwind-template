import Link from 'next/link';

export default function NotFound() {
  return (
    <div className=''>
      <h1 className='text-4xl font-bold'>404 - Page Not Found</h1>
      <p>
        Maybe you misspelled the link. Maybe something existed here, or it
        didn&apos;t exist in the first place...
      </p>
      <Link className='font-bold cursor-pointer' href='/'>
        Go Home
      </Link>
    </div>
  );
}
