import BgHairOne from "../../components/characterCreator/character/assets/bodyOne/components/hair/bgHair/BgHairOne";
import BgHairTwo from "../../components/characterCreator/character/assets/bodyOne/components/hair/bgHair/BgHairTwo";
import FrontHairOne from "../../components/characterCreator/character/assets/bodyOne/components/hair/frontHair/FrontHairOne";
import FrontHairTwo from "../../components/characterCreator/character/assets/bodyOne/components/hair/frontHair/FrontHairTwo";
import EarOne from "../../components/characterCreator/character/assets/bodyOne/components/ears/EarOne";
import EarTwo from "../../components/characterCreator/character/assets/bodyOne/components/ears/EarTwo";
import FacialHairOne from "../../components/characterCreator/character/assets/bodyOne/components/facialHair/FacialHairOne";
import FaceOne from "../../components/characterCreator/character/assets/bodyOne/components/face/FaceOne";
import FaceTwo from "../../components/characterCreator/character/assets/bodyOne/components/face/FaceTwo";
import LowerBodyOne from "../../components/characterCreator/character/assets/bodyOne/components/lowerBody/LowerBodyOne";
import LowerBodyTwo from "../../components/characterCreator/character/assets/bodyOne/components/lowerBody/LowerBodyTwo";
import UpperBodyOne from "../../components/characterCreator/character/assets/bodyOne/components/upperBody/UpperBodyOne";
import UpperBodyTwo from "../../components/characterCreator/character/assets/bodyOne/components/upperBody/UpperBodyTwo";
import ShoesOne from "../../components/characterCreator/character/assets/bodyOne/components/shoes/ShoesOne";
import ShoesTwo from "../../components/characterCreator/character/assets/bodyOne/components/shoes/ShoesTwo";
import FacialHairTwo from "../../components/characterCreator/character/assets/bodyOne/components/facialHair/FacialHairTwo";

// Old didn't work with changing color with state after map.
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

