import {svgJsonCollection} from "../data/svgData";
import {svgComponentsCollection} from "../data/newSvgData";

function svgCollectionSwitcher(stringValue) {
  switch (stringValue) {
    case 'bgHair':
      return svgComponentsCollection.bgHair
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

export default svgCollectionSwitcher;