"use client";
import appContext from "@/store/App-Context";
import styles from "./styles/featuredAppElement.module.css";
import { styled } from "styled-components";
import Image from "next/image";
import { useState, useEffect, useContext } from "react";

const PriceBox = styled.span`
  background-color: #2e8dff;
  color: #fbfbfb;
  padding: 0.4rem 1.2rem;
  border-radius: 1rem;
`;

const ButtonContainer = styled.div`
  position: relative;
  color: #333;
`;

const BookmarkButton = styled.button`
  background: rgba(128, 128, 128, 0.5);
  border: none;
  border-radius: 0.6rem;
  padding: 0.6rem;
  position: absolute;
  top: -18rem;
  right: 0.5rem;

  .bookmark-icon {
    color: #ffffff;
    width: 1.5rem;
    height: 1.5rem;
  }
  &:hover {
    transform: scale(1.15);
  }
`;
interface FeaturedAppElementProps {
  id: string;
  name: string;
  image: string;
  url: string;
  // totalVariants: number;
}
const FeaturedAppElement: React.FC<FeaturedAppElementProps> = (props) => {
  let appCtx = useContext(appContext);
  const updateDisplayedApp = () => {
    // console.log("Clicked", props.id);
    appCtx?.setDisplayedApp(props.id);
    appCtx?.setAppUrl(props.url);
    console.log(appCtx?.displayedApp);
    console.log(appCtx?.appUrl);
  };
  return (
    <li
      key={props.id}
      className={`${styles["course-card"]} mflex`}
      data-courseid={props.id}
      onClick={() => updateDisplayedApp()}
    >
      <div className={`${styles["course-image__container"]}`}>
        <Image
          src={props.image}
          width={3500}
          height={3499}
          alt="Picture of the app"
        />
      </div>
      <h3 className={styles["course-name"]}>{props.name}</h3>
    </li>
  );
};

export default FeaturedAppElement;
