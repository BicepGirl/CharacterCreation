import React from 'react';
import {ReactComponent as BgHairTwo} from '../../../svgs/hair/bgHair/BgHairTwo.svg';

const BgHairTwoComponent = (props) => {
    return (
        <div className="">
            <BgHairTwo fill={props.fill}/>
        </div>

    );
}
export default BgHairTwoComponent;