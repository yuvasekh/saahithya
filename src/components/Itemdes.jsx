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
import { addToCart, getTags, getFileById, addcomments, getcomments, addreport, giverating, giveLikes } from "./services/api";
import ReadMore from "./common/ReadMore";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
const Itemdesc = () => {
  const notify = (msg) => toast(msg);
  const navigate = useNavigate();
  const location = useLocation();
  const myProp = location.state && location.state.myProp;
  const [liked, setLiked] = useState(false);
  const [items, setItems] = useState();
  const [tags, setTags] = useState([]);
  const [text, setText] = useState("");
  const [comments, setcomments] = useState([]);
  const [commentsclick, setcommentsclick] = useState(false);
  const [commentpage, setCommentPage] = useState(false)
  const commentsContainerRef = useRef(null);
  const [selectedstars, setSelectedStars] = useState()
  const [info, setInfo] = useState([])
  const [image,setImage]=useState()

  const [rating, setRating] = useState(0);
  async function dummy() {
    console.log(myProp, "checkprops");
    var data = await getFileById(myProp.FileId)
    console.log(data, "filesdata")
    if (data.length > 0) {
      setInfo(data)
      let url=`https://saahithyapdffiles.blob.core.windows.net/uploadfilessaahithya/${data[0].EpisodeId}${data[0].ImageExtension}?sp=r&st=2023-08-28T11:42:38Z&se=2023-12-30T19:42:38Z&spr=https&sv=2022-11-02&sr=c&sig=fvbUPQhstqAT7OaFy7XS7LuERdDsNu6U8uACd72XLmA%3D`
      console.log(url)
      setImage(url)
    }
    var res = await getTags(myProp.FileId);
    console.log(res, "reslist");
    let temp = [];
    res.map((item, index) => {
      temp.push(item.CategoryName);
    });
    setTags(temp);

  }
  const handleRatingClick = async (selectedRating) => {
    console.log(selectedRating)
    setRating(selectedRating);
    setSelectedStars(selectedRating)
  };

  async function handleOnEnter(text) {
    // setcomments([...comments, text]);
    let data = info[0]
    console.log(data.FileID, "first")
    var res = await addcomments(data.FileId, text)
    console.log(res, "comments")
    var commentslist = await getcomments(info[0].FileId)
    console.log(commentslist, "check")
    setcomments(commentslist)
  }
  const handleLike = async () => {
    console.log(liked, "checklike")
    let fileid = info[0].FileId

    console.log(fileid, "sendback", info)
    let data = { FileId: fileid, likestatus: liked }
    var res = giveLikes(data)
    dummy()
    setLiked(!liked);
  };
  useEffect(() => {

    dummy();
  }, []);
  useEffect(() => {

  }, [info])


  function readPage(FileID, extension) {
    let data = {
      FileId: FileID,
      extension: extension
    }
    console.log(FileID, "message");
    navigate("/read", { state: { myProp: data } });
  }
  async function commentsfun() {
    console.log("comments", comments);
    var commentslist = await getcomments(info[0].FileId)
    console.log(commentslist, "check")
    setcomments(commentslist)
    commentsclick == true ? setcommentsclick(false) : setcommentsclick(true);
    if (comments) {
      // console.log("call1");
      commentsContainerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }
  async function addreportfun() {
    console.log("comments", comments);
    var commentslist = await addreport(info[0].FileId, "test")
    if (commentslist) {
      console.log(commentslist, "checkstatus")
    }
  }
  async function ratingfun() {
    console.log(selectedstars, "give", info)
    if (selectedstars > 0) {
      let fileid = info[0].FileId
      let data = { rating: selectedstars, FileId: fileid }
      var res = await giverating(data)
      if (res.hasOwnProperty('response')) {
        if (res.response.status == 401) {
          notify("Token Expired")
          localStorage.clear();
          navigate('/login')
        }
        if (res.response.status == 400) {
          localStorage.clear();
          notify(" Token Expired Login Again")
          navigate('/login')
        }
        if (res.response.status == 409) {
          notify("Already Rated")

        }
      }
      else {
        if (res.status == 200) {
          notify("Rating Submitted Sucessfully")
        }
      }
    }
  }
  useEffect(() => { }, [comments]);
  async function cart(CartItem) {
    console.log(CartItem, "Inside Fun");
    await addToCart(CartItem);
    navigate("/cart", { state: { myProp: FileID } });
  }




  return (

    <div className="entire-bg">
      <ToastContainer />
      {
        info.length > 0 ? <>

          <div className="itemdesc-con">
            <div className="item-con2">
              <div className="item-con">

                <div>
                  <h2 style={{ fontSize: "3vw", fontFamily: "fantasy" }}>{info[0].FileName}</h2>
                  <p style={{ fontSize: "1.5vw", fontWeight: 'bold', fontFamily: "fantasy" }}>{info[0].bookdescription}</p>
                </div>





                <div className="icons-cont">

                  <h2 className="refined">
                    <StarOutlined className="icon-font" />
                    <span style={{ marginLeft: '10px' }}>{info[0].Rating}</span>
                  </h2>

                  <h2 className="refined">
                    <EyeOutlined className="icon-font" />
                    <span style={{ marginLeft: '10px' }}>{info[0].Views}</span>
                  </h2>

                  <h2 className="refined" onClick={handleLike}>
                    <FontAwesomeIcon className="icon-font" icon={liked ? faThumbsDown : faThumbsUp} />
                    <span style={{ marginLeft: '10px' }}> {info[0].Likes}</span>
                  </h2>




                  <div className="red">


                    <h2 onClick={commentsfun}>
                      <CommentOutlined className="icon-font" />
                    </h2>

                    <h2 className="icon-font"
                      style={{
                        backgroundColor: "f81414d0 !important",
                        marginLeft: '-10px', marginTop: '-5px',
                      }}

                      onClick={() => {
                        cart(info[0].FileId);
                      }}
                    >
                      <ShoppingCartOutlined className="icon-font" />
                    </h2>

                  </div>





                </div>








                <div className="rating-con " >

                  <div className="star-icons">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span

                        key={star}
                        onClick={() => handleRatingClick(star)}

                        style={{
                          color: star <= rating ? "gold" : "gray",
                          cursor: "pointer", gap: "12px"

                        }}
                      >
                        <StarOutlined size={24} />
                      </span>
                    ))}
                  </div>

                  <Button className="submit-btn" onClick={ratingfun}>Submit Rating</Button>

                </div>

                <br></br>
                <div>
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
              <div className="item-image-con" >

                {/* <img
                  src={`data:image/png;base64,${selectedimage}`} className="item-image"
                /> */}
   <img
                  src=
                  {image} className="item-image"
                />
                <div className="buttons-con">
                  {/* style={{ cursor: "true" ? "not-allowed" : "pointer" }} */}
                  <Button className="report-btn btn" onClick={addreportfun}>
                    <FlagOutlined />
                    Report
                  </Button>

                  <Button className="read-btn btn"
                    style={{ backgroundColor: "f81414d0 !important" }}
                    onClick={() => {
                      readPage(info[0].EpisodeId, info[0].extension);
                    }}
                  >
                    Read
                  </Button>

                </div>

              </div>
            </div>

          </div>



          <br></br>

          <div>
            <h3 className="headfont">EPISODES :- </h3>
          </div>
          <div className="episodemain">
            {info.length > 0 && info.map((item, index) => (
              <div key={index} className="episode" onClick={() => {
                readPage(info[index].EpisodeId, info[index].extension
                );
              }}>
                <h2 style={{ fontWeight: "bold", fontFamily: "fantasy" }}>{item.FileName}  @{index + 1}</h2>
              </div>
            ))}
          </div>



          <div>
            <h4 className="headfont2" style={{ marginLeft: '25px' }}>BOOK EXCRET :-</h4>
          </div>

          <div className="book-excerp">
            {info[0].BookExcerpt ? (
              <>
                {" "}
                <ReadMore text={info[0].BookExcerpt} maxChars={50} />
              </>
            ) : (
              <></>
            )}
          </div>

          <div className="comment-sec">
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
          </div>
        </> : <></>
      }
      <br></br>
    </div>
  );
};
export default Itemdesc;
