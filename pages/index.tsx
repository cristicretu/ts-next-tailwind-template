import { BigText } from 'components/BigText'
import Container from 'components/Container'

export default function Home() {
  return (
    <Container>
      <div className='flex flex-col items-center justify-center py-2'>
        <div className='text-6xl md:text-9xl font-extrabold tracking-tight flex flex-col items-center'>
          <BigText slides={['NextJs.', 'TailwindCSS.', 'Typescript.']} />
        </div>
      </div>
    </Container>
  )
}
