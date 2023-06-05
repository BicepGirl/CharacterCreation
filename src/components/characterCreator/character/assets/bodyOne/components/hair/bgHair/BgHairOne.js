import React from 'react';
import {ReactComponent as BgHairOne} from '../../../svgs/hair/bgHair/BgHairOne.svg';
const BgHairOneComponent = (props) => {
    return (
        <div className="">
            <BgHairOne fill={props.fill} />
        </div>

    );
}
export default BgHairOneComponent;