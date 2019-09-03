import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Avatar from '../Avatar';
import * as S from './styled';

const Profile = () => {
  const {
    site: {
      siteMetadata: { devName, devDescription, position },
    },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          devName
          devDescription
          position
        }
      }
    }
  `);

  return (
    <S.ProfileWrapper>
      <Avatar />
      <S.ProfileAuthor>
        {devName}
        <S.ProfilePosition>{position}</S.ProfilePosition>  
      </S.ProfileAuthor>
      <S.ProfileDescription>{devDescription}</S.ProfileDescription>
    </S.ProfileWrapper>
  )
};

export default Profile