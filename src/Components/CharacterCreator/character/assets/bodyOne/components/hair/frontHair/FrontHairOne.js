import React from 'react';
import {ReactComponent as FontHairOne} from '../../../svgs/hair/frontHair/FrontHairOne.svg';

const FrontHairOneComponent = (props) => {
    return (
        <div className="">
            <FontHairOne fill={props.fill} />
        </div>
    );
}
export default FrontHairOneComponent;