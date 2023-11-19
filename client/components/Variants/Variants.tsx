import DisplayVariants from "./DisplayVariants";
import Styles from "./styles/variants.module.css";

interface VariantsProps {
  header: string;
  versionId: string;
  variantsUrl: string;
}

const Variants: React.FC<VariantsProps> = (props) => {
  return (
    <section className={`${Styles["variants-container"]}`}>
      <div
        className={Styles.header}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h2 className="header-text">{props.header}</h2>
      </div>
      <ul className={Styles.variantsList}>
        <DisplayVariants
          mapVersionId={props.versionId}
          url={`http://localhost:8000/api/variants/${props.versionId}${props.variantsUrl}`}
        ></DisplayVariants>
      </ul>
    </section>
  );
};

export default Variants;
