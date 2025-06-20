import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import TemplatePage from "../../components/TemplatePage/TemplatePage";
import templateHomePages from "../../data/template.js";
import releases from "../../data/release.js";
import artists from "../../data/artist.js";
import innerPages from "../../data/innerPages.js";
import styles from "./Home.module.css"
const Home = () => {
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
    {/* Artist Pages */}
    <div className="px-[2rem] mt-[9rem] md:px-[4rem]">
      <h3 className="leckerli-one-regular font-extrabold text-[5rem] text-center text-[#b2b2b2]">Artist Pages</h3>
      <p className="text-[2.5rem] font-bold uppercase text-center">Simple or Custom Layouts</p>
      <p className="text-[#b2b2b2] text-center py-[4rem] text-[1.5rem] px-[10%]">Herion can be used for your record label website. You can create an unlimited number of pages for each artist and choose between simple default layouts, automatically generated from the release, videos and events artist category, or create a custom page. It’s all up-to-you!</p>
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
