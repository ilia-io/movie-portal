import { Link, Stack, Typography } from '@mui/material';
import React from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

type Props = {
  name: string;
  link: string;
};

const CollectionCarouselTitle = ({ name, link }: Props) => {
  return (
    <>
      <Link href={link} underline="none" target="_blank" rel="noreferrer">
        <Stack
          direction={'row'}
          sx={{
            position: 'relative',
            display: 'inline-block',
          }}
        >
          <Typography
            sx={{
              fontSize: '24px',
              fontStyle: 'normal',
              fontWeight: '700',
              lineHeight: '28px',
              color: '#fff',
            }}
          >
            {name}
          </Typography>
          <ArrowForwardIosIcon
            sx={{
              color: '#fff',
              transform: 'scale(0.7)',
              position: 'absolute',
              top: '4px',
              right: '-24px',
            }}
          />
        </Stack>
      </Link>
    </>
  );
};

export default CollectionCarouselTitle;
