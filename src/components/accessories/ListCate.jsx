import React from "react";
import { Link } from "react-router-dom";

const categories = [
    {
        title: 'Sạc dự phòng',
        link:'/sac-dtdd',
        name:'backupCharger',
        url: 'https://cdn.tgdd.vn/Category/57/5-Pinsa%CC%A3cdu%CC%9B%CC%A3pho%CC%80ng-120x120.png'
    },
    {
        title: 'Sạc, cáp',
        link:'/sac-cap',
        name:'chargeCable',
        url: 'https://cdn.tgdd.vn/Category/9518/10-Ca%CC%81psa%CC%A3cchuye%CC%82%CC%89ndo%CC%82%CC%89i-120x120.png'
    },
    {
        title: 'Tai nghe',
        link:'/tai-nghe',
        name:'headphone',
        url: 'https://cdn.tgdd.vn/Category/54/21-Tainghe-120x120.png'
    },
    {
        title: 'Loa',
        link:'/loa-laptop',
        name:'speaker',
        url: 'https://cdn.tgdd.vn/Category/2162/22-Loa2-120x120.png'
    },
    {
        title: 'Thiết bị nhà thông minh',
        link:'/khoa-dien-tu',
        name:'tech',
        url: 'https://cdn.tgdd.vn/Category/9458/thongminh-120x120.png'
    },
    {
        title: 'Camera, webcam',
        name:'camera',
        url: 'https://cdn.tgdd.vn/Category/4728/17-Camerawebcam-120x120.png'
    },
    {
        title: 'Thiết bị mạng',
        name:'wifi',
        url: 'https://cdn.tgdd.vn/Category/4727/16-Thie%CC%82%CC%81tbi%CC%A3ma%CC%A3ng-120x120.png'
    },
    {
        title: 'Ốp lưng, miếng dán',
        link:'/op-lung-flipcover',
        name:'bumper',
        url: 'https://cdn.tgdd.vn/Category/9262/icon-mieng-dan-op-lung-100x100-1.png'
    },
    {
        title: 'Chuột máy tính',
        name:'mouse',
        url: 'https://cdn.tgdd.vn/Category/86/13-Chuo%CC%A3%CC%82tma%CC%81yti%CC%81nh-120x120.png'
    },
    {
        title: 'Bàn phím',
        link:'/chuot-ban-phim',
        name:'keyBoard',
        url: 'https://cdn.tgdd.vn/Category/4547/19-Ba%CC%80nphi%CC%81m-120x120.png'
    },
]


function ListCate()
{

    return(
        <div className="listCate">
            <h2>PHỤ KIỆN NỔI BẬT</h2>
            <div className="wrapper-group-cate">
                {categories.map((cate,index) => (
                    <div className="wrapper"  key={index}>
                        <Link to={`${cate.link}`} >
                            <img src={cate.url} alt={cate.title} className={cate.name} />
                            <p className="content">{cate.title}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}


export default ListCate
