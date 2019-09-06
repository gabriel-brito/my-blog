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
          timeToRead
          }
        }) => (
          <PostItem 
            slug="/about/"
            background={background}
            category={category}
            date={date}
            description={description}
            title={title}
            timeToRead={timeToRead}
          />
        ))}

      <PostItem
        slug="/about/"
        category="Misc"
        date="30 de Julho de 2019"
        timeToRead="5"
        title="Diga não ao Medium: tenha sua própria plataforma"
        description="Algumas razões para você ter sua própria plataforma ao invés de soluções como o Medium."
      />
    </Layout>
  )
}

export default IndexPage
