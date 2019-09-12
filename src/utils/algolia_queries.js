const postsQuery =`{
  posts: allMarkdownRemark(
    sort: {fields: frontmatter___date, order: DESC}
    ) {
    edges {
      node {
        objectID: id
        fields {
          slug
        }
        frontmatter {
          category
          background
          date_timestamp: date
          date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
          title
          description
        }
        excerpt(pruneLength: 5000)
      }
    }
  }
}`;

const flatten = arr =>
  arr.map(({ node: { frontmatter, ...rest }}) => ({
    ...frontmatter,
    data_timestamp: parseInt(
      (new Date(frontmatter.data_timestamp).getTime() / 1000).toFixed(0)
    ),
    ...rest
  }))

const queries = [
  {
    query: postsQuery,
    transformer: ({ data }) => flatten(data.posts.edges),
    indexName: 'posts', // overrides main index name, optional
    settings: {
      attributesToSnippet: ['excerpt:20']
    },
  },
];

module.exports =  queries;