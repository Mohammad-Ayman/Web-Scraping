import DisplayApps from "./DisplayApps";
import styles from "./styles/featuredApps.module.css";

const FeaturedApps = () => {
  return (
    <section className={styles["features-container"]}>
      <h2 className="header-text">Featured Apps</h2>
      <DisplayApps />
    </section>
  );
};

export default FeaturedApps;
