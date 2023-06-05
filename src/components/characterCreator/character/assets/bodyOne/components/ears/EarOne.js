import React from 'react';
import {ReactComponent as EarOne} from '../../svgs/ears/EarOne.svg';

const EarOneComponent = (props) => {
    return (
        <div className="">
            <EarOne fill={props.fill} />
        </div>
    );
}
export default EarOneComponent;