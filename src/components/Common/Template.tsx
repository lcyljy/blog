import React, { FunctionComponent, ReactNode } from 'react'
import styled from '@emotion/styled'
import GlobalStyle from 'components/Common/GlobalStyle'
import Footer from 'components/Common/Footer'
import { Helmet } from 'react-helmet'
import {FaGithub, FaBloggerB} from 'react-icons/fa';
import DarkModeToggle from 'hooks/DarkModeToggle';

type TemplateProps = {
  title: string
  description: string
  url: string
  image: string
  children: ReactNode
}

const Container = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;

`
const Nav = styled.div`
  padding: 1rem;
  font-size: 25px;
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  color: #ffffff;
`

const Icon = styled.div`
  padding: 0 1rem;
  font-size: 25px;
  transition: all 0.2s linear;
&:hover{
  
  transform:scale(1.3);
}
`


const Template: FunctionComponent<TemplateProps> = function ({
  title,
  description,
  url,
  image,
  children,
}) {
  return (
    <Container>
      
      <Helmet>
        <title>{title}</title>

        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content={title} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:site" content="@애한" />
        <meta name="twitter:creator" content="@애한" />

        <html lang="ko" />
      </Helmet>
      <Nav><Icon>이력서</Icon> | <Icon><a  href="https://blog.naver.com/lodin_love/222473733290" target='_blank'><FaBloggerB/></a></Icon> | <Icon><a  href="https://github.com/lcyljy"target='_blank'><FaGithub/></a ></Icon> </Nav>
      <GlobalStyle />
      <DarkModeToggle />
      {children}
      <Footer />
 
    </Container>
  )
}

export default Template