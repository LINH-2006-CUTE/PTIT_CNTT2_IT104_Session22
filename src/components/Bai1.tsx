import { Flex, Button } from 'antd'

function Bai1() {
  return (
  
   <Flex gap="8px">
    <Button type = "primary">Lưu</Button>
    <Button type = "primary" style={{backgroundColor:"grey"}}>Hủy</Button>
    <Button type = "primary" style={{backgroundColor:"green"}}>Thành công</Button>
    <Button type = "primary" style={{backgroundColor:"yellow"}}>Cảnh báo</Button>
    <Button type = "primary" style={{backgroundColor:"red"}}>Báo lỗi</Button>
    <Button type = "primary" style={{backgroundColor:"blueviolet"}}>Thông tin</Button>
    <Button type = "link">Đường dẫn</Button>

   </Flex>
   
  )
}

export default Bai1