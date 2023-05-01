import React from 'react';
import Box from '@mui/material/Box';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { Typography } from '@mui/material';

type Props = {};

const PopupContentNotifications = (props: Props) => {
  return (
    <>
      <Box
        sx={{
          px: 3,
          py: 4,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 2,
        }}
      >
        <NotificationsActiveIcon
          sx={{
            width: '60px',
            height: '60px',
          }}
        />
        <Typography fontSize={14}>
          Здесь появляются только важные сообщения
        </Typography>
      </Box>
    </>
  );
};

export default PopupContentNotifications;
