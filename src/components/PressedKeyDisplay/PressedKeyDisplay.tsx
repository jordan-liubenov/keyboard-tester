import { useState, useEffect } from "react"

import "./PressedKeyDisplay.css"

interface PressedKeyDisplayProps {
  keyPressed: string
  keyEvent?: Event
  clearHistory: boolean
  handleClearHistory: (toggle: boolean) => void
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

      keyHistoryCopy.push(props?.keyPressed.toUpperCase() + " ")
      historyDisplayCopy.push(historyDisplayElement)

      setKeyHistoryDisplay(() => historyDisplayCopy)
      setKeyHistory(() => keyHistoryCopy)
      renderHistory()
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
      {keyHistory.length > 0 && <h4 className="historyKey">{keyHistory}</h4>}
      {/* {renderHistory()} */}
    </div>
  )
}

export default PressedKeyDisplay
