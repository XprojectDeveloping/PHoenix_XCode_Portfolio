import { useTranslation } from "react-i18next";
import { getMultiLang as ml } from "../../../components/Language/translation/Multilang.js";
import { useTheme } from "../../../components/ThemeContext/ThemeContext.jsx";
const HomeAbout = ({ data }) => {
  const [t, i18n] = useTranslation("translation");
  const { theme, toggleTheme } = useTheme();
  return (
    <section className="mb-[10rem] lg:mb-[8rem] md:mb-[6rem] sm:mb-[3rem]">
      <div className="mb-[10rem] lg:mb-[8rem] md:mb-[6rem] sm:mb-[3rem]">
        <span className="text-[1.8rem] font-[200]">
          {ml(
            data?.titleUp_ru || "",
            data?.titleUp_az || "",
            data?.titleUp_en || "",
          )}
        </span>

        <h1 className="text-[10rem] lg:text-[4.5rem] md:text-[3.5rem] sm:text-[2.5rem] bg-gradient-to-r from-[#9845E8] via-[#33D2FF] to-[#DD5789] bg-clip-text text-transparent mb-[2rem]">
          {ml(
            data?.titleDown_ru || "",
            data?.titleDown_az || "",
            data?.titleDown_en || "",
          )}
        </h1>

        <p className="text-[1.8rem] lg:text-[1.6rem] md:text-[1.5rem] sm:text-[1.3rem] font-[200]">
          {ml(data?.text_ru || "", data?.text_az || "", data?.text_en || "")}
        </p>
      </div>

      <div className="flex items-center gap-[1.2rem]">
        {data?.mainLink.map((item) => {
          return (
            <div
              key={item?.id}
              className="p-[2px] rounded-[2px] bg-gradient-to-br from-indigo-700 to-indigo-400"
            >
              <a
                className="text-[1.8rem] font-[200] flex gap-[1.2rem] items-center
                bg-[var(--bg)] text-[var(--text)] rounded-[1px] px-8 py-2 sm:text-[1.3rem]"
                href={item?.href}
              >
                <img
                  src={item?.img}
                  className={`max-w-[16px] ${theme === "light" ? "invert" : ""}`}
                  alt={item?.alt}
                />
                {item?.name}
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HomeAbout;
