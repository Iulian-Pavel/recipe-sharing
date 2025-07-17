import Layout from "~/components/Layout/Layout";

import { BrowserRouter, Routes, Route, useLocation } from "react-router";

import { routeConfig } from "~/routes/config";

import "~/utils/scss/reset.scss";

function AppBrowser() {
  const location = useLocation();
  const currentRoute = routeConfig.find(
    (route) => route.path === location.pathname
  );
  const useLayout = currentRoute?.layout !== false;

  const content = (
    <Routes>
      {routeConfig.map((route) => (
        <Route path={route.path} element={route.element}></Route>
      ))}
    </Routes>
  );
  return useLayout ? <Layout>{content}</Layout> : content;
}

function App() {
  return (
    <>
      <BrowserRouter>
        <AppBrowser />
      </BrowserRouter>
    </>
  );
}

export default App;
