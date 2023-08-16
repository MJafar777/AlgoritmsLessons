import { classNames } from "helpers/classNames/ClassNames";
import cls from "./Sidebar.module.scss";
import { useState } from "react";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import Button from "shared/ui/Button/ui/Button";
import LangSwitcher from "shared/ui/langSwitcher/LangSwitcher";

interface SidebarProps {
  className?: string;
}

const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggleClick = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button onClick={onToggleClick}>Toggle</Button>

      <div className={cls.switcher}>
        <ThemeSwitcher />

        <LangSwitcher className={classNames(cls.lang)} />
      </div>
    </div>
  );
};

export default Sidebar;
