export default function Home() {
  return (
    <div className='flex flex-col gap-16'>
      <Header />
      <Contact />
      <About />
    </div>
  );
}

function Header() {
  return (
    <div className='flex flex-row items-center gap-4'>
      <div className='flex flex-col'>
        <h1>Typescript - Tailwind - Next.js</h1>
        <p className='text-quaternary'>
          An opinionated template to get you going.
        </p>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className='flex flex-col gap-4'>
      <div className='text-secondary flex flex-col gap-4'>
        <p className='font-bold'>Edit /app/page.tsx to get started ☄️.</p>
        <p>
          Folder structure, UI components, Framer Motion, Tailwind Config. Uses
          Next.js 13 with appDir and server components. Customized base styling,
          capsize and more. SEO optimized.
        </p>
      </div>
    </div>
  );
}

function ContactLink({
  href,
  title,
  website,
  email,
}: {
  email?: string
  href?: string
  title: string
  website?: string
}) {
  return (
    <span className='block items-center gap-4'>
      {website && <p className='text-quaternary'>{website}</p>}
      {href && (
        <a
          className='text-secondary hover:text-primary transition-opacity duration-150'
          href={href}
          rel='noopener noreferrer'
          target='_blank'
        >
          {title}{' '}
          <svg
            className=' inline-block h-3 w-3'
            fill='none'
            stroke='currentColor'
            strokeWidth={1.5}
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </a>
      )}
      {email && (
        <p className='text-secondary hover:text-primary transition-opacity duration-150'>
          {title}
        </p>
      )}
    </span>
  );
}

function Contact() {
  return (
    <div className='flex flex-col gap-4'>
      <div className='grid grid-cols-2 gap-2 md:grid-cols-3'>
        <ContactLink
          href='https://github.com/cristicretu/ts-next-tailwind-template'
          title='ts-next-tw-template'
          website='GitHub'
        />
        <ContactLink href='https://cretu.dev' title='cretu' website='Author' />
      </div>
    </div>
  );
}
