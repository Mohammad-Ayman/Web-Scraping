import DisplayVersions from "./DisplayVersions";
import Styles from "./styles/versions.module.css";

interface VersionsProps {
  header: string;
  setVariants: (id: string, variantsUrl: string) => void;
}
const Versions: React.FC<VersionsProps> = (props) => {
  const getClickedVersion = (event: React.MouseEvent<HTMLUListElement>) => {
    const liExist = (event.target as HTMLElement)?.closest("li");
    if (liExist !== null) {
      const clickedVersionID = (event.target as HTMLElement)
        ?.closest("li")
        ?.getAttribute("data-versionid");
      const variantsUrl = (event.target as HTMLElement)
        ?.closest("li")
        ?.getAttribute("data-variantsurl");
      if (variantsUrl && clickedVersionID) {
        props.setVariants(clickedVersionID, variantsUrl);
        const headerTextElement = document.querySelector(".header-text");
        if (headerTextElement) {
          headerTextElement.scrollIntoView({ behavior: "smooth" });
        }
      }
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
      <ul onClick={getClickedVersion} className={Styles.coursesList}>
        <DisplayVersions />
      </ul>
    </section>
  );
};

export default Versions;
