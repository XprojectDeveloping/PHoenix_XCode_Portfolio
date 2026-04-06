import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
function Lang({ toggle, swichLang }) {
  const { i18n } = useTranslation();
  const curretLang = i18n.language ? i18n.language.split("-")[0] : "ru";

  useEffect(() => {
    if (localStorage.getItem("i18nextLng") !== curretLang) {
      localStorage.setItem("i18nextLng", curretLang);
    }
  }, [curretLang]);
  return (
    <>
      <div className="relative">
        <div
          className="flex gap-[9px] items-center cursor-pointer"
          onClick={toggle}
        >
          <button
            className="uppercase text-[1.8rem] md:text-[1.6rem] sm:text-[1.3rem]"
            name="button"
            type="button"
          >
            {curretLang}
          </button>
        </div>
        {swichLang}
      </div>
    </>
  );
}
export default Lang;
