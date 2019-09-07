import React from "react"
import { useStaticQuery, graphql } from 'gatsby';

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from '../components/PostItem';

const IndexPage = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              background
              category
              date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
              title
              description
            }
            timeToRead
          }
        }
      }
    }
  `);

  const postList = allMarkdownRemark.edges;

  return (
    <Layout>
      <SEO title="Home" />
      {postList.map(({
        node: {
          frontmatter: { background, category, date, description, title },
          timeToRead,
          fields: { slug }
          }
        }) => (
          <PostItem 
            slug={slug}
            background={background}
            category={category}
            date={date}
            description={description}
            title={title}
            timeToRead={timeToRead}
          />
        ))}
    </Layout>
  )
}

export default IndexPage
