import { List } from '@mui/material'
import React from 'react'
import { list_suppliers, list_card_price, list_net_work } from './dataSimCard'
import ListPriceCard from './ListPriceCard'
import ListSuppliers from './ListSuppliers'

const BuyGameCard = () => {
  return (
    <div className="BuyGameCard">
        <div className='buy-game-card frame'>
            <h2>MUA THẺ GAME </h2>
            <p><b>Bước 1: </b>Chọn nhà cung cấp</p>
            <ListSuppliers suppliers={list_suppliers}/>

            <p><b>Bước 2:</b> Chọn mệnh giá thẻ</p>
            <ListPriceCard list_card_price={list_card_price}/>
        </div>
        <div className="buy-scratch-card frame">
            <h2>MUA MÃ THẺ CÀO </h2>
            <p><b>Bước 1: </b>Nhập số điện thoại</p>
            <input type="text" placeholder='Số điện thoại' />
            <p><b>Bước 2: </b>Chọn nhà mạng</p>
            <ListSuppliers suppliers={list_net_work}/>
            <p><b>Bước 3: </b>Chọn số tiền cần nạp</p>
            <ListPriceCard list_card_price={list_card_price}/>
            <p><span id='color-discount'>Giảm 3%</span> cho thẻ mệnh giá từ 100.000đ.</p>


        </div>
        <div className="register">
            <h2>THỦ TỤC ĐĂNG KÝ SIM</h2>
            <p>
            1. BẢN GỐC CMND (cấp dưới 15 năm) hoặc Căn cước công dân (còn thời hạn) hoặc Hộ chiếu (còn thời hạn) của chủ thuê bao.
            </p>
            <p>
            2. Ảnh chân dung của chủ thuê bao tại thời điểm giao dịch.

            </p>
        </div>

        <div className="service">
            <span>DỊCH VỤ SIM TẠI TGDĐ</span>
            <p>Chỉ thực hiện cho  <span>KHÁCH HÀNG CÁ NHÂN</span></p>
        </div>

        <div className="net-work">
            <div className="viettel border-padding">
                <img src="https://cdn.tgdd.vn/2021/01/content/LogoViettelred-300x79.png" alt="" />
                <p><b>
                Áp dụng trên toàn quốc <br />

                1. Đổi sim 4G miễn phí. <br />

                2. Đổi sang esim. <br />

                3. Thay sim mất, hỏng (Phí 25.000đ/sim, dành cho khách hàng chính chủ). <br />

                4. Đổi sang esim, áp dụng cho sim trả trước (phí 25.000đ/sim).    
                </b></p>
            </div>

            <div className="mobifone border-padding">
                <img src="https://cdn.tgdd.vn/2020/09/content/2-mobi1x-130x48.png" alt="" />
                <p><b>
                Áp dụng trên toàn quốc: <br />

                1. Đổi sim 3G sang 4G: phí 25.000đ. <br />

                2. Chặn/ mở chiều gọi đi, gọi đến sim đang sử dụng.    <br />
                </b></p>
            
            </div>

            <div className="vinaphone border-padding">
                <img src="https://cdn.tgdd.vn/2020/09/content/3-vina1x-130x48.png" alt="" />
                <p><b>
                Áp dụng trên toàn quốc: <br />

                1. Đổi sim 4G: <br />
                - Miễn phí (nếu khách hàng có nhận được tin nhắn mời thay sim 4G của nhà mạng). <br />
                - Phí 8.500đ (nếu khách hàng không có tin nhắn của nhà mạng). <br />
                - Miễn phí cập nhật thông tin cho sim trả trước. <br />

                2. Đổi sang esim, áp dụng cho sim trả trước (phí 25.000đ/sim). <br />
                </b></p>
            </div>

            <div className="vietnamoile border-padding">
                <img src="https://cdn.tgdd.vn/2020/09/content/4-vietnammobile1x-130x48.png" alt="" />
                <p><b>
                Áp dụng trên toàn quốc <br />
                Đăng ký thông tin chính chủ sim kích hoạt mới tại TGDĐ.    
                </b></p>
            </div>
        </div>
    </div>
  )
}

export default BuyGameCard
