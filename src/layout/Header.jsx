import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { getMultiLang as ml } from "../components/Language/translation/Multilang.js";
import Lang from "../components/Language/Lang.jsx";
import ThemeToggle from "../components/ToggleTheme/ThemeToggle.jsx";
const Header = ({ headerData }) => {
  const [t, i18n] = useTranslation("translation");
  const [open, setOpen] = useState(false);
  const langs = ["az", "ru", "en"];

  const changeLang = async (lang) => {
    await i18n.changeLanguage(lang);
    setOpen(false);
  };

  const filteredLang = (lang = "az") => {
    return lang != localStorage.getItem("i18nextLng");
  };

  const langFilter = langs?.filter(filteredLang);
  return (
    <header className="my-[4rem] mb-[15rem] lg:mb-[8rem] md:mb-[6rem] sm:mb-[3rem] max-w-[1100px] m-auto xl:mx-[4.5rem] lg:mx-[3.5rem] md:mx-[2.5rem] sm:mx-[1.8rem]">
      <div className="flex items-center justify-between">
        <div>
          <Lang
            toggle={() => setOpen(!open)}
            swichLang={
              open && (
                <div className="absolute mt-6 left-[-29px] top-4 w-[80px] h-[50px] flex flex-col items-center">
                  {langFilter?.map((item, index) => {
                    return (
                      <button
                        onClick={() => changeLang(item)}
                        name="button"
                        type="button"
                        className="z-[200] text-[1.8rem] md:text-[1.6rem] sm:text-[1.3rem] uppercase font-normal flex items-center gap-[1px]"
                        key={item.id || index}
                      >
                        {item}
                      </button>
                    );
                  })}
                </div>
              )
            }
          />
        </div>
        <div className="flex gap-[1.6rem] items-center">
          {headerData?.map((item) => {
            return (
              <Link
                className="text-[1.8rem] md:text-[1.6rem] sm:text-[1.3rem]"
                key={item?.id}
                to={item?.to}
              >
                {ml(
                  item?.name_ru || "",
                  item?.name_az || "",
                  item?.name_en || "",
                )}
              </Link>
            );
          })}

          <div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
