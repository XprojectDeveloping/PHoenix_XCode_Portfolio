import headerSun from "../../../public/imgs/header-sun.svg";
import headerMoon from "../../../public/imgs/header-moon.svg";
import { useTheme } from "../ThemeContext/ThemeContext";
const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      type="button"
      className="button-reset"
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? (
        <img className="max-w-[26px]" src={headerSun} alt="header-sun" />
      ) : (
        <img className="max-w-[26px]" src={headerMoon} alt="header-moon" />
      )}
    </button>
  );
};

export default ThemeToggle;
