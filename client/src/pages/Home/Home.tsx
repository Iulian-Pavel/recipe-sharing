import { useEffect } from "react";

import Header from "~/components/Header/Header";
import Tags from "~/components/Tags/Tags"

import generics from "~/generics.json";

import header_cover from "~/assets/images/header_cover.jpg";

function Home() {
  useEffect(() => {
    document.body.style.background = "beige";

    return () => {
      document.body.style.background = "none";
    };
  });

  return (
    <>
      <Header
        headerTitle={generics.Header[0].HeaderTitle}
        headerText={generics.Header[0].HeaderText}
        headerCoverImage={header_cover}
      />
      <Tags />
    </>
  );
}

export default Home;
