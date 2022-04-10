import * as React from 'react';
import Copyright from "./Copyright";
import styled from 'styled-components';

const FooterBox = styled.footer`
  //border: 1px solid red;
  padding-top: 2rem;
  padding-bottom: 2rem;
`

const Footer = React.forwardRef((props,ref) => {
  return (
    <FooterBox ref={ref}>
      <Copyright />
    </FooterBox>
  )
})

export default Footer;
