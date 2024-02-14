import React from 'react'

const FooterBottom = () => {
  const date = new Date()
  return (
    <div className="w-full py-10">
      <p className="text-center text-gray-500 text-base">
        {date.getFullYear()} All rights reserved by Noor Mohammad
      </p>
    </div>
  );
}

export default FooterBottom