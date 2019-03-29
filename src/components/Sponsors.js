import React from "react"
import AWSLogo from "../images/aws-logo.svg"
import OracleLogo from "../images/oracle-logo.svg"
import styled from "styled-components"

export default () => (
  <section>
    With the participation of <br />
    <Logos>
      <Logo src={AWSLogo} style={{ height: "45px" }} />
      <Logo src={OracleLogo} style={{ height: "20px" }} />
    </Logos>
  </section>
)

const Logo = styled.img`
  max-width: 150px;
  margin: 0 auto;
  filter: grayscale(1);
  opacity: 0.4;
  transition: opacity 0.25s ease-out;

  &:hover {
    opacity: 1;
    filter: grayscale(0);
  }
`

const Logos = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
`
