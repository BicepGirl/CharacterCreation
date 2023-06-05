// If showState false it will load users choice of customize button
import * as React from "react";
import {useState} from "react";
import {ChromePicker} from "react-color";
import * as IonIcons from "react-icons/io5";
import BgHairTwo from "../characterCreator/character/assets/bodyOne/components/hair/bgHair/BgHairTwo";
import BgHairOne from "../characterCreator/character/assets/bodyOne/components/hair/bgHair/BgHairOne";
import FrontHairOne from "../characterCreator/character/assets/bodyOne/components/hair/frontHair/FrontHairOne";
import FrontHairTwo from "../characterCreator/character/assets/bodyOne/components/hair/frontHair/FrontHairTwo";
import FaceOne from "../characterCreator/character/assets/bodyOne/components/face/FaceOne";
import FaceTwo from "../characterCreator/character/assets/bodyOne/components/face/FaceTwo";
import EarOne from "../characterCreator/character/assets/bodyOne/components/ears/EarOne";
import EarTwo from "../characterCreator/character/assets/bodyOne/components/ears/EarTwo";
import FacialHairOne from "../characterCreator/character/assets/bodyOne/components/facialHair/FacialHairOne";
import FacialHairTwo from "../characterCreator/character/assets/bodyOne/components/facialHair/FacialHairTwo";
import UpperBodyOne from "../characterCreator/character/assets/bodyOne/components/upperBody/UpperBodyOne";
import UpperBodyTwo from "../characterCreator/character/assets/bodyOne/components/upperBody/UpperBodyTwo";
import LowerBodyOne from "../characterCreator/character/assets/bodyOne/components/lowerBody/LowerBodyOne";
import LowerBodyTwo from "../characterCreator/character/assets/bodyOne/components/lowerBody/LowerBodyTwo";
import ShoesOne from "../characterCreator/character/assets/bodyOne/components/shoes/ShoesOne";
import ShoesTwo from "../characterCreator/character/assets/bodyOne/components/shoes/ShoesTwo";

// function Ads(props) {
//   return {
//     'bgHair':[<BgHairTwo fill={props} />,
//       <BgHairOne fill={props}/>,
//     ]}
//
//
// }

// const [icon, setIcon] = useState("")
{/*<button onClick={SvgObjectGenerator2('BgHair','green')} o>ff</button>*/
}
{/*{svgCollectionSwitcher2('bgHair',color)}*/
}

const svgComponentData = (props) => {

  return {
    'bgHair': [<BgHairTwo fill={props}/>,
      <BgHairOne fill={props}/>,
    ],
    'frontHair': [<FrontHairOne fill={props}/>,
      <FrontHairTwo fill={props}/>,
    ],
    'face': [<FaceOne fill={props}/>,
      <FaceTwo fill={props}/>,
    ],
    'ears': [<EarOne fill={props}/>,
      <EarTwo fill={props}/>,
    ],
    'facialHair': [<FacialHairOne fill={props}/>,
      <FacialHairTwo fill={props}/>,
    ],
    'upperBody': [<UpperBodyOne fill={props}/>,
      <UpperBodyTwo fill={props}/>,
    ],
    'lowerBody': [<LowerBodyOne fill={props}/>,
      <LowerBodyTwo fill={props}/>,
    ],
    'shoes': [<ShoesOne fill={props}/>,
      <ShoesTwo fill={props}/>,
    ],

  }

}
const BgHair = ({
                  tabValue,
                  setTabValue,
                  setCharacter,
                  setTempCompSelected,
                  setTempColor,
                  tempColor,
                  character,
                  tempCompSelected
                }) => {

  const [isTrue, setIsTrue] = useState(true)
  const [color, setColor] = useState("#808080")
  const characterCustomizationOptions = (val, type) => {
    //
    if (isTrue === true) {
      setTempCompSelected(character)
    }
    //
    {
      setCharacter((prevState) => (
          {
            ...prevState,
            [type]: val
          }))
    }
    setIsTrue(false)
  }
  const characterCustomizationOptionsBackButton = (tempCompSelected) => {
    // Change back to your prev character choice
    if (isTrue === false) {
      setCharacter((prevState) => (
          {
            ...prevState,
            ...tempCompSelected
          }))
    }
    setTabValue('')
  }
  //Applying the choice user make and s
  const isApplyButton = (e) => {
    // setColor(color)
    setIsTrue(true)
    setTabValue('')
  }
  return (
      <div className="">
        <div className="grid grid-cols-2">
          <p className=" mt-4 ml-4 text-white">{tabValue}</p>
          <button className=" text-orange-400 mt-4 text-right mr-4"
                  onClick={() => characterCustomizationOptionsBackButton(tempCompSelected)}>
            {`< Back`} </button>
        </div>
        <div className="grid grid-cols-4 ">
          <div className="rounded-lg h-10 w-10 relative p-3  m-4 bg-[#606060] ">
            <button className="absolute " onClick={() => characterCustomizationOptions('', tabValue)}>
              <IonIcons.IoBanOutline color="silver "/></button>
          </div>
          {svgComponentData(color).bgHair.map((val, index, color) => {
            // console.log('colorComp: ', val.fill)
            return (
                // <div className="rounded-lg h-10 w-10 relative p-3 m-4 bg-[#606060] ">
                <button
                    onClick={() => characterCustomizationOptions(val, tabValue)} key={index}>
                  {val}
                </button>
                // </div>
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
        <div className="m-4 p-2">
        </div>
        <button className="rounded-lg bg-orange-600 m-4 p-2 pl-20 pr-20 text-white bottom-0 absolute"
                onClick={(e) => isApplyButton(e)} key={'applyButton'}>Apply
        </button>
      </div>
  )
}
export default BgHair;