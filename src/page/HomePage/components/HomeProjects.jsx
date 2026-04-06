import { useTranslation } from "react-i18next";
import { getMultiLang as ml } from "../../../components/Language/translation/Multilang.js";
import { Link } from "react-router-dom";
import linkDemo from "../../../../public/imgs/link-demo.svg";
import { useTheme } from "../../../components/ThemeContext/ThemeContext.jsx";
const HomeProjects = ({ data }) => {
  const [t, i18n] = useTranslation("translation");
  const { theme, toggleTheme } = useTheme();
  return (
    <section className="mb-[15rem] lg:mb-[11rem] md:mb-[6rem] sm:mb-[5.5rem]">
      <div className="mb-[4rem]">
        <h2 className="text-[2.5rem] sm:text-[2rem] font-[200]">
          {ml(
            data?.mainProjects?.title_ru || "",
            data?.mainProjects?.title_az || "",
            data?.mainProjects?.title_en || "",
          )}
        </h2>
      </div>
      <div className="grid grid-cols-12 sm:grid-cols-6 gap-[3rem] sm:gap-[5rem] items-start">
        {data?.mainProjects?.cards?.map((item) => {
          return (
            <div
              key={item?.id}
              className="col-span-4 md:col-span-6 flex flex-col gap-[2.5rem] sm:gap-[1.5rem]"
            >
              <img
                className="max-w-[40rem] sm:max-w-full"
                src={item?.img}
                alt={item?.alt}
              />

              <h3 className="text-[2rem] sm:text-[1.5rem] font-[600]">
                {item?.title}
              </h3>

              {/* <p className="text-[1.7rem] sm:text-[1.5rem] font-[200]">
                {ml(
                  item?.text_ru || "",
                  item?.text_az || "",
                  item?.text_en || "",
                )}
              </p> */}

              <p className="text-[1.6rem] sm:text-[1.3rem] font-[200] text-[#6CACE4]">
                {item?.technologies}
              </p>

              <div className="flex items-center justify-between">
                <Link
                  to={item?.to}
                  className="flex w-fit items-center gap-[1.2rem] text-[1.8rem] md:text-[1.6rem] sm:text-[1.3rem] link-card"
                  target="_blank"
                >
                  <img
                    className={`max-w-[2.5rem] ${theme === "light" ? "invert" : ""}`}
                    src={linkDemo}
                    alt="link-demo"
                  />
                  {ml(
                    item?.link_ru || "",
                    item?.link_az || "",
                    item?.link_en || "",
                  )}
                </Link>

                <Link to={item?.linkGit} target="_blank">
                  <img
                    className={`max-w-[3.5rem] ${theme === "light" ? "invert" : ""}`}
                    src={item?.linkImg_git}
                    alt={item?.altGit}
                  />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HomeProjects;
