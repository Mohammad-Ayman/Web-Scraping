"use client";
import { useState, useContext, ReactNode } from "react";
import Image from "next/image";
import styles from "../Versions/styles/VersionElement.module.css";

interface Variant {
  saved: boolean;
  versionId: string;
  variantId: string;
  variantArchitecture: string;
  variantMinAndroidVersion: string;
  dpi: string;
  children?: ReactNode;
  onClick?: () => void;
}
const VariantElement: React.FC<Variant> = (props) => {
  return (
    <li
      className={`${styles["myLearning-card"]} mflex`}
      data-courseid={props.variantId}
    >
      <div className={`${styles.text} mflex`}>
        <div style={{ width: "100%", height: "100%" }}>
          <div className={`${styles["course"]} mflex`}>
            <h2>Variant ID: {props.variantId} </h2>
            <h2>Minimum Version: {props.variantMinAndroidVersion}</h2>
          </div>
          <h3 className={styles["author-name"]}>
            Architecture: {props.variantArchitecture}
          </h3>
          <h3 className={styles["author-name"]}>DPI: {props.dpi}</h3>
        </div>
        {props.children}
      </div>
    </li>
  );
};

export default VariantElement;
