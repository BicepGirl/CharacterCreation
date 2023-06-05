import React from 'react';
import {ReactComponent as FrontHairTwo} from '../../../svgs/hair/frontHair/FrontHairTwo.svg';

const FrontHairTwoComponent = (props) => {
    return (
        <div className="">
            <FrontHairTwo fill={props.fill} />
        </div>
    );
}
export default FrontHairTwoComponent;