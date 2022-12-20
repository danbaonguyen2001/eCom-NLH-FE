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
import productHandler from "../../features/product/function";
import { toDate } from "../../utils/format";

// import { comment } from 'postcss'
// import { set } from 'immer/dist/internal'

const Feedback = ({ product }) => {
  const location = useLocation();
  const productId = location.state.productId;
  //const productId = "63743fa09878bcdd84b437ab";
  const history = useHistory();
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();
  const [feedBack, setFeedBack] = useState(product?.reviews);
  const [renderReview, setRenderReview] = useState(0);
  const [renderComment, setRenderComment] = useState(0);
  const [openRep, setOpenRep] = useState();
  const status = useSelector(selectLoginStatus) || false;
  const [comments, setComments] = useState(product?.comments);
  const closeModal = () => setToggle(false);
  //console.log("Comments:");
  //console.log(product?.comments);

  const [comment, setComment] = useState({
    productId: "",
    comment: "",
  });
  const [reply, setReply] = useState({
    productId: productId,
    reply: "",
    parentCommentId: "",
  });

  // Get Feedback -Review
  useEffect(() => {
    productHandler.getProductById({ productId: productId }).then((res) => {
      //console.log("Reviews:");
      //console.log(res.data.reviews);
      setFeedBack(res.data.reviews);
    });
  }, [renderReview]);

  //Get Comment
  useEffect(() => {
    productHandler.getProductById({ productId: productId }).then((res) => {
      //console.log(res.data.comments);
      setComments(res.data.comments);
      setRenderComment(0);
    });
  }, [renderComment]);

  //console.log(feedBack);
  const onClickRate = () => {
    setToggle(true);
    setRenderReview(1);
    console.log(renderReview);
  };
  const onChangeComment = (e) => {
    setComment({
      ...comment,
      [e.target.name]: e.target.value,
      ["productId"]: product ? product._id : -1,
    });
    //console.log(comment);
  };

  const handleSubmitComment = async (e) => {
    e.preventDefault();
    if (status) {
      if (comment.productId && comment.comment) {
        const res = await dispatch(addCommentProductId(comment)).unwrap();
        if (res.data.success === true) {
          toast.success("Thêm bình luận thành công");
          setRenderComment(renderComment + 1);
          comment.comment = "";
          return;
        } else if (res.data.success === false) {
          toast.error("Thêm bình luận thất bại");
        }
      }
      toast.error("comment");
    } else {
      toast.error("Vui lòng đăng nhập");
    }
    comment.comment = "";
  };
  const handleSubmitReplyComment = async (e) => {
    e.preventDefault();
    if (status) {
      if (reply.productId && reply.parentCommentId && reply.reply) {
        const res = await dispatch(replyComment(reply)).unwrap();
        console.log(res);
        if (res.data.success === true) {
          toast.success("Thêm bình luận thành công");
          setRenderComment(renderComment + 1);
          return 0;
        }
      }
    } else {
      toast.error("Thêm bình luận thất bại");
    }
    reply.reply = "";
    setOpenRep(0);
  };
  const onChangeReplyComment = (e) => {
    setReply({
      ...reply,
      [e.target.name]: e.target.value,
      ["parentCommentId"]: openRep,
    });
  };
  //console.log("rep", reply);
  const renderReply = () => {
    return (
      <div className="product_ask_header_input  flex_center">
        <input
          type="text"
          onChange={onChangeReplyComment}
          name="reply"
          value={reply.reply}
          class="product_ask_input border flex_80_width"
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
    <div class="product_review_ask border  row">
      {/* Review */}
      <div class="product_review_ask_left col l-6 m-12 c-12">
        <div class="product_review ">
          <div class="product_review_header">
            <header>Đánh giá {product ? product?.name : null}</header>
          </div>
          <div class="product_review_statistic flex">
            <div className="product_review_statistic_left flex_40_width">
              <div className="product_review_statistic_header flex">
                <span>{product ? product.rating : null}</span>
                <Rating
                  name="rate"
                  value={product ? product.rating : 0}
                  readOnly
                />
                <span>
                  {" "}
                  Tổng :{product ? product.reviews.length : null} đánh giá
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
              feedBack
                ?.slice(0, 5)
                .reverse()
                .map((item, index) => (
                  <>
                    <div className="product_review_item" key={index}>
                      <div className="product_ask_item_answer_header flex">
                        {item.avatarUrl !== null ? (
                          <div className="product_user">
                            <div className="product_user__image">
                              <img src={item.avatarUrl} alt="" />
                            </div>
                          </div>
                        ) : (
                          <i className="fa-solid fa-circle-user icon"></i>
                        )}
                        <span className="product_review_header_username">
                          {item.name}
                        </span>
                        <i class="fa-solid fa-thumbs-up icon"></i>
                        <span className="product_review_header_text icon">
                          Đánh giá lúc
                        </span>
                        <span
                          style={{
                            fontWeight: "normal",
                          }}
                        >
                          :{toDate(item.createdAt)}
                        </span>
                      </div>

                      <div className="product_review_item_content">
                        {item.comment}
                      </div>
                    </div>
                    <div className="line"></div>
                  </>
                ))}
          </div>

          <div class="product_review_btns flex">
            <button
              onClick={onClickRate}
              class="product_review_btn l-4 m-4 c-5 btn"
            >
              {" "}
              <i
                class="fa-solid fa-comment-dots"
                style={{ paddingRight: "5px" }}
              ></i>
              Viết đánh giá
            </button>
            {toggle && renderReview === 1 ? (
              <ModalRate
                product={product}
                renderReview={setRenderReview}
                openModal={setToggle}
                close={closeModal}
              ></ModalRate>
            ) : null}

            <button
              // onClick={() => setSize(size + 5)}
              class="product_review_btn l-4 m-4 c-5  btn"
            >
              Xem Thêm đánh giá
            </button>
          </div>
        </div>
      </div>

      {/* Ask-comment */}
      <div class="product_review_ask_right  col l-6 m-12 c-12">
        <div class="product_ask ">
          <div class="product_ask_container">
            <header class="product_ask_header">Hỏi và đáp</header>

            {/* Input Comment */}
            <div class="product_ask_header_input  flex_center">
              <input
                type="text"
                onChange={onChangeComment}
                name="comment"
                value={comment.comment}
                class="product_ask_input border flex_80_width"
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

          {/* List Comment */}
          <div class="product_ask_list">
            {comments &&
              comments
                ?.slice(0, 5)
                .reverse()
                .map((item, index) => (
                  <div className="product_ask_item" key={index}>
                    {/* Comment */}
                    <div class="product_ask_item_ask border">
                      <div className="product_ask_item_answer_header flex">
                        {item.avatarUrl !== null ? (
                          <div className="product_user">
                            <div className="product_user__image">
                              <img src={item.avatarUrl} alt="AVT" />
                            </div>
                          </div>
                        ) : (
                          <i className="fa-solid fa-circle-user icon"></i>
                        )}
                        <header class="product_ask_item_ask_name">
                          {item?.name}
                          <span
                            style={{
                              fontWeight: "normal",
                            }}
                          >
                            {" "}
                            : {toDate(item.createdAt)}
                          </span>
                        </header>
                      </div>
                      <p class="product_ask_item_ask_content">
                        {item.comment}

                        <button
                          className="product_ask_item_button"
                          onClick={() => setOpenRep(item._id)}
                        >
                          <i class="fa-solid fa-reply"></i>
                          Trả lời
                        </button>
                      </p>
                    </div>
                    {/* List Rep Comment */}
                    {openRep === item._id ? renderReply() : null}
                    {item?.replies?.map((item, index) => (
                      <div
                        key={index}
                        className="product_ask_item_answer border flex"
                      >
                        {/* Rep Comment */}
                        <div className="product_ask_item_answer_header flex">
                          {item.avatarUrl !== null ? (
                            <div className="product_user">
                              <div className="product_user__image">
                                <img src={item.avatarUrl} alt="AVT" />
                              </div>
                            </div>
                          ) : (
                            <i className="fa-solid fa-circle-user icon"></i>
                          )}

                          <header class="product_ask_item_answer_name">
                            {item?.name}
                            <span
                              style={{
                                fontWeight: "normal",
                              }}
                            >
                              : {toDate(item.createdAt)}
                            </span>
                          </header>
                        </div>
                        <p class="product_ask_item_answer_content flex_90_width">
                          {item.reply}
                        </p>
                      </div>
                    ))}
                  </div>
                ))}
          </div>
          <div class="flex_center">
            <button class="product_ask_list_btn flex_50_width btn">
              Xem thêm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
