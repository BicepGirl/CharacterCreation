import React from 'react';
import {ReactComponent as BodyOne} from '../svgs/BodyOne.svg';

const BodyOneComponent = (props) => {
    return (
        <div className="">
        <BodyOne fill={props.fill}/>
        </div>
    );
}
export default BodyOneComponent;