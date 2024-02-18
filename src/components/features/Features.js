import React from 'react'
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';
import { useTranslation } from 'react-i18next';

const Features = () => {
  const { t } = useTranslation()
  return (
    <section
      id="services"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title={t('Services')} des={t('desc')} />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title={t('appDevelopment')}
          des={t('appDevelopmentDesc')}
          icon={<AiFillAppstore />}
        />
        <Card
          title={t('mobileDevelopment')}
          des={t('mobileDevelopmentDesc')}
          icon={<FaMobile />}
        />
        <Card
          title={t('seoOptimisation')}
          des={t('seoOptimisationDesc')}
          icon={<SiProgress />}
        />
        <Card
          title={t('devops')}
          des={t('devopsDesc')}
          icon={<SiAntdesign />}
        />
        <Card
          title="Aws"
          des={t('juniorDevopsAndAwsDesc')}
         
        />
        <Card
          title={t('hostingWebsites')}
          des={t('hostingWebsitesDesc')}
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
}

export default Features