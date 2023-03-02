import FaceOne from "./characterCreator/character/assets/bodyOne/components/face/FaceOne";
import loadingFaces from "./characterCreator/character/assets/bodyOne/components/LoadingAllFaces"
import LoadingAllFaces from "./characterCreator/character/assets/bodyOne/components/LoadingAllFaces";

export default function CardImage() {
    return (
        <div className="card">
            <FaceOne></FaceOne>rr
            <LoadingAllFaces/>ee
            <img src={loadingFaces} className="" alt="dsa" />mm
            <div className="">

            </div>

        </div>
    )
}