import React from 'react';
import TextLink from '@/shared/ui/TextLink/TextLink';
import { Grid, Stack, Typography } from '@mui/material';
import ListWithLeftSlider from '../ListWithLeftSlider/ListWithLeftSlider';
import ButtonLink from '@/shared/ui/ButtonLink/ButtonLink';

type Props = {};

const PopupContentProfile = (props: Props) => {
  return (
    <>
      <Grid container px={3} py={4}>
        <Grid container item xs={8}>
          <Grid item xs={4}>
            <Stack spacing={1}></Stack>
          </Grid>
        </Grid>
        <Grid
          container
          item
          xs={4}
          sx={{
            justifyContent: 'flex-end',
          }}
        >
          <Grid
            item
            sx={
              {
                // alignItems: 'flex-end',
              }
            }
          >
            <ButtonLink
              name="Войти или зарегистрироваться"
              bgcolor="#EA003D"
              bgcolorHover="#FF0F4D"
              paddingX={'3rem'}
              borderRadius="7px"
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default PopupContentProfile;
