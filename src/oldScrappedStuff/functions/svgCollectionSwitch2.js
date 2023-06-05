import {svgJsonCollection} from "../data/svgData";
import {svgComponentsCollection} from "../data/newSvgData";
import BgHair from "../../components/Tabs/BgHair";
import BgHairOne from "../../components/characterCreator/character/assets/bodyOne/components/hair/bgHair/BgHairOne";
import BgHairTwo from "../../components/characterCreator/character/assets/bodyOne/components/hair/bgHair/BgHairTwo";

function svgCollectionSwitcher2(stringValue,props) {
  switch (stringValue) {
    case 'bgHair':
      return <BgHairTwo fill={props} />,<BgHairOne fill={props}/>
    case 'frontHair':
      return svgComponentsCollection.frontHair
    case 'face':
      return svgComponentsCollection.face
    case 'facialHair':
      return svgComponentsCollection.facialHair
    case 'ears':
      return svgComponentsCollection.ears
    case 'upperBody':
      return svgComponentsCollection.upperBody
    case 'lowerBody':
      return svgComponentsCollection.lowerBody
    case 'shoes':
      return svgComponentsCollection.shoes
    default:
      return svgComponentsCollection.lowerBody
  }
}

export default svgCollectionSwitcher2;