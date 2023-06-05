import React, { useState, useRef } from "react"
import { ChromePicker } from "react-color"
import html2canvas from "html2canvas"
import { saveAs } from "file-saver"

import CharacterField from "../character/CharacterField"

const CharacterBackground = ({ character }) => {
  const [color, setColor] = useState("#000000")
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
    <div>
      <div className="w-full">
        {show && (
          <div className="mb-10 absolute bottom-0">
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

        <div ref={divRef} style={{ backgroundColor: color }}>
          <div className="width-[300px] h-[700px] ">
            <div className="scale-[70%]  ">
              <CharacterField character={character}></CharacterField>
            </div>
          </div>
          <div style={{ backgroundColor: color }} className="h-full">
            <button
              className=" bg-slate-300 outline outline-1 m-2 italic tracking-widest uppercase rounded-xl hover:bg-slate-500 p-2 text-white"
              type="button"
              onClick={() => setShow(!show)}
            >
              Change background color
            </button>
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
    </div>
  )
}

export default CharacterBackground
