import React from 'react';
import './App.css';
import { EventLists } from "../src/ToDoList/container/eventslist_container"
import { SearchContainer } from "../src/ToDoList/container/search_container";
import { Layout, Row, Col } from "antd";

const { Header, Footer } = Layout;

function App() {

  return (
    <div className="App">
      <Layout>
          <Header/>
          <Row>
              <Col flex={2}></Col>
              <Col flex={3}> 
                  <SearchContainer />
                  <EventLists />
              </Col>
              <Col flex={2}></Col>
          </Row>
          <Footer/>
      </Layout>
    </div>
  );
}

export default App;
