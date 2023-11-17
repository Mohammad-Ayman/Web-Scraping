import DisplayVersions from "./DisplayVersions";
import Link from "next/link";
import Styles from "./styles/versions.module.css";

interface VersionsProps {
  // versionId: string;
  // totalVariants: number;
  // releaseDate: string;
  // image: string;
  header: string;
  setVariants: (id: string) => void;
}
const Versions: React.FC<VersionsProps> = (props) => {
  const getClickedCourse = (event: React.MouseEvent<HTMLUListElement>) => {
    const liExist = (event.target as HTMLElement)?.closest("li");
    if (liExist !== null) {
      const clickedCourseID = (event.target as HTMLElement)
        ?.closest("li")
        ?.getAttribute("data-courseid");
      // console.log("CLicked", liExist, clickedCourseID);
      if (clickedCourseID) props.setVariants(clickedCourseID);
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
        <DisplayVersions
          url={"http://localhost:8000/api/versions"}
        ></DisplayVersions>
      </ul>
    </section>
  );
};

export default Versions;
