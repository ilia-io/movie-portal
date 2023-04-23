import ButtonLink from '@/shared/ui/ButtonLink/ButtonLink';
import GradientTextLink from '@/shared/ui/GradientTextLink/GradientTextLink';
import TextLink from '@/shared/ui/TextLink/TextLink';
import React from 'react';
import AppleIcon from '@mui/icons-material/Apple';
import Image from 'next/image';
import IconButton from '@/shared/ui/IconButton/IconButton';
import ShopIcon from '@mui/icons-material/Shop';

type Props = {};

const Footer = (props: Props) => {
  return (
    <div>
      <TextLink name="О Компании" to="https://corp.ivi.ru/" />
      <GradientTextLink
        name="Активация сертификата"
        to="https://www.ivi.ru/cert"
      />
      <ButtonLink
        name="Написать в чате"
        to="https://www.ivi.ru/profile"
        paddingX={'30px'}
      />
      <ButtonLink
        name="App Store"
        to="https://www.ivi.ru/profile"
        startIcon={<AppleIcon />}
        paddingX={'10px'}
        topText="Загрузить в"
      />
      <IconButton icon={<AppleIcon />} borderRadius="8px" />
      <IconButton icon={<ShopIcon />} />
    </div>
  );
};

export default Footer;
