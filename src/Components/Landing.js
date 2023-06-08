import * as React from "react"
import { useEffect, useRef, useState } from "react"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import CharacterBackground from "./CharacterCreator/Bg/CharacterBackground"
const Landing = () => {
  const [character, setCharacter] = useState({
    bodyOne: "",
    backHair: "",
    frontHair: "",
    face: "",
    ears: "",
    facialHair: "",
    upperBody: "",
    lowerBody: "",
    shoes: "",
  })
  const [tempCompSelected, setTempCompSelected] = useState(null)
  const [refState, setRefState] = useState(null)
  const [colorBG, setColorBG] = useState("#000000")
  useEffect(() => {
    // console.log('character:', character);
  }, [character, refState])
  // console.log('landing: : ',refState)
  return (
    <>
      <Navbar />
      <div className="flex flex-row h-[calc(100vh-64px)]">
        <Sidebar
          character={character}
          setCharacter={setCharacter}
          tempCompSelected={tempCompSelected}
          setTempCompSelected={setTempCompSelected}
          refState={refState}
          setColorBG={setColorBG}
          colorBG={colorBG}
        />
        <CharacterBackground
          character={character}
          setRefState={setRefState}
          colorBG={colorBG}
        />
      </div>
    </>
  )
}
export default Landing
