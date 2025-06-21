import { useEffect, useState, useRef } from "react";
import Header from "../../components/Header/Header";
import TemplatePage from "../../components/TemplatePage/TemplatePage";
import templateHomePages from "../../data/template.js";
import releases from "../../data/release.js";
import artists from "../../data/artist.js";
import innerPages from "../../data/innerPages.js";
import woocommerceImages from "../../data/woocommerce.js";
import styles from "./Home.module.css"
const Home = () => {
  const sliderWoocommerce = useRef(null)
  const [widthSlider, setWidthSlider ] = useState(0)
  const [listRelease, setListRelease] = useState([])
  const [typeRelease, setTypeRelease] = useState('release-single-pages')
  useEffect(() => {
    const filterRelease = releases.filter(item => item?.type?.toString() == typeRelease.toString())
    setListRelease(filterRelease)
  },[typeRelease, setTypeRelease])
  const [listArtist, setListArtist] = useState([])
  const [typeArtist, setTypeArtist] = useState('artist-single-pages')
  useEffect(() => {
    const filterArtist = artists.filter(item => item?.type?.toString() == typeArtist.toString())
    setListArtist(filterArtist)
  },[typeArtist, setTypeArtist])
  const preSliderWoocommerce = () => {
    const getWidth = sliderWoocommerce.current.offsetWidth
    setWidthSlider(widthSlider + getWidth)
  }
  const nextSliderWoocommerce = () => {
    const getWidth = sliderWoocommerce.current.offsetWidth
    setWidthSlider(widthSlider - getWidth)
  }
  return (
    <>
    <Header />
    {/* Banner */}
    <div className={`w-full h-screen relative ${styles['banner']}`}>
      <div className="w-full h-screen bg-white/50">
        <div className="absolute top-[30%] px-[2rem] lg:px-[4rem]">
          <h2 className="leckerli-one-regular text-[2.6rem] md:text-[3rem] hidden sm:inline-block">Music WordPress Theme</h2>
          <p className="font-bold uppercase my-[1.7rem] tracking-tight leading-[3.2rem] lg:leading-[4rem] text-[3rem] lg:text-[3.5rem] w-[90%] xl:w-[70%]">Dedicated to bands, labels, festivals, music sotre and more...</p>
          <p className="text-[1.5rem] lg:text-[2rem] uppercase font-bold mb-[3rem]">No coding requried</p>
          <div className={`${styles['button-view']} cursor-pointer overflow-hidden flex justify-center items-center border-black border-[1px] h-[4rem] md:w-[26%] relative`}>
            <p className="uppercase font-bold">View Demos</p>
            <div className="absolute w-full h-full"></div>
          </div>
        </div>
      </div>
    </div>
    {/* Templates */}
    <div className="px-[2rem] mt-[9rem] md:px-[4rem]">
      <h3 className="leckerli-one-regular font-extrabold text-[5rem] text-center text-[#b2b2b2]">15 Templates</h3>
      <p className="text-[2.5rem] font-bold uppercase text-center">Home Pages</p>
      <ul className="grid mt-[6rem] md:grid-cols-3 gap-[3rem]">
        {templateHomePages && templateHomePages.map((template) => (
          <TemplatePage key={template.id} template={template} />
        ))}
      </ul>
    </div>
    {/* Social Network */}
    <div className="relative w-full h-screen mt-[6rem]">
      <video className="absolute top-0 left-0 w-full h-full z-0 object-fill" autoPlay muted loop>
        <source src="https://preview.wolfthemes.store/app/uploads/sites/31/2019/12/People-Watching-Concert-FREE-STOCK-FOOTAGE-1080p-FULL-HD.mp4" type="video/mp4" />
      </video>
      <div className="absolute w-full h-full bg-black/85 z-0">
        <h3 className="leckerli-one-regular font-extrabold text-[3rem] text-center text-[#b2b2b2] mt-[6%]">Social Integration</h3>
        <p className="text-[1.5rem] font-bold uppercase text-center text-white">Social Network & Music Platform Oriented</p>
        <p className="text-center py-[4rem] text-[1rem] px-[5%] text-white w-[100%] md:w-[80%] mx-auto">Embed your music and social feeds seamlessly with Herion. Display your media and content directly from Spotify, YouTube, Instagram, Bandsintown, Twitter and more…</p>
          <ul className="flex justify-center flex-wrap my-[4rem] text-[3rem] gap-[6rem] w-[80%] md:text-[4rem] md:w-[70%] mx-auto">
          <li><a href="#" title="spotify" className="text-white"><i className="fa-brands fa-spotify"></i></a></li>
          <li><a href="#" title="youtube" className="text-white"><i className="fa-brands fa-youtube"></i></a></li>
          <li><a href="#" title="instagram" className="text-white"><i className="fa-brands fa-instagram"></i></a></li>
          <li><a href="#" title="bandsintown" className="text-white"><i className="fa-brands fa-spotify"></i></a></li>
          <li><a href="#" title="twitter" className="text-white"><i className="fa-brands fa-x-twitter"></i></a></li>
          <li><a href="#" title="facebook" className="text-white"><i className="fa-brands fa-facebook-f"></i></a></li>
          <li><a href="#" title="mailchimp" className="text-white"><i className="fa-brands fa-mailchimp"></i></a></li>
        </ul>
        <p className="text-white text-center my-[7rem] text-[1.2rem]">and more...</p>
      </div>
    </div>
    {/* Discography */}
    <div className="px-[2rem] mt-[9rem] md:px-[4rem]">
      <h3 className="leckerli-one-regular font-extrabold text-[5rem] text-center text-[#b2b2b2]">Discography</h3>
      <p className="text-[2.5rem] font-bold uppercase text-center">Release Pages</p>
      <p className="text-[#b2b2b2] text-center py-[4rem] text-[1.5rem] px-[10%]">Single release pages don’t have to be boring and all the same! You can use a different layout for each release, and use the page builder template system if you want all release pages with the same custom layout.</p>
      <div className="w-full border-b-[1px] border-[#b2b2b2] flex justify-center">
        <div className={`cursor-pointer text-[1rem] font-bold uppercase py-[1.5rem] px-[2.4rem] ${typeRelease === 'release-single-pages' ? 'border-b-4' : ''}`}
          name='release-single-pages'
          onClick={(e) => setTypeRelease('release-single-pages')}
        >
          Release Single Pages
        </div>
        <div className={`cursor-pointer text-[1rem] font-bold uppercase py-[1.5rem] px-[2.4rem] ${typeRelease === 'release-listing' ? 'border-b-4' : ''}`}
          name='release-listing'
          onClick={(e) => setTypeRelease('release-listing')}
          >
          Release Listing
        </div>
      </div>
      <ul className="grid mt-[6rem] md:grid-cols-3 gap-[3rem]">
        {listRelease && listRelease.map((template) => (
          <TemplatePage key={template.id} template={template} />
        ))}
      </ul>
      <p className="text-[#b2b2b2] text-center my-[5rem] text-[1.2rem]">and more...</p>
    </div>
    {/* Demo Import */}
    <div className="w-full h-auto bg-[#1d1d1d] px-[2rem] py-[4rem] md:px-[4rem] flex justify-between flex-wrap text-white">
        <div className="w-[100%] md:w-[45%] flex flex-col justify-center">
          <h3 className="leckerli-one-regular text-left font-extrabold text-[4rem] text-[#b2b2b2]">Demo Import</h3>
          <p className="text-white text-left text-[2rem] font-bold uppercase ">One-Click Demo Install</p>
          <p className="text-white text-left py-[4rem] text-[1rem]">Herion includes a One-Click Demo Importer, to allow you to import the demo content easily. It is the cool way to set up your theme in a couple of minutes from this starting point.</p>
          <div className="cursor-pointer w-full bg-[#ee2851] uppercase text-white text-center h-[4.2rem] font-bold text-[0.8rem] flex items-center justify-center md:w-[50%] hover:bg-white hover:text-black">
            get your copy
          </div>
        </div>
        <div className="w-[100%] md:w-[50%] flex flex-col justify-center gap-[5rem] mt-[5rem] md:mt-0 md:pl-[5rem]">
          <div className="relative w-[6rem] h-[6rem] rounded-full border-red-500 border-[1.4px] flex justify-center items-center">
            <span className="text-[2.5rem]"><i className="fa-solid fa-computer-mouse"></i></span>
            <span className="uppercase font-bold absolute top-1/2  -right-[23rem] -translate-y-1/2 text-[0.8rem] w-[20rem]">install herion</span>
            <div className="w-[5rem] h-[1.4px] absolute rotate-90 bg-white -bottom-[2.6rem]"></div>
          </div>
          <div className="relative w-[6rem] h-[6rem] rounded-full border-red-500 border-[1.4px] flex justify-center items-center">
            <span className="text-[2.5rem]"><i className="fa-solid fa-download"></i></span>
            <span className="uppercase font-bold absolute top-1/2  -right-[23rem] -translate-y-1/2 text-[0.8rem] w-[20rem]">import demo content</span>
            <div className="w-[5rem] h-[1.4px] absolute rotate-90 bg-white -bottom-[2.6rem]"></div>
          </div>
          <div className="relative w-[6rem] h-[6rem] rounded-full border-red-500 border-[1.4px] flex justify-center items-center">
            <span className="text-[2.5rem]"><i className="fa-solid fa-heart"></i></span>
            <span className="uppercase font-bold absolute top-1/2  -right-[23rem] -translate-y-1/2 text-[0.8rem] w-[20rem]">have fun</span>
          </div>
        </div>
    </div>
    {/* Artist Pages */}
    <div className="px-[2rem] mt-[9rem] md:px-[4rem]">
      <h3 className="leckerli-one-regular font-extrabold text-[5rem] text-center text-[#b2b2b2]">Artist Pages</h3>
      <p className="text-[2.5rem] font-bold uppercase text-center">Simple or Custom Layouts</p>
      <p className="text-[#b2b2b2] text-center py-[4rem] text-[1.5rem] px-[5%] mx-auto">Herion can be used for your record label website. You can create an unlimited number of pages for each artist and choose between simple default layouts, automatically generated from the release, videos and events artist category, or create a custom page. It’s all up-to-you!</p>
      <div className="w-full border-b-[1px] border-[#b2b2b2] flex justify-center">
        <div className={`cursor-pointer text-[1rem] font-bold uppercase py-[1.5rem] px-[2.4rem] ${typeArtist === 'artist-single-pages' ? 'border-b-4' : ''}`}
          name='artist-single-pages'
          onClick={() => setTypeArtist('artist-single-pages')}
        >
          Artist Single Pages
        </div>
        <div className={`cursor-pointer text-[1rem] font-bold uppercase py-[1.5rem] px-[2.4rem] ${typeArtist === 'artist-listing' ? 'border-b-4' : ''}`}
          name='artist-listing'
          onClick={() => setTypeArtist('artist-listing')}
          >
          Artist Listing
        </div>
      </div>
      <ul className="grid mt-[6rem] md:grid-cols-3 gap-[3rem]">
        {listArtist && listArtist.map((template) => (
          <TemplatePage key={template.id} template={template} />
        ))}
      </ul>
      <p className="text-[#b2b2b2] text-center my-[5rem] text-[1.2rem]">and more...</p>
    </div>
    {/* Easy to use - no code */}
    <div className="w-full h-auto bg-[#1d1d1d] px-[2rem] py-[4rem] md:px-[4rem] flex justify-between flex-wrap text-white">
        <div className="w-[100%] md:w-[50%] flex justify-center items-center">
          <img src="./images/easy-use.png" />
        </div>
        <div className="w-[100%] md:w-[45%] flex flex-col justify-center mt-[5rem] md:mt-0 md:pl-[5rem]">
          <h3 className="leckerli-one-regular text-left font-extrabold text-[4rem] text-[#b2b2b2]">Easy To Use</h3>
          <p className="text-white text-left text-[2.5rem] font-bold uppercase ">No Coding Required</p>
          <p className="text-white text-left py-[4rem] text-[1.1rem]">Herion comes with an advanced drag and drop page builder to help you create your website easily and quickly.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[5rem]">
            <div className="">
              <div className="flex">
                <p className="font-extrabold text-[5rem]">200</p>
                <p className="flex items-center font-extrabold text-[3rem] text-red-500 ml-[0.5rem]"><i className="fa-solid fa-plus"></i></p>
              </div>
              <p className="uppercase font-bold text-[1.3rem]">demo layouts</p>
            </div>
            <div className="">
              <div className="flex">
                <p className="font-extrabold text-[5rem]">110</p>
                <p className="flex items-center font-extrabold text-[3rem] text-red-500 ml-[0.5rem]"><i className="fa-solid fa-plus"></i></p>
              </div>
              <p className="uppercase font-bold text-[1.3rem]">content elements</p>
            </div>
          </div>
        </div>
    </div>
    {/* Woocommerce Shop */}
    <div className="w-full h-auto py-[4rem] md:px-[4rem]">
      <h3 className="leckerli-one-regular text-center font-extrabold text-[3.5rem] md:text-[4rem] text-[#b2b2b2]">Sell Your Merch</h3>
      <p className="text-center text-[2rem] md:text-[2.5rem] font-bold uppercase ">WooCommerce Shop</p>
      <p className="text-center py-[4rem] text-[0.8rem] md:text-[1.1rem] text-[#b2b2b2]">Sell your merch online using the most powerful and secure e-commerce WordPress theme: WooCommerce. Herion is built to integrates WooCommerce smoothly in its design.</p>
      <div className="relative w-full px-[2rem] overflow-hidden">
        <div ref={sliderWoocommerce} 
          style={{ transform: `translateX(${widthSlider}px)`, transition: 'transform 0.3s ease' }}
          className="relative duration-75 ease-in-out transition-transform flex flex-nowrap w-full px-[1rem] mx-auto gap-x-[1rem] md:gap-x-[2.5rem]">
          {woocommerceImages && woocommerceImages.map((image, index) => (
            <img className="w-[50%] h-auto md:w-[31%] shadow-2xl" key={index} src={image}/>
          ))}
        </div>
        <div 
          onClick={preSliderWoocommerce}
          className={`${styles['button-left']} absolute top-1/2 left-[2rem] -translate-y-1/2 cursor-pointer h-[4rem] flex justify-center items-center`}>
          <i className="fa-solid fa-angle-left"></i>
          <div className="w-[4rem] md:w-[6rem] h-[2px] bg-black absolute top-1/2 left-[0.2rem] -translate-y-1/2"></div>
          <div className={`${styles['button-left-hover']} rounded-full border-[2px] border-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}></div>
        </div>
        <div 
          onClick={nextSliderWoocommerce}
          className={`${styles['button-right']} absolute top-1/2 right-[2rem] -translate-y-1/2 cursor-pointer h-[4rem] flex justify-center items-center`}>
          <i className="fa-solid fa-angle-right"></i>
          <div className="w-[4rem] md:w-[6rem] h-[2px] bg-black absolute top-1/2 right-[0.1rem] -translate-y-1/2"></div>
          <div className={`${styles['button-right-hover']} rounded-full border-[2px] border-black absolute top-1/2 -translate-y-1/2`}></div>
        </div>
      </div>
    </div>
    {/* Inner Pages */}
    <div className="px-[2rem] mt-[9rem] md:px-[4rem]">
      <h3 className="leckerli-one-regular font-extrabold text-[5rem] text-center text-[#b2b2b2]">9 Templates</h3>
      <p className="text-[2.5rem] font-bold uppercase text-center">inner pages</p>
      <p className="text-[#b2b2b2] text-center py-[4rem] text-[1.5rem] px-[10%]">We also created pre-made inner page layouts to make your life easier and allows you to put your site online as quickly as possible.</p>
      <ul className="grid mt-[6rem] md:grid-cols-3 gap-[3rem]">
        {innerPages && innerPages.map((template) => (
          <TemplatePage key={template.id} template={template} />
        ))}
      </ul>
      <p className="text-[#b2b2b2] text-center my-[5rem] text-[1.2rem]">and more...</p>
    </div>
    </>   
    
  );
};

export default Home;
