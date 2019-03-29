import React from "react"
import styled from "styled-components"
import SymbolGenerator from "./SymbolGenerator"

export default () => {
  return (
    <HeroWrapper>
      <H1>Download Innovation</H1>
      <h2>IT Conference & Festival</h2>
      <h3>September 8th & 9th, Bergamo, Italy</h3>
      <SymbolGenerator />
    </HeroWrapper>
  )
}

const HeroWrapper = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1,
  h2,
  h3 {
    text-transform: uppercase;
  }

  h1 {
    font-size: 36px;
    line-height: 1;
  }

  h2 {
    font-size: 22px;
  }

  h3 {
    font-size: 16px;
  }
`

const H1 = styled.h1`
  text-transform: uppercase;
`
