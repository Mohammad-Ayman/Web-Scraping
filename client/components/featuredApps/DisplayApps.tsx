import { styled } from "styled-components";
import styles from "./styles/featuredApps.module.css";
import FeaturedAppElement from "./FeaturedAppElement";

let apps = [
  {
    name: "Instagram",
    id: "instagram",
    url: "instagram/instagram-instagram/",
    image: "/instagram.webp",
  },
  {
    name: "TikTok",
    id: "tiktok-pte-ltd",
    url: "tiktok-pte-ltd/tik-tok/",
    image: "/tiktok-pte-ltd.webp",
  },
  {
    name: "Snapchat",
    id: "snap-inc",
    url: "snap-inc/snapchat/",
    image: "/snap-inc.webp",
  },
  {
    name: "Facebook",
    id: "facebook-2",
    url: "facebook-2/facebook/",
    image: "/facebook-2.webp",
  },
];

interface App {
  id: string;
  name: string;
  image: string;
  url: string;
}

const DisplayApps: React.FC = () => {
  return (
    <ul className={`${styles["cards-container"]} mflex`}>
      {apps.map((app: App) => (
        <FeaturedAppElement
          key={app.id}
          id={app.id}
          name={app.name}
          image={app.image}
          url={app.url}
        />
      ))}
    </ul>
  );
};

export default DisplayApps;
