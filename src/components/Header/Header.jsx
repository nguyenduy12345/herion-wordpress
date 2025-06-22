import {useState, useEffect, useRef} from 'react'
import styles from './Header.module.css'
import NavBar from '../NavBar/NavBar'
const Header = () => {
  const logoHeader = useRef(null)
  const buttonBuyNow = useRef(null)
  const menuNavbar = useRef(null)
  const [isNavBar, setIsNavBar] = useState(false)
  const [isDark, setIsDark] = useState(false)
    //Change color logo
  useEffect(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((el) => {
      const rect = el.target.getBoudingClientRect()
      if(el.isIntersecting){
        if(el.target.id === "dark-section" && rect.top <= 0 && rect.bottom >= 0){
          setIsDark(true)
        }
      }else{
        if(el.target.id === "dark-section"){
          setIsDark(false)
        }
      }
    }, {
      threshold: 1
    })
  })
  const darkSections = document.querySelectorAll('#dark-section')
  darkSections.forEach(sec => {
    observer.observe(sec)
  })
  return () => {
    darkSections.forEach(sec => observer.unobserve(sec));
  };
}, []);
  return (
    <div className='fixed top-0 left-0 w-full z-10'>
      {/* preview header */}
      <div className={`w-full bg-[#262626] flex justify-between h-[3.5rem] ${styles['preview-header']}`}>
        <div className="h-full flex justify-center items-center">
          <img
            src="https://public-assets.envato-static.com/assets/logos/envato_market-dd390ae860330996644c1c109912d2bf63885fc075b87215ace9b5b4bdc71cc8.svg"
            alt="envato-market"
            className="w-[8.4rem]"
          />
        </div>
        <div className="flex justify-center items-center text-md">
          <div 
            style={{fontSize: 'var(--font-size-text)'}}
            className="font-medium text-[1rem] w-[6rem] bg-[#82b440] cursor-pointer text-white flex justify-center items-center h-[2.2rem] rounded-sm border-b-2 border-[#6f9a37] hover:bg-[#6f9a37]">
            Buy now
          </div>
        </div>
      </div>
      {/* Logo & menu */}
      <div className={`flex justify-between items-center w-full h-[4rem] bg-white/5 ${isDark ? 'hover:bg-black/50' : 'hover:bg-white'} shadow-xl ${styles['logo-menu']}`}>
        <a ref={logoHeader} href='#' className={`font-extrabold text-[3.5rem] leckerli-one-regular ${isDark ? 'text-white' : 'text-black'}`}>H</a>
        <div
          ref={menuNavbar} 
          onClick={() => setIsNavBar(!isNavBar)}
          className={`flex flex-col gap-[0.15rem] cursor-pointer ${styles['hamburger']} 2xl:hidden`}>
            <div className={`w-[1.6rem] h-[0.2rem] ${isDark ? 'bg-white' : 'bg-black'}`}></div>
            <div className={`w-[1.3rem] h-[0.25rem] ${isDark ? 'bg-white' : 'bg-black'} ${styles['hamburger-hover']} duration-200 ease-in-out`}></div>
            <div className={`w-[1.6rem] h-[0.2rem] ${isDark ? 'bg-white' : 'bg-black'}`}></div>
        </div>
        <div className={`hidden sm:hidden 2xl:flex relative ${styles['menu-buy']}`}>
          <p ref={buttonBuyNow} className={`uppercase font-bold cursor-pointer ${isDark ? 'text-white' : 'text-black'}`}>Buy now</p>
          <div 
            className={`${isDark ? 'bg-white' : 'bg-black'} w-0 h-[1px] absolute bottom-[-0.3rem] left-0 ${styles['menu-buy-hover']}`}>
          </div>
        </div>
      </div>
      {isNavBar && <NavBar isNavBar={isNavBar} setIsNavBar={setIsNavBar}/>}
    </div>
  )
}

export default Header
