import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react';
import contentByIndex from './imageByIndex';
import Image, { StaticImageData } from 'next/image';
import {
  DotButton,
  PrevButton,
  NextButton,
} from './EmblaCarouselArrowsDotsButtons';
import { Box, Stack } from '@mui/material';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import HideSourceIcon from '@mui/icons-material/HideSource';

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
      <div
        className="embla__viewport embla__viewport_collection"
        ref={emblaRef}
      >
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide embla__slide_collection" key={index}>
              <Image
                className="embla__slide__img embla__slide__img_collection"
                src={contentByIndex(index).banner}
                alt="Your alt text"
              />
              <Stack className="embla__content_collection">
                <Stack
                  className="embla__content_top-collection"
                   spacing={0.5}
                  sx={{ flex: '0 1 50%' }}
                >
                  <BookmarkBorderIcon /> <AutoFixHighIcon /> <StarBorderIcon />
                  <HideSourceIcon />
                </Stack>
                <Box sx={{ flex: '0 1 50%' }}>asdasd</Box>
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
