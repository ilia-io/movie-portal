import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Counter from '@/store/slices/Counter/Counter';

type Props = {};

const about = (props: Props) => {
  return (
    <div>
      <Counter />
      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
    </div>
  );
};

export default about;
