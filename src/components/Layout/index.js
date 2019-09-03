import React from "react"
import PropTypes from "prop-types"

import * as S from './styled';
import GlobalStyles from '../../styles/global';
import Sidebar from "../Sidebar";

const Layout = ({ children }) => (
  <S.LayoutWrapper>
    <GlobalStyles />
    <Sidebar />
    <S.LayoutMain>
      {children}
    </S.LayoutMain>
  </S.LayoutWrapper>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
