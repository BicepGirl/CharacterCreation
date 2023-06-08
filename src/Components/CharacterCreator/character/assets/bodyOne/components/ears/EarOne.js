import React from 'react';
import {ReactComponent as EarOne} from '../../svgs/ears/EarOne.svg';

const EarOneComponent = (props) => {
    return (
        <div className="">
            <EarOne fill={props.fill} stroke="none" />
        </div>
    );
}
export default EarOneComponent;