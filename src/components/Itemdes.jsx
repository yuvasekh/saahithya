import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import "./Itemdesc.scss";
import { Button, Tag, Popover } from "antd";
import {
  EyeOutlined,
  ShoppingCartOutlined,
  StarOutlined,
  CommentOutlined,
  FlagOutlined,
} from "@ant-design/icons";
import InputEmoji from "react-input-emoji";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { addToCart, getTags,getFileById,addcomments,getcomments,addreport} from "./services/api";
import ReadMore from "./common/ReadMore";
import { useNavigate } from "react-router-dom";
const Itemdesc = () => {
  const [liked, setLiked] = useState(false);
  const [items, setItems] = useState();
  const [tags, setTags] = useState([]);
  const [text, setText] = useState("");
  const [comments, setcomments] = useState([]);
  const [commentsclick, setcommentsclick] = useState(false);
  const [commentpage,setCommentPage]=useState(false)
  const commentsContainerRef = useRef(null);
  const [info,setInfo]=useState([])

  const [rating, setRating] = useState(0); 

  const handleRatingClick = (selectedRating) => {
    setRating(selectedRating); 
  };

 async function handleOnEnter(text) {
    // setcomments([...comments, text]);
    let data=info[0]
    console.log(data.FileID,"first")
    var res=await addcomments(data.FileId,text)
    console.log(res,"comments")
    var commentslist=await getcomments(info[0].FileId)
    console.log(commentslist,"check")
    setcomments(commentslist)
  }
  const handleLike = () => {
    setLiked(!liked);
  };

  const navigate = useNavigate();
  const location = useLocation();
  const myProp = location.state && location.state.myProp;
  useEffect(() => {
    async function dummy() {
      console.log(myProp, "checkprops");
      var data=await getFileById(myProp.FileId)
      console.log(data,"filesdata")
      if(data.length>0)
      {
        setInfo(data)

      

      }
      var res = await getTags(myProp.FileId);
      console.log(res, "reslist");
      let temp = [];
      res.map((item, index) => {
        temp.push(item.CategoryName);
      });
      setTags(temp);
     
    }
    dummy();
  }, []);
  const [selectedimage, setSelectedImage] = useState(myProp.FileImage.data);

  function readPage(FileID) {
    console.log(FileID, "message");
    navigate("/read", { state: { myProp: FileID } });
  }
  async function commentsfun() {
    console.log("comments", comments);
    var commentslist=await getcomments(info[0].FileId)
    console.log(commentslist,"check")
    setcomments(commentslist)
    commentsclick == true ? setcommentsclick(false) : setcommentsclick(true);
    if (comments) {
      // console.log("call1");
      commentsContainerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }
  async function addreportfun() {
  
    console.log("comments", comments);
    var commentslist=await addreport(info[0].FileId,"test")
    if(commentslist)
    {
      console.log(commentslist,"checkstatus")
    }
  
  }
  useEffect(() => {}, [comments]);
  async function cart(CartItem) {
    console.log(CartItem, "Inside Fun");
    await addToCart(CartItem);
    navigate("/cart", { state: { myProp: FileID } });
  }
  return (
    <div style={{ position: "relative" }} className="itemcontaineritems">
      {
        info.length>0?<>      <div className="styleconainer"></div>
        <div className="imgcontainers">
          <div style={{ width: "850px", gap: "22px" }}>
            {" "}
            <h2>{info[0].FileName}</h2>
            <p>{info[0].bookdescription}</p>
            <p style={{ color: "green", fontWeight: "800x" }}>
              <StarOutlined />
              {info[0].Rating}
            </p>
            <p style={{ color: "black", fontWeight: "800x" }}>
              <EyeOutlined />
              {info[0].Views}
            </p>
            <div style={{ display: "flex", gap: "22px", alignItems: "center" }}>
              <h2 onClick={handleLike}>
                <FontAwesomeIcon icon={liked ? faThumbsDown : faThumbsUp} />
  
                {info[0].Likes}
              </h2>
              <h2 onClick={commentsfun}>
                <CommentOutlined />
              </h2>
              <h2
                style={{
                  backgroundColor: "f81414d0 !important",
                }}
                onClick={() => {
                  cart(info[0].FileId);
                }}
              >
                <ShoppingCartOutlined />
              </h2>
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  onClick={() => handleRatingClick(star)}
                  style={{
                    color: star <= rating ? "gold" : "gray",
                    cursor: "pointer",
                  }}
                >
                  <StarOutlined size={24} />
                </span>
              ))}
              <Button style={{ width: "120px" }}>Submit Rating</Button>
            </div>
            <br></br>
            <div style={{ display: "flex", justifyContent: "start" }}>
              {tags.length > 0 ? (
                <>
                  {tags.map((item) => (
                    <div>
                      <Tag color="#2db7f5">{item}</Tag>
                    </div>
                  ))}
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div>
            {" "}
            <img
              src={`data:image/png;base64,${selectedimage}`}
              style={{ width: "180px", height: "250px" }}
            />
            <div style={{ display: "flex", marginTop: "3px" }}>
            {/* style={{ cursor: "true" ? "not-allowed" : "pointer" }} */}
              <Button onClick={addreportfun}>
                <FlagOutlined />
                Report
              </Button>
              <Button
                style={{ backgroundColor: "f81414d0 !important" }}
                onClick={() => {
                  readPage(info[0].FileId);
                }}
              >
                Read
              </Button>
            </div>
          </div>
        </div>
        <br></br>
        {info[0].BookExcerpt ? (
          <>
            {" "}
            <ReadMore text={info[0].BookExcerpt} maxChars={50} />
          </>
        ) : (
          <></>
        )}
        <div>
          {commentsclick == true ? (
            <>
              {" "}
              <div ref={commentsContainerRef} className="commentscontainers">
                <div className="Input-com">
                  {comments.length > 0 ? (
                    <>
                      {comments.map((item) => (
                        <h4 className="inv-comm1">{item.comment}</h4>
                      ))}
                    </>
                  ) : (
                    <>No Comments</>
                  )}
                </div>
                <div>
                  <InputEmoji
                    value={text}
                    onChange={setText}
                    cleanOnEnter
                    onEnter={handleOnEnter}
                    placeholder="Type a message"
                    style={{ borderColor: 'blue' }}
                  />
                </div>
              </div>
            </>
          ) : (
            <div ref={commentsContainerRef}></div>
          )}
        </div></>:<></>
      }

      <br></br>
    </div>
  );
};
export default Itemdesc;
