import React, { useState } from "react"
import "./App.css"
import Keyboard from "./components/Keyboard/Keyboard"
import PressedKeyDisplay from "./components/PressedKeyDisplay/PressedKeyDisplay"
import ClearHistory from "./components/ClearHistory/ClearHistory"

const App = () => {
  const [keyPressed, setKeyPressed] = useState<string>("none")
  const [keyEvent, setKeyEvent] = useState<Event | undefined>(undefined)
  const [clearHistory, setClearHistory] = useState<boolean>(false)

  const handleKeyDown = (event: any): void => {
    if (event.type === "keydown") {
      setKeyPressed(() => event.key)
      setKeyEvent(() => event)
      console.log(event)
    } else if (event.type === "keyup") {
      setKeyPressed(() => "")
      setKeyEvent(() => event)
    }
  }

  window.addEventListener("keydown", handleKeyDown)
  window.addEventListener("keyup", handleKeyDown)

  const handleClearHistory = (toggle: boolean): void => {
    setClearHistory(toggle)
  }

  return (
    <div className="App">
      <PressedKeyDisplay
        keyPressed={keyPressed}
        keyEvent={keyEvent}
        clearHistory={clearHistory}
        handleClearHistory={handleClearHistory}
      />
      <p>
        <Keyboard keyPressed={keyPressed} keyEvent={keyEvent} />
        <div className="clearHistoryButton">
          <ClearHistory handleClearHistory={handleClearHistory} />
        </div>
      </p>
    </div>
  )
}

export default App
