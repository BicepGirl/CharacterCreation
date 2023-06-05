import React from 'react';
import {ReactComponent as FacialHairTwo} from '../../svgs/facialHair/FacialHairTwo.svg';

const FacialHairTwoComponent = (props) => {
    return (
        <div className="">
            <FacialHairTwo fill={props.fill}/>
        </div>
    );
}
export default FacialHairTwoComponent;