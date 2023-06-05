import BgHairOne from "../characterCreator/character/assets/bodyOne/components/hair/bgHair/BgHairOne";
import BgHairTwo from "../characterCreator/character/assets/bodyOne/components/hair/bgHair/BgHairTwo";
import FrontHairOne from "../characterCreator/character/assets/bodyOne/components/hair/frontHair/FrontHairOne";
import FrontHairTwo from "../characterCreator/character/assets/bodyOne/components/hair/frontHair/FrontHairTwo";
import EarOne from "../characterCreator/character/assets/bodyOne/components/ears/EarOne";
import EarTwo from "../characterCreator/character/assets/bodyOne/components/ears/EarTwo";
import FacialHairOne from "../characterCreator/character/assets/bodyOne/components/facialHair/FacialHairOne";
import FaceOne from "../characterCreator/character/assets/bodyOne/components/face/FaceOne";
import FaceTwo from "../characterCreator/character/assets/bodyOne/components/face/FaceTwo";
import LowerBodyOne from "../characterCreator/character/assets/bodyOne/components/lowerBody/LowerBodyOne";
import LowerBodyTwo from "../characterCreator/character/assets/bodyOne/components/lowerBody/LowerBodyTwo";
import UpperBodyOne from "../characterCreator/character/assets/bodyOne/components/upperBody/UpperBodyOne";
import UpperBodyTwo from "../characterCreator/character/assets/bodyOne/components/upperBody/UpperBodyTwo";
import ShoesOne from "../characterCreator/character/assets/bodyOne/components/shoes/ShoesOne";
import ShoesTwo from "../characterCreator/character/assets/bodyOne/components/shoes/ShoesTwo";
import FacialHairTwo from "../characterCreator/character/assets/bodyOne/components/facialHair/FacialHairTwo";


export const svgComponentsCollection =

    {
      "bgHair": [
          <BgHairOne fill='red'/>,
          <BgHairTwo fill='blue'/>,
      ],
      "frontHair": [
          <FrontHairOne/>,
          <FrontHairTwo/>,
        ],
      "face": [
        <FaceOne />,
        <FaceTwo/>,
      ],
        "ears": [
          <EarOne fill="green"/>,
          <EarTwo fill="red"/>,
        ],
        "facialHair": [
          <FacialHairOne/>,
          <FacialHairTwo/>,
        ],
        "upperBody": [
          <UpperBodyOne/>,
          <UpperBodyTwo/>,
        ],
        "lowerBody": [
          <LowerBodyOne/>,
          <LowerBodyTwo/>,
        ],
        "shoes": [
          <ShoesOne/>,
          <ShoesTwo/>,
        ],

    }

