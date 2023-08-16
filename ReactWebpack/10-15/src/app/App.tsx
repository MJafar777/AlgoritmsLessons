import { classNames } from "../helpers/classNames/ClassNames";

import useTheme from "./providers/themeProviders/lib/useTheme";
import AppRouter from "./providers/router/ui/AppRouter";
import { Link } from "react-router-dom";
import { Navbar } from "widgets/Navbar";
import Sidebar from "widgets/Sidebar/ui/Sidebar/Sidebar";
import { Suspense } from "react";

const App = () => {
  const { theme } = useTheme();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className={classNames("app", {}, [theme])}>
        <Navbar />
        <div className="content-page">
          <Sidebar />

          <AppRouter />
        </div>
      </div>
    </Suspense>
  );
};

export default App;
