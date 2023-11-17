import DisplayVariants from "./DisplayVariants";
import Link from "next/link";
import Styles from "../Cards/styles/versions.module.css";

const Variants = (props) => {
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
      <ul className={Styles.coursesList}>
        <DisplayVariants
          // url={"http://localhost:8000/api/variants/310.0.0.0.84"}
          url={`http://localhost:8000/api/variants/${props.versionId}`}
        ></DisplayVariants>
      </ul>
    </section>
  );
};

export default Variants;
