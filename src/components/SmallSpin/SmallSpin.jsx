import React from 'react';
import {Spin} from "antd";

import './SmallSpin.css';

const SmallSpin = () => {
    return (
        <div className="spinner-wrapper">
            <Spin />
        </div>
    )
};

export default SmallSpin;
