import React, { useEffect, useState } from "react";
import "../styles/style.css";
import "antd/dist/antd.css";
import i18n, { setInitLang } from "../configs/i18n";
import { I18nextProvider } from "react-i18next";
import MainContextProvider from "../utils/MainContext";
import { lang } from "../utils";
import { Layout } from "antd";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Router } from "next/router";
import Loader from "../components/loader";
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    setInitLang(lang);
  }, []);
  const [loader, setLoader] = useState(null);
  Router.events.on("routeChangeStart", () => setLoader(true));
  Router.events.on("routeChangeComplete", () => setLoader(false));
  Router.events.on("routeChangeError", () => setLoader(false));
  return (
    <MainContextProvider>
      {loader && <Loader />}
      <I18nextProvider i18n={i18n}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </I18nextProvider>
    </MainContextProvider>
  );
}

export default MyApp;
