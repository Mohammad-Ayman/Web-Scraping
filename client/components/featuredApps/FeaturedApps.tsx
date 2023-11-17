"use client";
import React, { useState, useEffect } from "react";
import DisplayApps from "./DisplayApps";
import styles from "./styles/featuredApps.module.css";

let apps = [
  {
    name: "Instagram",
    id: "Instagram",

    image: "/InstagramXL.png",
  },
  {
    name: "TikTok",
    id: "TikTok",

    image: "/tiktok.png",
  },
  {
    name: "Snapchat",
    id: "Snapchat",

    image: "/snapchat.png",
  },
  {
    name: "Facebook",
    id: "Facebook",

    image: "/Facebook.png",
  },
];

const FeaturedApps = () => {
  const [versions, setVersions] = useState([]);
  // const getVersions = async () => {
  //   try {
  //     // const response = await fetch("http://localhost:8000/api/versions");
  //     // const data = await response.json();
  //     // console.log(data);
  //     // setVersions(data);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };
  // useEffect(() => {
  //   getVersions();
  // }, []);
  const [featuredApps, setFeaturedApps] = useState([]);
  useEffect(() => {}, []);
  return (
    <section className={styles["features-container"]}>
      <h2 className="header-text">Featured Courses</h2>
      <DisplayApps AllApps={apps} />
    </section>
  );
};

export default FeaturedApps;
