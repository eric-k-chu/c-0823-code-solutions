import { NavButton } from './NavButton';
import { Indicators } from './Indicators';
import { ImageBanner } from './ImageBanner';
import { useEffect, useState } from 'react';

type Props = {
  images: string[];
};

export function Carousel({ images }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeoutId, setTimeoutId] = useState<number>();

  useEffect(() => {
    let id = 0;
    if (timeoutId === undefined) {
      id = setTimeout(
        () => setCurrentIndex((prev) => (prev + 1) % images.length),
        3000
      );
    }
    return () => clearTimeout(id);
  }, [currentIndex, timeoutId, images.length]);

  function handleIncrementClick(): void {
    setCurrentIndex((currentIndex + 1) % images.length);
    timeoutCarousel();
  }

  function handleDecrementClick(): void {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    timeoutCarousel();
  }

  function handleSelectionClick(index: number): void {
    setCurrentIndex(index);
    timeoutCarousel();
  }

  function timeoutCarousel() {
    clearTimeout(timeoutId);
    const id = setTimeout(() => {
      setTimeoutId(undefined);
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    setTimeoutId(id);
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
