import React from 'react';

import MuiIconButton from '@mui/material/IconButton';
type Props = {
  icon: React.ReactNode;
  borderRadius?: string;
};

const IconButton = ({ icon, borderRadius }: Props) => {
  return (
    <MuiIconButton
      sx={{
        backgroundColor: 'background.paper',
        borderRadius: { borderRadius },
      }}
    >
      {icon}
    </MuiIconButton>
  );
};

export default IconButton;
