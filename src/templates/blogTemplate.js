import React from 'react'
import { graphql } from 'gatsby'
import BlogPost from '../components/BlogPost'
import styled from '@emotion/styled'
import theme from '../constants/theme'

const PostWrap = styled.div`
  padding-bottom: ${theme.margin.small};
`

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
  pageContext,
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  const { author, date, title } = frontmatter
  return (
    <PostWrap>
      <BlogPost
        body={html}
        author={author}
        date={date}
        title={title}
        pageContext={pageContext}
      />
    </PostWrap>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        author
        title
      }
    }
  }
`
