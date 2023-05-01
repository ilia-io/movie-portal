import React from 'react';
// import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Image from 'next/image';
import logo from 'public/assets/images/logo.svg';
import Link from 'next/link';
import theme from '@/shared/config/muiTheme';
import { Stack } from '@mui/material';
import TextLink from '@/shared/ui/TextLink/TextLink';
import ButtonLink from '@/shared/ui/ButtonLink/ButtonLink';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import PopupMenu from './PopupMenu/PopupMenu';
import PopupContentMovies from './PopupContentMovies/PopupContentMovies';
import PopupContentSeries from './PopupContentSeries/PopupContentSeries';

type Props = {};

const navItems = [
  { name: 'Мой Иви', link: 'https://www.ivi.ru/' },
  { name: 'Что нового', link: 'https://www.ivi.ru/new' },
  { name: 'Фильмы', link: 'https://www.ivi.ru/movies' },
  { name: 'Сериалы', link: 'https://www.ivi.ru/series' },
  { name: 'Мультфильмы', link: 'https://www.ivi.ru/animation' },
  { name: 'TV+', link: 'https://www.ivi.ru/tvplus' },
];
const hoverable = ['Фильмы', 'Сериалы', 'Уведомления', 'Профиль'];

const Header = (props: Props) => {
  const [showPopup, setShowPopup] = React.useState(false);
  const [activeHoverCategorie, setActiveHoverCategorie] = React.useState('');

  // const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
  //   null
  // );
  // const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
  //   null
  // );

  // const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorElNav(event.currentTarget);
  // };
  // const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  const handleMouseOver = (name: string) => {
    setShowPopup(hoverable.some((el) => el === name));
    setActiveHoverCategorie(name);
  };

  const handleMouseOut = (name: string) => {
    if (hoverable.some((el) => el !== name)) setShowPopup(false);
  };

  return (
    <>
      <Container maxWidth="lg">
        <Box
          onMouseLeave={() => setShowPopup(false)}
          sx={{
            bgcolor: `${showPopup ? '#1F1B2E' : 'transparent'}`,
            mt: 0.5,
            px: 1.5,
            py: 0.5,
            borderRadius: '12px 12px 0 0',
            borderBottom: showPopup ? 1 : 0,
          }}
        >
          <Toolbar
            disableGutters
            sx={{
              bgcolor: 'transparent',
            }}
          >
            <Box
              sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}
            ></Box>
            <Link href="/">
              <Image src={logo} alt="logo" />
            </Link>
            <Stack
              direction={'row'}
              component={'nav'}
              spacing={1.6}
              ml={3}
              sx={{
                display: { xs: 'none', md: 'flex' },
              }}
            >
              {navItems.map((navItem) => (
                <Box
                  key={navItem.name}
                  onMouseEnter={() => handleMouseOver(navItem.name)}
                >
                  <TextLink name={navItem.name} to={navItem.link} />
                </Box>
              ))}
            </Stack>
            <Box sx={{ flexGrow: 1 }}></Box>
            <Stack
              direction={'row'}
              component={'nav'}
              spacing={2}
              sx={{
                alignItems: 'center',
              }}
            >
              <ButtonLink
                name="Оплатить подписку"
                bgcolor="linear-gradient(90deg, rgb(196, 70, 254) 16%, rgb(234, 1, 63))"
                to="https://www.ivi.ru/login?action=%2Fuser%2Fsubscription&buy=true&type=subscriptionChange&renew_period=2592000&subscription_id=6&redirect_url=%2F&from=top_menu"
              />
              <Button
                onMouseEnter={() => setShowPopup(false)}
                target="_blank"
                rel="noreferrer"
                href="https://www.ivi.ru/?ivi_search"
                sx={{
                  textTransform: 'none',
                  background: 'transparent',
                  display: { xs: 'none', lg: 'flex' },
                  ':hover': {
                    color: '#fff',
                    background: 'transparent',
                  },
                }}
              >
                <SearchIcon /> Поиск
              </Button>
              <NotificationsNoneIcon
                onMouseEnter={() => handleMouseOver('Уведомления')}
                sx={{
                  cursor: 'pointer',
                  ':hover': {
                    color: '#fff',
                  },
                }}
              />
              <Box
                onMouseEnter={() => handleMouseOver('Профиль')}
                sx={{
                  border: 1.5,
                  p: 1,
                  borderRadius: '8px',
                  transition: 'all 0.5s',
                  cursor: 'pointer',
                  ':hover': {
                    color: '#fff',
                    boxShadow: '0px 0px 10px 1px rgba(255, 255, 255, 0.3)',
                  },
                }}
              >
                <PermIdentityIcon sx={{}} />
              </Box>
            </Stack>
          </Toolbar>
        </Box>
      </Container>
      {showPopup && (
        <Box
          // onMouseOver={() => handleMouseOver(activeHoverCategorie)}
          // onMouseOut={() => handleMouseOut(activeHoverCategorie)}
          onMouseEnter={() => setShowPopup(true)}
          onMouseLeave={() => setShowPopup(false)}
        >
          <PopupMenu>
            {/* const hoverable = ['Фильмы', 'Сериалы', 'Уведомления', 'Профиль']; */}
            {activeHoverCategorie === 'Фильмы' ? (
              <PopupContentMovies />
            ) : activeHoverCategorie === 'Сериалы' ? (
              <PopupContentSeries />
            ) : null}
          </PopupMenu>
        </Box>
      )}
    </>
  );
};

export default Header;
