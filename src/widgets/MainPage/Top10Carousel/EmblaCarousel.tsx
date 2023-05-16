import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react';
import contentByIndex from './imageByIndex';
import Image, { StaticImageData } from 'next/image';
import {
  DotButton,
  PrevButton,
  NextButton,
} from './EmblaCarouselArrowsDotsButtons';
import { Stack } from '@mui/material';

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );
  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, setScrollSnaps, onSelect]);
  return (
    <div className="embla">
      <div className="embla__viewport embla__viewport_top10" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide embla__slide_top10" key={index}>
              <Image
                className="embla__slide__img embla__slide__img_top10"
                src={contentByIndex(index).banner}
                alt="Your alt text"
              />
              <Stack spacing={3} className="embla__content_top10">
                <Image
                  className="embla__content-logo_top10"
                  src={contentByIndex(index).logo}
                  alt="Your alt text"
                />
                <Stack
                  spacing={-1}
                  direction={'row'}
                  sx={{ justifyContent: 'center' }}
                >
                  <Image
                    className="embla__content-number_top10"
                    src={contentByIndex(index).number}
                    alt="Your alt text"
                  />
                  {contentByIndex(index).numberOptional && (
                    <Image
                      className="embla__content-number_top10"
                      src={
                        contentByIndex(index).numberOptional as StaticImageData
                      }
                      alt="Your alt text"
                    />
                  )}
                </Stack>
              </Stack>
            </div>
          ))}
        </div>
      </div>
      <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
    </div>
  );
};

export default EmblaCarousel;
