import React from "react"
import { Link } from "gatsby"

export default props => {
  const pageFooter = props
  return (
    <div>
      {!pageFooter.isFirst && (
          <Link to={pageFooter.prevPageLink} rel={pageFooter.prevRel}>
            {pageFooter.prevPageText}
          </Link>
        )}
        {!pageFooter.isLast && (
          <Link to={pageFooter.nextPageLink} rel={pageFooter.nextRel}>
            {pageFooter.nextPageText}
          </Link>
        )}
    </div>
  )
}
