import TextLink from '@/shared/ui/TextLink/TextLink';
import { Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import ListWithLeftSlider from '../ListWithLeftSlider/ListWithLeftSlider';

type Props = {};
const genres = [
  'Биография',
  'Боевики',
  'Военные',
  'Детективы',
  'Для всей семьи',
  'Документальные',
  'Дорамы',
  'Драмы',
  'Исторические',
  'Комедийные',
  'Криминальные',
  'Медицинские',
  'Мелодрамы',
  'Мистические',
  'Приключения',
  'Романтические',
  'Телешоу',
  'Триллеры',
  'Турецкие',
  'Ужасы',
  'Фантастические',
  'Фэнтези',
];
const countries = [
  'Русские',
  'Зарубежные',
  'Американские',
  'Корейские',
  'Турецкие',
];
const years = [
  'Сериалы 2023 года',
  'Сериалы 2022 года',
  'Сериалы 2021 года',
  'Сериалы 2020 года',
];
const categories = [
  {
    name: 'Иви.Рейтинг',
    link: 'https://www.ivi.ru/series/all?ivi_rating_10_gte=7&sort=ivi&rating_part=main&rating_model=ready',
  },
  { name: 'Сериалы в HD', link: 'https://www.ivi.ru/collections/series-hd' },
  {
    name: 'Бесплатные сериалы',
    link: 'https://www.ivi.ru/collections/tvshow-free?sort=new',
  },
  {
    name: 'Сериалы Amediateka',
    link: 'https://www.ivi.ru/collections/serialyi-amediateka',
  },
  {
    name: 'Сериалы Paramount Play',
    link: 'https://www.ivi.ru/collections/series-paramount-play',
  },
];
const PopupContentSeries = (props: Props) => {
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

export default PopupContentSeries;
