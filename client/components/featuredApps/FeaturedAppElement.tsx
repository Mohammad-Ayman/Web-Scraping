"use client";
import appContext from "@/store/App-Context";
import styles from "./styles/featuredAppElement.module.css";
import Image from "next/image";
import { useContext } from "react";

interface FeaturedAppElementProps {
  id: string;
  name: string;
  image: string;
  url: string;
}
const FeaturedAppElement: React.FC<FeaturedAppElementProps> = (props) => {
  let appCtx = useContext(appContext);
  const updateDisplayedApp = () => {
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
