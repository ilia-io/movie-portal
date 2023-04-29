import TextLink from '@/shared/ui/TextLink/TextLink';
import { Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import Link from '@mui/material/Link';
import ListWithLeftSlider from '../ListWithLeftSlider/ListWithLeftSlider';

type Props = {};

const genres = [
  'Артхаус',
  'Боевики',
  'Вестерн',
  'Военные',
  'Детективы',
  'Для всей семьи',
  'Для детей',
  'Документальные',
  'Драмы',
  'Исторические',
  'Катастрофы',
  'Комедии',
  'Криминальные',
  'Мелодрамы',
  'Мистические',
  'По комиксам',
  'Приключения',
  'Спорт',
  'Триллеры',
  'Ужасы',
  'Фантастика',
  'Фэнтези',
];
const countries = ['Русские', 'Зарубежные', 'Советское кино'];
const years = [
  'Фильмы 2023 года',
  'Фильмы 2022 года',
  'Фильмы 2021 года',
  'Фильмы 2020 года',
];
const categories = [
  { name: 'Новинки', link: 'https://www.ivi.ru/new/movie-new' },
  { name: 'Подборки', link: 'https://www.ivi.ru/collections' },
  {
    name: 'Иви.Рейтинг',
    link: 'https://www.ivi.ru/movies/all?ivi_rating_10_gte=7&sort=ivi&rating_part=main&rating_model=ready',
  },
  { name: 'Скоро на Иви', link: 'https://www.ivi.ru/new/soon-ivi' },
  { name: 'Трейлеры', link: 'https://www.ivi.ru/trailers' },
  { name: 'Что посмотреть', link: 'https://www.ivi.ru/goodmovies' },
  { name: 'Фильмы в HD', link: 'https://www.ivi.ru/collections/movies-hd' },
  { name: 'Выбор Иви', link: 'https://www.ivi.ru/collections/vyibor-ivi' },
  {
    name: 'Новинки подписки',
    link: 'https://www.ivi.ru/collections/very-new-svod?sort=priority_in_collection',
  },
  {
    name: 'Фильмы Amediateka',
    link: 'https://www.ivi.ru/collections/filmyi-amediateka',
  },
  {
    name: 'Популярные фильмы',
    link: 'https://www.ivi.ru/collections/best-movies',
  },
  { name: 'Фильмы Иви', link: 'https://www.ivi.ru/collections/ivi-originals' },
];
const PopupContentMovies = (props: Props) => {
  return (
    <>
      <Grid container px={3} py={4}>
        <Grid container item xs={6}>
          <Grid item xs={4}>
            <Stack spacing={1}>
              <Typography color={'text.primary'}>Жанры</Typography>
              {genres.slice(0, 11).map((genre) => (
                <TextLink name={genre} />
              ))}
            </Stack>
          </Grid>
          <Grid item xs={4}>
            <Stack spacing={1}>
              <Typography color={'text.primary'}>{`‎`}</Typography>
              {genres.slice(11).map((genre) => (
                <TextLink name={genre} />
              ))}
            </Stack>
          </Grid>
          <Grid item xs={4}>
            <Stack spacing={1}>
              <Typography color={'text.primary'}>Страны</Typography>
              {countries.map((country) => (
                <TextLink name={country} />
              ))}
            </Stack>
            <Stack spacing={1} mt={3}>
              <Typography color={'text.primary'}>Годы</Typography>
              {years.map((year) => (
                <TextLink name={year} />
              ))}
            </Stack>
          </Grid>
        </Grid>
        <Grid container item xs={6}>
          <ListWithLeftSlider list={categories} />
        </Grid>
      </Grid>
    </>
  );
};

export default PopupContentMovies;
