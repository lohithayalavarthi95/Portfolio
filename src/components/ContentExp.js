import React from "react";
import { Typography, Divider } from "antd";
import ListItems from "../views/ListItems";

const { Text, Paragraph, Title } = Typography;
function ContentExp({
  title1,
  title2,
  paratitle,
  title3,
  listItem1,
  listItem2,
  listItem3,
  listItem4,
  listItem5,
  title4,
  title5,
}) {
  return (
    <>
      <p> <strong style={{fontSize :'17px', color:'#000000'}} >{title1}</strong></p>
      <p> <strong style={{fontSize :'17px', color:'#000000'}} >{title2}</strong></p>
      <Paragraph>{paratitle}</Paragraph>
      <p> <strong style={{fontSize :'17px', color:'#000000'}} >{title3}</strong></p>
      <p> <strong style={{fontSize :'17px', color:'#000000'}} >{title4}</strong></p>
      <p> <strong style={{fontSize :'17px', color:'#000000'}} >{title5}</strong></p>
      <ListItems listItem1={listItem1} listItem2={listItem2} listItem3={listItem3} listItem4={listItem4} listItem5={listItem5}/>
    </>
  );
}

export default ContentExp;
