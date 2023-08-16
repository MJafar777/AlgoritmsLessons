import { classNames } from "helpers/classNames/ClassNames";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import { LinkProps } from "react-router-dom";
import cls from "./AppLink.module.scss";
export enum ApplinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: ApplinkTheme;
}

const AppLink: FC<AppLinkProps> = (props) => {
  const {
    to,
    className,
    children,
    theme = ApplinkTheme.PRIMARY,
    ...otherProps
  } = props;
  return (
    <Link
      to={to}
      {...otherProps}
      className={classNames(cls.AppLink, { [cls[theme]]: true }, [className])}
    >
      {children}
    </Link>
  );
};

export default AppLink;
