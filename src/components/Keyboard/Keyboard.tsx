import Button from "../Button/Button"
import { AlphaKeys, orderAlphaKeys } from "./util"
import "./Keyboard.css"
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
        <div className="modContainer">
          <div className="Tab">⇥</div>
        </div>
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
        <div className="modContainer">
          <div className="Caps">⇩</div>
        </div>
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
        <div className="modContainer">
          <div className="LShift">⇧</div>
        </div>
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
      <div className="bottomRow">
        <div className="LCtrl">Ctr</div>
        <div className="Win">Win</div>
        <div className="LAlt">Alt</div>
        <div className="RAlt">Alt</div>
        <div className="spacebar">{"\0"}</div>
      </div>
    </>
  )
}

export default Keyboard
