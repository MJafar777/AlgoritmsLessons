import { classNames } from "helpers/classNames/ClassNames";

import cls from "./navbar.module.scss";
import AppLink, { ApplinkTheme } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import { useTheme } from "app/providers/themeProviders";
interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  const { toggleTheme } = useTheme();
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      {/* <button onClick={toggleTheme}>Toogle</button> */}
      {/* <ThemeSwitcher /> */}
      <div className={classNames(cls.links)}>
        <AppLink theme={ApplinkTheme.PRIMARY} className={cls.mainLink} to="/">
          HOME
        </AppLink>
        <AppLink
          theme={ApplinkTheme.PRIMARY}
          className={cls.aboutLink}
          to="/about"
        >
          ABOUT
        </AppLink>
      </div>
    </div>
  );
};

export default Navbar;
