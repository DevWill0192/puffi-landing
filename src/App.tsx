import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import InstagramFeed from './components/InstagramFeed'
import Newsletter from './components/Newsletter'
import ProductSection from './components/ProductSection'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <ProductSection idSection="pufi-rain" title="Pufi RAIN" description="Descripción del producto. Este es un texto simulado" imgSrcIcon="https://res.cloudinary.com/dnvy6oyza/image/upload/v1730671315/ku8wutf79v2kxov206wx.jpg" imgSrc="https://res.cloudinary.com/dnvy6oyza/image/upload/v1730671313/newvydl9i94qwuhax0ok.jpg" />
      <ProductSection idSection="pufi-puff" title="Pufi PUFF" description="Descripción del producto. Este es un texto simulado" imgSrcIcon="https://res.cloudinary.com/dnvy6oyza/image/upload/v1730671315/k9r1hy7crojzchesi4dk.jpg" imgSrc="https://res.cloudinary.com/dnvy6oyza/image/upload/v1730671312/gratfhhabchxbqkbchnx.jpg" />
      <ProductSection idSection="pufi-cart" title="Pufi CART" description="Descripción del producto. Este es un texto simulado" imgSrcIcon="https://res.cloudinary.com/dnvy6oyza/image/upload/v1730671314/mva8a3douz0pgbstfhmd.jpg" imgSrc="https://res.cloudinary.com/dnvy6oyza/image/upload/v1730671313/uxpkqpbc8abbskm95fqr.jpg" />
      <ProductSection idSection="pufi-nap" title="Pufi NAP" description="Descripción del producto. Este es un texto simulado" imgSrcIcon="https://res.cloudinary.com/dnvy6oyza/image/upload/v1730671314/k03athb81zr5qrugaodh.jpg" imgSrc="https://res.cloudinary.com/dnvy6oyza/image/upload/v1730671312/kskpj99xyjh7jdl7e5zg.jpg" />
      <InstagramFeed />
     <Newsletter/>
      <Footer />
    </div>
  )
}

export default App
