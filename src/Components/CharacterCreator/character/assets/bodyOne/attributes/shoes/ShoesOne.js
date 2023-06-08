import React from 'react';
import {ReactComponent as ShoesOne} from '../../svgs/shoes/ShoesOne.svg';

const ShoesOneComponent = (props) => {
    return (
        <div className="">
            <ShoesOne fill={props.fill}/>
        </div>
    );
}
export default ShoesOneComponent;