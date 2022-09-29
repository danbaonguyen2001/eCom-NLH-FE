import "../../sass/productdetail/_specifications_modal.scss";

const SpecificationsModal = ({ closeModal, specifications }) => {
  console.log(specifications)
  return (
    <div>
      <div className={`specifications_modal `}>
        <div className="specifications_modal_content">
          <h3 className="specifications_modal_content_header">
            Thông số kỹ thuật
          </h3>
          <div class="product_information_detail_list">
            {specifications?.map((v, i) => (
              <div
                class={`product_information_detail_item  flex_center ${
                  i % 2 === 0 ? "infor_1" : "infor_2"
                }`}
                key={i}
              >
                <span class="product_information_item_title flex_50_width">
                  {v.name}
                </span>
                <span class="product_information_item_content flex_50_width">
                  {v.value}
                </span>
              </div>
            ))}
          </div>
          <div className="specifications_modal_content_close">
          <button
            className="specifications_modal_content_close_btn"
            onClick={() => closeModal(false)}
          >
            X
          </button>
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default SpecificationsModal;
