import DisplayCards from "../Cards/DisplayCards";
import Link from "next/link";
import Styles from "../Cards/styles/versions.module.css";

const Versions = (props) => {
  const getClickedCourse = (event) => {
    const liExist = event.target.closest("li");
    if (liExist !== null) {
      const clickedCourseID = event.target
        .closest("li")
        .getAttribute("data-courseid");

      props.setVariants(clickedCourseID);
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
        <DisplayCards url={"http://localhost:8000/api/versions"}></DisplayCards>
      </ul>
    </section>
  );
};

export default Versions;
