import React from 'react';
import {ReactComponent as FaceOne} from '../../svgs/face/FaceOne.svg';

const FaceOneComponent = (props) => {
    return (
        <div className="">
            <FaceOne fill={props.fill} />
        </div>
    );
}
export default FaceOneComponent;