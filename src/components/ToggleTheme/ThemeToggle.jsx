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
        <img
          className="max-w-[26px]"
          src={"/imgs/header-sun.svg"}
          alt="header-sun"
          loading="lazy"
        />
      ) : (
        <img
          className="max-w-[26px]"
          src={"/imgs/header-moon.svg"}
          alt="header-moon"
          loading="lazy"
        />
      )}
    </button>
  );
};

export default ThemeToggle;
