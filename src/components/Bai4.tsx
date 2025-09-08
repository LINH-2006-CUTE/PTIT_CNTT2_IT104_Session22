import {Dropdown , Typography   , Space  } from 'antd';
import { DownOutlined } from '@ant-design/icons';

function Bai4() {
    const items = [
  {
    key: '1',
    label: 'Cài đặt',
  },
  {
    key: '2',
    label: 'Đổi mật khẩu',
  },
  {
    key: '3',
    label: 'Đăng xuất',
  },
];
  return (
    <>
    
     <Dropdown
    menu={{
      items,
      selectable: true,
      defaultSelectedKeys: ['3'],
    }}
  >
    <Typography.Link>
      <Space>
        Nguyễn Văn Nam
        <DownOutlined />
      </Space>
    </Typography.Link>
  </Dropdown></>
  )
}

export default Bai4