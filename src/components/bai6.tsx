import { Spin, Space } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

function Bai6() {
  return (
    <Space direction="vertical" style={{ width: "100%"}}>
      <Spin indicator={<LoadingOutlined style={{ fontSize: 40, color: "blue" }} spin />} />
      <Spin indicator={<LoadingOutlined style={{ fontSize: 40, color: "gray" }} spin />} />
      <Spin indicator={<LoadingOutlined style={{ fontSize: 40, color: "green" }} spin />} />
    </Space>
  );
}

export default Bai6;
