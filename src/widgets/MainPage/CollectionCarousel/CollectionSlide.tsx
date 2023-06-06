import React, { useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import HideSourceIcon from '@mui/icons-material/HideSource';
import Tooltip from '@mui/material/Tooltip';
import LinearProgress from '@mui/material/LinearProgress';
import Image, { StaticImageData } from 'next/image';
import { FilmResponse } from '@/shared/types/FilmResponse';

type Props = {
  index: number;
  content: (index: number) => FilmResponse;
};

const CollectionSlide = ({ index, content }: Props) => {
  const [showCardOverlay, setShowCardOverlay] = useState(false);
  return (
    <>
      <div
        onMouseEnter={() => setShowCardOverlay(true)}
        onMouseLeave={() => setShowCardOverlay(false)}
        className="embla__slide embla__slide_collection"
      >
        <Image
          className="embla__slide__img embla__slide__img_collection"
          src={content(index).posters[0].previewUrl as string}
          fill={true}
          alt="Your alt text"
        />
        {showCardOverlay && (
          <Stack className="embla__content_collection">
            <Stack
              className="embla__content_top-collection"
              spacing={1}
              sx={{ flex: '0 1 50%' }}
            >
              <Tooltip
                disableInteractive
                placement="top-start"
                title="Смотреть позже"
              >
                <BookmarkBorderIcon sx={{ color: '#fff' }} />
              </Tooltip>
              <Tooltip disableInteractive placement="top-start" title="Похожее">
                <AutoFixHighIcon sx={{ color: '#fff' }} />
              </Tooltip>
              <Tooltip
                disableInteractive
                placement="top-start"
                title="Уже смотрел, оценить"
              >
                <StarBorderIcon sx={{ color: '#fff' }} />
              </Tooltip>
              <Tooltip
                disableInteractive
                placement="top-start"
                title="Не нравится такое"
              >
                <HideSourceIcon sx={{ color: '#fff' }} />
              </Tooltip>
            </Stack>
            <Stack
              className="embla__content_bot-collection"
              spacing={0.5}
              sx={{ flex: '0 1 50%' }}
            >
              <Stack
                direction={'row'}
                sx={{ color: '#fff', alignItems: 'baseline' }}
              >
                <Typography sx={{ fontSize: '28px', fontWeight: '800' }}>
                  {content(index).rating?.toString()[0]}.
                </Typography>
                <Typography sx={{ fontSize: '24px', fontWeight: '800' }}>
                  {content(index).rating?.toString()[2]}
                </Typography>
              </Stack>
              <Typography
                sx={{
                  fontSize: '12px',
                  fontWeight: '400',
                  color: 'rgb(170,170,170)',
                }}
              >
                сюжет
              </Typography>
              <LinearProgress value={35} variant="determinate" color="info" />
              <Typography
                sx={{
                  fontSize: '14px',
                  fontWeight: '400',
                  color: 'rgb(200,200,200)',
                }}
              >
                {content(index).year}, {content(index).countries[0]},{' '}
                {content(index).genres[0]}
              </Typography>
              <Typography
                sx={{
                  fontSize: '12px',
                  fontWeight: '400',
                  color: 'rgb(200,200,200)',
                }}
              >
                {content(index).movieLength} минут
              </Typography>
            </Stack>
          </Stack>
        )}
      </div>
    </>
  );
};

export default CollectionSlide;
