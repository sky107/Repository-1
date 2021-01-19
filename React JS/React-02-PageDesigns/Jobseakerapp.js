import React from "react";
import "./style.css";
import TextField from "@material-ui/core/TextField";
import { Input } from "antd";
import "antd/dist/antd.css";
import { Radio, InputNumber } from "antd";
import { Select } from "antd";
import { Upload, message, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import Icon from "@material-ui/core/Icon";
import { makeStyles } from "@material-ui/core/styles";
const { Option } = Select;

export default function App() {
  const [value, setValue] = React.useState(1);

  const onChange = e => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  const props = {
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    headers: {
      authorization: "authorization-text"
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    }
  };

  return (
    <div id="container" style={{ color: "white" }}>
      <center>
        <h1 style={{ color: "#E7E918", marginTop: "1rem" }}>
          Medicore Analytics{" "}
        </h1>
        <p>Job Seakers Application</p>
        <form>
          <table>
            <tbody>
              <tr>
                <td>CANDIDATE NAME</td>
                <td>
                  <Input placeholder="Enter your name" />
                </td>
              </tr>
              <tr>
                <td>EMAIL ADDRESS</td>
                <td>
                  <Input placeholder="Enter your email" />
                </td>
              </tr>
              <tr>
                <td>MOBILE NUMBER</td>
                <td>
                  <InputNumber
                    style={{ width: "100%" }}
                    placeholder="Enter  mobile number"
                  />
                </td>
              </tr>
              <tr>
                <td>GENDER</td>
                <td>
                  <Radio.Group onChange={onChange} value={value}>
                    <Radio value={1} style={{ color: "white" }}>
                      MALE
                    </Radio>
                    <Radio value={2} style={{ color: "white" }}>
                      FEMALE
                    </Radio>
                  </Radio.Group>
                </td>
              </tr>
              <tr>
                <td>EXPERIENCE</td>
                <td>
                  <Select
                    defaultValue="Select"
                    style={{ width: 120 }}
                    onChange={handleChange}
                  >
                    <Option value="01">0-1 Years</Option>
                    <Option value="12">1-2 Years</Option>
                    <Option value="23">2-3 Years</Option>
                    <Option value="34">3-4 Years</Option>
                    <Option value="40">4+ Years</Option>
                  </Select>
                </td>
              </tr>
              <tr>
                <td>RESUME</td>
                <td>
                  <Upload {...props}>
                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                  </Upload>
                </td>
              </tr>
              <tr>
                <td />
                <td>
                  <Button type="primary">SUBMIT</Button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </center>
    </div>
  );
}
