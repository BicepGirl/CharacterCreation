import React from 'react';
import {ReactComponent as FaceTwo} from '../../svgs/face/FaceTwo.svg';

const FaceTwoComponent = (props) => {
    return (
        <div className="">
            <FaceTwo fill={props.fill} />
        </div>
    );
}
export default FaceTwoComponent;