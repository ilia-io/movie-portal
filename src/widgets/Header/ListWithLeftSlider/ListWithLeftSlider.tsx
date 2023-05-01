import React from 'react';
import { Stack } from '@mui/material';
import Link from '@mui/material/Link';

type Props = {
  list: { name: string; link: string }[];
};

const ListWithLeftSlider = ({ list }: Props) => {
  const [anchorElNav, setAnchorElNav] = React.useState<number>(0);

  const handleHoverCategorie = (index: number) => {
    setAnchorElNav(index);
  };

  const linkStyles = {
    basic: {
      fontSize: '15px',
      borderLeft: '1px solid gray',
      pl: 2,
      py: 0.6,
      transition: '.5s',
    },
    active: {
      fontSize: '15px',
      borderLeft: '1.5px solid white',
      pl: 2,
      py: 0.6,
      color: 'white',
    },
  };
  return (
    <>
      <Stack>
        {list.map((categorie, index) => (
          <Link
            onMouseOver={() => handleHoverCategorie(index)}
            sx={anchorElNav === index ? linkStyles.active : linkStyles.basic}
            href={categorie.link}
            underline="none"
            target="_blank"
            rel="noreferrer"
          >
            {categorie.name}
          </Link>
        ))}
      </Stack>
    </>
  );
};

export default ListWithLeftSlider;
