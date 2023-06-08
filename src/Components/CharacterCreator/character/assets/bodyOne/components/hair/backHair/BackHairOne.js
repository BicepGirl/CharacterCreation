import React from 'react';
import {ReactComponent as BackHairOne} from '../../../svgs/hair/backHair/BackHairOne.svg';
const BackHairOneComponent = (props) => {
    return (
        <div className="">
            <BackHairOne fill={props.fill} />
        </div>

    );
}
export default BackHairOneComponent;