import ButtonLink from '@/shared/ui/ButtonLink/ButtonLink';
import GradientTextLink from '@/shared/ui/GradientTextLink/GradientTextLink';
import TextLink from '@/shared/ui/TextLink/TextLink';
import React from 'react';
import Image from 'next/image';
import IconButton from '@/shared/ui/IconButton/IconButton';
import ShopIcon from '@mui/icons-material/Shop';
import DevicesOtherIcon from '@mui/icons-material/DevicesOther';
import Grid from '@mui/material/Grid';
import { Stack, Typography } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Link from '@mui/material/Link';
import VideocamOffIcon from '@mui/icons-material/VideocamOff';
import MuiIconButton from '@mui/material/IconButton';
import AppleIcon from '@mui/icons-material/Apple';
import vk from '../../../public/assets/icons/vk.svg';
import odnoklass from '../../../public/assets/icons/odnoklass.svg';
import TwitterIcon from '@mui/icons-material/Twitter';
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import { styled } from '@mui/material/styles';
import Tooltip, { TooltipProps } from '@mui/material/Tooltip';
import Fade from '@mui/material/Fade';
import Container from '@mui/material/Container';

type Props = {};

const Footer = (props: Props) => {
  const StyledTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))`
    & .MuiTooltip-tooltip {
      background: #1f1b2e;
      borderradius: 8px;
      width: 196px;
      height: 36px;
      text-align: center;
      color: #fff;
      font-size: 15px;
      font-style: normal;
      font-weight: 500;
      line-height: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `;
  return (
    <>
      <Container maxWidth="lg">
        <Stack spacing={6}>
          <Grid container borderTop={1} borderBottom={1} py={6}>
            <Grid item xs={3}>
              <Stack spacing={1}>
                <Typography color={'text.primary'}>О нас</Typography>
                <TextLink name="О компании" to="https://corp.ivi.ru/" />
                <TextLink
                  name="Вакансии"
                  to="https://corp.ivi.ru/career/#career-vacancy-block"
                />
                <TextLink
                  name="Программа бета-тестирования"
                  to="https://www.ivi.ru/pages/beta"
                />
                <TextLink
                  name="Информация для партнёров"
                  to="https://www.ivi.ru/info/partners"
                />
                <TextLink
                  name="Размещение рекламы"
                  to="https://corp.ivi.ru/advertisers/"
                />
                <TextLink
                  name="Пользовательское соглашение"
                  to="https://www.ivi.ru/info/agreement"
                />
                <TextLink
                  name="Политика конфиденциальности"
                  to="https://www.ivi.ru/info/confidential"
                />
                <TextLink
                  name="Комплаенс"
                  to="https://www.ivi.ru/info/goryachaya-liniya-komplaens"
                />
              </Stack>
            </Grid>
            <Grid item xs={3}>
              <Stack spacing={1}>
                <Typography color={'text.primary'}>Разделы</Typography>
                <TextLink name="Мой Иви" to="https://www.ivi.ru/" />
                <TextLink name="Что нового" to="https://www.ivi.ru/new" />
                <TextLink name="Фильмы" to="https://www.ivi.ru/movies" />
                <TextLink name="Сериалы" to="https://www.ivi.ru/series" />
                <TextLink
                  name="Мультфильмы"
                  to="https://www.ivi.ru/animation"
                />
                <TextLink name="TV+" to="https://www.ivi.ru/tvplus" />
                <TextLink
                  name="Что посмотреть"
                  to="https://www.ivi.ru/goodmovies"
                />
                <GradientTextLink
                  name="Активация сертификата"
                  to="https://www.ivi.ru/cert"
                />
              </Stack>
            </Grid>
            <Grid item xs={3}>
              <Stack
                sx={{
                  alignItems: 'flex-start',
                }}
                spacing={1}
              >
                <Typography color={'text.primary'}>Служба поддержки</Typography>
                <Typography>
                  Мы всегда готовы вам помочь.
                  <br /> Наши операторы онлайн 24/7
                </Typography>
                <ButtonLink name="Написать в чате" paddingX="2.5rem" />
                <Stack direction="row" spacing={1.5} py={0.6}>
                  <IconButton
                    icon={<MailOutlineIcon />}
                    borderRadius="8px"
                    to="mailto:support@ivi.ru"
                  />
                  <StyledTooltip
                    TransitionComponent={Fade}
                    TransitionProps={{ timeout: 600 }}
                    title="+7 831 211-95-03"
                  >
                    <MuiIconButton
                      sx={{
                        bgcolor: 'background.paper',
                        borderRadius: '8px',
                      }}
                    >
                      <LocalPhoneIcon />
                    </MuiIconButton>
                  </StyledTooltip>
                </Stack>
                <Link
                  sx={{
                    ':hover': {
                      color: 'text.secondary',
                    },
                  }}
                  href={'https://ask.ivi.ru/'}
                  underline="none"
                  target="_blank"
                  rel="noreferrer"
                  color={'white'}
                >
                  ask.ivi.ru
                </Link>
                <Typography>Ответы на вопросы</Typography>
              </Stack>
            </Grid>
            <Grid item xs={3}>
              <Link
                href="https://www.ivi.ru/subscribe?redirect_url=%2F"
                underline="none"
                target="_blank"
                rel="noreferrer"
              >
                {' '}
                <Stack
                  sx={{
                    alignItems: 'center',
                  }}
                  spacing={1}
                >
                  <MuiIconButton
                    sx={{
                      width: '104px',
                      height: '104px',
                      borderRadius: '20px',
                      background:
                        'linear-gradient(180deg,#a869f0 0%,#834cc2 100%)',
                      boxShadow: '0 0 104px #a869f0',
                    }}
                  >
                    <VideocamOffIcon sx={{ scale: '2.8' }} />
                  </MuiIconButton>
                  <Typography py={2.5} textAlign={'center'}>
                    Смотрите фильмы, сериалы и <br /> мультфильмы без рекламы
                  </Typography>
                </Stack>
              </Link>
            </Grid>
          </Grid>
          <Stack direction="row" justifyContent={'space-between'}>
            <Stack direction="row" spacing={2}>
              <ButtonLink
                startIcon={<AppleIcon />}
                topText="Загрузить в"
                name="App Store"
                paddingX="1rem"
                to="https://go.onelink.me/app/devicesiOS"
              />
              <ButtonLink
                startIcon={<ShopIcon />}
                topText="Доступно в"
                name="Google Play"
                paddingX="1rem"
                to="https://go.onelink.me/app/devicesAndroid"
              />
              <ButtonLink
                startIcon={<DesktopWindowsIcon />}
                topText="Смотрите на"
                name="Smart TV"
                paddingX="1rem"
                to="https://www.ivi.ru/pages/tvsmart"
              />
              <ButtonLink
                startIcon={<DevicesOtherIcon />}
                name="Все устройства"
                paddingX="1rem"
                to="https://www.ivi.ru/devices"
              />
            </Stack>
            <Stack direction="row" spacing={2}>
              <IconButton
                size="large"
                icon={<Image src={vk} alt="vk" width={20} height={20} />}
                to="https://vk.com/iviru?crc=fa4448c13e06e69ba9e814e8743c7e2e"
              />
              <IconButton
                size="large"
                icon={<Image src={odnoklass} alt="vk" width={20} height={20} />}
                to="https://ok.ru/ivi.ru"
              />
              <IconButton
                size="large"
                icon={<TwitterIcon />}
                to="https://twitter.com/ivi_ru"
              />
              <IconButton
                size="large"
                icon={<WifiCalling3Icon />}
                to="https://vb.me/a0544c"
              />
              <IconButton
                size="large"
                icon={<LinkedInIcon />}
                to="https://www.linkedin.com/company/2543415/"
              />
              <IconButton
                size="large"
                icon={<TelegramIcon />}
                to="https://t.me/official_iviru"
              />
            </Stack>
          </Stack>
          <Typography>
            © 2023 ООО «Иви.ру» <br /> HBO ® and related service marks are the
            property of Home Box Office, Inc
          </Typography>
        </Stack>
      </Container>
    </>
  );
};

export default Footer;
