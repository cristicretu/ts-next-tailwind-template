// https://github.com/delbaoliveira/website/blob/main/ui/challenge/TextSlider.tsx
import React from 'react'

import cx from 'clsx'
import { useInterval } from 'react-use'

interface BigTextProps {
  slides: Array<string>
}

export const BigText: React.FC<BigTextProps> = ({ slides }) => {
  {
    const [currentSlide, setSlide] = React.useState(0)

    const totalSlides = slides.length

    useInterval(() => {
      if (totalSlides - 1 === currentSlide) {
        setSlide(0)
      } else {
        setSlide(currentSlide + 1)
      }
    }, 2000)

    return (
      <>
        <div className='flex flex-col items-center'>
          <p className='mt-4 sm:text-3xl text-2xl tracking-normal'>
            The ultimate
          </p>
          {slides.map((text, index) => {
            return (
              <span key={text} className='relative block text-center'>
                <span
                  className={cx('absolute transition duration-1000', {
                    'opacity-0': currentSlide === index,
                    'opacity-100': currentSlide !== index,
                  })}
                  aria-hidden={true}
                >
                  {text}
                </span>

                <span
                  className={cx(
                    'decoration-clone bg-clip-text text-transparent bg-gradient-to-r',
                    {
                      'from-yellow-400 via-red-500 to-pink-500': index === 0,
                      'from-purple-400 via-pink-500 to-red-500': index === 1,
                      'from-green-400 to-blue-500': index === 2,
                    }
                  )}
                >
                  {text}
                </span>
              </span>
            )
          })}
          <p className='mt-4 sm:text-3xl text-2xl tracking-normal'>
            Front-End Template.
          </p>
          <div>
            <a
              href='https://www.producthunt.com/posts/ultimate-front-end-template?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-ultimate-front-end-template'
              target='_blank'
              rel='noreferrer'
            >
              <img
                src='https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=314876&theme=light'
                alt='Ultimate Front-End Template - Free & Completely Reusable Front-End Template | Product Hunt'
                width='250'
                className='pt-8'
                height='54'
              />
            </a>
          </div>
        </div>
      </>
    )
  }
}
