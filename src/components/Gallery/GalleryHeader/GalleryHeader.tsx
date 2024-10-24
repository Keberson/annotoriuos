import React from "react";
import {Button, Flex, Typography} from "antd";
import RectangleIcon from "../../../assets/RectangleIcon";
import PolygonIcon from "../../../assets/PolygonIcon";

const { Text } = Typography;

interface GalleryHeaderProps {
    mode: "draw" | "move",
    setMode: (mode: "draw" | "move") => void,
    tool: "rectangle" | "polygon",
    setTool: (tool: "rectangle" | "polygon") => void,
}

const GalleryHeader: React.FC<GalleryHeaderProps> = ({ mode, setMode, tool, setTool }) => {
    return (
    <Flex style={{ padding: "16px 24px" }} align="center" justify="space-between">
        <Flex align="center" gap="8px">
            <Text>Режимы работы: </Text>
            <Button
                onClick={() => setMode("draw")}
                type={mode === "draw" ? "primary" : "default"}
            >
                Рисование
            </Button>
            <Button
                onClick={() => setMode("move")}
                type={mode === "move" ? "primary" : "default"}
            >
                Изменение
            </Button>
        </Flex>
        <Flex align="center" gap="8px">
            <Text>Инструменты для рисования:</Text>
            <Button
                onClick={() => setTool("rectangle")}
                type={tool === "rectangle" ? "primary" : "default"}
            >
                <RectangleIcon fillColor={tool === "rectangle" ? "white" : "black"} />
            </Button>
            <Button
                onClick={() => setTool("polygon")}
                type={tool === "polygon" ? "primary" : "default"}
            >
                <PolygonIcon fillColor={tool === "polygon" ? "white" : "black"} />
            </Button>
        </Flex>
    </Flex>
    )
};

export default GalleryHeader;
