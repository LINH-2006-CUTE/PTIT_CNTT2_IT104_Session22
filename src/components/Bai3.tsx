import { Flex, Card, Button} from 'antd'
function Bai3() {
  return (
    <>
    <Flex gap= "10px">
    <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="" src="https://cdn.tgdd.vn/Products/Images/44/197305/apple-macbook-air-mree2sa-a-i5-8gb-128gb-133-gold-7-2-600x600.jpg" />}
  >
    <Card.Meta title="MacBook Air 2018" description="The reason I am selling the machine is because it is too much power for what I need" />

    <div style={{display: "flex", justifyContent:"center", alignItems: "center", gap:"10px", margin:"15px"}}>
         <Button type="primary">Primary Button</Button>
         <span>30.000.000</span>
    </div>
  </Card>



  <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="" src="https://cdn.tgdd.vn/Files/2019/07/17/1180055/macbookair2019vsmacbookpro2019_800x534.jpg" />}
  >
    <Card.Meta title="MacBook Pro 2019
" description="The reason I am selling the machine is because it is too much power for what I need" />
<div style={{display: "flex", justifyContent:"center", alignItems: "center", gap:"10px", margin:"15px"}}>
         <Button type="primary">Primary Button</Button>
         <span>30.000.000</span>
    </div>
  </Card>
    </Flex>
    </>
  )
}

export default Bai3