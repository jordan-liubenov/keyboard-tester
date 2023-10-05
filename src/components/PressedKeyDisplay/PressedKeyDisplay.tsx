import { useState, useEffect } from "react"

import "./PressedKeyDisplay.css"

interface PressedKeyDisplayProps {
  keyPressed: string
  keyEvent?: any
  clearHistory: boolean
  handleClearHistory: (toggle: boolean) => void
}

const PressedKeyDisplay = (props: PressedKeyDisplayProps) => {
  const [keyHistory, setKeyHistory] = useState<string[]>([])
  const [keyHistoryDisplay, setKeyHistoryDisplay] = useState<JSX.Element[]>([])

  useEffect(() => {
    if (props?.keyEvent?.type !== "keyup") {
      const keyHistoryCopy = [...keyHistory]
      const historyDisplayCopy = [...keyHistoryDisplay]
      const historyDisplayElement = (
        <div>
          <h3 className="historyKey">{props?.keyPressed}</h3>
        </div>
      )

      if (props?.keyPressed.toUpperCase() === " ") {
        keyHistoryCopy.push("Space")
      } else if (props?.keyEvent?.code === "ControlRight") {
        keyHistoryCopy.push("CtrlRight")
      } else {
        props?.keyPressed !== "none" && keyHistoryCopy.push(props?.keyPressed.toUpperCase())
      }

      setKeyHistoryDisplay(() => historyDisplayCopy)
      setKeyHistory(() => keyHistoryCopy)
    }
  }, [props?.keyPressed])

  useEffect(() => {
    if (props?.clearHistory) {
      setKeyHistory(() => [])
      props.handleClearHistory(false)
    }
  }, [props.clearHistory])

  return (
    <div>
      {keyHistory.length > 0 ? <h4 className="historyKey">{keyHistory}</h4> : <>{"\0"}</>}
      {/* {renderHistory()} */}
    </div>
  )
}

export default PressedKeyDisplay
