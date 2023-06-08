import React from 'react';
import {ReactComponent as EarTwo} from '../../svgs/ears/EarTwo.svg';

const EarTwoComponent = (props) => {
    return (
        <div className="">
            <EarTwo fill={props.fill}/>
        </div>
    );
}
export default EarTwoComponent;