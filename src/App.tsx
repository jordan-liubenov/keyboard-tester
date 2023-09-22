import React, { useState } from "react"
import "./App.css"
import Button from "./components/Button/Button"
import Keyboard from "./components/Keyboard/Keyboard"
import PressedKeyDisplay from "./components/PressedKeyDisplay/PressedKeyDisplay"

const App = () => {
  const [keyPressed, setKeyPressed] = useState<string>("")
  const [keyEvent, setKeyEvent] = useState()

  const handleKeyDown = (event: any) => {
    setKeyPressed(() => event.key)
    setKeyEvent(() => event)
  }

  const handleKeyUp = (event: any) => {
    setKeyPressed(() => "")
    setKeyEvent(() => event)
  }

  window.addEventListener("keydown", handleKeyDown)
  window.addEventListener("keyup", handleKeyUp)

  return (
    <div className="App">
      <PressedKeyDisplay keyPressed={keyPressed} keyEvent={keyEvent} />
      <p>
        <Keyboard keyPressed={keyPressed} keyEvent={keyEvent} />
      </p>
    </div>
  )
}

export default App
