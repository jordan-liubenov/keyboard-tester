import { useState, useEffect } from "react"

import "./PressedKeyDisplay.css"

interface PressedKeyDisplayProps {
  keyPressed: string
  keyEvent?: Event
}

const PressedKeyDisplay = (props: PressedKeyDisplayProps) => {
  const [keyHistory, setKeyHistory] = useState<string[]>([])
  const [keyHistoryDisplay, setKeyHistoryDisplay] = useState<JSX.Element[]>([])

  const renderHistory = () => {
    const elements: JSX.Element[] = []

    keyHistory.forEach((item) => {
      const element = <h3 className="historyKey">{item}</h3>
      elements.push(element)
    })

    return elements
  }
  useEffect(() => {
    if (props?.keyEvent?.type !== "keyup") {
      const keyHistoryCopy = [...keyHistory]
      const historyDisplayCopy = [...keyHistoryDisplay]
      const historyDisplayElement = (
        <div>
          <h3 className="historyKey">{props?.keyPressed}</h3>
        </div>
      )

      keyHistoryCopy.push(props?.keyPressed.toUpperCase())
      historyDisplayCopy.push(historyDisplayElement)

      setKeyHistoryDisplay(() => historyDisplayCopy)
      setKeyHistory(() => keyHistoryCopy)
      renderHistory()
    }
  }, [props?.keyPressed])

  return (
    <div>
      <h3 className="historyKey">{keyHistory}</h3>
      {/* {renderHistory()} */}
    </div>
  )
}

export default PressedKeyDisplay
