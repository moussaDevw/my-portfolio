import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import tagg from "../../assets/images/tag.jpg"
import { useTranslation } from 'react-i18next';
import { DateTime } from 'luxon';
import { navLinksdata } from '../../constants';
import { Link } from 'react-scroll';
import RightBanner from '../banner/RightBanner';
import ClockApp from '../clock/Clock';

const getGreetingTime = (d = DateTime.now()) => {
	const split_afternoon = 12; // 24hr time to split the afternoon
	const split_evening = 17; // 24hr time to split the evening
	const currentHour = parseFloat(d.toFormat('hh'));
	if (currentHour >= split_afternoon && currentHour <= split_evening) {
		return 'afternoon';
	} else if (currentHour >= split_evening) {
		return 'evening';
  }
	return 'morning';
}

const Footer = () => {

  const { t } = useTranslation()

  return (
    <div className="w-full py-20 h-auto border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-8">
      <div className="w-full h-full flex flex-col gap-8">
        <figure>
         <img className="w-32" src={tagg} alt="logo" />
          <figcaption>Tàgg</figcaption>
        </figure>
        <div className="flex flex-col gap-4">
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
      </div>
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          {t('quickLink')}
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
          {
            navLinksdata.map(({ _id, title, link }) => (
              <li key={_id}>
              <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
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
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </li>
            ))
          }
  
        </ul>
      </div>
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          
        </h3>
        <ClockApp />
      </div>
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          
        </h3>
        <div>{t('footer.date', { date: new Date(), context: getGreetingTime() })}</div>
      </div>
      <div className="Footer">
  </div>
    </div>
  );
}

export default Footer