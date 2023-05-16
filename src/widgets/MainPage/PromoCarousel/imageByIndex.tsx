import image1 from './images/slide-1.jpg';
import image2 from './images/slide-2.jpg';
import image3 from './images/slide-3.jpg';
import image4 from './images/slide-4.jpg';
import banner1 from '../../../../public/assets/carousel/promo/slide-1/banner.png';
import logo1 from '../../../../public/assets/carousel/promo/slide-1/logo.png';
import banner2 from '../../../../public/assets/carousel/promo/slide-2/banner.png';
import logo2 from '../../../../public/assets/carousel/promo/slide-2/logo.png';
import banner3 from '../../../../public/assets/carousel/promo/slide-3/banner.png';
import logo3 from '../../../../public/assets/carousel/promo/slide-3/logo.png';
import banner4 from '../../../../public/assets/carousel/promo/slide-4/banner.png';
import logo4 from '../../../../public/assets/carousel/promo/slide-4/logo.png';

interface IPromoSlide {
  banner: any;
  logo: any;
  text: string;
  buttonText: string;
  link: string;
}

export const slides: IPromoSlide[] = [
  {
    banner: banner1,
    logo: logo1,
    text: 'Реальная история пилота Дамира Юсупова, в 2019-ом посадившего неисправный самолёт на кукурузное поле',
    buttonText: 'Смотреть по подписке',
    link: 'https://www.ivi.ru/watch/506007',
  },
  {
    banner: banner2,
    logo: logo2,
    text: 'Милош Бикович в роли Муслима Магомаева в биографическом сериале о легендарном певце',
    buttonText: 'Смотреть бесплатно',
    link: 'https://www.ivi.ru/watch/magomaev',
  },
  {
    banner: banner3,
    logo: logo3,
    text: 'Недовольная своей жизнью девушка ищет пропавшую сестру, повсюду сталкиваясь с тайнами и ложью',
    buttonText: 'Смотреть бесплатно',
    link: 'https://www.ivi.ru/watch/osobnyak',
  },
  {
    banner: banner4,
    logo: logo4,
    text: 'Осуждённая убийца и её сын-полицейский ищут маньяка, который держит в страхе весь Париж',
    buttonText: 'Смотреть по подписке',
    link: 'https://www.ivi.ru/watch/bogomol',
  },
];

const slideImages: any[] = slides.map((slide) => slide.banner);

export const images: any[] = [image1, image2, image3, image4];

// const imageByIndex = (index: number): string =>
//   slideImages[index % slideImages.length];

const contentByIndex = (index: number): IPromoSlide =>
  slides[index % slides.length];

export default contentByIndex;
