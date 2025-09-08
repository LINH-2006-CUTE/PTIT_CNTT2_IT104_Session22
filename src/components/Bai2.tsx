import { Input } from 'antd'
function Bai2() {
  return (
    <>
    <div style={{ width:"200px", gap:"10px", padding: "15px"}}>
        <Input placeholder='Input cỡ lớn' size="large" />
        <br />
        <Input placeholder='Input cỡ vừa' size="middle" />
        <br />  
        <Input placeholder='Input cỡ bé' size="small" />
    </div>
    </>
  )
}

export default Bai2