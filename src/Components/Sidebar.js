import * as React from 'react';
import {useEffect, useState} from 'react';
import svgCollectionSwitcher from "./functions/svgCollectionSwitch";
import TabPanel from "./Tabs/function/TabPanel";
import Tab from "./Tabs/function/Tab";
import {svgStateData} from "./data/svgStateData";
import BgHair from "./Tabs/BgHair";
import FrontHair from "./Tabs/FrontHair";
import Face from "./Tabs/Face";
import Ears from "./Tabs/Ears";
import FacialHair from "./Tabs/FacialHair";
import UpperBody from "./Tabs/UpperBody";
import LowerBody from "./Tabs/LowerBody";
import Shoes from "./Tabs/Shoes";


const svgComponentLoader = svgCollectionSwitcher('bgHair');
const Sidebar = ({
                   character,
                   setCharacter,
                   tempCompSelected,
                   setTempCompSelected
                 }) => {
  // const [color, setColor] = useState("#808080")
  const [tabValue, setTabValue] = useState(null);
  const [tempColor, setTempColor] = useState(null);

  useEffect(() => {
    console.log('tempCompSelected:', tempCompSelected);
    console.log('color3: ', tempColor)
  }, [tempCompSelected, tempColor]);


  // ---Endless loop---GJ
  // setCharacter((prevState) => (
  //     {
  //       ...prevState, 'bgHair': tempCompSelected
  //     }))
  // const val =  tempCompSelected ? tempCompSelected : tempColor;

  //     setTempCompSelected((prevState) => (
  //         {
  //           ...prevState,
  //           [type]: val
  //         }))

  useEffect(() => {
    console.log('tabValue:', tabValue);
  }, [tabValue])

  //Front page showState true
  return (
      <div className="bg-[#2F2F2F] h-[calc(100vh-64px)] relative">

        <div className=" ">
          <p className=" mt-4 ml-4 text-white">Customized Character</p>
          <div className="grid grid-cols-4 ">
            {svgStateData.map(({img, value, collection}, index) => {

              return <div className='flex rounded-lg h-10 w-10 bg-[#606060] m-4 justify-center align-middle'>
                <Tab value={value} onClick={(e) => {
                  setTabValue(value)
                }}>
                  {img}
                </Tab>
              </div>
            })
            }

          </div>
          {/*<button className="rounded-lg bg-orange-600 p-2 pl-11 pr-11 text-white bottom-0 absolute m-4 ">Save*/}
          {/*  Character*/}
          {/*</button>*/}
        </div>

        <TabPanel value={'bgHair'} selected={tabValue} tempColor={tempColor}>
          <BgHair setTabValue={setTabValue} tabValue={tabValue} setCharacter={setCharacter}
                  setTempCompSelected={setTempCompSelected} setTempColor={setTempColor}
                  character={character} tempCompSelected={tempCompSelected}/>
        </TabPanel>


        <TabPanel value={'frontHair'} selected={tabValue}>
          <FrontHair setTabValue={setTabValue} tabValue={tabValue} setCharacter={setCharacter}
                     setTempCompSelected={setTempCompSelected} setTempColor={setTempColor}
                     character={character} tempCompSelected={tempCompSelected}/>
        </TabPanel>

        <TabPanel value={'face'} selected={tabValue}>
          <Face setTabValue={setTabValue} tabValue={tabValue} setCharacter={setCharacter}/>
        </TabPanel>
        <TabPanel value={'ears'} selected={tabValue}>
          <Ears setTabValue={setTabValue} tabValue={tabValue} setCharacter={setCharacter}/>
        </TabPanel>
        <TabPanel value={'facialHair'} selected={tabValue}>
          <FacialHair setTabValue={setTabValue} tabValue={tabValue} setCharacter={setCharacter}/>
        </TabPanel>
        <TabPanel value={'upperBody'} selected={tabValue}>
          <UpperBody setTabValue={setTabValue} tabValue={tabValue} setCharacter={setCharacter}/>
        </TabPanel>
        <TabPanel value={'lowerBody'} selected={tabValue}>
          <LowerBody setTabValue={setTabValue} tabValue={tabValue} setCharacter={setCharacter}/>
        </TabPanel>
        <TabPanel value={'shoes'} selected={tabValue}>
          <Shoes setTabValue={setTabValue} tabValue={tabValue} setCharacter={setCharacter}/>
        </TabPanel>
      </div>
  );


}

export default Sidebar;





