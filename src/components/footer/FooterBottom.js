import React from 'react'
import { useTranslation } from 'react-i18next';

const FooterBottom = () => {
  const { t } = useTranslation()
  const date = new Date()
  return (
    <div className="w-full py-10">
      <p className="text-center text-gray-500 text-base">
        {date.getFullYear()} {t('copyRight')}
      </p>
    </div>
  );
}

export default FooterBottom