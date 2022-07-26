import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

const FooterWrapper = styled.footer`
  display: grid;
  place-items: center;
  margin-top: auto;
  padding: 50px 0;
  font-size: 15px;
  text-align: center;
  line-height: 1.5;


  @media (max-width: 768px) {
    font-size: 13px;
  }
`

const Footer: FunctionComponent = function () {
  return (
    <FooterWrapper>
      애한의 개발블로그에 오신 것을 환영합니다. 😆
      <br />©2022 by 애한, All Page content is property of 애한, Powered By Gatsby.
    </FooterWrapper>
  )
}

export default Footer