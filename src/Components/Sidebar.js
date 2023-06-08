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
import handleSaveImage from "./CharacterCreator/Bg/HandleSaveImage"

const Sidebar = ({
  character,
  setCharacter,
  tempCompSelected,
  setTempCompSelected,
  refState,
}) => {
  const [tabValue, setTabValue] = useState(null)
  const [tempColor, setTempColor] = useState(null)

  useEffect(() => {}, [tabValue, tempCompSelected])
  // console.log('sidebarRef: ',refState)
  //Sidebar start page(load) choosing character parts = Tab
  return (
    <div className="bg-[#2F2F2F] h-[calc(100vh-64px)] relative">
      <div className=" ">
        <p className=" mt-4 ml-4 text-white">Customized Character</p>
        <div className="grid grid-cols-4 ">
          {svgStateData.map(({ value, IconFileName }, index) => {
            return (
              <div className="flex rounded-lg h-10 w-10 bg-[#606060] m-4 justify-center align-middle">
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
        <button
          type="button"
          className="rounded-lg bg-orange-600 p-2 pl-11 pr-11 text-white bottom-0 absolute m-4 "
          onClick={() => handleSaveImage(refState)}
        >
          Save Character
        </button>
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
