import "./Button.css"
import { useState, useEffect } from "react"

interface ButtonProps {
  buttonLegend: string
  keyPressed?: string
  keyEvent?: Event
}

const Button = (props: ButtonProps) => {
  const [isPressed, setIsPressed] = useState<boolean>(false)

  const buttonPressHandler = () => {
    setIsPressed((oldValue) => !oldValue)
  }

  const handleButtonStyle = (): string => {
    if (
      props.keyEvent?.type === "keydown" &&
      props?.buttonLegend === props?.keyPressed?.toUpperCase()
    ) {
      return "unpressed pressed"
    } else if (props.keyEvent?.type === "keyup") {
      return "unpressed"
    }
    return "unpressed"
  }

  return (
    <>
      {/* <div hidden={props?.keyEvent?.type === "keyup"}>{props.keyPressed.toUpperCase()}</div> */}
      <button className={handleButtonStyle()} onClick={() => buttonPressHandler()}>
        {props?.buttonLegend}
      </button>
    </>
  )
}

export default Button
