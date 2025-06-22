import { useEffect, useLayoutEffect, useState, useRef } from "react";
import { motion, scale } from "motion/react";
import {
  slideDown,
  slideUp,
  slideLeft,
  slideRight,
  showOut,
  aniItemByItem,
  scaleOut,
  scaleDown,
} from "../../framer-motion/motionPreset.js";

import Header from "../../components/Header/Header";
import TemplatePage from "../../components/TemplatePage/TemplatePage";

import templateHomePages from "../../data/template.js";
import releases from "../../data/release.js";
import artists from "../../data/artist.js";
import innerPages from "../../data/innerPages.js";
import woocommerceImages from "../../data/woocommerce.js";
import musicThemes from "../../data/musicTheme.js";
import moneyBenefits from "../../data/saveMoney.js";
import features from "../../data/feature.js";

import styles from "./Home.module.css";
const lengthDots = 3;
const countDemo = 200;
const countContentElements = 110;
const Home = () => {
  const sliderWoocommerce = useRef(null);
  const imageSliderWoocommerce = useRef(null);
  const [widthSlider, setWidthSlider] = useState(0);
  const [listRelease, setListRelease] = useState([]);
  const [typeRelease, setTypeRelease] = useState("release-single-pages");
  const [indexMusicThemeReviews, setIndexMusicThemeReviews] = useState(0);
  const [currentIndexImages, setCurrentIndexImages] = useState(1)
  const [countDemoState, setCountDemoState] = useState(0);
  const [countContentElementsState, setCountContentElementsState] = useState(0);
  const [listArtist, setListArtist] = useState([]);
  const [typeArtist, setTypeArtist] = useState("artist-single-pages");
  useEffect(() => {
    const filterRelease = releases.filter(
      (item) => item?.type?.toString() == typeRelease.toString()
    );
    setListRelease(filterRelease);
  }, [typeRelease, setTypeRelease]);
  useEffect(() => {
    const filterArtist = artists.filter(
      (item) => item?.type?.toString() == typeArtist.toString()
    );
    setListArtist(filterArtist);
  }, [typeArtist, setTypeArtist]);
  //Animation count up
  useEffect(() => {
    const obsever = new IntersectionObserver((entries) => {
      entries.forEach((el) => {
        if (el.isIntersecting) {
          const intervalCountDemo = () => {
            setInterval(() => {
              setCountDemoState((prev) => {
                if (prev >= countDemo) {
                  clearInterval(intervalCountDemo);
                  return prev;
                }
                return prev + 1;
              });
            }, 120);
          };
          const intervalCountContent = () => {
            setInterval(() => {
              setCountContentElementsState((prev) => {
                if (prev >= countContentElements) {
                  clearInterval(intervalCountContent);
                  return prev;
                }
                return prev + 1;
              });
            }, 120);
          };
          intervalCountDemo();
          intervalCountContent();
        }
      });
    });
    const elementsCount = document.querySelectorAll(".ani-count-up");
    elementsCount.forEach((el) => obsever.observe(el));
    return () => elementsCount.forEach((el) => obsever.unobserve(el));
  }, [countDemoState, countContentElementsState]);
  useLayoutEffect(() => {
    requestAnimationFrame(() => {
    if (imageSliderWoocommerce.current) {
      setWidthSlider(imageSliderWoocommerce.current.offsetWidth);
    }
  });
}, []);
  const handlePreSliderWoocommerce = () => {
    setCurrentIndexImages(prev => {
      if(prev - 1 < 0){
        return woocommerceImages.length - 3
      }
      return prev - 1
    })
  };
  const handleNextSliderWoocommerce = () => {
    setCurrentIndexImages(prev => {
      if(prev + 1 > woocommerceImages.length - 1){
        return 2
      }
      return prev + 1
    })
  };
  const handlePrevMusicThemeReviews = () => {
    if (indexMusicThemeReviews - 1 < 0) {
      setIndexMusicThemeReviews(lengthDots);
    }
    setIndexMusicThemeReviews((prev) => prev - 1);
  };
  const handleNextvMusicThemeReviews = () => {
    if (indexMusicThemeReviews + 1 >= lengthDots) {
      setIndexMusicThemeReviews(-1);
    }
    setIndexMusicThemeReviews((prev) => prev + 1);
  };
  return (
    <>
      <Header />
      {/* Banner */}
      <div className={`w-full h-screen relative ${styles["banner"]}`}>
        <div className="w-full h-screen bg-white/50">
          <div className="absolute top-[30%] px-[2rem] lg:px-[4rem]">
            <motion.h2
              variants={slideLeft}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: 2, duration: 1, type: "easeIn" }}
              className="leckerli-one-regular text-[2.6rem] md:text-[3rem] hidden sm:inline-block"
            >
              Music WordPress Theme
            </motion.h2>
            <motion.p
              variants={slideLeft}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: 2.3, duration: 1, type: "easeIn" }}
              className="font-bold uppercase my-[1.7rem] tracking-tight leading-[3.2rem] lg:leading-[4rem] text-[2rem] lg:text-[3.5rem] w-[90%] xl:w-[70%]"
            >
              Dedicated to bands, labels, festivals, music sotre and more...
            </motion.p>
            <motion.p
              variants={slideUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: 1.5, duration: 1, type: "easeIn" }}
              className="text-[1.2rem] lg:text-[1.5rem] uppercase font-bold mb-[3rem]"
            >
              No coding requried
            </motion.p>
            <motion.div
              variants={slideUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: 2, duration: 1, type: "easeIn" }}
              className={`${styles["button-view"]} cursor-pointer overflow-hidden flex justify-center items-center border-black border-[1px] h-[4rem] md:w-[26%] relative`}
            >
              <p className="uppercase font-bold">View Demos</p>
              <div className="absolute w-full h-full"></div>
            </motion.div>
          </div>
        </div>
      </div>
      {/* Templates */}
      <div className="px-[2rem] mt-[9rem] md:px-[4rem]">
        <motion.h3
          variants={showOut}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 1, type: "easeIn" }}
          className="leckerli-one-regular font-extrabold text-[3.5rem] text-center text-[#b2b2b2] md:text-[4rem]"
        >
          15 Templates
        </motion.h3>
        <motion.p
          variants={slideUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 1, type: "easeIn" }}
          className="text-[2rem] font-bold uppercase text-center md:text-[2.5rem]"
        >
          Home Pages
        </motion.p>
        <motion.ul
          variants={aniItemByItem}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid mt-[6rem] md:grid-cols-3 gap-[3rem]"
        >
          {templateHomePages &&
            templateHomePages.map((template) => (
              <TemplatePage key={template.id} template={template} />
            ))}
        </motion.ul>
      </div>
      {/* Social Network */}
      <div id="dark-section" className="relative w-full h-screen mt-[6rem]">
        <video
          className="absolute top-0 left-0 w-full h-full z-0 object-fill"
          autoPlay
          muted
          loop
        >
          <source
            src="https://preview.wolfthemes.store/app/uploads/sites/31/2019/12/People-Watching-Concert-FREE-STOCK-FOOTAGE-1080p-FULL-HD.mp4"
            type="video/mp4"
            loading="lazy"
          />
        </video>
        <div className="absolute w-full h-full bg-black/85 z-0">
          <motion.h3
            variants={showOut}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ duration: 1, type: "easeIn" }}
            className="leckerli-one-regular font-extrabold text-[2.7rem] text-center text-[#b2b2b2] mt-[6%] px-[2%] lg:text-[4rem]"
          >
            Social Integration
          </motion.h3>
          <motion.p
            variants={slideUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ duration: 1, type: "easeIn" }}
            className="px-[1rem] text-[1.3rem] font-bold uppercase text-center text-white lg:text-[2rem]"
          >
            Social Network & Music Platform Oriented
          </motion.p>
          <motion.p
            variants={showOut}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 1, type: "easeIn" }}
            className="text-center py-[2rem] text-[1rem] px-[2%] text-white w-[100%] sm:py-[4rem] md:w-[90%] mx-auto"
          >
            Embed your music and social feeds seamlessly with Herion. Display
            your media and content directly from Spotify, YouTube, Instagram,
            Bandsintown, Twitter and more…
          </motion.p>
          <motion.ul
            variants={aniItemByItem}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex justify-center flex-wrap text-[3rem] gap-[2rem] mb-[3rem] w-[80%] sm:gap-[4rem] md:text-[4rem] md:w-[70%] mx-auto"
          >
            <motion.li
              variants={scaleOut}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 1, type: "easeIn" }}
            >
              <a href="#" title="spotify" className="text-white">
                <i className="fa-brands fa-spotify"></i>
              </a>
            </motion.li>
            <motion.li
              variants={scaleOut}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 1, type: "easeIn" }}
            >
              <a href="#" title="youtube" className="text-white">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </motion.li>
            <motion.li
              variants={scaleOut}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 1, type: "easeIn" }}
            >
              <a href="#" title="instagram" className="text-white">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </motion.li>
            <motion.li
              variants={scaleOut}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 1, type: "easeIn" }}
            >
              <a href="#" title="bandsintown" className="text-white">
                <i className="fa-brands fa-spotify"></i>
              </a>
            </motion.li>
            <motion.li
              variants={scaleOut}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: 0.9, duration: 1, type: "easeIn" }}
            >
              <a href="#" title="twitter" className="text-white">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
            </motion.li>
            <motion.li
              variants={scaleOut}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: 1.1, duration: 1, type: "easeIn" }}
            >
              <a href="#" title="facebook" className="text-white">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </motion.li>
            <motion.li
              variants={scaleOut}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: 1.3, duration: 1, type: "easeIn" }}
            >
              <a href="#" title="mailchimp" className="text-white">
                <i className="fa-brands fa-mailchimp"></i>
              </a>
            </motion.li>
          </motion.ul>
          <p className="text-white text-center text-[1.2rem]">
            and more...
          </p>
        </div>
      </div>
      {/* Discography */}
      <div className="px-[2rem] mt-[9rem] md:px-[4rem]">
        <h3 className="leckerli-one-regular font-extrabold text-[3rem] text-center text-[#b2b2b2] md:text-[4rem]">
          Discography
        </h3>
        <p className="text-[1.5rem] font-bold uppercase text-center md:text-[2.5rem]">
          Release Pages
        </p>
        <p className="text-[#b2b2b2] text-center py-[4rem] text-[1rem] px-[10%] md:text-[1.5rem]">
          Single release pages don’t have to be boring and all the same! You can
          use a different layout for each release, and use the page builder
          template system if you want all release pages with the same custom
          layout.
        </p>
        <div className="w-full border-b-[1px] border-[#b2b2b2] flex justify-center">
          <div
            className={`cursor-pointer text-[1rem] font-bold uppercase py-[1.5rem] px-[2.4rem] ${
              typeRelease === "release-single-pages" ? "border-b-4" : ""
            }`}
            name="release-single-pages"
            onClick={(e) => setTypeRelease("release-single-pages")}
          >
            Release Single Pages
          </div>
          <div
            className={`cursor-pointer text-[1rem] font-bold uppercase py-[1.5rem] px-[2.4rem] ${
              typeRelease === "release-listing" ? "border-b-4" : ""
            }`}
            name="release-listing"
            onClick={(e) => setTypeRelease("release-listing")}
          >
            Release Listing
          </div>
        </div>
        <ul className="grid mt-[6rem] md:grid-cols-3 gap-[3rem]">
          {listRelease &&
            listRelease.map((template) => (
              <TemplatePage key={template.id} template={template} />
            ))}
        </ul>
        <p className="text-[#b2b2b2] text-center my-[5rem] text-[1.2rem]">
          and more...
        </p>
      </div>
      {/* Demo Import */}
      <div
        id="dark-section"
        className="w-full h-auto bg-[#1d1d1d] px-[2rem] py-[4rem] md:px-[4rem] flex justify-between flex-wrap text-white"
      >
        <div className="w-full md:w-[45%] flex flex-col justify-center">
          <h3 className="leckerli-one-regular text-left font-extrabold text-[3.5rem] text-[#b2b2b2] md:text-[4rem]">
            Demo Import
          </h3>
          <p className="text-white text-left text-[1.5rem] font-bold uppercase md:text-[2.5rem]">
            One-Click Demo Install
          </p>
          <p className="text-white text-left py-[4rem] text-[1rem] md:text-[1.5rem]">
            Herion includes a One-Click Demo Importer, to allow you to import
            the demo content easily. It is the cool way to set up your theme in
            a couple of minutes from this starting point.
          </p>
          <motion.div
            variants={slideUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1, type: "easeIn" }}
            className="cursor-pointer w-full bg-[#ee2851] uppercase text-white text-center h-[4.2rem] font-bold text-[0.8rem] flex items-center justify-center md:w-[50%] hover:bg-white hover:text-black"
          >
            get your copy
          </motion.div>
        </div>
        <div className="w-full md:w-[50%] flex flex-col justify-center gap-[5rem] mt-[5rem] md:mt-0 md:pl-[5rem]">
          <div className="relative w-[6rem] h-[6rem] rounded-full border-red-500 border-[1.4px] flex justify-center items-center">
            <span className="text-[2.5rem]">
              <i className="fa-solid fa-computer-mouse"></i>
            </span>
            <span className="uppercase font-bold absolute top-1/2  -right-[8rem] -translate-y-1/2 w-[5rem] whitespace-nowrap text-[0.8rem]">
              install herion
            </span>
            <div className="w-[5rem] h-[1.4px] absolute rotate-90 bg-white -bottom-[2.6rem]"></div>
          </div>
          <div className="relative w-[6rem] h-[6rem] rounded-full border-red-500 border-[1.4px] flex justify-center items-center">
            <span className="text-[2.5rem]">
              <i className="fa-solid fa-download"></i>
            </span>
            <span className="uppercase font-bold absolute top-1/2  -right-[8rem] -translate-y-1/2 w-[5rem] whitespace-nowrap text-[0.8rem]">
              import demo content
            </span>
            <div className="w-[5rem] h-[1.4px] absolute rotate-90 bg-white -bottom-[2.6rem]"></div>
          </div>
          <div className="relative w-[6rem] h-[6rem] rounded-full border-red-500 border-[1.4px] flex justify-center items-center">
            <span className="text-[2.5rem]">
              <i className="fa-solid fa-heart"></i>
            </span>
            <span className="uppercase font-bold absolute top-1/2  -right-[8rem] -translate-y-1/2 w-[5rem] whitespace-nowrap text-[0.8rem]">
              have fun
            </span>
          </div>
        </div>
      </div>
      {/* Artist Pages */}
      <div className="px-[2rem] mt-[9rem] md:px-[4rem]">
        <h3 className="leckerli-one-regular font-extrabold text-[3rem] text-center text-[#b2b2b2] md:text-[4rem]">
          Artist Pages
        </h3>
        <p className="text-[1.5rem] font-bold uppercase text-center md:text-[2.5rem]">
          Simple or Custom Layouts
        </p>
        <p className="text-[#b2b2b2] text-center py-[4rem] text-[1rem] px-[5%] mx-auto md:text-[1.5rem]">
          Herion can be used for your record label website. You can create an
          unlimited number of pages for each artist and choose between simple
          default layouts, automatically generated from the release, videos and
          events artist category, or create a custom page. It’s all up-to-you!
        </p>
        <div className="w-full border-b-[1px] border-[#b2b2b2] flex justify-center">
          <div
            className={`cursor-pointer text-[1rem] font-bold uppercase py-[1.5rem] px-[2.4rem] ${
              typeArtist === "artist-single-pages" ? "border-b-4" : ""
            }`}
            name="artist-single-pages"
            onClick={() => setTypeArtist("artist-single-pages")}
          >
            Artist Single Pages
          </div>
          <div
            className={`cursor-pointer text-[1rem] font-bold uppercase py-[1.5rem] px-[2.4rem] ${
              typeArtist === "artist-listing" ? "border-b-4" : ""
            }`}
            name="artist-listing"
            onClick={() => setTypeArtist("artist-listing")}
          >
            Artist Listing
          </div>
        </div>
        <ul className="grid mt-[6rem] md:grid-cols-3 gap-[3rem]">
          {listArtist &&
            listArtist.map((template) => (
              <TemplatePage key={template.id} template={template} />
            ))}
        </ul>
        <p className="text-[#b2b2b2] text-center my-[5rem] text-[1.2rem]">
          and more...
        </p>
      </div>
      {/* Easy to use - no code */}
      <div
        id="dark-section"
        className="w-full h-auto bg-[#1d1d1d] px-[2rem] py-[4rem] md:px-[4rem] flex justify-between flex-wrap text-white"
      >
        <motion.div
          variants={slideRight}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: "easeIn" }}
          className="w-[100%] md:w-[50%] flex justify-center items-center"
        >
          <img src="./images/easy-use.png" />
        </motion.div>
        <div className="w-[100%] md:w-[45%] flex flex-col justify-center mt-[5rem] md:mt-0 md:pl-[3rem]">
          <h3 className="leckerli-one-regular text-left font-extrabold text-[4rem] text-[#b2b2b2]">
            Easy To Use
          </h3>
          <p className="text-white text-left text-[1.5rem] font-bold uppercase">
            No Coding Required
          </p>
          <p className="text-white text-left py-[4rem] text-[1.1rem]">
            Herion comes with an advanced drag and drop page builder to help you
            create your website easily and quickly.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[5rem]">
            <div className="">
              <div className="flex">
                <p className="ani-count-up font-extrabold text-[5rem]">
                  {countDemoState}
                </p>
                <p className="flex items-center font-extrabold text-[3rem] text-red-500 ml-[0.5rem]">
                  <i className="fa-solid fa-plus"></i>
                </p>
              </div>
              <p className="uppercase font-bold text-[1.3rem]">demo layouts</p>
            </div>
            <div className="">
              <div className="flex">
                <p className="ani-count-up font-extrabold text-[5rem]">
                  {countContentElementsState}
                </p>
                <p className="flex items-center font-extrabold text-[3rem] text-red-500 ml-[0.5rem]">
                  <i className="fa-solid fa-plus"></i>
                </p>
              </div>
              <p className="uppercase font-bold text-[1.3rem]">
                content elements
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Woocommerce Shop */}
      <div className="w-full h-auto py-[4rem] md:px-[4rem] overflow-hidden">
        <h3 className="leckerli-one-regular text-center font-extrabold text-[3rem] md:text-[4rem] text-[#b2b2b2]">
          Sell Your Merch
        </h3>
        <p className="text-center text-[1.5rem] md:text-[2.5rem] font-bold uppercase ">
          WooCommerce Shop
        </p>
        <p className="text-center py-[4rem] text-[1rem] md:text-[1.1rem] text-[#b2b2b2] w-[90%] md:w-[70%] mx-auto">
          Sell your merch online using the most powerful and secure e-commerce
          WordPress theme: WooCommerce. Herion is built to integrates
          WooCommerce smoothly in its design.
        </p>
        <div className="relative w-full">
          <div
            ref={sliderWoocommerce}
            style={{
              transform: `translateX(-${currentIndexImages * widthSlider + 2 * 16}px)`,
              transition: "transform 0.5s ease"
            }}
            className="relative duration-75 ease-in-out transition-transform flex flex-nowrap w-full mx-auto gap-x-[2rem]"
          >
            <img
              className="w-[49%] h-auto md:w-[30.8%] shadow-2xl hover:-translate-y-[0.5rem] duration-200 ease-linear"
              src={woocommerceImages[woocommerceImages.length - 1]}
              loading="lazy"
            />
            {woocommerceImages &&
              woocommerceImages.map((image, index) => (
                <img
                  ref={imageSliderWoocommerce}
                  className="w-[49%] h-auto md:w-[30.8%] shadow-2xl hover:-translate-y-[0.5rem] duration-200 ease-linear"
                  key={index}
                  src={image}
                  loading="lazy"
                />
              ))}
              <img
              className="w-[49%] h-auto md:w-[30.8%] shadow-2xl hover:-translate-y-[0.5rem] duration-200 ease-linear"
              src={woocommerceImages[0]}
              loading="lazy"
            />
          </div>
          <div
            onClick={handlePreSliderWoocommerce}
            className={`${styles["button-left"]} absolute top-1/2 left-[2rem] -translate-y-1/2 cursor-pointer h-[4rem] flex justify-center items-center hover:-translate-x-[0.5rem] duration-100 ease-linear`}
          >
            <i className="fa-solid fa-angle-left"></i>
            <div className="w-[4rem] md:w-[6rem] h-[2px] bg-black absolute top-1/2 left-[0.2rem] -translate-y-1/2"></div>
            <div
              className={`${styles["button-left-hover"]} rounded-full border-[2px] border-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
            ></div>
          </div>
          <div
            onClick={handleNextSliderWoocommerce}
            className={`${styles["button-right"]} absolute top-1/2 right-[2rem] -translate-y-1/2 cursor-pointer h-[4rem] flex justify-center items-center hover:translate-x-[0.5rem] duration-100 ease-linear`}
          >
            <i className="fa-solid fa-angle-right"></i>
            <div className="w-[4rem] md:w-[6rem] h-[2px] bg-black absolute top-1/2 right-[0.1rem] -translate-y-1/2"></div>
            <div
              className={`${styles["button-right-hover"]} rounded-full border-[2px] border-black absolute top-1/2 -translate-y-1/2`}
            ></div>
          </div>
        </div>
      </div>
      {/* Inner Pages */}
      <div className="px-[2rem] mt-[9rem] md:px-[4rem]">
        <h3 className="leckerli-one-regular font-extrabold text-[4rem] text-center text-[#b2b2b2] md:text-[5rem]">
          9 Templates
        </h3>
        <p className="text-[1.5rem] font-bold uppercase text-center md:text-[2.5rem]">
          inner pages
        </p>
        <p className="text-[#b2b2b2] text-center py-[4rem] text-[1rem] px-[10%] md:text-[1.5rem]">
          We also created pre-made inner page layouts to make your life easier
          and allows you to put your site online as quickly as possible.
        </p>
        <ul className="grid mt-[6rem] md:grid-cols-3 gap-[3rem]">
          {innerPages &&
            innerPages.map((template) => (
              <TemplatePage key={template.id} template={template} />
            ))}
        </ul>
      </div>
      {/* Features */}
      <div className="w-full mt-[9rem] p-[1.7rem] mx-auto flex justify-center md:p-[4rem]">
        <ul className="w-full mx-auto grid grid-cols-1 gap-[3rem] md:grid-cols-4">
          {features &&
            features.map((feature, index) => (
              <motion.li
                variants={scaleDown}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ duration: 0.3, type: "easeIn" }}
                key={index}
              >
                <img
                  src={feature.image}
                  alt={feature.name}
                  loading="lazy"
                  className="text-[#ee2851]"
                />
                <h3 className="mt-[2rem] uppercase font-bold text-[1rem]">
                  {feature.name}
                </h3>
                <p className="mt-[1rem] text-[0.9rem] w-[75%] text-[#837d7d] md:w-full">
                  {feature.description}
                </p>
              </motion.li>
            ))}
        </ul>
      </div>
      {/* Music Theme */}
      <div
        id="dark-section"
        className={`${styles["music-theme"]} w-full h-screen text-white pt-[9rem]`}
      >
        <div className="w-full justify-center lg:flex lg:mt-[3rem]">
          <h3 className="leckerli-one-regular font-extrabold text-[2rem] text-center text-[#b2b2b2] md:text-[3rem] md:whitespace-nowrap lg:text-[4.5rem]">
            Making Music Theme Since
          </h3>
          <h3 className="leckerli-one-regular font-extrabold text-[2rem] text-center text-[#b2b2b2] mt-[2rem] md:text-[3rem] lg:text-[4.5rem] lg:mt-0 lg:ml-[2rem]">
            2011
          </h3>
        </div>
        <p className="text-[1.2rem] font-bold uppercase text-center lg:text-[2rem]">
          Latest Music Theme Reviews
        </p>
        <div className="relative w-[90%] md:w-[70%] mx-auto overflow-hidden ">
          <div className="w-full mx-auto flex flex-nowrap">
            {musicThemes &&
              musicThemes.map((item, index) => (
                <div
                  style={{
                    transform: `translateX(-${indexMusicThemeReviews * 100}%)`,
                  }}
                  key={index}
                  className="relative grow w-full flex-shrink-0 duration-150 ease-in-out"
                >
                  <p className="text-center pt-[2rem] lg:pt-[4rem] py-[1.5rem] text-[0.8rem] md:text-[1rem]">
                    {item.content}
                  </p>
                  <p className="uppercase text-center font-bold text-[0.8rem]">
                    {item.tag}
                  </p>
                </div>
              ))}
          </div>
          <div
            onClick={handlePrevMusicThemeReviews}
            className={`${styles["button-left"]} absolute bottom-0 left-[2rem] cursor-pointer h-[4rem] flex justify-center items-center hover:-translate-x-[0.5rem] duration-100 ease-linear`}
          >
            <i className="fa-solid fa-angle-left"></i>
            <div className="w-[4rem] md:w-[6rem] h-[2px] bg-white absolute top-1/2 left-[0.2rem] -translate-y-1/2"></div>
            <div
              className={`${styles["button-left-hover"]} rounded-full border-[2px] border-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
            ></div>
          </div>
          <div
            onClick={handleNextvMusicThemeReviews}
            className={`${styles["button-right"]} absolute bottom-0 right-[2rem] cursor-pointer h-[4rem] flex justify-center items-center hover:translate-x-[0.5rem] duration-100 ease-linear`}
          >
            <i className="fa-solid fa-angle-right"></i>
            <div className="w-[4rem] md:w-[6rem] h-[2px] bg-white absolute top-1/2 right-[0.1rem] -translate-y-1/2"></div>
            <div
              className={`${styles["button-right-hover"]} rounded-full border-[2px] border-white absolute top-1/2 -translate-y-1/2`}
            ></div>
          </div>
        </div>
        <div className="flex justify-center gap-[1rem] mx-auto mt-[4rem]">
          {Array.from({ length: lengthDots }).map((item, index) => (
            <div
              onClick={() => setIndexMusicThemeReviews(index)}
              key={index}
              className={`relative ${
                indexMusicThemeReviews === index
                  ? styles["dot-click"]
                  : styles["dot-click-hover"]
              } w-[1.1rem] h-[1.1rem] rounded-full bg-white cursor-pointer`}
            ></div>
          ))}
        </div>
      </div>
      {/* Save Money */}
      <div className="mt-[5rem]">
        <motion.h3
          variants={showOut}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 1, type: "easeIn" }}
          className="leckerli-one-regular font-extrabold text-[5rem] text-center text-[#b2b2b2]"
        >
          Save Money
        </motion.h3>
        <motion.p
          variants={slideUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 1, type: "easeIn" }}
          className="text-[1.5rem] font-bold uppercase text-center md:text-[2rem]"
        >
          $90 of Premium Plugin Included
        </motion.p>
        <motion.p
          variants={showOut}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1, type: "easeIn" }}
          className="text-[#b2b2b2] text-center py-[4rem] text-[1rem] px-[5%] md:px-[10%] md:text-[1.2rem]"
        >
          Includes WPBakery Page Builder and Slider Revolution premium plugins.
          Save money and start building your website using the best tools
          available on the market today.
        </motion.p>
        <motion.div
          variants={aniItemByItem}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="w-full px-[3%] mx-auto grid grid-cols-1 gap-[2rem] lg:grid-cols-3 lg:px-[5%] "
        >
          {moneyBenefits &&
            moneyBenefits.map((item, index) => (
              <motion.div
                variants={slideUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ duration: 0.3, type: "easeIn" }}
                key={index}
                className="w-full mx-auto cursor-pointer p-[2rem] duration-150 ease-linear transition-all md:p-[5rem] hover:shadow-2xl hover:-translate-y-[0.5rem]"
              >
                <img
                  className="mx-auto"
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                />
                <h3 className="mx-auto text-center mt-[1.5rem] font-semibold text-[1.5rem]">
                  {item.name}
                </h3>
                <p className="text-[#ee2851] text-center mx-auto mt-[0.5rem] text-[1.8rem]">
                  {item.money}
                </p>
                <ul className="mt-[5rem] flex flex-col gap-3 w-[80%] lg:w-full mx-auto">
                  {item.benefits.map((benefit, indx) => (
                    <li key={indx}>
                      <span className="text-[1rem] text-[#ee2851]">
                        <i className="fa-regular fa-circle-check"></i>
                      </span>
                      <span className="text-[#b2b2b2] text-[1.2rem] ml-2">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
        </motion.div>
      </div>
      {/* Footer */}
      <div id="dark-section" className="w-full h-screen mt-[5rem] relative">
        <img
          src="./images/george-mihaila"
          className="absolute w-full h-screen object-cover"
        />
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex flex-col">
          <motion.p
            variants={scaleOut}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
            className="uppercase text-[4rem] font-extrabold text-white text-center md:text-[8rem]"
          >
            herion
          </motion.p>
          <motion.p
            variants={scaleOut}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
            className="uppercase text-[4rem] font-extrabold text-white text-center md:text-[8rem]"
          >
            theme
          </motion.p>
        </div>
        <motion.div
          variants={showOut}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ delay: 2, duration: 0.2, type: "spring" }}
          className="cursor-pointer absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-max bg-[#ee2851] uppercase text-white text-center font-bold text-[1.5rem] px-[2rem] py-[1rem] flex items-center justify-center md:text-[3rem] hover:bg-white hover:text-black"
        >
          buy now
        </motion.div>
      </div>
    </>
  );
};

export default Home;
