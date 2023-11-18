"use client";
import VersionElement from "./VersionElement";
import { useState, useEffect, useContext } from "react";
import appContext from "@/store/App-Context";

interface Version {
  versionId: string;
  totalVariants: number;
  releaseDate: string;
  image: string | undefined;
  header: string;
  setVariants: (id: string) => void;
}
interface DisplayVersionsProps {
  url: string;
}
const DisplayVersions: React.FC<DisplayVersionsProps> = ({ url }) => {
  let appCtx = useContext(appContext);
  const [versions, setVersions] = useState<Version[]>([]);
  // const [url, setUrl] = useState();
  const getVersions = async () => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/versions/${appCtx?.appUrl}`
      );
      // appCtx?.displayedApp;
      const data = await response.json();
      setVersions(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    getVersions();
  }, [appCtx?.appUrl]);
  return versions.map((version) => {
    return (
      <VersionElement
        key={version.versionId}
        id={version.versionId}
        versionId={version.versionId}
        image={appCtx?.displayedApp}
        date={version.releaseDate}
        totalVariants={version.totalVariants}
        saved={true}
      ></VersionElement>
    );
  });
};

export default DisplayVersions;
