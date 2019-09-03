import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import * as S from './styled';

const Avatar = () => {
  const { avatarImage } = useStaticQuery(
    graphql`
      {
        avatarImage: file(relativePath: { eq: "gatsby-profile.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 60) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `
  );

  return <S.AvatarWrapper fluid={avatarImage.childImageSharp.fluid} />
};

export default Avatar;