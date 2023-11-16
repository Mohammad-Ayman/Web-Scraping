"use client";
import React, { useState, useEffect } from "react";
import DisplayApps from "./DisplayApps";
import styles from "./styles/featuredApps.module.css";

const FeaturedApps = () => {
  const [versions, setVersions] = useState([]);
  const getVersions = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/versions");
      const data = await response.json();
      console.log(data);
      setVersions(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    getVersions();
  }, []);
  const [featuredApps, setFeaturedApps] = useState([]);
  useEffect(() => {}, []);
  return (
    <section className={styles["features-container"]}>
      <h2 className="header-text">Featured Courses</h2>
      <DisplayApps AllApps={versions.slice(0, 4)} />
    </section>
  );
};

export default FeaturedApps;
