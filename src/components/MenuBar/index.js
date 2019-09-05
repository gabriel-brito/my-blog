import React from 'react';
import * as S from './styled';

import { Home } from "styled-icons/boxicons-solid/Home"
import { SearchAlt2 as Search } from "styled-icons/boxicons-regular/SearchAlt2"
import { UpArrowAlt as Arrow } from "styled-icons/boxicons-regular/UpArrowAlt"
import { Lightbulb as Light } from "styled-icons/typicons/Lightbulb"
import { Grid } from "styled-icons/boxicons-solid/Grid"

const MenuBar = () => (
  <S.MenuBarWrapper>
    <S.MenuBarGroup>
      <S.MenuBarLink to='/' title='back to home'>
        <S.MenuBarItem>
          <Home />
        </S.MenuBarItem>
      </S.MenuBarLink>
      <S.MenuBarLink to='/search/' title='Search'>
        <S.MenuBarItem>
          <Search />
        </S.MenuBarItem>
      </S.MenuBarLink>
    </S.MenuBarGroup>
    
    <S.MenuBarGroup>
      <S.MenuBarItem title="change theme">
        <Arrow />
      </S.MenuBarItem>
      <S.MenuBarItem title="grid change">
        <Light />
      </S.MenuBarItem>
      <S.MenuBarItem title="back to top">
        <Grid />
      </S.MenuBarItem>
    </S.MenuBarGroup>
  </S.MenuBarWrapper>
);

export default MenuBar;