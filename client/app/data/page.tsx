"use client";
import dynamic from "next/dynamic";
import { redirect } from "next/navigation";
import { useState, useEffect } from "react";
import Versions from "@/components/Versions/versions";
import Variants from "@/components/Variants/Variants";
import FeaturedApps from "@/components/featuredApps/FeaturedApps";

import styles from "./coursePage.module.css";

const Courses = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [versionId, setVersionId] = useState("310.0.0.0.84");
  const [allCourses, setAllCourses] = useState([]);

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
  const setVariants = (id: string) => {
    setVersionId(id);
  };

  return (
    <main className={`home-container  ${styles["home-container__courses"]}`}>
      <FeaturedApps></FeaturedApps>
      <div
        className={`home-container grid-2 ${styles["home-container__courses"]}`}
      >
        <Versions
          header={"Versions"}
          coursesSource={allCourses}
          courses={allCourses}
          setVariants={setVariants}
          // getClickedCourseName={renderClickedCourse}
        />
        <Variants
          key={versionId}
          header={"Variants"}
          coursesSource={allCourses}
          courses={allCourses}
          versionId={versionId}
          // getClickedCourseName={renderClickedCourse}
        />
      </div>
    </main>
  );
};

export default Courses;
