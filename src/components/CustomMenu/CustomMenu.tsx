import React from "react";
import {Button, Flex} from "antd";

interface CustomMenuProps {
    x: number,
    y: number,
    showMenu: boolean;
}

const CustomMenu: React.FC<CustomMenuProps> = ({ x, y, showMenu }) => {
  return (
      <Flex vertical style={{
          height: 200,
          width: 150,
          borderRadius: 10,
          backgroundColor: "#bbbbbb",
          padding: 10,
          top: y,
          left: x,
          position: "absolute",
          display: showMenu ? "flex" : "none"
      }}>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
      </Flex>
  )
};

export default CustomMenu;
