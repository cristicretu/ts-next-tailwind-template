// https://github.com/delbaoliveira/website/blob/main/ui/challenge/TextSlider.tsx
import cx from "clsx";
import React from "react";
import { useInterval } from "react-use";

interface BigTextProps {
  slides: Array<string>;
}

export const BigText: React.FC<BigTextProps> = ({ slides }) => {
  {
    const [currentSlide, setSlide] = React.useState(0);

    const totalSlides = slides.length;

    useInterval(() => {
      if (totalSlides - 1 === currentSlide) {
        setSlide(0);
      } else {
        setSlide(currentSlide + 1);
      }
    }, 2000);

    return (
      <>
        {slides.map((text, index) => {
          return (
            <span key={text} className="relative block text-center">
              <span
                className={cx("absolute transition duration-1000", {
                  "opacity-0": currentSlide === index,
                  "opacity-100": currentSlide !== index,
                })}
                aria-hidden={true}
              >
                {text}
              </span>

              <span
                className={cx(
                  "decoration-clone bg-clip-text text-transparent bg-gradient-to-r",
                  {
                    "from-yellow-400 via-red-500 to-pink-500": index === 0,
                    "from-purple-400 via-pink-500 to-red-500": index === 1,
                    "from-green-400 to-blue-500": index === 2,
                  }
                )}
              >
                {text}
              </span>
            </span>
          );
        })}
      </>
    );
  }
};
