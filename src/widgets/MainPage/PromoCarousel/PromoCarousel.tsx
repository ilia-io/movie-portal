import * as React from 'react';
import Box from '@mui/material/Box';
import EmblaCarousel from './EmblaCarousel';
import { EmblaOptionsType } from 'embla-carousel-react';

type Props = {};

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDE_COUNT = 4;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const PromoCarousel = (props: Props) => {
  return (
    <>
      <main className="sandbox">
        <section className="sandbox__carousel">
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </section>
      </main>
    </>
  );
};

export default PromoCarousel;
