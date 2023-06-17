import React from 'react';
import EmblaCarousel from './EmblaCarousel';
import { EmblaOptionsType } from 'embla-carousel-react';
import { FilmResponse } from '@/shared/types/FilmResponse';

type Props = {
  content: FilmResponse[];
};

const OPTIONS: EmblaOptionsType = {
  slidesToScroll: 'auto',
  // containScroll: 'trimSnaps',
};
const SLIDE_COUNT = 21;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const CollectionCarousel = ({content}: Props) => {
  return (
    <>
      <main className="sandbox">
        <div className="sandbox__carousel">
          <EmblaCarousel slides={SLIDES} options={OPTIONS} content={content}/>
        </div>
      </main>
    </>
  );
};

export default CollectionCarousel;
