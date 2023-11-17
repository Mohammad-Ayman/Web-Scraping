import { styled } from "styled-components";
import styles from "./styles/featuredApps.module.css";
import FeaturedAppElement from "./FeaturedAppElement";

interface App {
  id: string;
  name: string;
  image: string;
  // totalVariants: number;
}
interface DisplayAppsProps {
  AllApps: App[];
}

const DisplayApps: React.FC<DisplayAppsProps> = ({ AllApps }) => {
  return (
    <ul className={`${styles["cards-container"]} mflex`}>
      {AllApps.map((app) => (
        <FeaturedAppElement
          key={app.id}
          id={app.id}
          name={app.name}
          image={app.image}
          // duration={app.totalVariants}
          // rate={4.0}
          // price={app.releaseDate}
        />
      ))}
    </ul>
  );
};

export default DisplayApps;
