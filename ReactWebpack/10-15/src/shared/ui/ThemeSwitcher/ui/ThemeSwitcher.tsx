import cls from "./ThemeSvitcher.module.scss";
import { useTheme } from "app/providers/themeProviders";
import { classNames } from "helpers/classNames/ClassNames";
import Moon from "../../../assets/icons/theme-dark.svg";
import Sun from "../../../assets/icons/theme-light.svg";

import { Theme } from "app/providers/themeProviders/lib/ThemeContext";
import Button, { ThemeButton } from "../../Button/ui/Button";

interface ThemeSvitcherProps {
  className?: string;
}

const ThemeSwitcher = ({ className }: ThemeSvitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={classNames(cls.ThemeSwitcher, {}, [className])}
      onClick={toggleTheme}
    >
      {theme == Theme.DARK ? <Moon /> : <Sun />}
    </Button>
  );
};

export default ThemeSwitcher;
