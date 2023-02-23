import React, { useState } from "react"
import { ChromePicker } from "react-color"

const CharacterBackgound = () => {
  const [color, setColor] = useState("#ff0000")
  const [show, setShow] = useState(true)

  return (
    <div className=" p-10">
      <div className="relative">
        <button
          className=" bg-slate-300 outline outline-1 m-2 italic tracking-widest uppercase rounded-xl hover:bg-slate-500 p-2"
          type="button"
          onClick={() => setShow(!show)}
        >
          Change background color
        </button>
        {show && (
          <div className="absolute bottom-0 mb-10">
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

        <div style={{ backgroundColor: color }}>
          <div className="w-1/2 min-h-screen"></div>
        </div>
      </div>
    </div>
  )
}

export default CharacterBackgound
