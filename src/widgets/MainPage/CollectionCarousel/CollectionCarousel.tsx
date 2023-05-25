import React from 'react';
import EmblaCarousel from './EmblaCarousel';
import { EmblaOptionsType } from 'embla-carousel-react';

type Props = {};

const OPTIONS: EmblaOptionsType = {
  slidesToScroll: 'auto',
  // containScroll: 'trimSnaps',
};
const SLIDE_COUNT = 21;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const CollectionCarousel = (props: Props) => {
  return (
    <main className="sandbox">
      <section className="sandbox__carousel">
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </section>
    </main>
  );
};

export default CollectionCarousel;
