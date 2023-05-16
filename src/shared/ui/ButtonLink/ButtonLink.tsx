import React from 'react';
import Button from '@mui/material/Button';
import { Stack, Typography } from '@mui/material';

type Props = {
  name?: string;
  to?: string;
  startIcon?: React.ReactNode;
  paddingX?: string;
  paddingY?: string;
  topText?: string;
  bgcolor?: string;
  bgcolorHover?: string;
  borderRadius?: string;
  flex?: string;
};

const ButtonLink = ({
  name = 'Кнопка-Ссылка',
  to = '#',
  startIcon,
  paddingX,
  paddingY,
  topText,
  bgcolor = '#1F1B2E',
  bgcolorHover = '#2E2844',
  borderRadius = '8px',
  flex,
}: Props) => {
  return (
    <Button
      sx={{
        background: bgcolor,
        color: 'primary.contrastText',
        px: paddingX,
        py: paddingY,
        borderRadius,
        ':hover': {
          bgcolor: bgcolorHover,
        },
        flexShrink: 0,
        flex,
      }}
      href={to}
      target="_blank"
      rel="noreferrer"
      startIcon={startIcon}
    >
      <Stack>
        <Typography
          sx={{
            fontSize: '10px',
            lineHeight: '12px',
            color: '#C3C2C8',
            textTransform: 'none',
          }}
        >
          {topText}
        </Typography>
        <Typography
          sx={{ fontSize: '15px', lineHeight: '20px', textTransform: 'none' }}
        >
          {name}
        </Typography>
      </Stack>
    </Button>
  );
};

export default ButtonLink;
