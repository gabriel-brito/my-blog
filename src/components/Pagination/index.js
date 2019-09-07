import React from 'react';
import propTypes from 'prop-types';
import * as S from './styled';
import { Link } from 'gatsby';


const Pagination = ({ isFirst, isLast, currentPage, numPages, prevPage, nextPage }) => (
  <S.PaginationWrapper>
    {!isFirst && <Link to={prevPage}> Página anterior </Link>}

    <p>{currentPage} de {numPages}</p>

    {!isLast && <Link to={nextPage}> Página seguinte  </Link>}
  </S.PaginationWrapper>
);

Pagination.prototypes = {
  isFirst: propTypes.bool.isRequired,
  isLast: propTypes.bool.isRequired,
  currentPage: propTypes.number.isRequired,
  numPages: propTypes.number.isRequired,
  prevPage: propTypes.string,
  nextPage: propTypes.string,
}



export default Pagination;