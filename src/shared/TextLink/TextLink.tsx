import React from 'react';
import Link from '@mui/material/Link';

type Props = {
  name?: string;
  to?: string;
};

const TextLink = ({ name = 'Ссылка', to = '#' }: Props) => {
  return (
    <Link
      href={to}
      underline="none"
      color="inherit"
      target="_blank"
      rel="noreferrer"
    >
      {name}
    </Link>
  );
};

export default TextLink;
