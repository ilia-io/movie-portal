import React from 'react';
import EmblaCarousel from './EmblaCarousel';
import { EmblaOptionsType } from 'embla-carousel-react';

const OPTIONS: EmblaOptionsType = {
  slidesToScroll: 'auto',
  // containScroll: 'trimSnaps',
};
const SLIDE_COUNT = 10;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const Top10Carousel: React.FC = () => (
  <main className="sandbox">
    <section className="sandbox__carousel">
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </section>
  </main>
);

export default Top10Carousel;
