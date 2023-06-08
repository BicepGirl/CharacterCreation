import React from 'react';
import {ReactComponent as UpperBodyOne} from '../../svgs/upperBody/UpperBodyOne.svg';

const UpperBodyOneComponent = (props) => {
    return (
        <div className="">
            <UpperBodyOne fill={props.fill}/>
        </div>
    );
}
export default UpperBodyOneComponent;