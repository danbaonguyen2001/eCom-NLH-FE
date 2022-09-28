import React, { useState } from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import "../../sass/productdetail/_modal_rate.scss"
import { addCommentRateProductId } from "../../features/rate/rateSlice";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { selectLoginStatus } from "../../features/auth/authSlice";
import { toHaveClass } from "@testing-library/jest-dom/dist/matchers";
export default function ModalRate(props) {
  const location = useLocation();
  const productId = location.state.productId;
  const dispatch = useDispatch();
  const history = useHistory();
  const status = useSelector(selectLoginStatus) || false;
  const onClose = props.onClose ? props.onClose : null;
  let initValue = null;
  const [toggle, setToggle] = React.useState(false);
  const [value, setValue] = React.useState(0);
  const [data, setData] = useState({
    productId: productId,
    rate: 0,
    content: "",
  });
  initValue = props.product ? props.product.id : null;
  const onChange = (e) => {
    setToggle(true);
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status) {
      if (data.productId && data.rate && data.content) {
        const res = await dispatch(addCommentRateProductId(data)).unwrap();
        console.log("dasd", res);
        if (res.data.status) {
          toast.success("Thêm Đánh giá thành công");
          history.go(0);
        } else if (res.data.status === false) {
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
          onClick={props.onClose ? props.onClose : null}
          className="_modal-close-icon"
          viewBox="0 0 40 40"
        >
          <path d="M 10,10 L 30,30 M 30,10 L 10,30" />X
        </button>
          <form onSubmit={handleSubmit}>
            <div className="info-pro">
              <div className="img-cmt">
                <img
                  src={
                    props.product
                      ? props.product.images[0].items[0].urlImage
                      : ""
                  }
                  height="80px"
                  width="auto"
                  alt=""
                />
              </div>
              <div className="text-cmt">
                {props.product ? props.product.name : ""}
              </div>
            </div>
            <div className="flex_center">
              <Box
                style={{ margin: "20px" }}
                sx={{
                  "& > legend": { mt: 0 },
                }}
              >
                <Rating name="rate" value={data.rate} onChange={onChange} />
              </Box>
            </div>
            {toggle ? (
              <>
                <div className="inputGroup">
                  <label htmlFor="name">Cảm nhận</label>
                  <input
                    type="name"
                    name="content"
                    className="form-control"
                    value={data.content}
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
