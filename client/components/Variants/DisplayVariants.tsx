"use client";
import VariantElement from "./VariantElement";
import { useState, useEffect, ReactNode, CSSProperties } from "react";

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
const pStyle: CSSProperties = {
  textAlign: "center",
  fontWeight: "bold",
  fontSize: "3rem",
  marginTop: "2rem",
};
const DisplayCards: React.FC<DisplayCardsProps> = ({ url, mapVersionId }) => {
  const [variants, setVariants] = useState<Variant[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [exceedLimit, setExceedLimit] = useState(false);
  const getVariants = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(url);
      if (!response.ok) {
        setExceedLimit(true);
      } else {
        const data = await response.json();
        setVariants(data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    getVariants();
  }, []);

  let content;
  if (isLoading) {
    content = <p style={pStyle}>Loading...</p>;
  } else if (variants.length > 0) {
    content = variants.map((variant) => (
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
    ));
  } else if (exceedLimit) {
    content = (
      <p style={pStyle}>Rate limit exceeded. Please try again later.</p>
    );
  } else {
    content = <p style={pStyle}>.....</p>;
  }

  return content;
};

export default DisplayCards;
