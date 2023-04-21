import TextLink from '@/shared/TextLink/TextLink';
import React from 'react';

type Props = {};

const Footer = (props: Props) => {
  return (
    <div>
      Footer
      <TextLink name="О Компании" to="https://corp.ivi.ru/" />
    </div>
  );
};

export default Footer;
