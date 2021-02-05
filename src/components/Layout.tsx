/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header"
// import "./layout.css"
import styled from "styled-components"

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr min(60ch, calc(100% - 64px)) 1fr;
  grid-column-gap: 32px;

  > * {
    grid-column: 2;
  }
`

export type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Wrapper>
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        {children}
      </Wrapper>
    </>
  )
}

export default Layout
