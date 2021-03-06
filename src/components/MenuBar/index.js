import React, { useState, useEffect } from 'react';
import * as S from './styled';

import { Home } from 'styled-icons/boxicons-solid/Home'
import { SearchAlt2 as Search } from 'styled-icons/boxicons-regular/SearchAlt2'
import { Lightbulb as Light } from 'styled-icons/typicons/Lightbulb'
import { Person } from '@styled-icons/evaicons-solid/Person'

const MenuBar = () => {
  const [ theme, setTheme ] = useState(null);
  
  const isDarkMode = theme === 'dark';
  
  useEffect(() => {
    setTheme(window.__theme);
    window.__onThemeChange = () => setTheme(window.__theme);
  }, []);

  return (
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
        <S.MenuBarLink to='/about' title='About me page'>
          <S.MenuBarItem>
            <Person />
          </S.MenuBarItem>
        </S.MenuBarLink>
        <S.MenuBarItem title='grid change' 
          onClick={() => {
            window.__setPreferredTheme(isDarkMode ? 'light' : 'dark');
          }}
          className={theme}
        >
          <Light />
        </S.MenuBarItem>
      </S.MenuBarGroup>
    </S.MenuBarWrapper>
  )
};

export default MenuBar;