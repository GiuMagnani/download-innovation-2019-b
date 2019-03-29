import React from "react"
import styled from "styled-components"

export default () => (
  <Footer>
    <div>
      <h5>Promoted by</h5>
      <p>
        We are the Next Generation System Integrator, leader in the Digital
        Transformation with a flexible and vendor independent approach.
      </p>
      <h5>In collaboration with</h5>
    </div>
    <small>© Copyright Sorint.lab S.p.A. 2019</small>
  </Footer>
)

const Footer = styled.footer`
  background-color: #201d24;
  color: white;
  position: relative;

  > div {
    padding: 2rem 1rem 1rem;
  }

  small {
    display: block;
    width: 100%;
    padding: 1rem;
    background-color: #1c1c1e;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin-top: -5px;
    background: linear-gradient(to right, #ec566e, #f8af3c);
  }
`
