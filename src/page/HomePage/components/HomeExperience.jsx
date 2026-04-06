import { useTranslation } from "react-i18next";
import { getMultiLang as ml } from "../../../components/Language/translation/Multilang.js";
const HomeExperience = ({ data }) => {
  const [t, i18n] = useTranslation("translation");
  return (
    <section className="mb-[10rem] lg:mb-[8rem] md:mb-[6rem] sm:mb-[3rem]">
      <div className="mb-[4rem]">
        <h2 className="text-[2.5rem] sm:text-[2rem] font-[200]">
          {ml(
            data?.mainExperience?.title_ru || "",
            data?.mainExperience?.title_az || "",
            data?.mainExperience?.title_en || "",
          )}
        </h2>
      </div>
      <div className="grid grid-cols-12 sm:grid-cols-6 gap-[1.8rem] items-stretch">
        {data?.mainExperience?.cards?.map((item) => {
          return (
            <div
              key={item?.id}
              className="col-span-4 md:col-span-6  flex flex-col gap-[1.1rem] h-full card-item"
            >
              <h3 className="text-[1.9rem] md:text-[1.7rem] sm:text-[1.4rem] font-[500]">
                {item?.cardTitle}
              </h3>
              <p className="text-[1.8rem] md:text-[1.6rem] sm:text-[1.3rem] font-[200]">
                {ml(
                  item?.cardText_ru || "",
                  item?.cardText_az || "",
                  item?.cardText_en || "",
                )}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HomeExperience;
