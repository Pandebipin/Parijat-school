import { changeLanguage } from "i18next";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { BsGlobe } from "react-icons/bs";
function LanguageSelector() {
  const [showlng, setShoelng] = useState(false);
  const languages = [
    { code: "en", lang: "English" },
    { code: "ne", lang: "Nepali" },
  ];
  const { i18n } = useTranslation();
  const changeLanguaged = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className="relative">
      <BsGlobe onClick={() => setShoelng(!showlng)} />
      {showlng ? (
        <div className="absolute top-8 right-0 bg-white shadow-lg rounded-lg py-2">
          {languages.map((lng) => {
            return (
              <span
                key={lng.code}
                onClick={() => changeLanguaged(lng.code)}
                className="block px-4 py-2 text-gray-900 hover:bg-gray-200 cursor-pointer"
              >
                {lng.lang}
              </span>
            );
          })}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default LanguageSelector;
