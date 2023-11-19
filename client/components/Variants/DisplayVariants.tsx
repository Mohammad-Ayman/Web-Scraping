"use client";
import VariantElement from "./VariantElement";
import { useState, useEffect, ReactNode } from "react";

interface Variant {
  saved: boolean;
  versionId: string;
  variantId: string;
  architecture: string;
  minAndroidVersion: string;
  dpi: string;
  children?: ReactNode;
  onClick?: () => void;
}
interface DisplayCardsProps {
  url: string;
  mapVersionId: string;
}
const DisplayCards: React.FC<DisplayCardsProps> = ({ url, mapVersionId }) => {
  const [variants, setVariants] = useState<Variant[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const getVariants = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setVariants(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    getVariants();
  }, []);
  return (
    <>
      {isLoading ? (
        <p style={{ textAlign: "center", fontSize: "2rem", marginTop: "2rem" }}>
          Loading...
        </p>
      ) : variants.length > 0 ? (
        variants.map((variant) => (
          <VariantElement
            onClick={() => console.log("variant Clicked")}
            key={variant.variantId + variant.dpi}
            versionId={variant.versionId}
            variantId={variant.variantId}
            variantArchitecture={variant.architecture}
            variantMinAndroidVersion={variant.minAndroidVersion}
            dpi={variant.dpi}
            saved={true}
          ></VariantElement>
        ))
      ) : (
        <p
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "3rem",
            marginTop: "2rem",
          }}
        >
          No variants found
        </p>
      )}
    </>
  );
};

export default DisplayCards;
