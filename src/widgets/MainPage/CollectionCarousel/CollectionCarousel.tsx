import React from 'react';
import EmblaCarousel from './EmblaCarousel';
import { EmblaOptionsType } from 'embla-carousel-react';
import CollectionCarouselTitle from './CollectionCarouselTitle';

type Props = {};

const OPTIONS: EmblaOptionsType = {
  slidesToScroll: 'auto',
  // containScroll: 'trimSnaps',
};
const SLIDE_COUNT = 21;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const CollectionCarousel = (props: Props) => {
  return (
    <>
      <CollectionCarouselTitle name={'asdsad'} link={'/'} />
      <main className="sandbox">
        <div className="sandbox__carousel">
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </div>
      </main>
    </>
  );
};

export default CollectionCarousel;
