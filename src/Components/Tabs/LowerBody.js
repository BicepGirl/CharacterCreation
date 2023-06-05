// If showState false it will load users choice of customize button
import * as React from "react";
import {useState} from "react";
import {ChromePicker} from "react-color";
import * as IonIcons from "react-icons/io5";
import {svgComponentsCollection} from "../data/newSvgData";


const LowerBody = ({tabValue, setTabValue, setCharacter}) => {
  const [color, setColor] = useState("#808080")
  const characterCustomizationOptions = (val, type) => {

    setCharacter((prevState) => (
        {
          ...prevState,
          [type]: val
        }))
  }
  return (
      <div className="">
        <div className="grid grid-cols-2">
          <p className=" mt-4 ml-4 text-white">{tabValue}</p>
          <button className=" text-orange-400 mt-4 text-right mr-4"
                  onClick={() => setTabValue('')}>
            {''} {`< Back`} </button>
        </div>
        <div className="grid grid-cols-4 ">

          <div className="rounded-lg h-10 w-10 relative p-3  m-4 bg-[#606060] ">
            <button className="absolute " onClick={() => characterCustomizationOptions('', tabValue)}>
              <IonIcons.IoBanOutline color="silver "/></button>

          </div>

          {svgComponentsCollection.lowerBody.map((val, index) => {
            // console.log('dd: ' ,val)
            // console.log('ee: ' ,tabValue)
            return (
                //   <div className="rounded-lg h-10 w-10 relative p-3 m-4 bg-[#606060] ">
                <button onClick={() => characterCustomizationOptions(val, tabValue)} key={index}>
                  {val}
                </button>
                //     </div>
            )
          })}

        </div>
        <p className=" mt-4 ml-4 text-white">Colour Picker</p>

        <div className="m-4 ">
          <ChromePicker
              width={200}
              disableAlpha={true}
              disableHsl={false}
              color={color}
              onChangeComplete={(color) => {
                setColor(color.hex)
              }}
          />

        </div>

        <button className="rounded-lg bg-orange-600 m-4 p-2 pl-20 pr-20 text-white bottom-0 absolute"
        >Apply
        </button>

      </div>
  )
}
export default LowerBody;