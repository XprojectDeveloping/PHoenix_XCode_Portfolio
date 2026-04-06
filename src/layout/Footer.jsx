import { use } from "react";
import { useTranslation } from "react-i18next";
import { getMultiLang as ml } from "../components/Language/translation/Multilang.js";
const Footer = ({ footerData }) => {
  const [t, i18n] = useTranslation("translation");
  return (
    <footer className="py-[1rem] max-w-[1100px] m-auto xl:mx-[4.5rem] lg:mx-[3.5rem] md:mx-[2.5rem] sm:mx-[1.5rem]">
      <p className="text-[1.8rem] text-center">
        {ml(
          footerData?.text_ru || "",
          footerData?.text_az || "",
          footerData?.text_en || "",
        )}
      </p>
    </footer>
  );
};

export default Footer;
