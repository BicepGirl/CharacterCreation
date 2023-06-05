import React, {useRef, useState} from "react"
import {ChromePicker} from "react-color"
import html2canvas from "html2canvas"
import {saveAs} from "file-saver"

import CharacterField from "../character/CharacterField"

const CharacterBackground = ({character}) => {
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
      <div className="w-full h-full ">
        <div className="w-full ">
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

          <div ref={divRef} style={{backgroundColor: color}}>
            <div className=" h-[calc(100vh-64px)] ">
              <button
                  className=" bg-slate-300 outline outline-1 m-2 italic tracking-widest uppercase rounded-xl hover:bg-slate-500 p-2 text-white"
                  type="button"
                  onClick={() => setShow(!show)}
              >
                Change background color
              </button>

              <button
                  className="bg-slate-300 outline outline-1 m-2 italic tracking-widest uppercase rounded-xl hover:bg-slate-500 p-2"
                  type="button"
                  onClick={handleSaveImage}
              >
                Save Character
              </button>
              <div className="scale-[0.2] ">
                <CharacterField character={character}></CharacterField>
              </div>

            </div>

          </div>
        </div>
      </div>
  )
}

export default CharacterBackground
