import React, {useState} from "react"
import {ChromePicker} from "react-color"
import CharacterField from "../character/CharacterField"

const CharacterBackground = ({character}) => {
  const [color, setColor] = useState("#000000")
  const [show, setShow] = useState(false)

  const saveFunction = () => {
    console.log('Save button!');
  }

  return (

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

        <div style={{backgroundColor: color}} className="h-full">
          <button
              className=" bg-slate-300 outline outline-1 m-2 italic tracking-widest uppercase rounded-xl hover:bg-slate-500 p-2 text-white"
              type="button"
              onClick={() => setShow(!show)}
          >
            Change background color
          </button>
          {/*<button className=' outline mt-2 mb-2 mr-2 m italic uppercase rounded-xl hover:bg-slate-500 p-2 text-white'*/}
          {/*        onClick={saveFunction}>*/}
          {/*  Save character*/}
          {/*</button>*/}
          <div className="scale-[0.2]  ">
            <CharacterField character={character}></CharacterField>
          </div>


        </div>


      </div>

  )
}

export default CharacterBackground
