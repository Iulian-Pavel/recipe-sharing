import Home from "~/pages/Home/Home";
import SignIn from "~/pages/SignIn/SignIn";

export const paths = {
  home: "/",
  signin: "/sign-in",
};

export const routeConfig = [
  {
    id: 0,
    path: paths.signin,
    element: <SignIn />,
    layout: false,
  },
  {
    id: 0,
    path: paths.home,
    element: <Home />,
    layout: true,
  },
];
