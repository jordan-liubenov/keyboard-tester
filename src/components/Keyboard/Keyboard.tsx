import Button from "../Button/Button"
import { AlphaKeys, orderAlphaKeys } from "./util"

interface KeyboardProps {
  keyPressed: string
  keyEvent?: Event
}

const Keyboard = (props: KeyboardProps) => {
  const keys = Object.values(AlphaKeys)
  const { firstRow, secondRow, thirdRow } = orderAlphaKeys(keys)

  return (
    <>
      <div>
        {firstRow.map((legend) => {
          return (
            <Button
              buttonLegend={legend}
              key={legend}
              keyEvent={props?.keyEvent}
              keyPressed={props.keyPressed}
            />
          )
        })}
      </div>
      <div>
        {secondRow.map((legend) => {
          return (
            <Button
              buttonLegend={legend}
              key={legend}
              keyEvent={props?.keyEvent}
              keyPressed={props.keyPressed}
            />
          )
        })}
      </div>
      <div>
        {thirdRow.map((legend) => {
          return (
            <Button
              buttonLegend={legend}
              key={legend}
              keyEvent={props?.keyEvent}
              keyPressed={props.keyPressed}
            />
          )
        })}
      </div>
    </>
  )
}

export default Keyboard
