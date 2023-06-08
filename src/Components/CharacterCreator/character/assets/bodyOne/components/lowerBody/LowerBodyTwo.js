import React from 'react';
import {ReactComponent as LowerBodyTwo} from '../../svgs/lowerBody/LowerBodyTwo.svg';

const LowerBodyTwoComponent = (props) => {
    return (
        <div className="">
            <LowerBodyTwo fill={props.fill} />
        </div>
    );
}
export default LowerBodyTwoComponent;