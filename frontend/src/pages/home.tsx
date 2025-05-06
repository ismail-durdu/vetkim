import React from "react";
import Main1 from "../components/Home/main1";
import Main2 from "../components/Home/main2";
import Main3 from "../components/Home/main3";
import Main4 from "../components/Home/main4";
import Main6 from "../components/Home/main6";
import Footer from "../components/footer";
import { useSelector } from "react-redux";

function home() {
  const login = useSelector((state: any) => state.login.login);
  return (
    <>
      {login ? null : (
        <div>
          <Main1 />
          <Main2 />
          <Main3 />
          <Main4 />
          <Main6 />
          <Footer />
        </div>
      )}
    </>
  );
}

export default home;
