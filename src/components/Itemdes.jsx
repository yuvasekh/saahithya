import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Itemdesc.scss";
import { Button, Tag, Popover } from "antd";
import {
  EyeOutlined,
  ShoppingCartOutlined,
  StarOutlined,
} from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { addToCart,getTags } from "./services/api";
import ReadMore from "./common/ReadMore";
import { useNavigate } from "react-router-dom";
const Itemdesc = () => {
  const [liked, setLiked] = useState(false);
  const [items, setItems] = useState();
  const [tags,setTags]=useState([])

  const handleLike = () => {
    setLiked(!liked);
  };

  const navigate = useNavigate();
  const location = useLocation();
  const myProp = location.state && location.state.myProp;
  useEffect(()=>
  {
async function dummy()
{
  console.log(myProp,"checkprops")
var res=  await getTags(myProp.FileId)
console.log(res,"reslist")
let temp=[]
res.map((item,index)=>
{
  temp.push(item.CategoryName)

})
setTags(temp)

}
dummy()
  },[])
  const [selectedimage, setSelectedImage] = useState(myProp.FileImage.data);
  console.log(myProp, "yuvaprops");
  function readPage(FileID) {
    console.log(FileID, "message");
    navigate("/read", { state: { myProp: FileID } });
  }
  async function cart(CartItem) {
    console.log(CartItem, "Inside Fun");
    await addToCart(CartItem);
    navigate("/cart", { state: { myProp: FileID } });
  }
  return (
    <div style={{ position: "relative" }} className="itemcontaineritems">
      <div className="styleconainer"></div>
      <div className="imgcontainers">
        <div style={{ width: "850px", gap: "32px" }}>
          {" "}
          <h2>{myProp.FileName}</h2>
          <p>{myProp.bookdescription}</p>
          <p style={{ color: "green", fontWeight: "800x" }}>
            <StarOutlined />
            {myProp.Rating}
          </p>
          <p style={{ color: "black", fontWeight: "800x" }}>
            <EyeOutlined />
            {myProp.Views}
          </p>
          <Button
            style={{ backgroundColor: "f81414d0 !important" }}
            onClick={() => {
              readPage(myProp.FileId);
            }}
          >
            Read
          </Button>
          <Button onClick={handleLike}>
            <FontAwesomeIcon icon={liked ? faThumbsDown : faThumbsUp} />
            {liked ? " Likes" : " Likes"}
            {myProp.Likes}
          </Button>
          <Button
            style={{
              backgroundColor: "f81414d0 !important",
              marginLeft: "20px",
              width: "140px",
            }}
            onClick={() => {
              cart(myProp.FileId);
            }}
          >
            <ShoppingCartOutlined /> Addtocart
          </Button>
          <br></br>
          <br></br>
          <div style={{ display: "flex", justifyContent: "start" }}>
            {tags.length>0?<>{
            tags.map((item)=>
            (<div><Tag color="#2db7f5">{item}</Tag>
            </div>))}</>:<></>}
            
          </div>
        </div>
        <div>
          {" "}
          <img
            src={`data:image/png;base64,${selectedimage}`}
            style={{ width: "180px", height: "250px" }}
          />
        </div>
      </div>
      <br></br>
      <ReadMore text={myProp.BookExcerpt} maxChars={50} />
      <br></br>
    </div>
  );
};
export default Itemdesc;
