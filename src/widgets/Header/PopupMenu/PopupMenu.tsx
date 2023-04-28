import { Box, Container } from '@mui/material';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

const PopupMenu = ({ children }: Props) => {
  return (
    <>
      <Container maxWidth="lg">
        <Box
          sx={{
            height: '400px',
            backgroundColor: '#1F1B2E',
            borderRadius: '0 0 12px 12px',
          }}
        >
          {children}
        </Box>
      </Container>
    </>
  );
};

export default PopupMenu;
