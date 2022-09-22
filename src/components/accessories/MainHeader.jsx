
import SliderBanner from "./SliderBanner"
import GroupCate from "./GroupCate"

import "../../sass/accessories/accessories.scss"
const sliders = [
    {
        id:1,
        title: 'Lorem',
        url: 'https://cdn.tgdd.vn/2022/07/banner/800-200-800x200-6.png'
    
    },
    {
        id:2,
        title: 'Lorem',
        url: 'https://cdn.tgdd.vn/2022/06/banner/800x200-(1)-800x200.png'
    
    },
    {
        id:3,
        title: 'Lorem',
        url: 'https://cdn.tgdd.vn/2022/06/banner/800-200-800x200-18.png'
    
    },
    {
        id:4,
        title: 'Lorem',
        url: 'https://cdn.tgdd.vn/2022/05/banner/800x200-800x200-1.png'
    
    },
    {
        id:5,
        title: 'Lorem',
        url: 'https://cdn.tgdd.vn/2022/07/banner/800-200-800x200-10.png'
    
    },
    {
        id:6,
        title: 'Lorem',
        url: 'https://cdn.tgdd.vn/2022/06/banner/800-200-800x200-28.png'
    
    },
    {
        id:7,
        title: 'Lorem',
        url: 'https://cdn.tgdd.vn/2022/06/banner/800x200-800x200-1.jpg'
    
    }
]

const banners =[
    {
        id:1,
        title:'lorem',
        url:'https://cdn.tgdd.vn/2022/05/banner/sticky-airpod-390-97-390x97.png'
    },
    {
        id:2,
        title:'lorem',
        url:'https://cdn.tgdd.vn/2022/05/banner/stickyJBL-390x97-1.jpg'
    }
]


function MainHeader()
{

    return(
            <div className="mainHeader">
                <div className="accessories-container">
                    <SliderBanner sliders={sliders} banners={banners} slideShow={1} />
                    <GroupCate />
                </div>
            </div>
    )
}

export default MainHeader