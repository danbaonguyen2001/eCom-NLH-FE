import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Link } from 'react-router-dom'
import "../../assets/css/home/categoryshop.css"
const CategoryShop = () => {
  return (
    <div className='csWrap grid wide'>
        <div className="row cs__title">
            <h1>danh mục nổi bật</h1>
        </div>
        <div className="row cs__content">
            {/* Row 1 */}
            <div className="content__row1 row">
                            <div className='col cate__item'>
                                <Link to="/">
                                    <div className="img-boxcate">
                                        <LazyLoadImage data-src="https://cdn.tgdd.vn//content/Dienthoai-128x129.png" alt="Điện thoại" src="https://cdn.tgdd.vn//content/Dienthoai-128x129.png"/>
                                    </div>
                                    <span>Điện thoại</span>
                                </Link>
                            </div>
                            <div className='col cate__item'>
                                <Link to="/">
                                    <div className="img-boxcate">
                                        <LazyLoadImage data-src="https://cdn.tgdd.vn//content/Laptop-129x129.png" alt="Laptop" src="https://cdn.tgdd.vn//content/Laptop-129x129.png"/>
                                    </div>
                                    <span>Laptop</span>
                                </Link>
                            </div>
                            <div className='col cate__item'>
                                <Link to="/">
                                    <div className="img-boxcate">
                                        <LazyLoadImage data-src="https://cdn.tgdd.vn//content/Tablet-128x129.png" alt="Tablet" src="https://cdn.tgdd.vn//content/Tablet-128x129.png"/>
                                    </div>
                                    <span>Tablet</span>
                                </Link>
                            </div>
                            <div className='col cate__item'>
                                <Link to="/">
                                    <div className="img-boxcate">
                                        <LazyLoadImage data-src="https://cdn.tgdd.vn//content/Donghothongminh-128x129.png" alt="Đồng hồ thông minh" src="https://cdn.tgdd.vn//content/Donghothongminh-128x129.png"/>
                                    </div>
                                    <span>Đồng hồ thông minh</span>
                                </Link>
                            </div>
                            <div className='col cate__item'>
                                <Link to="/">
                                    <div className="img-boxcate">
                                        <LazyLoadImage data-src="https://cdn.tgdd.vn//content/Donghothoitrang-128x129.png" alt="Đồng hồ thời trang" src="https://cdn.tgdd.vn//content/Donghothoitrang-128x129.png"/>
                                    </div>
                                    <span>Đồng hồ thời trang</span>
                                </Link>
                            </div>
                            <div className='col cate__item'>
                                <Link to="/">
                                    <div className="img-boxcate">
                                        <LazyLoadImage data-src="https://cdn.tgdd.vn//content/Thietbimang-128x129.png" alt="Thiết bị mạng" src="https://cdn.tgdd.vn//content/Thietbimang-128x129.png"/>
                                    </div>
                                    <span>Thiết bị mạng</span>
                                </Link>
                            </div>
                            <div className='col cate__item'>
                                <Link to="/">
                                    <div className="img-boxcate">
                                        <LazyLoadImage data-src="https://cdn.tgdd.vn//content/Oplung-128x128.png" alt="Ốp lưng" src="https://cdn.tgdd.vn//content/Oplung-128x128.png"/>
                                    </div>
                                    <span>Ốp lưng</span>
                                </Link>
                            </div>
                            <div className='col cate__item'>
                                <Link to="/">
                                    <div className="img-boxcate">
                                        <LazyLoadImage data-src="https://cdn.tgdd.vn//content/chuot-128x129.png" alt="Chuột máy tính" src="https://cdn.tgdd.vn//content/chuot-128x129.png"/>
                                    </div>
                                    <span>Chuột máy tính</span>
                                </Link>
                            </div>
                            <div className='col cate__item'>
                                <Link to="/">
                                    <div className="img-boxcate">
                                        <LazyLoadImage data-src="https://cdn.tgdd.vn//content/ban-phim-128x129.png" alt="Bàn phím" src="https://cdn.tgdd.vn//content/ban-phim-128x129.png"/>
                                    </div>
                                    <span>Bàn phím</span>
                                </Link>
                            </div>
                            <div className='col cate__item'>
                                <Link to="/">
                                    <div className="img-boxcate">
                                        <LazyLoadImage data-src="https://cdn.tgdd.vn//content/Simthecao-129x129.png" alt="Sim, thẻ cào" src="https://cdn.tgdd.vn//content/Simthecao-129x129.png"/>
                                    </div>
                                    <span>Sim, thẻ cào</span>
                                </Link>
                            </div>
        
            </div>
            {/* Row 2 */}
            <div className="content__row2 row">
                            <div className='col cate__item'>
                                <Link to="/">
                                    <div className="img-boxcate">
                                        <LazyLoadImage data-src="https://cdn.tgdd.vn//content/Loa-128x128.png" alt="Loa" src="https://cdn.tgdd.vn//content/Loa-128x128.png"/>
                                    </div>
                                    <span>Loa</span>
                                </Link>
                            </div>
                            <div className='col cate__item'>
                                <Link to="/">
                                    <div className="img-boxcate">
                                        <LazyLoadImage data-src="https://cdn.tgdd.vn//content/Tainghe-128x129.png" alt="Tai nghe" src="https://cdn.tgdd.vn//content/Tainghe-128x129.png"/>
                                    </div>
                                    <span>Tai nghe</span>
                                </Link>
                            </div>
                            <div className='col cate__item'>
                                <Link to="/">
                                    <div className="img-boxcate">
                                        <LazyLoadImage data-src="https://cdn.tgdd.vn//content/Sacduphong-128x129.png" alt="Sạc dự phòng" src="https://cdn.tgdd.vn//content/Sacduphong-128x129.png"/>
                                    </div>
                                    <span>Sạc dự phòng</span>
                                </Link>
                            </div>
                            <div className='col cate__item'>
                                <Link to="/">
                                    <div className="img-boxcate">
                                        <LazyLoadImage data-src="https://cdn.tgdd.vn//content/Capsac-129x129.png" alt="Cáp sạc" src="https://cdn.tgdd.vn//content/Capsac-129x129.png"/>
                                    </div>
                                    <span>Cáp sạc</span>
                                </Link>
                            </div>
                            <div className='col cate__item'>
                                <Link to="/">
                                    <div className="img-boxcate">
                                        <LazyLoadImage data-src="https://cdn.tgdd.vn//content/Maytinhbo-128x129.png" alt="Máy tính bộ" src="https://cdn.tgdd.vn//content/Maytinhbo-128x129.png"/>
                                    </div>
                                    <span>Máy tính bộ</span>
                                </Link>
                            </div>
                            <div className='col cate__item'>
                                <Link to="/">
                                    <div className="img-boxcate">
                                        <LazyLoadImage data-src="https://cdn.tgdd.vn//content/Mayin-128x129.png" alt="Máy in" src="https://cdn.tgdd.vn//content/Mayin-128x129.png"/>
                                    </div>
                                    <span>Máy in</span>
                                </Link>
                            </div>
                            <div className='col cate__item'>
                                <Link to="/">
                                    <div className="img-boxcate">
                                        <LazyLoadImage data-src="https://cdn.tgdd.vn//content/Manhinhmaytinh-128x129.png" alt="Màn hình máy tính" src="https://cdn.tgdd.vn//content/Manhinhmaytinh-128x129.png"/>
                                    </div>
                                    <span>Màn hình máy tính</span>
                                </Link>
                            </div>
                            <div className='col cate__item'>
                                <Link to="/">
                                    <div className="img-boxcate">
                                        <LazyLoadImage data-src="https://cdn.tgdd.vn//content/Phukiengaming-128x129.png" alt="Phụ kiện gaming" src="https://cdn.tgdd.vn//content/Phukiengaming-128x129.png"/>
                                    </div>
                                    <span>Phụ kiện gaming</span>
                                </Link>
                            </div>
                            <div className='col cate__item'>
                                <Link to="/">
                                    <div className="img-boxcate">
                                        <LazyLoadImage data-src="https://cdn.tgdd.vn//content/Camerawebcam-128x129-1.png" alt="Camera, webcam" src="https://cdn.tgdd.vn//content/Camerawebcam-128x129-1.png"/>
                                    </div>
                                    <span>Camera, webcam</span>
                                </Link>
                            </div>
                            <div className='col cate__item'>
                                <Link to="/">
                                    <div className="img-boxcate">
                                        <LazyLoadImage data-src="https://cdn.tgdd.vn//content/MaychieuTVbox-128x129.png" alt="Thiết bị nhà thông minh" src="https://cdn.tgdd.vn//content/MaychieuTVbox-128x129.png"/>
                                    </div>
                                    <span>Thiết bị nhà thông minh</span>
                                </Link>
                            </div>
            
            </div>

        </div>
    </div>
  )
}

export default CategoryShop