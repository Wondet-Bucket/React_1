import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Select from 'react-dropdown-select'

const products_list = [ { id: 1, category: "tv", make: "Samsung", model: 'QLED 4K Q80C 65"', price: 1299, images: "src/assets/photo/Bat.png", isSpecialOffer: true, brand: "Samsung" }, { id: 2, category: "tv", make: "LG", model: 'OLED C3 55"', price: 1499, images: "src/assets/photo/Crocodildo.png", brand: "LG" }, { id: 3, category: "tv", make: "Sony", model: 'Bravia XR A80L 65"', price: 1899, images: "src/assets/photo/Giraffe.png", isSpecialOffer: true, brand: "Sony" }, { id: 4, category: "tv", make: "Samsung", model: 'Neo QLED 8K QN900C 75"', price: 3499, images: "https://androidinsider.ru/wp-content/uploads/2020/04/artificial_tiger.jpg", brand: "Samsung" }, { id: 5, category: "tv", make: "TCL", model: '6-Series 4K 55"', price: 649, images:"https://i.pinimg.com/736x/5b/4f/1c/5b4f1c65edf7a4350cfd97b157970b15.jpg" , brand: "TCL" }, { id: 6, category: "tv", make: "Hisense", model: 'U8K Mini-LED 65"', price: 899, images: ["https://images.unsplash.com/photo-1558888401-3cc1de77652d?w=400&q=80","https://images.unsplash.com/photo-1529338215083-dfbce6338219?w=400&q=80","https://images.unsplash.com/photo-1615210230840-69c07c13b4d1?w=400&q=80"], isSpecialOffer: true, brand: "Hisense" }, { id: 7, category: "tv", make: "LG", model: 'NanoCell 75" 4K', price: 799, images: ["https://images.unsplash.com/photo-1593361351718-6b853f7b3431?w=400&q=80"], brand: "LG" }, { id: 8, category: "tv", make: "Sony", model: 'X90L 4K 55"', price: 999, images: ["https://images.unsplash.com/photo-1529338215083-dfbce6338219?w=400&q=80","https://images.unsplash.com/photo-1558888401-3cc1de77652d?w=400&q=80"], brand: "Sony" }, { id: 9, category: "phone", make: "Apple", model: "iPhone 15 Pro Max", price: 1199, images: ["https://images.unsplash.com/photo-1649932542678-c5f6a78ae51a?w=400&q=80","https://images.unsplash.com/photo-1658933161439-bbc61172d86b?w=400&q=80","https://images.unsplash.com/photo-1649932542396-0a7838cd0596?w=400&q=80"], isSpecialOffer: true, brand: "Apple" }, { id: 10, category: "phone", make: "Samsung", model: "Galaxy S24 Ultra", price: 1299, images: ["https://images.unsplash.com/photo-1649932542396-0a7838cd0596?w=400&q=80","https://images.unsplash.com/photo-1658933161439-bbc61172d86b?w=400&q=80"], brand: "Samsung" }, { id: 11, category: "phone", make: "Google", model: "Pixel 8 Pro", price: 999, images: ["https://images.unsplash.com/photo-1658933161439-bbc61172d86b?w=400&q=80"], brand: "Google" }, { id: 12, category: "phone", make: "OnePlus", model: "12 Pro", price: 899, images: ["https://images.unsplash.com/photo-1649932542678-c5f6a78ae51a?w=400&q=80","https://images.unsplash.com/photo-1658933154992-d5375e01c535?w=400&q=80"], isSpecialOffer: true, brand: "OnePlus" }, { id: 13, category: "phone", make: "Apple", model: "iPhone 15", price: 899, images: ["https://images.unsplash.com/photo-1658933154992-d5375e01c535?w=400&q=80","https://images.unsplash.com/photo-1649932542678-c5f6a78ae51a?w=400&q=80","https://images.unsplash.com/photo-1649932542396-0a7838cd0596?w=400&q=80"], brand: "Apple" }, { id: 14, category: "phone", make: "Samsung", model: "Galaxy Z Fold 5", price: 1799, images: ["https://images.unsplash.com/photo-1649932542396-0a7838cd0596?w=400&q=80"], brand: "Samsung" }, { id: 15, category: "phone", make: "Xiaomi", model: "14 Pro", price: 799, images: ["https://images.unsplash.com/photo-1658933161439-bbc61172d86b?w=400&q=80","https://images.unsplash.com/photo-1649932542678-c5f6a78ae51a?w=400&q=80"], brand: "Xiaomi" }, { id: 16, category: "phone", make: "Google", model: "Pixel 8", price: 699, images: ["https://images.unsplash.com/photo-1649932542678-c5f6a78ae51a?w=400&q=80"], isSpecialOffer: true, brand: "Google" }, { id: 17, category: "laptop", make: "Apple", model: 'MacBook Pro 16" M3 Max', price: 3499, images: ["https://images.unsplash.com/photo-1625296277624-dfca5e22a0ee?w=400&q=80","https://images.unsplash.com/photo-1651614422674-1f51818f27b1?w=400&q=80","https://images.unsplash.com/photo-1585645982492-639c028b8a10?w=400&q=80"], isSpecialOffer: true, brand: "Apple" }, { id: 18, category: "laptop", make: "Dell", model: "XPS 15 9530", price: 1899, images: ["https://images.unsplash.com/photo-1651614422674-1f51818f27b1?w=400&q=80","https://images.unsplash.com/photo-1585645982492-639c028b8a10?w=400&q=80"], brand: "Dell" }, { id: 19, category: "laptop", make: "Lenovo", model: "ThinkPad X1 Carbon Gen 11", price: 1699, images: ["https://images.unsplash.com/photo-1585645982492-639c028b8a10?w=400&q=80"], brand: "Lenovo" }, { id: 20, category: "laptop", make: "HP", model: 'Spectre x360 14"', price: 1499, images: ["https://images.unsplash.com/photo-1650735310241-287171e38e5f?w=400&q=80","https://images.unsplash.com/photo-1625296277624-dfca5e22a0ee?w=400&q=80"], brand: "HP" }, { id: 21, category: "laptop", make: "Apple", model: 'MacBook Air 15" M3', price: 1299, images: ["https://images.unsplash.com/photo-1625296277602-a9f0b67b3a99?w=400&q=80","https://images.unsplash.com/photo-1651614422674-1f51818f27b1?w=400&q=80"], isSpecialOffer: true, brand: "Apple" }, { id: 22, category: "laptop", make: "ASUS", model: "ROG Zephyrus G14", price: 1599, images: ["https://images.unsplash.com/photo-1675668409245-955188b96bf6?w=400&q=80","https://images.unsplash.com/photo-1585645982492-639c028b8a10?w=400&q=80","https://images.unsplash.com/photo-1651614422674-1f51818f27b1?w=400&q=80"], brand: "ASUS" }, { id: 23, category: "laptop", make: "Microsoft", model: "Surface Laptop 5", price: 1299, images: ["https://images.unsplash.com/photo-1651614422674-1f51818f27b1?w=400&q=80"], brand: "Microsoft" }, { id: 24, category: "laptop", make: "Acer", model: "Swift X 14", price: 899, images: ["https://images.unsplash.com/photo-1585645982492-639c028b8a10?w=400&q=80","https://images.unsplash.com/photo-1675668409245-955188b96bf6?w=400&q=80"], isSpecialOffer: true, brand: "Acer" }, ];
function Refresh_products()
{
  const values = [{'item':1, 'name':'wbk'}, {'item':2, 'name':'sbr'}];
  return (
     <div className='prod_map'>
      {products_list.map((element) => (
        <div className='prod_card' key={element.id}>
        <img className='product_image' src={element.images}></img >
        <p>{element['make']}</p>
        <h3>{element['model']}</h3>
        <p>${element['price']}</p>
        </div>
      ))}
      </div> 
  );
}
function Card(props)
{
  return(
    <div className="prod_card">
      <div >
        <div >
          <button className="icon"><img></img></button>
        </div>
        <img src={props.products[props.i]['images']}></img>
      </div>
      <div >
        <button></button>
        <p></p>
        <h2 style={{color:'black'}}>{props.name}</h2>
        <p></p>
      </div>
    </div>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header>
      <div className='header'>
        <div className='head_btns'>
          <button><img src="src\assets\header\left_btns\TechStore.png"></img></button>
          <button><img src="src/assets/header/left_btns/Button (2).png"></img></button>
          <button><img src="src/assets/header/left_btns/Button (3).png"></img></button>
          <button><img src="src/assets/header/left_btns/Button (4).png"></img></button>
        </div>
        <div className='head_btns'>
          <button><img src="src/assets/header/right_btns/Button.png"></img></button>
          <button><img src="src/assets/header/right_btns/Button (1).png"></img></button>
        </div>
      </div>
        </header>
    
    <body className='body'>
    <div className="content">
      <div className="hor_container">
        <div className="sidebar">
          <div className='home'>
              <b style={{fontSize:24, color:'black'}}>Filters</b> 
              <div className='home_div'>
                <div className='with_gaps' style={{display:'flex', flexDirection:'column'}}>
                <b style={{color:'black', textAlign:'left'}}>Brand</b>
                <div>
                    <button><img src="src/assets/home/Switcher.png"></img></button>
                </div>
                <p>Price Range</p>
                <div>
                    <button><img src="src/assets/home/Price_range.png"></img></button>
                </div>
                    <button><img src="\src\assets\home\apply_filters.png"></img></button>
              </div>
              <div className="red_message">
                <h3>Special Deal!</h3>
                <p style={{color:'white'}}>Register now to unlock</p>
                <p style={{color:'white'}}>exclusive offers and</p>
                <p style={{color:'white'}}>discounts</p>
                <p style={{color:'white'}}>Offer expires in:</p>
              </div>
              </div>
              </div>
        </div>
        <div className='products_zone'>
            <p>8 products</p>
            <div>
              <Refresh_products/>
            </div>
          <div >
          </div>
        </div>
      </div>
      <footer className="footer">
        <div >
          <div >
            <div >
              <h3>Newsletter</h3>
              <p>Subscribe for exclusive deals</p>
              <div className="containter">
              <input classname="email" type="email" placeholder='Email'></input>
              </div>
            </div>
            <div ></div>
            <div ></div>
            <div ></div>
          </div>
        </div>
      </footer>

    </div>
    </body>
    </>
  )
}

export default App
