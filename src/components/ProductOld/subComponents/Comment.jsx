import React from "react";

const Comment = () => {
  return (
    <div>
      <div className="thecomment">
        <textarea
          name=""
          id="txtbinhluan"
          cols="30"
          rows="10"
          placeholder="Mời bạn để lại bình luận..."
        ></textarea>
      </div>
      <div className="themid">
        <div>25.000 Bình luận&emsp;</div>
        <div>
          <label htmlFor="" className="labelbox">
            <input type="checkbox"></input> Xem bình luận kỹ thuật
          </label>
        </div>
      </div>
      <div className="thesapxep">
        <div>Sắp xếp theo&emsp;</div>
        <input name="gender" type="radio" value="Nam" />
        Độ chính xác
        <input name="gender" type="radio" value="Nữ" />
        Mới nhất
      </div>
      <div className="liscomment">
        <div className="comment_ask">
          <div className="tenuser">
            <i class="fa-regular fa-user"></i>&ensp;Tran Van A
          </div>
          <div className="question">
            Mua sản phẩm cũ thì có được trả góp không ạ
          </div>
          <div className="baongoaitraloi">
            <div className="tenadmin">
              <i class="fa-solid fa-user"></i>&ensp;Quan Tri Vien
            </div>
            <div className="traloicomment">
              Chào chị. <br />
              Sản phẩm cũ có hỗ trợ trả góp tùy sản phẩm ạ. Dạ trường hợp này để
              kiểm tra cụ thể mình vui lòng cung cấp mã sản phẩm mình đang quan
              tâm (ví dụ: #12345678) để bên em hỗ trợ giúp chị
              <br />
              Mong nhận phản hồi từ chị.
            </div>
          </div>
        </div>
        <div className="comment_ask">
          <div className="tenuser">
            <i class="fa-regular fa-user"></i>&ensp;Tran Van A
          </div>
          <div className="question">
            Mua sản phẩm cũ thì có được trả góp không ạ
          </div>
          <div className="baongoaitraloi">
            <div className="tenadmin">
              <i class="fa-solid fa-user"></i>&ensp;Quan Tri Vien
            </div>
            <div className="traloicomment">
              Chào chị. <br />
              Sản phẩm cũ có hỗ trợ trả góp tùy sản phẩm ạ. Dạ trường hợp này để
              kiểm tra cụ thể mình vui lòng cung cấp mã sản phẩm mình đang quan
              tâm (ví dụ: #12345678) để bên em hỗ trợ giúp chị
              <br />
              Mong nhận phản hồi từ chị.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
