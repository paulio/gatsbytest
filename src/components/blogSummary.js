import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"

export default ({ blogPost }) => {
  const blog = blogPost.blog
  return (
    <Link
      to={blog.fields.slug}
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
        {blog.frontmatter.title}{" "}
        <span
          css={css`
            color: #bbb;
          `}
        >
          — {blog.frontmatter.date}
        </span>
      </h3>
      <p>{blog.excerpt}</p>
    </Link>
  )
}
