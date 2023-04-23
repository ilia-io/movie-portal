import React from 'react';
import Button from '@mui/material/Button';

type Props = {
  name?: string;
  to?: string;
};

const ButtonLink = ({ name = 'Кнопка-Ссылка', to = '#' }: Props) => {
  return (
    <Button
      sx={{
        backgroundColor: 'background.paper',
        color: 'primary.contrastText',
        px: 4,
      }}
      href={to}
      target="_blank"
      rel="noreferrer"
    >
      {name}
    </Button>
  );
};

export default ButtonLink;
