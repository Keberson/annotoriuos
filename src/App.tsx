import React from "react";
import {Layout} from "antd";

import '@annotorious/react/annotorious-react.css';
import './App.scss';

import Gallery from "./components/Gallery/Gallery";

const { Header, Content, Footer } = Layout;

export default function App() {

    return (
        <Layout style={{ height: "100%" }}>
            <Header style={{ height: "32px" }}>

            </Header>
            <Content>
                <Gallery />
            </Content>
            <Footer style={{ height: "32px" }}>

            </Footer>
        </Layout>
    );
}