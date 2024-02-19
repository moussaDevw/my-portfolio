import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";
import { useTranslation } from "react-i18next";

const Experience = () => {

  const { t } = useTranslation()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
      <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">{t('jobExperience')}</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1990px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title={t("frontEndDeveloper")}
            subTitle={`Casacloud,Remote - (11-2022 - ${t('present')})`}
            result={`${t('senegal')},Dakar`}
            des={<div>
              <ul>
                <li>{t('casaDesc.0')}</li>
                <br />
                <li>{t('casaDesc.1')}</li>
              </ul>
            </div>}
          />
          <ResumeCard
            title={t("fullStackDeveloper")}
            subTitle="3W Agency - (11-2024 - 12-2024)"
            result={`${t('senegal')},Dakar`}
            des={<div>
              <h1>{t('3wagencyDesc.0')} <a style={{color:"red"}} href="https://cigarworkshops.com/revamp/" target="_blank">cigarworkshops</a></h1>
                <br />
              <h1>{t('3wagencyDesc.1')} <a style={{color:"red"}} href="https://coris.bank/" target="_blank">coris bank</a></h1>
              <br />
              <ul>
                <li>- {t('3wagencyDesc.2')}</li>
                <br />
                <li>- {t('3wagencyDesc.3')}</li>
                <br />
                <li>- {t('3wagencyDesc.4')}</li>
                <br />
              </ul>
            </div>}
          />
          <ResumeCard
            title={t("frontEndDeveloper")}
            subTitle="Medteck Consulting - (02-2022 - 01-2023)"
            result={`${t('senegal')},Dakar`}
            des={<h1>{t("medDesc")}  <a style={{color:"red"}} href="https://www.instagram.com/trytradeup/" target="_blank">Trytradeup.</a></h1>}
          />
          <ResumeCard
            title={t("web/mobileDeveloper")}
            subTitle="SenAgriculture - (04-2021 - 11-2021)"
            result={`${t('senegal')},Dakar`}
            des={<ul>
              <li>- {t('senagricultureDesc.0')}</li>
              <br />
              <li>- {t('senagricultureDesc.1')}</li>
              <br />
              <li>- {t('senagricultureDesc.2')}</li>
              <br />
              <li>- {t('senagricultureDesc.3')}</li>
              <br />
              <li>- {t('senagricultureDesc.4')}</li>
              <br />
              <li>- {t('senagricultureDesc.5')}</li>
              <br />
              <li>- {t('senagricultureDesc.6')}</li>
              <br />
              <li>- {t('senagricultureDesc.7')}</li>
            </ul>}
          />
        </div>
      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2019 - 2021</p>
          <h2 className="text-3xl md:text-4xl font-bold">{t('internshipExperience')}</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title={t("webDeveloper")}
            subTitle="Société africaine de facilitation (02-2020 - 08-2020)"
            result={`${t('senegal')},Dakar`}
            des={t("safDesc")}
          />
           <ResumeCard
            title={t("webDeveloper")}
            subTitle="Volkeno,Dakar - (03-2019 - 08-2019)"
            result={`${t('senegal')},Dakar`}
            des={<ul>
              <li>- {t('volkenoDesc.0')}</li>
              <br />
              <li>- {t('volkenoDesc.1')}</li>
            </ul>}
          />
          {/* <ResumeCard
            title="School Teacher"
            subTitle="Kingstar Secondary School (2001 - 2010)"
            result="NEVADA"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          /> */}
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
