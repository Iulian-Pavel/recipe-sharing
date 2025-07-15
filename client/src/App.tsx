import Layout from "~/components/Layout/Layout";
import SignIn from "~/pages/SignIn/SignIn";
import Home from "~/pages/Home/Home";

import { BrowserRouter, Routes, Route } from "react-router";

import "~/utils/scss/reset.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-in" element={<SignIn />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
