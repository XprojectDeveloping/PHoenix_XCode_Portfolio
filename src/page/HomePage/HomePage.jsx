import { useTranslation } from "react-i18next";
import HomeAbout from "./components/HomeAbout";
import HomeExperience from "./components/HomeExperience";
import HomeProjects from "./components/HomeProjects";
import MaxWidth from "../../components/MaxWidth/MaxWidth";

const HomePage = ({ mainData }) => {
  const [t, i18n] = useTranslation("translation");

  return (
    <main>
      <MaxWidth customClass="xl:mx-[4.5rem] lg:mx-[3.5rem] md:mx-[2.5rem] sm:mx-[1rem]">
        <HomeAbout data={mainData} />
        <HomeExperience data={mainData} />
        <HomeProjects data={mainData} />
      </MaxWidth>
    </main>
  );
};

export default HomePage;
