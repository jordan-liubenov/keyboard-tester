import "./Button.css"
import { useState, useEffect } from "react"

interface ButtonProps {
  keyPressed: string
  keyEvent?: Event
}

enum AllButtons {
  Control = "Control",
}

const Button = (props: ButtonProps) => {
  const [isPressed, setIsPressed] = useState<boolean>(false)

  const buttonPressHandler = () => {
    setIsPressed((oldValue) => !oldValue)
  }

  const handleButtonStyle = (): string => {
    if (props.keyPressed === AllButtons.Control && props.keyEvent?.type === "keydown") {
      return "unpressed pressed"
    } else if (props.keyEvent?.type === "keyup") {
      return "unpressed"
    }
    return "unpressed"
  }

  return (
    <>
      <div hidden={props?.keyEvent?.type === "keyup"}>{props.keyPressed} has been pressed</div>
      <br />
      <br />

      <br />

      <br />

      <br />

      <button className={handleButtonStyle()} onClick={() => buttonPressHandler()}>
        Ctrl
      </button>
    </>
  )
}

export default Button
