import { Table, Button } from "antd";

function Bai9() {
  const dataSource = [
    {
      key: "1",
      name: "Nguyễn Văn A",
      gender: "Nam",
      dob: "01/01/1990",
      email: "nguyenvana@example.com",
      address: "Hà Nội",
    },
    {
      key: "2",
      name: "Trần Thị B",
      gender: "Nữ",
      dob: "02/02/1995",
      email: "tranthib@example.com",
      address: "TP. Hồ Chí Minh",
    },
    {
      key: "3",
      name: "Phạm Văn C",
      gender: "Nam",
      dob: "03/03/1992",
      email: "phamvanc@example.com",
      address: "Đà Nẵng",
    },
    {
      key: "4",
      name: "Lê Thị D",
      gender: "Nữ",
      dob: "04/04/1993",
      email: "lethid@example.com",
      address: "Hải Phòng",
    },
    {
      key: "5",
      name: "Nguyễn Văn E",
      gender: "Nam",
      dob: "05/05/1991",
      email: "nguyenvane@example.com",
      address: "Cần Thơ",
    },
  ];

  const columns = [
    {
      title: "STT",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Họ và tên",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Giới tính",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Ngày sinh",
      dataIndex: "dob",
      key: "dob",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Địa chỉ",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Chức năng",
      key: "action",
      render: (srecord) => (
        <>
          <Button type="primary" style={{ marginRight: 8, background: "#d94e3cff"}}>
            Sửa
          </Button>
          <Button danger>Xóa</Button>
        </>
      ),
    },
  ];

  return <Table dataSource={dataSource} columns={columns}/>;
}

export default Bai9;
