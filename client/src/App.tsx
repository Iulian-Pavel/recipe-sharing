import Layout from "./components/Layout/Layout";
import SignIn from "./pages/SignIn/SignIn";

import "./utils/scss/reset.scss";

function App() {
  return (
    <>
      <Layout>
        <SignIn />
      </Layout>
    </>
  );
}

export default App;
