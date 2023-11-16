import DisplayCards from "./DisplayCards";
import Link from "next/link";
import Styles from "./styles/versions.module.css";

const Versions = (props) => {
  const getClickedCourse = (event) => {
    const liExist = event.target.closest("li");

    if (liExist !== null) {
      const clickedCourseID = event.target
        .closest("li")
        .getAttribute("data-courseid");

      props.coursesSource.some((course) => {
        if (course.id == clickedCourseID) {
          props.getClickedCourseName(course);
        }
      });
    } else return;
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
        <DisplayCards
          AllCourses={props.courses}
          isButton={props.isButton}
        ></DisplayCards>
      </ul>
    </section>
  );
};

export default Versions;
