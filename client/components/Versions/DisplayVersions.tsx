"use client";
import VersionElement from "./VersionElement";
import { useState, useEffect } from "react";

interface Version {
  versionId: string;
  totalVariants: number;
  releaseDate: string;
  image: string;
  onClick?: () => void;
}
interface DisplayVersionsProps {
  url: string;
}
const DisplayVersions: React.FC<DisplayVersionsProps> = ({ url }) => {
  const [versions, setVersions] = useState<Version[]>([]);
  const getVersions = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setVersions(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    getVersions();
  }, []);
  return versions.map((course) => {
    return (
      <VersionElement
        onClick={() => console.log("Course Clicked")}
        key={course.versionId}
        id={course.versionId}
        versionId={course.versionId}
        image={course.image}
        date={course.releaseDate}
        totalVariants={course.totalVariants}
        saved={true}
      >
        {/* <Button>View Variants</Button> */}
      </VersionElement>
    );
  });
};

export default DisplayVersions;
