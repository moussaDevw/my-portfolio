import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";
import { useTranslation } from "react-i18next";

const Education = () => {

  const { t } = useTranslation()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2018 - 2021</p>
          <h2 className="text-3xl md:text-4xl font-bold">{t('university')}</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title={t('levelStudent')}
            subTitle="Univers Professionnel(Unipro) (2018 - 2021)"
            result={`${t('senegal')},Dakar`}
            des=""
          />
          {/* <ResumeCard
            title="AS - Science & Information"
            subTitle="SuperKing College (2001 - 2005)"
            result="4.75/5"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Kingstar Secondary School (1998 - 2000)"
            result="5.00/5"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          /> */}
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2018 - {t('present')}</p>
          <h2 className="text-3xl md:text-4xl font-bold">{t('selfTaught')}</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] w-[100%] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title={<a href="https://www.educative.io/" target="_blank">Educative.io</a>}
            // subTitle="Google Out Tech - (2017 - Present)"
            result={t("online")}
            des={<ul>
              <li>Architect Aws</li>
              <li>Docker</li>
              <li>kubernetes</li>
              <li>React.js</li>
              <li>Next.js</li>
              <li>TDD</li>
            </ul>}
          />
          <ResumeCard
            title={<a href="https://www.codecademy.com/learn" target="_blank">Codecademy</a>}
            // subTitle="Apple Developer Team - (2012 - 2016)"
            result={t("online")}
            des={
              <ul>
                <li>React.js</li>
                <li>Express.js</li>
                <li>Node.js</li>
                <li>Postgres</li>
              </ul>
            }
          />
          <ResumeCard
            title={<a href="https://openclassrooms.com/" target="_blank">Openclassrooms</a>}
            // subTitle="Nike - (2020 - 2011)"
            result={t("online")}
            des={
              <ul>
                <li>Html5</li>
                <li>Css3</li>
                <li>JavaScript</li>
                <li>UML</li>
              </ul>
            }
          />
           <ResumeCard
            title={<a href="https://www.coursera.org/" target="_blank">Coursera</a>}
            // subTitle="Nike - (2020 - 2011)"
            result={t("online")}
            des={<ul>
              <li>Blockchain</li>
            </ul>}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
