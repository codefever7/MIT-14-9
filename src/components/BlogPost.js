import React from 'react'
import styled from '@emotion/styled'
import theme from '../constants/theme'
import { FaUser } from 'react-icons/fa'
// import Link from '../components/Link'
import { Link } from 'gatsby'
import HeroSmall from './HeroSmall'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const BlogPostContainer = styled('div')`
  position: relative;
  color: ${theme.colors.blackAlt};

  h1 {
    margin-bottom: ${theme.margin.mid};
  }

  h2 {
    margin-bottom: ${theme.margin.small};
  }

  h1,
  h2,
  h3 {
    margin: ${theme.margin.mid} 0 ${theme.margin.small};
  }

  p {
    font-size: ${theme.text.p};
    line-height: 1.8em;
  }

  ul {
    margin-bottom: ${theme.margin.small};
  }
`

const HeaderWrap = styled.div``

const PostTitle = styled.h2`
  margin: 0;
  font-size: ${theme.text.pFeat};
  color: ${props =>
    props.isExcerpt ? theme.colors.blackAlt : theme.colors.white};

  a {
    color: inherit;

    &:hover,
    &:focus {
      color: inherit;
    }
  }
`

const PostMetaWrap = styled.div`
  display: flex;
  align-items: center;
`

const PostMeta = styled.p`
  font-size: ${theme.text.p};
  color: ${props =>
    props.isExcerpt ? theme.colors.greyDark : theme.colors.white};
  margin-right: 8px;
`

const PostFooter = styled.div`
  display: flex;
  justify-content: space-between;
`

const FooterLink = styled(Link)`
  background-color: ${theme.colors.greyLight};
  border-radius: 5px;
  color: ${theme.colors.blackAlt};
  padding: 12px 18px;

  ${theme.flexCenter()};
  display: inline-flex;

  & > *:first-child {
    margin-right: 6px;
  }

  & > div {
    display: inline-flex;
  }
`

const PrevNextLinks = styled.div`
  & *:last-child {
    margin-left: 6px;
  }
`

export default function Template({
  body,
  author,
  date,
  title,
  isExcerpt,
  path,
  pageContext,
}) {
  const HeaderStuff = ({ isExcerpt }) => (
    <HeaderWrap>
      <PostTitle isExcerpt={isExcerpt}>
        {isExcerpt ? <Link to={path}>{title}</Link> : title}
      </PostTitle>
      <PostMetaWrap>
        <PostMeta isExcerpt={isExcerpt}>
          <FaUser />
        </PostMeta>
        <PostMeta isExcerpt={isExcerpt}>{author}</PostMeta>
        <PostMeta isExcerpt={isExcerpt}>|</PostMeta>
        <PostMeta isExcerpt={isExcerpt}>{date}</PostMeta>
      </PostMetaWrap>
    </HeaderWrap>
  )
  return (
    <BlogPostContainer isExcerpt={isExcerpt}>
      {isExcerpt && (
        <>
          <HeaderStuff isExcerpt={isExcerpt} />
          <div dangerouslySetInnerHTML={{ __html: body }} />
        </>
      )}
      {!isExcerpt && (
        <>
          <HeroSmall>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <HeaderStuff />
                </div>
              </div>
            </div>
          </HeroSmall>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div
                  dangerouslySetInnerHTML={{ __html: body }}
                  style={{ marginBottom: theme.margin.mid }}
                />
                <PostFooter>
                  <FooterLink to="/blog">
                    <FaChevronLeft />
                    Blog
                  </FooterLink>
                  <PrevNextLinks>
                    {pageContext.next && (
                      <FooterLink to={pageContext.next.frontmatter.path}>
                        <FaChevronLeft />
                      </FooterLink>
                    )}
                    {pageContext.previous && (
                      <FooterLink to={pageContext.previous.frontmatter.path}>
                        <FaChevronRight />
                      </FooterLink>
                    )}
                  </PrevNextLinks>
                </PostFooter>
              </div>
            </div>
          </div>
        </>
      )}
    </BlogPostContainer>
  )
}
