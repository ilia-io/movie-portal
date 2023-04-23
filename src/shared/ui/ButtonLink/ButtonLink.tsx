import React from 'react';
import Button from '@mui/material/Button';

type Props = {
  name?: string;
  to?: string;
};

const ButtonLink = ({ name = 'Кнопка-Ссылка', to = '#' }: Props) => {
  return (
    <Button href={to} target="_blank" rel="noreferrer">
      {name}
    </Button>
  );
};

export default ButtonLink;
