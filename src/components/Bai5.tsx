import { Alert, Space } from "antd";

function bai5() {
  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      <Alert
        message="Thêm tài khoản thành công."
        type="success"
        closable
      />
      <Alert
        message="Thêm mới tài khoản thất bại."
        type="error"
        closable
      />
      <Alert
        message="Tên không được để trống."
        type="warning"
        closable
      />
    </Space>
  );
}

export default bai5;
