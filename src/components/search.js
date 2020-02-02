import React, { Component } from "react"
import { Index } from "elasticlunr"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"

// Search component
export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ``,
      results: [],
    }
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.query} onChange={this.search} placeholder="search" />
        <ul>
          {this.state.results.map(page => (
            <li key={page.id}>
              <Link
      to={"/" + page.path}
      css={css`
        text-decoration: none;
        color: inherit;
      `}
    >
      <h3
        css={css`
          margin-bottom: ${rhythm(1 / 4)};
        `}
      >
        {page.title}{" "}
        <span
          css={css`
            color: #bbb;
          `}
        >
          — {page.date}
        </span>
      </h3>
      <p>{page.excerpt}</p>
    </Link>
            </li>

          ))}
        </ul>
      </div>
    )
  }
  getOrCreateIndex = () =>
    this.index
      ? this.index
      : // Create an elastic lunr index and hydrate with graphql query results
        Index.load(this.props.searchIndex)

  search = evt => {
    const query = evt.target.value
    this.index = this.getOrCreateIndex()
    this.setState({
      query,
      // Query the index with search string to get an [] of IDs
      results: this.index
        .search(query, {})
        // Map over each ID and return the full document
        .map(({ ref }) => this.index.documentStore.getDoc(ref)),
    })
  }
}