import { FilmResponse } from '@/shared/types/FilmResponse';
import films from '../../../../public/assets/database/21-40.json';

export const slides: FilmResponse[] = films;

const contentByIndex = (index: number): FilmResponse =>
  slides[index % slides.length];

export default contentByIndex;
