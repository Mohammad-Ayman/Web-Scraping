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
  const getVariants = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log("data", data.length);
      setVariants(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    getVariants();
  }, []);
  return (
    variants.length > 0 &&
    variants.map((variant) => {
      return (
        <VariantElement
          onClick={() => console.log("variant Clicked")}
          key={variant.variantId}
          versionId={variant.versionId}
          variantId={variant.variantId}
          variantArchitecture={variant.architecture}
          variantMinAndroidVersion={variant.minAndroidVersion}
          dpi={variant.dpi}
          saved={true}
        ></VariantElement>
      );
    })
  );
};

export default DisplayCards;
