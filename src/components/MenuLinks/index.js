import React from 'react';
import * as S from './styled';
import links from './content';

const MenuLinks = () => (
  <S.MenuLinksWrapper>
    <S.MenuLinksList>
      {links.map((link, index) => (
        <S.MenuLinksItem key={link.index}>
          <S.MenuLinksLink 
            to={link.url} 
            title={link.label}
            activeClassName='active'
            >
            {link.label}
          </S.MenuLinksLink>
        </S.MenuLinksItem>
        ))
      }
    </S.MenuLinksList>
  </S.MenuLinksWrapper>
);

export default MenuLinks;