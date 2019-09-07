import React from 'react';
import { graphql } from 'gatsby';

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from '../components/PostItem';

const BlogPost = props => {
  const postList = props.data.allMarkdownRemark.edges;

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
};

export const query = graphql`
  query Posts($limit: Int!, $skip: Int!){
    allMarkdownRemark(
      sort: {fields: frontmatter___date, order: DESC}
      limit: $limit
      skip: $skip
      ) {
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
`

export default BlogPost;