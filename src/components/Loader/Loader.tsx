import React from "react";
import {Spin} from "antd";

import './Loader.scss';

interface LoaderProps {
    isSpin: boolean
}

const Loader: React.FC<LoaderProps> = ({ isSpin }) => {
    return (
        <Spin size="large" spinning={isSpin} fullscreen rootClassName="loader-wrapper" />
    );
};

export default Loader;
