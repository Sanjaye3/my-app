import React from 'react'
import "./Home.css";
import Product from './Product';
import Header from './Header';
function Home() {
  return (
    <div className="home">
       
        <div className="home_container">
            <img className="home_image" src="https://m.media-amazon.com/images/I/61pL9eAInEL._SX1500_.jpg" alt="primead"/>  

            <div className="home_row">
            <Product title="iphone 12" price={75000} image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-blue-select-2020?wid=940&hei=1112&fmt=png-alpha&.v=1604343704000" rating={2}/>
            <Product title="Samsung galaxy S22" price={76000} image=" https://m.media-amazon.com/images/I/71PvHfU+pwL._SX679_.jpg" rating={2}/>
            
            </div>

            <div className="home_row">
            <Product title="Samsung Galaxy M32 " price={11999} image="https://m.media-amazon.com/images/I/71F4jU7MRUS._AC_SS450_.jpg" rating={2} />
            <Product title="Samsung Galaxy S20 FE 5G" price={39990} image="  https://cdn.pricebaba.com/prod/images/product/mobile/102911/samsung-galaxy-s20-fe-5g-raw-2644247.jpg" rating={2}/>
            </div>

            <div className="home_row">
            <Product title="Redmi Note 11" price={13499} image=" https://i01.appmifile.com/webfile/globalimg/MandyZhang/K7TAd.png" rating={2} />
            <Product title="Redmi Note 10T 5G" price={12999} image="https://rukminim2.flixcart.com/image/416/416/ktlu9ow0/screen-guard/front-and-back-tempered-glass/i/m/t/a-fb-495-arban-original-imag6x348hmyq3ty.jpeg?q=70" rating={2} />
            </div>
        </div>    
        
    </div>
  )
}

export default Home