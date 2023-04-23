import React from 'react';
import Link from '@mui/material/Link';

type Props = {
  name?: string;
  to?: string;
  gradient?: string;
};

const GradientTextLink = ({
  name = 'Ссылка',
  to = '#',
  gradient = 'linear-gradient(90deg, rgba(210,6,69,1) 0%, rgba(198,69,248,1) 100%)',
}: Props) => {
  return (
    <Link
      sx={{
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundImage: `${gradient}`,
      }}
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

export default GradientTextLink;
