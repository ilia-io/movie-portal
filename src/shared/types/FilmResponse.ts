import { Person } from './Person';
import { Poster } from './Poster';
import { Trailer } from './Trailer';

export interface FilmResponse {
  id: number;
  sourceId: number;
  year?: number;
  originalTitle?: string | null;
  movieLength?: number;
  ageRating?: number;
  names: string[];
  description: string;
  genres: string[];
  countries: string[];
  persons?: Person[];
  trailers?: Trailer[];
  posters?: Poster[];
  rating?: number;
}
