import React, { useState, useRef } from "react"
import { ChromePicker } from "react-color"
import html2canvas from "html2canvas"
import { saveAs } from "file-saver"

import CharacterField from "../character/CharacterField"

const CharacterBackground = () => {
  const [color, setColor] = useState("#808080")
  const [show, setShow] = useState(false)
  const divRef = useRef(null)

  const handleSaveImage = () => {
    html2canvas(divRef.current).then((canvas) => {
      canvas.toBlob((blob) => {
        saveAs(blob, "Character_img.jpg")
      })
    })
  }

  return (
    <div className=" p-10">
      <div className="">
        {show && (
          <div className=" mb-10 absolute bottom-0">
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

        <div ref={divRef} style={{ backgroundColor: color }}>
          <div className="width-[300px] h-[700px] ">
            <div className="scale-50">
              <CharacterField></CharacterField>
            </div>
          </div>
        </div>
        <button
          className="bg-slate-300 outline outline-1 m-2 italic tracking-widest uppercase rounded-xl hover:bg-slate-500 p-2"
          type="button"
          onClick={handleSaveImage}
        >
          Save Character
        </button>
      </div>
    </div>
  )
}

export default CharacterBackground
