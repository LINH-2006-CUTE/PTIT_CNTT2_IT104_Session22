import { Button, message } from "antd";

function Toast() {
  const showToast = () => {
    message.warning("Lỗi kết nối máy chủ.");
  };

  return <Button onClick={showToast}>Toast</Button>;
}

export default Toast;
