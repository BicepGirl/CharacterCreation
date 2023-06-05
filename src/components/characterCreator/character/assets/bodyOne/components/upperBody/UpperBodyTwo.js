import React from 'react';
import {ReactComponent as UpperBodyTwo} from '../../svgs/upperBody/UpperBodyTwo.svg';

const UpperBodyTwoComponent = (props) => {
    return (
        <div className="">
            <UpperBodyTwo fill={props.fill}/>
        </div>
    );
}
export default UpperBodyTwoComponent;