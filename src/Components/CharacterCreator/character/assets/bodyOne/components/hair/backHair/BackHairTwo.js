import React from 'react';
import {ReactComponent as BackHairTwo} from '../../../svgs/hair/backHair/BackHairTwo.svg';

const BgHairTwoComponent = (props) => {
    return (
        <div className="">
            <BackHairTwo fill={props.fill}/>
        </div>

    );
}
export default BgHairTwoComponent;