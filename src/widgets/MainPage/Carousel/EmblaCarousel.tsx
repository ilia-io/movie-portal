import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react';
import {
  DotButton,
  PrevButton,
  NextButton,
} from './EmblaCarouselArrowsDotsButtons';
import contentByIndex from './imageByIndex';
import Image from 'next/image';
import { flushSync } from 'react-dom';
import Autoplay from 'embla-carousel-autoplay';
import { Stack, Typography } from '@mui/material';
import { slides } from './imageByIndex';
import ButtonLink from '@/shared/ui/ButtonLink/ButtonLink';
import Link from 'next/link';

type Props = {
  slides: number[];
  options?: EmblaOptionsType;
};

const TWEEN_FACTOR = 4.2;

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);

const EmblaCarousel = ({ slides, options }: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({
      delay: 10000,
      stopOnMouseEnter: true,
      stopOnInteraction: false,
    }),
  ]);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  //
  const [tweenValues, setTweenValues] = useState<number[]>([]);
  const onScroll = useCallback(() => {
    if (!emblaApi) return;

    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();

    const styles = emblaApi.scrollSnapList().map((scrollSnap, index) => {
      let diffToTarget = scrollSnap - scrollProgress;

      if (engine.options.loop) {
        engine.slideLooper.loopPoints.forEach((loopItem) => {
          const target = loopItem.target();
          if (index === loopItem.index && target !== 0) {
            const sign = Math.sign(target);
            if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
            if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
          }
        });
      }
      const tweenValue = 1 - Math.abs(diffToTarget * TWEEN_FACTOR);
      return numberWithinRange(tweenValue, 0, 1);
    });
    setTweenValues(styles);
  }, [emblaApi, setTweenValues]);
  useEffect(() => {
    if (!emblaApi) return;

    onScroll();
    emblaApi.on('scroll', () => {
      flushSync(() => onScroll());
    });
    emblaApi.on('reInit', onScroll);
  }, [emblaApi, onScroll]);
  //

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
    <>
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((index) => (
              <div
                className="embla__slide"
                key={index}
                style={{
                  ...(tweenValues.length && { opacity: tweenValues[index] }),
                }}
              >
                <Link
                  target="_blank"
                  rel="noreferrer"
                  href={contentByIndex(index).link}
                >
                  {/* <div className="embla__slide__number">
                  <span>{index + 1}</span>
                </div> */}
                  <Image
                    className="embla__slide__img"
                    src={contentByIndex(index).banner}
                    alt="Your alt text"
                  />
                  <Stack
                    spacing={3}
                    sx={{
                      alignItems: 'flex-start',
                      width: '450px',
                      position: 'absolute',
                      bottom: 40,
                      left: 40,
                    }}
                  >
                    <Image
                      style={{ maxWidth: '400px', height: 'auto' }}
                      alt="Your alt text"
                      src={contentByIndex(index).logo}
                    />
                    <Typography sx={{ fontSize: '13px', color: '#fff' }}>
                      {contentByIndex(index).text}
                    </Typography>
                    <ButtonLink
                      name={contentByIndex(index).buttonText}
                      bgcolor="#EA003D"
                      bgcolorHover="#FF0F4D"
                      paddingX={'1rem'}
                      borderRadius="7px"
                      to={contentByIndex(index).link}
                    />
                  </Stack>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      </div>

      {/* <div className="embla__dots">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            selected={index === selectedIndex}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div> */}
    </>
  );
};

export default EmblaCarousel;
