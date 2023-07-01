'use client';

export default function Footer() {
  return (
    <footer className='text-quaternary border-gray-200pb-24 mx-auto max-w-2xl border-t border-dashed py-12 pt-4 text-sm dark:border-gray-700 dark:text-gray-600'>
      <span>
        © Cristian Crețu {new Date().getFullYear()}. Website built using Next.js
        & TailwindCSS (
        <a
          href='https://github.com/cristicretu/cretu.dev'
          rel='noopener noreferrer'
          target='_blank'
        >
          view source
        </a>
        ).
      </span>
    </footer>
  );
}
