import React, { useState, useEffect } from "react";
import img from "../../assets/images/phone/iphone-12-mini-1-1-org.jpg";
import ModalRate from "./ModalRate";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "../../sass/productdetail/_feedback.scss";
import { getCommentRateProductId } from "../../features/rate/rateSlice";
import {
  getCommentProduct,
  getReplyCommentParentId,
  replyComment,
  addCommentProductId,
} from "../../features/comment/commentSlice";
import {
  selectCurrentUserId,
  selectLoginStatus,
} from "../../features/auth/authSlice";
import { addCommentRateProductId } from "../../features/rate/rateSlice";
import { toast } from "react-toastify";
import Rating from "@mui/material/Rating";

// import { comment } from 'postcss'
// import { set } from 'immer/dist/internal'

const Feedback = ({ product }) => {
  const location = useLocation();
  const productId = location.state.productId;
  const history = useHistory();
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();
  const [feedBack, setFeedBack] = useState([]);
  const [size, setSize] = useState(5);
  const [sizeComment, setSizeComment] = useState(5);
  const [openRep, setOpenRep] = useState();
  const status = useSelector(selectLoginStatus) || false;
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState({
    productId: "",
    content: "",
  });
  const [reply, setReply] = useState({
    productId: productId,
    content: "",
    parentCommentId: "",
  });
  useEffect(() => {
    const params = {
      id: productId,
      size: size,
    };
    console.log(params);
    const fetchGetRate = async (params) => {
      console.log(params);
      var res = null;
      res = await dispatch(getCommentRateProductId(params)).unwrap();
      setFeedBack(res.data.data);
    };
    fetchGetRate(params);
  }, [size]);
  useEffect(() => {
    const comments = {
      id: productId,
      size: sizeComment,
    };
    const fetchCommentProduct = async (comments) => {
      var res = null;
      res = await dispatch(getCommentProduct(comments)).unwrap();
      setComments(res.data.data);
    };
    fetchCommentProduct(comments);
  }, [sizeComment]);
  console.log(feedBack);
  const onClickRate = () => {
    setToggle(true);
  };
  const onChangeComment = (e) => {
    setComment({
      ...comment,
      [e.target.name]: e.target.value,
      ["productId"]: product ? product.id : -1,
    });
  };
  const handleSubmitComment = async (e) => {
    e.preventDefault();
    if (status) {
      if (comment.productId && comment.content) {
        const res = await dispatch(addCommentRateProductId(comment)).unwrap();
        if (res.data.status) {
          toast.success("Thêm bình luận thành công");
          history.go(0);
        } else if (res.data.status === false) {
          toast.error("Thêm bình luận thất bại");
        }
      }
    } else {
      toast.error("Vui lòng đăng nhập");
    }
  };
  const handleSubmitReplyComment = async (e) => {
    e.preventDefault();
    if (status) {
      if (reply.productId && reply.parentCommentId && reply.content) {
        const res = await dispatch(replyComment(reply)).unwrap();
        if (res.data.status) {
          toast.success("Thêm bình luận thành công");
          history.go(0);
        } else if (res.data.status === false) {
          toast.error("Thêm bình luận thất bại");
        }
      }
    } else {
      toast.error("Vui lòng đăng nhập");
    }
  };
  const onChangeReplyComment = (e) => {
    setReply({
      ...reply,
      [e.target.name]: e.target.value,
      ["parentCommentId"]: openRep,
    });
  };
  console.log("rep", reply);
  const renderReply = () => {
    return (
      <div className="product_ask_header_input  flex_center">
        <input
          type="text"
          onChange={onChangeReplyComment}
          name="content"
          value={reply.content}
          class="product_ask_input flex_80_width"
          placeholder="Xin mời đặt câu hỏi! "
        />
        <div class="product_ask_btn btn flex_10_width flex_center ">
          <button
            onClick={handleSubmitReplyComment}
            className="product_ask_btn_send "
          >
            <i class="fa-solid fa-paper-plane"></i>
            &nbsp; Gửi
          </button>
        </div>
      </div>
    );
  };
  return (
    <div class="product_review_ask flex">
      <div class="product_review_ask_left box_left">
        <div class="product_review border">
          <div class="product_review_header">
            <header>Đánh giá {product ? product.name : null}</header>
          </div>
          <div class="product_review_statistic flex">
            <div className="product_review_statistic_left flex_40_width">
              <div className="product_review_statistic_header flex">
                <span>{product ? product.rate : null}</span>
                <Rating
                  name="rate"
                  value={product ? product.rate : 0}
                  readOnly
                />
                <span>
                  {" "}
                  Tổng :{product ? product.countRate : null} đánh giá
                </span>
              </div>
              <div className="product_review_statistic_star_list">
                <div className="product_review_statistic_star_item flex">
                  <span className="flex_10_width">5</span>
                  <i className="fa-solid fa-star icon_black flex_10_width"></i>
                  <div className="product_review_statistic_star_item_bar flex">
                    <div className="flex_70_width review_star"></div>
                    <div className="flex_30_width no_review"></div>
                  </div>
                  <span className="percent flex_10_width">70%</span>
                </div>
                <div className="product_review_statistic_star_item flex">
                  <span className="flex_10_width">4</span>
                  <i className="fa-solid fa-star icon_black flex_10_width"></i>
                  <div className="product_review_statistic_star_item_bar flex">
                    <div className="flex_80_width review_star"></div>
                    <div className="flex_20_width no_review"></div>
                  </div>
                  <span className="percent flex_10_width">20%</span>
                </div>
                <div className="product_review_statistic_star_item flex">
                  <span className="flex_10_width">3</span>
                  <i className="fa-solid fa-star icon_black flex_10_width"></i>
                  <div className="product_review_statistic_star_item_bar flex">
                    <div className="flex_90_width review_star"></div>
                    <div className="flex_10_width no_review"></div>
                  </div>
                  <span className="percent flex_10_width">10%</span>
                </div>
                <div className="product_review_statistic_star_item flex">
                  <span className="flex_10_width">2</span>
                  <i className="fa-solid fa-star icon_black flex_10_width"></i>
                  <div className="product_review_statistic_star_item_bar flex">
                    <div className="flex_0_width review_star"></div>
                    <div className="flex_100_width no_review"></div>
                  </div>
                  <span className="percent flex_10_width">0%</span>
                </div>
                <div className="product_review_statistic_star_item flex">
                  <span className="flex_10_width">1</span>
                  <i className="fa-solid fa-star icon_black flex_10_width"></i>
                  <div className="product_review_statistic_star_item_bar flex">
                    <div className="flex_0_width review_star"></div>
                    <div className="flex_100_width no_review"></div>
                  </div>
                  <span className="percent flex_10_width">0%</span>
                </div>
              </div>
            </div>
            <div
              style={{ width: "1px", height: "132px", backgroundColor: "#999" }}
            ></div>
            <div className="product_review_statistic_right flex_60_width">
              <div className="product_review_statistic_imgs">
                <img
                  className="product_review_statistic_img"
                  src={img}
                  alt="img"
                />
                <img
                  className="product_review_statistic_img"
                  src={img}
                  alt="img"
                />
                <img
                  className="product_review_statistic_img"
                  src={img}
                  alt="img"
                />
                <img
                  className="product_review_statistic_img"
                  src={img}
                  alt="img"
                />
                <img
                  className="product_review_statistic_img"
                  src={img}
                  alt="img"
                />
                <img
                  className="product_review_statistic_img"
                  src={img}
                  alt="img"
                />
              </div>
            </div>
          </div>
          <div class="line"></div>
          <div class="product_review_list">
            {feedBack &&
              feedBack?.map((item, index) => (
                <>
                  <div className="product_review_item" key={index}>
                    <div className="product_ask_item_answer_header flex">
                      {item.users.avatar !== null ? (
                        <div className="product_user">
                          <div className="product_user__image">
                            <img src={item.users.avatar} alt="" />
                          </div>
                        </div>
                      ) : (
                        <i className="fa-solid fa-circle-user icon"></i>
                      )}
                      <span className="product_review_header_username">
                        {item.users.name}
                      </span>
                      <i class="fa-solid fa-thumbs-up icon"></i>
                      <span className="product_review_header_text icon">
                        Đã đánh giá lúc
                      </span>
                      <span
                        style={{
                          fontWeight: "normal",
                        }}
                      >
                        {" "}
                        : {item.createTime}
                      </span>
                    </div>

                    <div className="product_review_item_content">
                      {item.content}
                    </div>
                  </div>
                  <div className="line"></div>
                </>
              ))}
          </div>

          <div class="product_review_btns flex">
            <button
              onClick={onClickRate}
              class="product_review_btn flex_30_width btn"
            >
              {" "}
              <i
                class="fa-solid fa-comment-dots"
                style={{ paddingRight: "5px" }}
              ></i>
              Viết đánh giá
            </button>
            {toggle ? (
              <ModalRate
                product={product}
                // open={open}
                onClose={() => setToggle(false)}
              ></ModalRate>
            ) : null}

            <button
              onClick={() => setSize(size + 5)}
              class="product_review_btn flex_30_width btn"
            >
              Xem Thêm đánh giá
            </button>
          </div>
        </div>
      </div>
      <div class="product_review_ask_right  box_right">
        <div class="product_ask border">
          <div class="product_ask_container">
            <header class="product_ask_header">Hỏi và đáp</header>
            <div class="product_ask_header_input flex_center">
              <input
                type="text"
                onChange={onChangeComment}
                name="content"
                value={comment.content}
                class="product_ask_input flex_80_width"
                placeholder="Xin mời đặt câu hỏi! "
              />
              <div class="product_ask_btn btn flex_10_width flex_center">
                <i class="fa-solid fa-paper-plane"></i>
                <button
                  onClick={handleSubmitComment}
                  className="product_ask_btn_send "
                >
                  Gửi
                </button>
              </div>
            </div>
          </div>
          <div class="line"></div>
          <div class="product_ask_list">
            {comments?.map((item, index) => (
              <div className="product_ask_item" key={index}>
                <div class="product_ask_item_ask">
                  <div className="product_ask_item_answer_header flex">
                    {item.users.avatar !== null ? (
                      <div className="product_user">
                        <div className="product_user__image">
                          <img src={item.users.avatar} alt="" />
                        </div>
                      </div>
                    ) : (
                      <i className="fa-solid fa-circle-user icon"></i>
                    )}
                    <header class="product_ask_item_ask_name">
                      {item.users.name}
                      <span
                        style={{
                          fontWeight: "normal",
                        }}
                      >
                        {" "}
                        : {item.createTime}
                      </span>
                    </header>
                  </div>
                  <p class="product_ask_item_ask_content">
                    {item.content}

                    <button
                      className="product_ask_item_button"
                      onClick={() => setOpenRep(item.id)}
                    >
                      <i class="fa-solid fa-reply"></i>
                      Trả lời
                    </button>
                  </p>
                </div>
                {openRep === item.id ? renderReply() : null}
                {item.subComments?.map((item, index) => (
                  <div key={index} className="product_ask_item_answer flex">
                    <div className="product_ask_item_answer_header flex">
                      {item.users.avatar !== null ? (
                        <div className="product_user">
                          <div className="product_user__image">
                            <img src={item.users.avatar} alt="" />
                          </div>
                        </div>
                      ) : (
                        <i className="fa-solid fa-circle-user icon"></i>
                      )}

                      <header class="product_ask_item_answer_name">
                        {item.users.name}
                        <span
                          style={{
                            fontWeight: "normal",
                          }}
                        >
                          {" "}
                          : {item.createTime}
                        </span>
                      </header>
                    </div>
                    <p class="product_ask_item_answer_content flex_90_width">
                      {item.content}
                      <button
                        className="product_ask_item_button"
                        onClick={() => setOpenRep(item.id)}
                      >
                        <i class="fa-solid fa-reply"></i>
                        Trả lời
                      </button>
                    </p>
                    {openRep === item.id ? renderReply() : null}
                    {item.subComments?.map((item, index) => (
                      <div key={index} className="product_ask_item_answer flex">
                        <div className="product_ask_item_answer_header flex">
                          {item.users.avatar !== null ? (
                            <div className="product_user">
                              <div className="product_user__image">
                                <img src={item.users.avatar} alt="" />
                              </div>
                            </div>
                          ) : (
                            <i className="fa-solid fa-circle-user icon"></i>
                          )}

                          <header class="product_ask_item_answer_name">
                            {item.users.name}
                            <span
                              style={{
                                fontWeight: "normal",
                              }}
                            >
                              {" "}
                              : {item.createTime}
                            </span>
                          </header>
                        </div>
                        <p class="product_ask_item_answer_content flex_90_width">
                          {item.content}
                          <button
                            className="product_ask_item_button"
                            onClick={() => setOpenRep(item.id)}
                          >
                            <i class="fa-solid fa-reply"></i>
                            Trả lời
                          </button>
                        </p>
                        {openRep === item.id ? renderReply() : null}
                        {item.subComments?.map((item, index) => (
                          <div
                            key={index}
                            className="product_ask_item_answer flex"
                          >
                            <div className="product_ask_item_answer_header flex">
                              {item.users.avatar !== null ? (
                                <div className="product_user">
                                  <div className="product_user__image">
                                    <img src={item.users.avatar} alt="" />
                                  </div>
                                </div>
                              ) : (
                                <i className="fa-solid fa-circle-user icon"></i>
                              )}

                              <header class="product_ask_item_answer_name">
                                {item.users.name}
                                <span
                                  style={{
                                    fontWeight: "normal",
                                  }}
                                >
                                  {" "}
                                  : {item.createTime}
                                </span>
                              </header>
                            </div>
                            <p class="product_ask_item_answer_content flex_90_width">
                              {item.content}
                            </p>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                ))}
                {/* {console.log(item)} */}
                {/* {C
                                        reply.map((item, index) => (
                                            <div class="product_ask_item_answer flex">
                                                <div class="product_ask_item_answer_header flex">
                                                    <i class="fa-solid fa-circle-user icon"></i>
                                                    <header class="product_ask_item_answer_name">
                                                        Quản trị viên
                                                    </header>
                                                </div>
                                                <p class="product_ask_item_answer_content flex_90_width">Thegioididong xin chào anh A! Máy hiện tại có ở các chi nhánh tại Quận 9, HCM. Anh có thể ghé cửa hàng gần nhất tham khảo ạ.</p>
                                            </div>
                                        ))
                                    } */}
              </div>
            ))}
          </div>
          <div class="flex_center">
            <button
              onClick={() => setSizeComment(sizeComment + 5)}
              class="product_ask_list_btn flex_50_width btn"
            >
              Xem thêm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
