import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import theme from '../constants/theme'
import Header from '../components/Header'
import BlogPost from '../components/BlogPost'
import HeroSmall from '../components/HeroSmall'
import { FaChevronCircleRight } from 'react-icons/fa'

const BlogPageWrap = styled.div`
  position: relative;
  /* top: ${theme.nav.height}; */
  padding-bottom: 128px;
  overflow: hidden;
  width: 100%;
`

const ReadMoreWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`

export default function Blog({ data }) {
  const posts = data.allMarkdownRemark.edges
  return (
    <BlogPageWrap>
      <HeroSmall>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-md-8">
              <Header
                m0
                css={css`
                  padding: 0 0 ${theme.margin.mid};
                `}
              >
                MathemaTIC News
              </Header>
            </div>
          </div>
        </div>
        {/* <SVGRects src={svgRects} /> */}
      </HeroSmall>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            {posts.map(({ node }, i) => {
              const { frontmatter, excerpt } = node
              const { author, title, path, date } = frontmatter
              return (
                <div
                  key={'blogSnippet' + i}
                  style={{ marginBottom: theme.margin.mid }}
                >
                  <BlogPost
                    key={'blogExcerpt' + i}
                    title={title}
                    author={author}
                    date={date}
                    body={excerpt}
                    path={path}
                    isExcerpt
                  />

                  <ReadMoreWrap style={{ marginTop: theme.margin.small }}>
                    <Link to={path}>
                      <FaChevronCircleRight /> Read more
                    </Link>
                  </ReadMoreWrap>
                  <hr />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </BlogPageWrap>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            author
          }
        }
      }
    }
  }
`
