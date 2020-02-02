import React from "react"
import {graphql} from "gatsby"
import Layout from "../components/layout"

export default ({data}) => (
  <Layout>
    <h1>{data.site.siteMetadata.title}</h1>
    <p>
      We're the only site running on your computer dedicated to showing the best
      photos and videos of pandas eating lots of food.
    </p>
    <p>{data.allMarkdownRemark.totalCount} posts on this site</p>
  </Layout>
)
export const query = graphql`
  query {
    allMarkdownRemark{
      totalCount
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`