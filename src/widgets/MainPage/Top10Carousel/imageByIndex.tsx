import { StaticImageData } from 'next/image';
import banner1 from '../../../../public/assets/carousel/top10/banner/banner-1.jpeg';
import logo1 from '../../../../public/assets/carousel/top10/logo/logo-1.png';
import number1 from '../../../../public/assets/carousel/top10/number/number-1.svg';
import banner2 from '../../../../public/assets/carousel/top10/banner/banner-2.jpeg';
import logo2 from '../../../../public/assets/carousel/top10/logo/logo-2.png';
import number2 from '../../../../public/assets/carousel/top10/number/number-2.svg';
import banner3 from '../../../../public/assets/carousel/top10/banner/banner-3.jpeg';
import logo3 from '../../../../public/assets/carousel/top10/logo/logo-3.png';
import number3 from '../../../../public/assets/carousel/top10/number/number-3.svg';
import banner4 from '../../../../public/assets/carousel/top10/banner/banner-4.jpeg';
import logo4 from '../../../../public/assets/carousel/top10/logo/logo-4.png';
import number4 from '../../../../public/assets/carousel/top10/number/number-4.svg';
import banner5 from '../../../../public/assets/carousel/top10/banner/banner-5.jpeg';
import logo5 from '../../../../public/assets/carousel/top10/logo/logo-5.png';
import number5 from '../../../../public/assets/carousel/top10/number/number-5.svg';
import banner6 from '../../../../public/assets/carousel/top10/banner/banner-6.jpeg';
import logo6 from '../../../../public/assets/carousel/top10/logo/logo-6.png';
import number6 from '../../../../public/assets/carousel/top10/number/number-6.svg';
import banner7 from '../../../../public/assets/carousel/top10/banner/banner-7.jpeg';
import logo7 from '../../../../public/assets/carousel/top10/logo/logo-7.png';
import number7 from '../../../../public/assets/carousel/top10/number/number-7.svg';
import banner8 from '../../../../public/assets/carousel/top10/banner/banner-8.jpeg';
import logo8 from '../../../../public/assets/carousel/top10/logo/logo-8.png';
import number8 from '../../../../public/assets/carousel/top10/number/number-8.svg';
import banner9 from '../../../../public/assets/carousel/top10/banner/banner-9.jpeg';
import logo9 from '../../../../public/assets/carousel/top10/logo/logo-9.png';
import number9 from '../../../../public/assets/carousel/top10/number/number-9.svg';
import banner10 from '../../../../public/assets/carousel/top10/banner/banner-10.jpeg';
import logo10 from '../../../../public/assets/carousel/top10/logo/logo-10.png';
import number0 from '../../../../public/assets/carousel/top10/number/number-0.svg';

interface ITop10Slide {
  banner: StaticImageData;
  logo: StaticImageData;
  number: StaticImageData;
  numberOptional?: StaticImageData;
  link: string;
}

export const slides: ITop10Slide[] = [
  {
    banner: banner1,
    logo: logo1,
    number: number1,
    link: 'https://www.ivi.ru/watch/512127',
  },
  {
    banner: banner2,
    logo: logo2,
    number: number2,
    link: 'https://www.ivi.ru/watch/512127',
  },
  {
    banner: banner3,
    logo: logo3,
    number: number3,
    link: 'https://www.ivi.ru/watch/512127',
  },
  {
    banner: banner4,
    logo: logo4,
    number: number4,
    link: 'https://www.ivi.ru/watch/512127',
  },
  {
    banner: banner5,
    logo: logo5,
    number: number5,
    link: 'https://www.ivi.ru/watch/512127',
  },
  {
    banner: banner6,
    logo: logo6,
    number: number6,
    link: 'https://www.ivi.ru/watch/512127',
  },
  {
    banner: banner7,
    logo: logo7,
    number: number7,
    link: 'https://www.ivi.ru/watch/512127',
  },
  {
    banner: banner8,
    logo: logo8,
    number: number8,
    link: 'https://www.ivi.ru/watch/512127',
  },
  {
    banner: banner9,
    logo: logo9,
    number: number9,
    link: 'https://www.ivi.ru/watch/512127',
  },
  {
    banner: banner10,
    logo: logo10,
    number: number1,
    numberOptional: number0,
    link: 'https://www.ivi.ru/watch/512127',
  },
];

const contentByIndex = (index: number): ITop10Slide =>
  slides[index % slides.length];

export default contentByIndex;
