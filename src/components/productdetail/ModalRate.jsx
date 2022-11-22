import React, { useState } from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import "../../sass/productdetail/_modal_rate.scss";
import { addCommentRateProductId } from "../../features/rate/rateSlice";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { selectLoginStatus } from "../../features/auth/authSlice";
import { toHaveClass } from "@testing-library/jest-dom/dist/matchers";
export default function ModalRate({ product, renderReview, openModal, close }) {
  const location = useLocation();
  const productId = location.state.productId;
  // const productId = "63743fa09878bcdd84b437ab";
  const dispatch = useDispatch();
  const history = useHistory();
  const status = useSelector(selectLoginStatus) || false;
  const onClose = () => openModal(false);
  let initValue = null;
  const [toggle, setToggle] = React.useState(false);
  const [value, setValue] = React.useState(0);
  const [data, setData] = useState({
    productId: productId,
    rating: 0,
    comment: "",
  });
  initValue = product ? product.id : null;
  const onChange = (e) => {
    setToggle(true);
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status) {
      if (data.productId && data.rating && data.comment) {
        //console.log(data);
        const res = await dispatch(addCommentRateProductId(data)).unwrap();
        //console.log("dasd", res);
        if ((res.message = "Review added")) {
          toast.success("Thêm Đánh giá thành công");
          renderReview(renderReview + 1);
          return;
        } else {
          toast.error("Thêm Đánh giá thất bại");
        }
      }
      onClose();
    } else {
      toast.error("Vui lòng đăng nhập");
      onClose();
    }
  };

  return (
    <div>
      <div className="modal-area">
        {/* <span id="close-modal" className="_hide-visual">
          Close
        </span> */}

        <div className="modal-body">
          <button
            onClick={() => openModal(false)}
            className="_modal-close-icon"
            viewBox="0 0 40 40"
          >
            <path d="M 10,10 L 30,30 M 30,10 L 10,30" />X
          </button>
          <form onSubmit={handleSubmit}>
            <div className="info-pro">
              <div className="img-cmt">
                <img
                  src={product ? product?.image : ""}
                  height="80px"
                  width="auto"
                  alt=""
                />
              </div>
              <div className="text-cmt">{product ? product.name : ""}</div>
            </div>
            <div className="flex_center">
              <Box
                style={{ margin: "20px" }}
                sx={{
                  "& > legend": { mt: 0 },
                }}
              >
                <Rating name="rating" value={data.rating} onChange={onChange} />
              </Box>
            </div>
            {toggle ? (
              <>
                <div className="inputGroup">
                  <label htmlFor="name">Cảm nhận</label>
                  <input
                    type="name"
                    name="comment"
                    className="form-control"
                    value={data.comment}
                    id="name"
                    onChange={onChange}
                    placeholder="Mời bạn chia sẻ cảm nhận về sản phẩm"
                  />
                </div>
                <div className="form-group">
                  <button
                    className="form-control btn btn-primary"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </>
            ) : null}
          </form>
        </div>
      </div>
    </div>
  );
}
