import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import PaginationFooter from "../components/paginationFooter"
import BlogSummary from "../components/blogSummary"

export default class BlogList extends React.Component {
  state = {}
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const { currentPage, numPages, folder } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage =
      folder + (currentPage - 1 === 1 ? "/" : (currentPage - 1).toString())
    const nextPage = folder + (currentPage + 1).toString()
    return (
      <Layout>
        {posts.map(({ node }) => {
          return (
            <div key={node.id}>
              <BlogSummary blogPost={{ blog: node }} />
            </div>
          )
        })}
        <PaginationFooter
          isFirst={isFirst}
          isLast={isLast}
          prevPageLink={prevPage}
          nextPageLink={nextPage}
          prevRel="prev"
          nextRel="next"
          prevPageText="← Previous Page"
          nextPageText="Next Page →"
        />
      </Layout>
    )
  }
}

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`
