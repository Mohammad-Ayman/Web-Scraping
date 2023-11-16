"use client";
import dynamic from "next/dynamic";
import { redirect } from "next/navigation";
import { useState, useEffect } from "react";
import Versions from "@/components/xyz/versions";
import FeaturedApps from "@/components/featuredApps/FeaturedApps";

import styles from "./coursePage.module.css";


const Courses = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [displayCourse, setDisplayCourse] = useState("");
  const [allCourses, setAllCourses] = useState([]);

  // const renderClickedCourse = (courseName) => {
  //   const clickedCourseIndex = allCourses.indexOf(courseName);
  //   setDisplayCourse(allCourses[clickedCourseIndex]);
  // };
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
  return (
    <main
      className={`home-container  ${styles["home-container__courses"]}`}
    >
      <FeaturedApps></FeaturedApps>
      <Versions
        header={"Versions"}
        coursesSource={allCourses}
        courses={allCourses}
        // getClickedCourseName={renderClickedCourse}
      />
    </main>
  );
};

export default Courses;
