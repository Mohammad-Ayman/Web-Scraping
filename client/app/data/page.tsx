"use client";
import { useState } from "react";
import Versions from "@/components/Versions/versions";
import Variants from "@/components/Variants/Variants";
import FeaturedApps from "@/components/FeaturedApps/FeaturedApps";
import appContext from "@/store/App-Context";

import styles from "./coursePage.module.css";

const Courses = () => {
  const [versionId, setVersionId] = useState("");
  const [variantsUrl, setVariantsUrl] = useState("");
  const [featuredApp, setFeaturedApp] = useState("instagram");
  const [appUrl, setAppUrl] = useState("instagram/instagram-instagram/");

  const setVariants = (id: string, url: string) => {
    setVersionId(id);
    setVariantsUrl(url);
  };

  return (
    <appContext.Provider
      value={{
        displayedApp: featuredApp,
        setDisplayedApp: setFeaturedApp,
        appUrl: appUrl,
        setAppUrl: setAppUrl,
      }}
    >
      <main className={`home-container  ${styles["home-container__courses"]} `}>
        <FeaturedApps></FeaturedApps>
        <div
          className={`home-container grid-2 ${styles["home-container__courses"]} ${styles.limitHeight}`}
        >
          <Versions header={"Versions"} setVariants={setVariants} />
          <Variants
            key={versionId}
            header={"Variants"}
            versionId={versionId}
            variantsUrl={variantsUrl}
          />
        </div>
      </main>
    </appContext.Provider>
  );
};

export default Courses;
