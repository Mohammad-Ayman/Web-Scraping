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
  const [saved, setSaved] = useState(props.saved);
  return (
    <li
      className={`${styles["myLearning-card"]} mflex`}
      data-courseid={props.variantId}
    >
      {/* <div className={styles["image-container"]}>
        <Image
          src="/tiktok.png"
          width={3500}
          height={3499}
          alt="Picture of the author"
        />
      </div> */}
      <div className={`${styles.text} mflex`}>
        <div style={{ width: "100%", height: "100%" }}>
          <div className={`${styles["course"]} mflex`}>
            <h2>Variant ID: {props.variantId} </h2>
            <h2>Minimum Version: {props.variantMinAndroidVersion}</h2>
            
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className={`${styles.icon} ${saved ? styles["active-icon"] : ""}`}
            >
              <path
                fillRule="evenodd"
                d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h3 className={styles["author-name"]}>Architecture: {props.variantArchitecture}</h3>
          <h3 className={styles["author-name"]}>
            DPI: {props.dpi}
          </h3>
        </div>
        {props.children}
      </div>
    </li>
  );
};

export default VariantElement;
