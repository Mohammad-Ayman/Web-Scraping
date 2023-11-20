"use client";
import { useState, ReactNode } from "react";
import Image from "next/image";
import styles from "./styles/VersionElement.module.css";

interface VersionElementProps {
  saved: boolean;
  id: string;
  versionId: string;
  image: string | undefined;
  date: string;
  totalVariants: number;
  variantsUrl: string;
  children?: ReactNode;
}
const VersionElement: React.FC<VersionElementProps> = (props) => {
  const [saved, setSaved] = useState(props.saved);
  const [isDeleted, setIsDeleted] = useState(false);
  const deleteByVersionId = (versionId: string) => {
    fetch(`http://localhost:8000/api/version/${versionId}`, {
      method: "DELETE",
    })
      .then((response) => {
        // Handle the response
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        } else setIsDeleted(true);
      })
      .catch((error) => {
        console.error("Error deleting version:", error);
      });
  };
  return (
    <li
      style={{ display: isDeleted ? "none" : "" }}
      className={`${styles["myLearning-card"]} mflex`}
      data-variantsurl={props.variantsUrl}
      data-versionid={props.id}
    >
      <div className={styles["image-container"]}>
        <Image
          src={`/assets/images/${props.image ? props.image : "instagram"}.webp`}
          width={3500}
          height={3499}
          alt="Picture of the app"
        />
      </div>
      <div className={`${styles.text} mflex`}>
        <div style={{ width: "100%", height: "100%" }}>
          <div className={`${styles["course"]} mflex`}>
            <h2>Version ID: {props.versionId} </h2>
            <h2>Release Date: {props.date}</h2>
            <svg
              onClick={() => deleteByVersionId(props.versionId)}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className={`${styles.icon} ${saved ? styles["active-icon"] : ""}`}
            >
              <path
                fillRule="evenodd"
                d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h3 className={styles["author-name"]}>
            Number of Variants:{props.totalVariants}{" "}
          </h3>
        </div>
        {props.children}
      </div>
    </li>
  );
};

export default VersionElement;
