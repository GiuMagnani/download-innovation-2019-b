import React, { useState } from "react"
import posed, { PoseGroup } from "react-pose"
import styled from "styled-components"

const Symbol = posed.div({
  enter: {
    scale: 1,
    opacity: 1,
    rotate: 0,
    originX: "50%",
    originY: "50%",
    transition: { duration: 150 },
  },
  exit: {
    originX: "50%",
    originY: "50%",
    rotate: 15,
    scale: 0.7,
    opacity: 0,
    transition: { duration: 150 },
  },
})

export default () => {
  const [input, setInput] = useState("")

  const getZIndex = letter => {
    switch (letter) {
      case "x":
      case "s":
      case "p":
      case "r":
      case "m":
        return 0
      case "y":
      case "n":
      case "f":
      case "e":
      case "g":
        return 1
      case "z":
      case "v":
      case "w":
      case "a":
      case "b":
      case "o":
        return 2
      case "d":
      case "t":
      case "l":
      case "i":
      case "u":
        return 3
      case "c":
      case "j":
      case "k":
      case "q":
      case "h":
        return 4
      default:
        return 0
    }
  }

  return (
    <>
      <div
        style={{
          position: "relative",
          height: "200px",
          width: "200px",
          margin: "0 auto",
        }}
      >
        <PoseGroup style={{ position: "relative" }}>
          {input.split("").map((x, index) => {
            if (!/^[a-zA-Z]+$/.test(x)) return
            return (
              <Symbol
                key={index}
                pose={x ? "visible" : "hidden"}
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  height: "200px",
                  width: "200px",
                  zIndex: getZIndex(x),
                }}
              >
                {
                  <img
                    alt={`Symbol of the letter ${x}`}
                    style={{ height: "200px", margin: "0 auto" }}
                    src={`assets/${x}.svg`}
                  />
                }
              </Symbol>
            )
          })}
        </PoseGroup>
      </div>
      <br />
      Write something:
      <br />
      <br />
      <Input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <Button>Sign up to Newsletter</Button>
    </>
  )
}

const Input = styled.input`
  border: 2px solid black;
  height: 56px;
  line-height: 52px;
  padding: 0 1rem;
`

const Button = styled.button`
  border: 2px solid black;
  height: 56px;
  line-height: 52px;
  padding: 0 0.5rem;
  background: white;
  margin: 1rem 0;
`
