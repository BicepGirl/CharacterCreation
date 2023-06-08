import React from 'react';
import {ReactComponent as LowerBodyOne} from '../../svgs/lowerBody/LowerBodyOne.svg';

const LowerBodyOneComponent = (props) => {
    return (
        <div className="">
            <LowerBodyOne fill={props.fill}/>
        </div>
    );
}
export default LowerBodyOneComponent;