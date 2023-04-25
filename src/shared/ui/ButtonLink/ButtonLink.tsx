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
};

const ButtonLink = ({
  name = 'Кнопка-Ссылка',
  to = '#',
  startIcon,
  paddingX,
  paddingY,
  topText,
}: Props) => {
  return (
    <Button
      sx={{
        backgroundColor: 'background.paper',
        color: 'primary.contrastText',
        px: paddingX,
        py: paddingY,
        borderRadius: '8px',
        ':hover': {
          bgcolor: '#2E2844',
        },
        flexShrink: 0,
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
