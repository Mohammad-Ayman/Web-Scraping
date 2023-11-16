import { styled } from "styled-components";
import styles from "./styles/featuredApps.module.css";
import FeaturedAppElement from "./FeaturedAppElement";

interface App {
  _id: string;
  versionId: string;
  totalVariants: number;
  releaseDate: string;
}
interface DisplayAppsProps {
  AllApps: App[];
}

const DisplayApps: React.FC<DisplayAppsProps> = ({ AllApps }) => {
  return (
    <ul className={`${styles["cards-container"]} mflex`}>
      {AllApps.map((course) => (
        <FeaturedAppElement
          key={course._id}
          id={course.versionId}
          name={course.versionId}
          image="/facebook.png"
          duration={course.totalVariants}
          rate={4.0}
          price={course.releaseDate}
        />
      ))}
    </ul>
  );
};

export default DisplayApps;
