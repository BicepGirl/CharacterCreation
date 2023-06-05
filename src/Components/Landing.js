import * as React from "react";
import {useEffect, useState} from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import CharacterBackground from "./characterCreator/Bg/CharacterBackground";
const Landing = () => {
  const [character, setCharacter] = useState({
    bodyOne: '',
    bgHair: '',
    frontHair: '',
    face: '',
    ears: '',
    facialHair: '',
    upperBody: '',
    lowerBody: '',
    shoes: '',
  });
  const [tempCompSelected, setTempCompSelected] = useState(null);

  useEffect(() => {
    // console.log('character:', character);
  }, [character]);

  return (

      <>
        <Navbar/>
        <div className="flex flex-row h-[calc(100vh-64px)]">
          <Sidebar
              character={character}
              setCharacter={setCharacter}
              tempCompSelected={tempCompSelected}
              setTempCompSelected={setTempCompSelected}
          />
          <CharacterBackground character={character}/>
        </div>
      </>

  )
}
export default Landing

