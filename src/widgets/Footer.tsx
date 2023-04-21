import GradientTextLink from '@/shared/GradientTextLink/GradientTextLink';
import TextLink from '@/shared/TextLink/TextLink';
import React from 'react';

type Props = {};

const Footer = (props: Props) => {
  return (
    <div>
      Footer
      <TextLink name="О Компании" to="https://corp.ivi.ru/" />
      <GradientTextLink
        name="Активация сертификата"
        to="https://www.ivi.ru/cert"
      />
    </div>
  );
};

export default Footer;
