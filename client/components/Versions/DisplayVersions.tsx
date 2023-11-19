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
  variantsURL: string;
  setVariants: (id: string) => void;
}

const DisplayVersions: React.FC = () => {
  let appCtx = useContext(appContext);
  const [versions, setVersions] = useState<Version[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const getVersions = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `http://localhost:8000/api/versions/${appCtx?.appUrl}`
      );
      // appCtx?.displayedApp;
      const data = await response.json();
      setVersions(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    getVersions();
  }, [appCtx?.appUrl]);
  return (
    <>
      {isLoading ? (
        <p
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "3rem",
            marginTop: "2rem",
          }}
        >
          Loading...
        </p>
      ) : (
        versions.map((version) => (
          <VersionElement
            key={version.versionId}
            id={version.versionId}
            versionId={version.versionId}
            image={appCtx?.displayedApp}
            date={version.releaseDate}
            totalVariants={version.totalVariants}
            variantsUrl={version.variantsURL}
            saved={true}
          />
        ))
      )}
    </>
  );
};

export default DisplayVersions;
