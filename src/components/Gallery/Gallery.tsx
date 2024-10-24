import React, {useState} from "react";
import {Divider, Flex} from "antd";
import GalleryHeader from "./GalleryHeader/GalleryHeader";
import GalleryView from "./GalleryView/GalleryView";

const Gallery = () => {
    const [mode, setMode] = useState<"move" | "draw">("move");
    const [tool, setTool] = useState<"rectangle" | "polygon">("rectangle");

    return (
        <Flex vertical style={{ height: "100%" }}>
            <GalleryHeader mode={mode} setMode={setMode} tool={tool} setTool={setTool} />
            <Divider style={{ margin: "0 0 8px 0" }}/>
            <GalleryView tool={tool} mode={mode} />
            <Divider style={{ margin: "8px 0 0 0" }}/>
        </Flex>
    );
};

export default Gallery;
