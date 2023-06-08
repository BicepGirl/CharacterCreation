import * as React from "react"
import { useEffect, useState } from "react"
import TabPanel from "./Tabs/function/TabPanel"
import Tab from "./Tabs/function/Tab"
import { svgStateData } from "./data/svgStateData"
import BackHair from "./Tabs/BackHair"
import FrontHair from "./Tabs/FrontHair"
import Face from "./Tabs/Face"
import Ears from "./Tabs/Ears"
import FacialHair from "./Tabs/FacialHair"
import UpperBody from "./Tabs/UpperBody"
import LowerBody from "./Tabs/LowerBody"
import Shoes from "./Tabs/Shoes"
import BodyOne from "./Tabs/BodyOne"
import IconPack from "./data/IconPack"
import HandleSaveImage from "./CharacterCreator/Bg/HandleSaveImage"
import { ChromePicker } from "react-color"

const Sidebar = ({
  character,
  setCharacter,
  tempCompSelected,
  setTempCompSelected,
  refState,
  colorBG,
  setColorBG,
}) => {
  const [tabValue, setTabValue] = useState(null)
  const [tempColor, setTempColor] = useState(null)
  const [show, setShow] = useState(false)

  useEffect(() => {}, [tabValue, tempCompSelected])
  // console.log('sidebarRef: ',refState)
  //Sidebar start page(load) choosing character parts = Tab
  return (
    <div className="bg-[#2F2F2F] h-[calc(100vh-64px)] relative">
      <div className=" ">
        <p className=" mt-4 ml-4 text-white">Customized Character</p>
        <div className="grid grid-cols-4 place-items-center">
          {svgStateData.map(({ value, IconFileName }, index) => {
            return (
              <div className="flex rounded-lg h-10 w-10 bg-[#606060] m-4">
                <Tab
                  value={value}
                  onClick={() => {
                    setTabValue(value)
                  }}
                >
                  {<IconPack icons={IconFileName} />}
                </Tab>
              </div>
            )
          })}
        </div>

        <div className="">
          {show && (
            <div className=" p-3 absolute bottom-0">
              <ChromePicker
                disableAlpha={true}
                disableHsl={false}
                color={colorBG}
                onChangeComplete={(colorBG) => {
                  setColorBG(colorBG.hex)
                }}
              />
            </div>
          )}

          {/* Detta bör vara egna komponenter. */}
          <div className="grid grid-rows-2 gap-2 ">
            <button
              className=" rounded-lg bg-orange-600 p-2  text-white  m-4 hover:bg-gray-600 active:bg-gray-400"
              type="button"
              onClick={() => setShow(!show)}
            >
              Change background color
            </button>
            <button
              type="button"
              className="rounded-lg bg-orange-600 p-2  text-white  m-4 hover:bg-gray-600 active:bg-gray-400 "
              onClick={() => HandleSaveImage(refState)}
            >
              Save Character
            </button>
          </div>
        </div>
      </div>
      {/*//TODO fix with map to get less repeatable code*/}
      {/*        every TabPanel are linked to it's own tab through value and selected*/}

      <TabPanel value={"bodyOne"} selected={tabValue}>
        <BodyOne
          setTabValue={setTabValue}
          tabValue={tabValue}
          setCharacter={setCharacter}
          setTempCompSelected={setTempCompSelected}
          setTempColor={setTempColor}
          tempColor={tempColor}
          character={character}
          tempCompSelected={tempCompSelected}
        />
      </TabPanel>

      <TabPanel value={"backHair"} selected={tabValue}>
        <BackHair
          setTabValue={setTabValue}
          tabValue={tabValue}
          setCharacter={setCharacter}
          setTempCompSelected={setTempCompSelected}
          setTempColor={setTempColor}
          tempColor={tempColor}
          character={character}
          tempCompSelected={tempCompSelected}
        />
      </TabPanel>

      <TabPanel value={"frontHair"} selected={tabValue}>
        <FrontHair
          setTabValue={setTabValue}
          tabValue={tabValue}
          setCharacter={setCharacter}
          setTempCompSelected={setTempCompSelected}
          setTempColor={setTempColor}
          tempColor={tempColor}
          character={character}
          tempCompSelected={tempCompSelected}
        />
      </TabPanel>

      <TabPanel value={"face"} selected={tabValue}>
        <Face
          setTabValue={setTabValue}
          tabValue={tabValue}
          setCharacter={setCharacter}
          setTempCompSelected={setTempCompSelected}
          setTempColor={setTempColor}
          tempColor={tempColor}
          character={character}
          tempCompSelected={tempCompSelected}
        />
      </TabPanel>
      <TabPanel value={"ears"} selected={tabValue}>
        <Ears
          setTabValue={setTabValue}
          tabValue={tabValue}
          setCharacter={setCharacter}
          setTempCompSelected={setTempCompSelected}
          setTempColor={setTempColor}
          tempColor={tempColor}
          character={character}
          tempCompSelected={tempCompSelected}
        />
      </TabPanel>
      <TabPanel value={"facialHair"} selected={tabValue}>
        <FacialHair
          setTabValue={setTabValue}
          tabValue={tabValue}
          setCharacter={setCharacter}
          setTempCompSelected={setTempCompSelected}
          setTempColor={setTempColor}
          tempColor={tempColor}
          character={character}
          tempCompSelected={tempCompSelected}
        />
      </TabPanel>
      <TabPanel value={"upperBody"} selected={tabValue}>
        <UpperBody
          setTabValue={setTabValue}
          tabValue={tabValue}
          setCharacter={setCharacter}
          setTempCompSelected={setTempCompSelected}
          setTempColor={setTempColor}
          tempColor={tempColor}
          character={character}
          tempCompSelected={tempCompSelected}
        />
      </TabPanel>
      <TabPanel value={"lowerBody"} selected={tabValue}>
        <LowerBody
          setTabValue={setTabValue}
          tabValue={tabValue}
          setCharacter={setCharacter}
          setTempCompSelected={setTempCompSelected}
          setTempColor={setTempColor}
          tempColor={tempColor}
          character={character}
          tempCompSelected={tempCompSelected}
        />
      </TabPanel>
      <TabPanel value={"shoes"} selected={tabValue}>
        <Shoes
          setTabValue={setTabValue}
          tabValue={tabValue}
          setCharacter={setCharacter}
          setTempCompSelected={setTempCompSelected}
          setTempColor={setTempColor}
          tempColor={tempColor}
          character={character}
          tempCompSelected={tempCompSelected}
        />
      </TabPanel>
    </div>
  )
}

export default Sidebar
