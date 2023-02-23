import React, { useState } from "react"
import { ChromePicker } from "react-color"

const CharacterBackgound = () => {
  const [color, setColor] = useState("#808080")
  const [show, setShow] = useState(true)

  return (
    <div className=" p-10">
      <div className="">
        {show && (
          <div className=" mb-10">
            <ChromePicker
              disableAlpha={true}
              disableHsl={false}
              color={color}
              onChangeComplete={(color) => {
                setColor(color.hex)
              }}
            />
          </div>
        )}
        <button
          className=" bg-slate-300 outline outline-1 m-2 italic tracking-widest uppercase rounded-xl hover:bg-slate-500 p-2"
          type="button"
          onClick={() => setShow(!show)}
        >
          Change background color
        </button>

        <div style={{ backgroundColor: color }}>
          <div className="width-[300px] h-[700px] "></div>
        </div>
      </div>
    </div>
  )
}

export default CharacterBackgound
