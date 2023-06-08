import BgHairTwo from "../characterCreator/character/assets/bodyOne/components/hair/backHair/BackHairTwo";
import BgHairOne from "../characterCreator/character/assets/bodyOne/components/hair/backHair/BackHairOne";
import FrontHairOne from "../characterCreator/character/assets/bodyOne/components/hair/frontHair/FrontHairOne";
import FrontHairTwo from "../characterCreator/character/assets/bodyOne/components/hair/frontHair/FrontHairTwo";
import FaceOne from "../characterCreator/character/assets/bodyOne/components/face/FaceOne";
import FaceTwo from "../characterCreator/character/assets/bodyOne/components/face/FaceTwo";
import EarOne from "../characterCreator/character/assets/bodyOne/components/ears/EarOne";
import EarTwo from "../characterCreator/character/assets/bodyOne/components/ears/EarTwo";
import FacialHairOne from "../characterCreator/character/assets/bodyOne/components/facialHair/FacialHairOne";
import FacialHairTwo from "../characterCreator/character/assets/bodyOne/components/facialHair/FacialHairTwo";
import UpperBodyOne from "../characterCreator/character/assets/bodyOne/components/upperBody/UpperBodyOne";
import UpperBodyTwo from "../characterCreator/character/assets/bodyOne/components/upperBody/UpperBodyTwo";
import LowerBodyOne from "../characterCreator/character/assets/bodyOne/components/lowerBody/LowerBodyOne";
import LowerBodyTwo from "../characterCreator/character/assets/bodyOne/components/lowerBody/LowerBodyTwo";
import ShoesOne from "../characterCreator/character/assets/bodyOne/components/shoes/ShoesOne";
import ShoesTwo from "../characterCreator/character/assets/bodyOne/components/shoes/ShoesTwo";
import BodyOne from "../characterCreator/character/assets/bodyOne/components/BodyOne";
import * as React from "react";
const svgComponentData = (props) => {
  return {
    'bodyOne': [<BodyOne fill={props}/>,
    ],
    'backHair': [<BgHairTwo fill={props}/>,
      <BgHairOne fill={props}/>,
    ],
    'frontHair': [<FrontHairOne fill={props}/>,
      <FrontHairTwo fill={props}/>,
    ],
    'face': [<FaceOne fill={props}/>,
      <FaceTwo fill={props}/>,
    ],
    'ears': [<EarOne fill={props}/>,
      <EarTwo fill={props}/>,
    ],
    'facialHair': [<FacialHairOne fill={props}/>,
      <FacialHairTwo fill={props}/>,
    ],
    'upperBody': [<UpperBodyOne fill={props}/>,
      <UpperBodyTwo fill={props}/>,
    ],
    'lowerBody': [<LowerBodyOne fill={props}/>,
      <LowerBodyTwo fill={props}/>,
    ],
    'shoes': [<ShoesOne fill={props}/>,
      <ShoesTwo fill={props}/>,
    ],
  }
}
export default svgComponentData;