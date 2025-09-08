import { Form, Input, Button, Select, Row, Col, Typography } from "antd";
const { Title } = Typography;
const { Option } = Select;
function Bai8 () {
  const onFinish = (values: any) => {
    console.log("Form Data:", values);
  };

  return (
    <div
      style={{
        maxWidth: 600,
        margin: "100px",
        padding:24,
        border: "1px solid #796f6fff",
        borderRadius: 16,
        background: "#fff",
      }}
    >
      <Title level={2} style={{ textAlign: "center" }}>
        Đăng ký tài khoản
      </Title>

      <Form layout="vertical" onFinish={onFinish}>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="email"
              label="Email"
              rules={[{message: "Vui lòng nhập email" }]}
            >
              <Input placeholder="Nhập email" />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              name="password"
              label="Mật khẩu"
              rules={[{message: "Vui lòng nhập mật khẩu" }]}
            >
              <Input.Password placeholder="Nhập mật khẩu" />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item
          name="fullname"
          label="Họ và tên"
          rules={[{message: "Vui lòng nhập họ và tên" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="address"
          label="Địa chỉ"
          rules={[{  message: "Vui lòng nhập địa chỉ" }]}
        >
          <Input placeholder="Ví dụ: Thanh Xuân, Hà Nội" />
        </Form.Item>

        <Row gutter={16}>
          <Col span={8}>
            <Form.Item name="city" label="Thành phố" initialValue="Hà Nội">
              <Select>
                <Option value="Hà Nội">Hà Nội</Option>
                <Option value="Hồ Chí Minh">Hồ Chí Minh</Option>
                <Option value="Đà Nẵng">Đà Nẵng</Option>
              </Select>
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item name="district" label="Quận" initialValue="Thanh Xuân">
              <Select>
                <Option value="Thanh Xuân">Thanh Xuân</Option>
                <Option value="Hoàn Kiếm">Hoàn Kiếm</Option>
                <Option value="Cầu Giấy">Cầu Giấy</Option>
              </Select>
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item name="zipcode" label="Mã bưu điện">
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Bai8 ;
