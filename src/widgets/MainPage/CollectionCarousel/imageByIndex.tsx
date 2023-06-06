import { FilmResponse } from '@/shared/types/FilmResponse';
import films from '../../../../public/assets/database/1-20.json';

export const slides: FilmResponse[] = films;

const contentByIndex = (index: number): FilmResponse =>
  slides[index % slides.length];

export default contentByIndex;
