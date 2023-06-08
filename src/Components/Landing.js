import * as React from "react";
import {useEffect, useRef, useState} from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import CharacterBackground from "./characterCreator/Bg/CharacterBackground";
const Landing = () => {
  const [character, setCharacter] = useState({
    bodyOne: '',
    backHair: '',
    frontHair: '',
    face: '',
    ears: '',
    facialHair: '',
    upperBody: '',
    lowerBody: '',
    shoes: '',
  });
  const [tempCompSelected, setTempCompSelected] = useState(null);
  const [refState, setRefState] = useState(null);
  useEffect(() => {
    // console.log('character:', character);
  }, [character,refState]);
  // console.log('landing: : ',refState)
  return (

      <>
        <Navbar/>
        <div className="flex flex-row h-[calc(100vh-64px)]">
          <Sidebar
              character={character}
              setCharacter={setCharacter}
              tempCompSelected={tempCompSelected}
              setTempCompSelected={setTempCompSelected}
              refState={refState}
          />
          <CharacterBackground character={character} setRefState={setRefState}/>
        </div>
      </>

  )
}
export default Landing

