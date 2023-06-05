import {Tab, TabPanel, Tabs, TabsBody, TabsHeader,} from "@material-tailwind/react";
import SvgObjectGenerator from "../functions/SvgObjectGenerator";
import {svgDataRef} from "../data/tabsSvgData";
import svgCollectionSwitcher from "../functions/svgCollectionSwitch";
import {svgComponentsCollection, svgComponentsCollection as data} from "../data/newSvgData";
export default function ShowCaseTabs({setCharacter}) {
  const characterCustomizationOptions = (val, type) => {
    setCharacter((prevState) => (
        {
          ...prevState,
          [type]: val
        }))
  }



// setCharacter(count +1)


  // const myFunction = (props) => {
  //     return {props}
  //
  // }


  return (
      <Tabs value={'bgHair'}>
        <TabsHeader>
          {svgDataRef.map(({label, value}, index) => (
              <Tab key={value} value={value}>
                {label}
              </Tab>))
          }
        </TabsHeader>
        <TabsBody>
          {svgDataRef.map(({value, desc}, index) => {
            const svgComponentLoader = svgCollectionSwitcher(value);
            return (
                <TabPanel key={value} value={value}>
                  {desc}
                  <div className="bg-amber-50 grid grid-cols-2 max-w-[60%] svgCharacter ">
                    {svgComponentLoader.map((val, index) => {
                      // console.log(val);
                      return <button  onClick={() => characterCustomizationOptions(val,value)} key={index}>
                        { val}
                      </button>
                    })}
                    {/*{svgJsonLoader.map((props, index) => {*/}
                    {/*      return <button onClick={() => characterCustomizationOptions(props, value)} key={index}>*/}
                    {/*        <SvgObjectGenerator {...props}/>*/}
                    {/*      </button>*/}
                    {/*    }*/}
                    {/*)}*/}
                  </div>
                </TabPanel>)
          })}
        </TabsBody>
      </Tabs>
  );
}


