import {useState} from 'react'
import styles from './Header.module.css'
import NavBar from '../NavBar/NavBar'
const Header = () => {
  const [isNavBar, setIsNavBar] = useState(false)
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
            className="font-main w-[6rem] bg-[#82b440] cursor-pointer text-white flex justify-center items-center h-[2.2rem] rounded-sm border-b-2 border-[#6f9a37] hover:bg-[#6f9a37]">
            Buy now
          </div>
        </div>
      </div>
      {/* Logo & menu */}
      <div className={`flex justify-between items-center w-full h-[5.5rem] bg-white shadow-xl ${styles['logo-menu']}`}>
        <p className='font-extrabold text-3xl leckerli-one-regular'>H</p>
        <div 
          onClick={() => setIsNavBar(!isNavBar)}
          className={`flex flex-col gap-[0.15rem] cursor-pointer ${styles['hamburger']} 2xl:hidden`}>
            <div className='w-[1.6rem] h-[0.2rem] bg-black'></div>
            <div className={`w-[1.3rem] h-[0.25rem] bg-black ${styles['hamburger-hover']} duration-200 ease-in-out`}></div>
            <div className='w-[1.6rem] h-[0.2rem] bg-black'></div>
        </div>
        <div className={`hidden sm:hidden 2xl:flex relative ${styles['menu-buy']}`}>
          <p className='uppercase font-bold cursor-pointer font-main'>Buy now</p>
          <div 
            className={`bg-black w-0 h-[1px] absolute bottom-[-0.3rem] left-0 ${styles['menu-buy-hover']}`}>
          </div>
        </div>
      </div>
      {isNavBar && <NavBar isNavBar={isNavBar} setIsNavBar={setIsNavBar}/>}
    </div>
  )
}

export default Header
