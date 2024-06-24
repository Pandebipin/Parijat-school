import React from "react";
import { useTranslation } from "react-i18next";
import { FaLongArrowAltRight } from "react-icons/fa";
function Addmission() {
  const { t } = useTranslation();
  const { line8, line9, line10 } = t("description");
  return (
    <div className="w-full screen py-12 mt-[100px]">
      <div className="flex flex-col gap-6 p-2 justify-around">
        <div className="flex flex-col gap-4 justify-center items-center">
          <h1 className="text-2xl text-orange-400 ">{t("greetings6")}</h1>
          <h1 className="text-lg text-orange-400 font-md">{t("values7")}</h1>
        </div>
        <p className="text-gray-700 text-xl font-sans px-4">{line9}</p>
        <div className="flex flex-col gap-4 justify-center items-center p-2">
          <h1 className="text-lg text-orange-400">{t("values8")}</h1>
        </div>
        <p className="text-gray-700 text-xl font-sans px-4">{line8}</p>

        <div className="flex flex-col gap-4 justify-center items-center">
          <h1 className="text-2xl text-orange-400 ">{t("greetings6")}</h1>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl text-orange-400 border-b-2">
            {t("greetings8")}
          </h1>
          <ul className="p-3">
            <li className="text-lg pl-6 flex gap-2 items-center">
              <FaLongArrowAltRight />
              {t("values9")}
            </li>
            <li className="text-lg pl-6 flex gap-2 items-center">
              <FaLongArrowAltRight /> {t("values10")}
            </li>
            <li className="text-lg pl-6 flex gap-2 items-center">
              <FaLongArrowAltRight />
              {t("values11")}
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl text-orange-400 border-b-2">
            {t("greetings9")}
          </h1>
          <ul className="p-3">
            <li className="text-lg pl-6 flex gap-2 items-center">
              {" "}
              <FaLongArrowAltRight />
              {t("values9")}
            </li>
            <li className="text-lg pl-6 flex gap-2 items-center">
              <FaLongArrowAltRight /> {t("values10")}
            </li>
            <li className="text-lg pl-6 flex gap-2 items-center">
              <FaLongArrowAltRight />
              {t("values11")}
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl text-orange-400 border-b-2">
            {t("values7")}
          </h1>
          <ul className="p-3">
            <li className="text-lg pl-6 flex gap-2 items-center">
              <FaLongArrowAltRight /> {t("values9")}
            </li>
            <li className="text-lg pl-6 flex gap-2 items-center">
              <FaLongArrowAltRight />
              {t("values10")}
            </li>
            <li className="text-lg pl-6 flex gap-2 items-center">
              {" "}
              <FaLongArrowAltRight />
              {t("values12")}
            </li>
            <li className="text-lg pl-6 flex gap-2 items-center">
              <FaLongArrowAltRight /> {t("values13")}
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4 justify-center items-center p-2">
          <h1 className="text-2xl font-bold text-orange-400">
            {t("greetings7")}
          </h1>
        </div>
        <p className="text-gray-700 text-xl font-sans px-4">{line10}</p>
      </div>
    </div>
  );
}

export default Addmission;
