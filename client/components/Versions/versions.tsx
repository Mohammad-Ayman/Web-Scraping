import DisplayVersions from "./DisplayVersions";
import Styles from "./styles/versions.module.css";

interface VersionsProps {
  header: string;
  setVariants: (id: string, variantsUrl: string) => void;
}
const Versions: React.FC<VersionsProps> = (props) => {
  const getClickedCourse = (event: React.MouseEvent<HTMLUListElement>) => {
    const liExist = (event.target as HTMLElement)?.closest("li");
    if (liExist !== null) {
      const clickedCourseID = (event.target as HTMLElement)
        ?.closest("li")
        ?.getAttribute("data-courseid");
      const variantsUrl = (event.target as HTMLElement)
        ?.closest("li")
        ?.getAttribute("data-variantsurl");
      // console.log("CLicked", liExist, variantsUrl);
      if (variantsUrl && clickedCourseID)
        props.setVariants(clickedCourseID, variantsUrl);
    }
  };

  return (
    <section style={{ paddingTop: "3rem" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h2 className="header-text">{props.header}</h2>
      </div>
      <ul onClick={getClickedCourse} className={Styles.coursesList}>
        <DisplayVersions />
      </ul>
    </section>
  );
};

export default Versions;
