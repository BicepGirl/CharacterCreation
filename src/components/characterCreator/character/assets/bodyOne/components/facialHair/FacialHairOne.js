import React from 'react';
import {ReactComponent as FacialHairOne} from '../../svgs/facialHair/FacialHairOne.svg';

const FacialHairOneComponent = (props) => {
    return (
        <div className="">
            <FacialHairOne fill={props.fill}/>
        </div>
    );
}
export default FacialHairOneComponent;

