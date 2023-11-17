"use client";
import VersionElement from "./VersionElement";
import { useState, useEffect } from "react";

interface Version {
  versionId: string;
  totalVariants: number;
  releaseDate: string;
  image: string;
  header: string;
  setVariants: (id: string) => void;
}
interface DisplayVersionsProps {
  url: string;
}
const DisplayVersions: React.FC<DisplayVersionsProps> = ({ url }) => {
  const [versions, setVersions] = useState<Version[]>([]);
  const getVersions = async () => {
    try {
      await fetch("http://localhost:8000/fetch/versions");
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
  return versions.map((version) => {
    return (
      <VersionElement
        key={version.versionId}
        id={version.versionId}
        versionId={version.versionId}
        image={version.image}
        date={version.releaseDate}
        totalVariants={version.totalVariants}
        saved={true}
      ></VersionElement>
    );
  });
};

export default DisplayVersions;
