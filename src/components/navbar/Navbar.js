import React, { useState } from 'react'
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import taggmobile from '../../assets/images/taggmobile.jpg'
import french from '../../assets/images/lng/france.png'
import english from '../../assets/images/lng/united-states.png'
import { navLinksdata } from '../../constants';
import { useTranslation } from 'react-i18next';
import tag from '../../assets/images/tag.jpg'

const Navbar = () => {
  const { i18n } = useTranslation();
  const { t } = useTranslation()

  const [showMenu, setShowMenu]=useState(false)
  return (
    <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
      <div>
        <figure>
        <img src={tag} alt="logo"  className='max-w-10' />
        </figure>
      </div>
       
      <div>
        {/* <Trans i18nKey="description.part1">
            Edit <code>src/App.js</code> and save to reload.
          </Trans> */}
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {t(title)}
              </Link>
            </li>
          ))}
          <div>
         
         {i18n.resolvedLanguage === 'fr' ? <img src={french} alt="Langue Français" height={20} width={20} style={{cursor:'pointer'}} onClick={() => i18n.changeLanguage('en')} /> : <img src={english} alt='Langue of english' height={20} width={20} style={{cursor:'pointer'}} onClick={() => i18n.changeLanguage('fr')} />}
       </div>
        </ul>
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
        >
          <FiMenu />
        </span>
        {showMenu && (
          <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
            <div className="flex flex-col gap-8 py-2 relative">
              <div>
                <img src={taggmobile} alt="logo"  className='max-w-10' />
                <p className="text-sm text-gray-400 mt-2">
                  {t('textKind')}
                </p>
              </div>
              <ul className="flex flex-col gap-4">
                {navLinksdata.map((item) => (
                  <li
                    key={item._id}
                    className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {t(item.title)}
                    </Link>
                  </li>
                ))}
                <div>
         
         {i18n.resolvedLanguage === 'fr' ? <img src={french} alt="Langue Français" height={20} width={20} style={{cursor:'pointer'}} onClick={() => i18n.changeLanguage('en')} /> : <img src={english} alt='Langue of english' height={20} width={20} style={{cursor:'pointer'}} onClick={() => i18n.changeLanguage('fr')} />}
       </div>
              </ul>
              <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">{t('findMeIn')}</h2>
        <div className="flex gap-4">
          <a href='https://www.instagram.com/musadiagne/' target='_blank'>
          <span className="bannerIcon">
            <FaInstagram />
          </span>
          </a>
          <a href='https://twitter.com/musa_diagnee' target='_blank'>
          <span className="bannerIcon">
            <FaTwitter />
          </span>
          </a>
          <a href='https://www.linkedin.com/in/moussa-diagne-b81226107/' target='_blank' className="bannerIcon">
            <FaLinkedinIn href='https://www.linkedin.com/in/moussa-diagne-b81226107/' target='_blank' />
          </a>
        </div>
      </div>
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
              >
                <MdClose />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar