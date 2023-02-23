import BgHairOneComponent from "./assets/bodyOne/components/hair/bgHair/BgHairOne";
import BodyOneComponent from "./assets/bodyOne/components/BodyOne";

import EarOneComponent from "./assets/bodyOne/components/ears/EarOne";
import FacialHairOneComponent from "./assets/bodyOne/components/facialHair/FacialHairOne";

import UpperBodyOneComponent from "./assets/bodyOne/components/upperBody/UpperBodyOne";
import FaceOne from "./assets/bodyOne/components/face/FaceOne";
import LowerBodyOneComponent from "./assets/bodyOne/components/lowerBody/LowerBodyOne";
import ShoesOneComponent from "./assets/bodyOne/components/shoes/ShoesOne";
import FrontHairOneComponent from "./assets/bodyOne/components/hair/frontHair/FrontHairOne";
import BgHairTwoComponent from "./assets/bodyOne/components/hair/bgHair/BgHairTwo";
import EarTwoComponent from "./assets/bodyOne/components/ears/EarTwo";
import FrontHairTwoComponent from "./assets/bodyOne/components/hair/frontHair/FrontHairTwo";
import FacialHairTwoComponent from "./assets/bodyOne/components/facialHair/FacialHairTwo";
import LowerBodyTwoComponent from "./assets/bodyOne/components/lowerBody/LowerBody";
import UpperBodyTwoComponent from "./assets/bodyOne/components/upperBody/UpperBodyTwo";
import ShoesTwoComponent from "./assets/bodyOne/components/shoes/ShoesTwo";
import FaceTwo from "./assets/bodyOne/components/face/FaceTwo";
import FaceTwoComponent from "./assets/bodyOne/components/face/FaceTwo";
import FaceOneComponent from "./assets/bodyOne/components/face/FaceOne";


function CharacterField() {

    return(
        <div className="scale-[0.2]" >

            <div className=" absolute inset-0 ">
                <BgHairOneComponent></BgHairOneComponent>
            </div>

            <div className=" absolute inset-0">
                <EarTwoComponent></EarTwoComponent>
            </div>

            <div className=" absolute inset-0">
                <BodyOneComponent></BodyOneComponent>
            </div>


            <div className=" absolute inset-0">
                <FacialHairTwoComponent></FacialHairTwoComponent>
            </div>

            <div className=" absolute inset-0">
                <LowerBodyTwoComponent></LowerBodyTwoComponent>
            </div>

            <div className=" absolute inset-0">
                <UpperBodyTwoComponent></UpperBodyTwoComponent>
            </div>
            <div className=" absolute inset-0">
                <FaceOne></FaceOne>
            </div>
            <div className=" absolute inset-0">
                <FrontHairTwoComponent></FrontHairTwoComponent>
            </div>

            <div className=" absolute inset-0">
                <ShoesTwoComponent></ShoesTwoComponent>
            </div>
        </div>




    );
}
export default CharacterField;