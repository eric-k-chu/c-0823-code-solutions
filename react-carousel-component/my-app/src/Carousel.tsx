import { NavButton } from './NavButton';
import { Indicators } from './Indicators';
import { ImageBanner } from './ImageBanner';
import { useEffect, useState } from 'react';

type Props = {
  images: string[];
};

export function Carousel({ images }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [timeoutId, setTimeoutId] = useState<number>();

  useEffect(() => {
    let id = 0;
    if (!isPaused) {
      console.log('carousel started');
      id = setInterval(
        () => setCurrentIndex((prev) => (prev + 1) % images.length),
        3000
      );
    }
    return () => clearInterval(id);
  }, [isPaused, timeoutId, images.length]);

  function handleIncrementClick(): void {
    setCurrentIndex((currentIndex + 1) % images.length);
    setIsPaused(true);
    timeoutCarousel();
  }

  function handleDecrementClick(): void {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    setIsPaused(true);
    timeoutCarousel();
  }

  function handleSelectionClick(index: number): void {
    setCurrentIndex(index);
    setIsPaused(true);
    timeoutCarousel();
  }

  // Pauses the carousel for 3 seconds
  function timeoutCarousel() {
    console.log('timeout started');
    if (isPaused) {
      console.log('timeout cleared');
      clearTimeout(timeoutId);
    }
    setTimeoutId(
      setTimeout(() => {
        setIsPaused(false);
        console.log('timeout ended');
      }, 3000)
    );
  }

  function capitalizedName(imgUrl: string): string {
    const rawName = imgUrl.substring(1, imgUrl.length - 5);
    return rawName[0].toLocaleUpperCase() + rawName.slice(1);
  }

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <div className="flex justify-center items-center basis-1/2 gap-x-8">
        <NavButton type="prev" onClick={handleDecrementClick} />
        <ImageBanner
          imgUrl={images[currentIndex]}
          name={capitalizedName(images[currentIndex])}
        />
        <NavButton type="next" onClick={handleIncrementClick} />
      </div>
      <Indicators
        items={images}
        currentIndex={currentIndex}
        onSelect={handleSelectionClick}
      />
    </div>
  );
}
