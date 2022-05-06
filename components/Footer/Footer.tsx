import Link from 'next/link'

const ExternalLink = ({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) => (
  <a
    className='text-gray-500 hover:text-gray-600 transition'
    target='_blank'
    rel='noopener noreferrer'
    href={href}
  >
    {children}
  </a>
)

export default function Footer() {
  return (
    <div>
      <hr className='w-full border-1 border-gray-200 dark:border-gray-800 mb-8' />
      <div className='w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3'>
        <div className='flex flex-col space-y-4'>
          <Link href='/'>
            <a className='text-gray-500 hover:text-gray-600 transition'>Home</a>
          </Link>
        </div>
        <div className='flex flex-col space-y-4'>
          <ExternalLink href='https://twitter.com/cristicrtu'>
            Twitter
          </ExternalLink>
          <ExternalLink href='https://github.com/cristicretu'>
            GitHub
          </ExternalLink>
          <ExternalLink href='https://cretu.dev'>Website</ExternalLink>
        </div>
        <div className='flex flex-col space-y-4'>
          <Link href='/404'>
            <a className='text-gray-500 hover:text-gray-600 transition'>404</a>
          </Link>
        </div>
      </div>
    </div>
  )
}
