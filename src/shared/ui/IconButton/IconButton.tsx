import React from 'react';
import MuiIconButton from '@mui/material/IconButton';

type Props = {
  icon: React.ReactNode;
  borderRadius?: string;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  to?: string;
};

const IconButton = ({
  icon,
  borderRadius,
  backgroundColor = 'background.paper',
  size = 'medium',
  to = '',
}: Props) => {
  return (
    <MuiIconButton
      target="_blank"
      rel="noreferrer"
      href={to}
      size={size}
      sx={{
        backgroundColor,
        borderRadius,
        ':hover': {
          bgcolor: '#2E2844',
        },
      }}
    >
      {icon}
    </MuiIconButton>
  );
};

export default IconButton;
