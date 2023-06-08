import React from 'react';
import {ReactComponent as ShoesTwo} from '../../svgs/shoes/ShoesTwo.svg';

const ShoesTwoComponent = (props) => {
    return (
        <div className="">
            <ShoesTwo fill={props.fill}/>
        </div>
    );
}
export default ShoesTwoComponent;