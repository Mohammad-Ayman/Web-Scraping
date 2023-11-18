"use client"; 
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const getVersions = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/versions");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <main>
      <button onClick={getVersions}>Fetch Data</button>
    </main>
  );
}
