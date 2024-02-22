import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact, FaInstagram } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs, SiHashnode, SiExpress, SiNestjs } from "react-icons/si";
import { Trans, useTranslation } from 'react-i18next';

const LeftBanner = () => {
  const { t } = useTranslation()
    const [text] = useTypewriter({
      words: [t('professionalCoder'), t('fullStackDeveloper'), t('juniorDevopsAndAws')],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">{t('textWelcome')}</h4>
        <h1 className="text-6xl font-bold text-white">
        {/* <Trans i18nKey="textWelcome">
            Edit <code>src/App.js</code> and save to reload.
          </Trans> */}
          {t('hiIm')} <span className="text-designColor capitalize">Moussa Diagne</span>
        </h1>
        <h2 className="text-4xl font-bold text-white h-20 md:h-auto">
          <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          {t('catchphrase')}
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            {t('findMeIn')}
          </h2>
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
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            {t('bestSkillOn')}
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiNestjs />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBanner