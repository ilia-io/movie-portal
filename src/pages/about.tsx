import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

type Props = {};

const about = (props: Props) => {
  return (
    <div>
      about
      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
    </div>
  );
};

export default about;
