import React, { Component } from "react";
import logo from "./logo.svg";
import { Modal, Button, Space } from "antd";
import TextField from "@material-ui/core/TextField";
import { Card, Col, Row } from "antd";
import { Typography } from "antd";
import "antd/dist/antd.css";
import "./App.css";

const { Title } = Typography;
const gridStyle = {
  width: "25%",
  textAlign: "center",
};

//lowercase are reserved by EJX
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  render() {
    return (
      <div style={{ padding: "20px" }}>
        <center style={{ marginBottom: "30px" }}>
          <Title keyboard type="">
            TaskGrid
          </Title>
          <form onSubmit={this.handleSubmit}>
            <TextField
              id="outlined-basic"
              label="Enter the task"
              variant="outlined"
              size="small"
              id="new-todo"
              onChange={this.handleChange}
              value={this.state.text}
            />
            &nbsp;
            <Button type="primary" htmlType="submit">
              Add Task
            </Button>
          </form>
        </center>
        <TodoList items={this.state.items} />
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now(),
      isShow: true,
    };
    this.setState((state) => ({
      items: state.items.concat(newItem),
      text: "",
    }));
  }
}


class TodoList extends React.Component {
  render() {
    return (
      // <div style={{borderColor: 'black',border:'1px'}}>
      //   <ul>
      //   {this.props.items.map(item => (
      //     <li key={item.id}>{item.text}</li>
      //   ))}
      // </ul>
      // </div>

      //       <div className="site-card-wrapper">
      //     <Row gutter={16}>
      //     {this.props.items.map(item=>(
      // <Col span={8}>
      //         <Card title={item.text} bordered={true}>
      //           Card content
      //         </Card>
      //       </Col>

      //       ))}

      //     </Row>
      //   </div>

      <div>
        {this.props.items.map((item) => (
          <Card.Grid
            style={
              (gridStyle,
              {
                display: item.isShow == true ? "block" : "none",
                cursor: "pointer",
              })
            }
            onClick={() => {
              item.isShow = false;
              this.setState({ isShow: false });
            }}
          >
            {item.text}
          </Card.Grid>
        ))}
      </div>
    );
  }
}
export default App;
