import React from 'react';
import Link from '@mui/material/Link';

type Props = {
  name?: string;
  to?: string;
};

const TextLink = ({ name = 'Ссылка', to = '#' }: Props) => {
  return (
    <Link
      sx={{
        ':hover': {
          color: 'white',
        },
      }}
      href={to}
      underline="none"
      target="_blank"
      rel="noreferrer"
    >
      {name}
    </Link>
  );
};

export default TextLink;
