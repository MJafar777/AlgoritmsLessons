import { About } from "pages/about";
import { Home } from "pages/home";
import { RouteProps } from "react-router-dom";

export enum AppRoutes {
  HOME = "home",
  ABOUT = "about",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: "/",
  [AppRoutes.ABOUT]: "/about",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.HOME]: {
    path: RoutePath.home,
    element: <Home />,
  },

  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <About />,
  },
};
