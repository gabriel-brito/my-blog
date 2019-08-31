import React from "react"
import { useStaticQuery, graphql } from "gatsby"

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
    <div className="Profile-wrapper">
      <h1>{devName}</h1>
      <h2>{position}</h2>
      <p>{devDescription}</p>
    </div>
  )
};

export default Profile