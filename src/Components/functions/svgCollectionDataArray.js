import BgHairTwo from "../CharacterCreator/character/assets/bodyOne/attributes/hair/backHair/BackHairTwo"
import BgHairOne from "../CharacterCreator/character/assets/bodyOne/attributes/hair/backHair/BackHairOne"
import FrontHairOne from "../CharacterCreator/character/assets/bodyOne/attributes/hair/frontHair/FrontHairOne"
import FrontHairTwo from "../CharacterCreator/character/assets/bodyOne/attributes/hair/frontHair/FrontHairTwo"
import FaceOne from "../CharacterCreator/character/assets/bodyOne/attributes/face/FaceOne"
import FaceTwo from "../CharacterCreator/character/assets/bodyOne/attributes/face/FaceTwo"
import EarOne from "../CharacterCreator/character/assets/bodyOne/attributes/ears/EarOne"
import EarTwo from "../CharacterCreator/character/assets/bodyOne/attributes/ears/EarTwo"
import FacialHairOne from "../CharacterCreator/character/assets/bodyOne/attributes/facialHair/FacialHairOne"
import FacialHairTwo from "../CharacterCreator/character/assets/bodyOne/attributes/facialHair/FacialHairTwo"
import UpperBodyOne from "../CharacterCreator/character/assets/bodyOne/attributes/upperBody/UpperBodyOne"
import UpperBodyTwo from "../CharacterCreator/character/assets/bodyOne/attributes/upperBody/UpperBodyTwo"
import LowerBodyOne from "../CharacterCreator/character/assets/bodyOne/attributes/lowerBody/LowerBodyOne"
import LowerBodyTwo from "../CharacterCreator/character/assets/bodyOne/attributes/lowerBody/LowerBodyTwo"
import ShoesOne from "../CharacterCreator/character/assets/bodyOne/attributes/shoes/ShoesOne"
import ShoesTwo from "../CharacterCreator/character/assets/bodyOne/attributes/shoes/ShoesTwo"
import BodyOne from "../CharacterCreator/character/assets/bodyOne/attributes/BodyOne"
import * as React from "react"
const svgComponentData = (props) => {
  return {
    bodyOne: [<BodyOne fill={props} />],
    backHair: [<BgHairTwo fill={props} />, <BgHairOne fill={props} />],
    frontHair: [<FrontHairOne fill={props} />, <FrontHairTwo fill={props} />],
    face: [<FaceOne fill={props} />, <FaceTwo fill={props} />],
    ears: [<EarOne fill={props} />, <EarTwo fill={props} />],
    facialHair: [
      <FacialHairOne fill={props} />,
      <FacialHairTwo fill={props} />,
    ],
    upperBody: [<UpperBodyOne fill={props} />, <UpperBodyTwo fill={props} />],
    lowerBody: [<LowerBodyOne fill={props} />, <LowerBodyTwo fill={props} />],
    shoes: [<ShoesOne fill={props} />, <ShoesTwo fill={props} />],
  }
}
export default svgComponentData
