import ImgSetup from "./ImgSetup";
import imageData from "./imageData";
import CardImage from "./CardImage";
import LoadingAllFaces from "../components/characterCreator/character/assets/bodyOne/components/LoadingAllFaces";
// import * as dad from './characterCreator/character/assets/bodyOne/svgs/face/'


const ShowCase = () => {
    const elements = imageData.map(shiet => {

        return <ImgSetup setup={shiet.setup} punchline={shiet.punchline}/>
    })
    return (
    <div className="grid grid-cols-4">
        <img src="../components/characterCreator/character/assets/bodyOne/svgs/face/FaceOne.svg" alt="dd"/>
       <CardImage/> {elements}

    </div>
    )
}
export default ShowCase