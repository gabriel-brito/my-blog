import React from "react"
import { StaticQuery, graphql } from "gatsby"

const Profile = () => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            devName
            devDescription
            position
          }
        }
      }
    `}
    render={({
      site: {
        siteMetadata: { devName, devDescription, position },
      },
    }) => (
      <div className="Profile-wrapper">
        <h1>{devName}</h1>
        <h2>{position}</h2>
        <p>{devDescription}</p>
      </div>
    )}
  />
)

export default Profile