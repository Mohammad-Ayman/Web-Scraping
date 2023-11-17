"use client";
import CardElement from "./cardElement";
import Button from "@/components/UI/Button";
import { useState, useEffect } from "react";

interface Version {
  _id: string;
  versionId: string;
  totalVariants: number;
  releaseDate: string;
  image: string;
  author: string;
}
interface DisplayCardsProps {
  url: string;
}
const DisplayCards: React.FC<DisplayCardsProps> = ({ url }) => {
  const [versions, setVersions] = useState<Version[]>([]);
  const getVersions = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setVersions(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    getVersions();
  }, []);
  return versions.map((course) => {
    return (
      <CardElement
        onClick={() => console.log("Course Clicked")}
        key={course._id}
        id={course.versionId}
        name={course.versionId}
        image={course.image}
        date={course.releaseDate}
        author={course.totalVariants}
        saved={true}
      >
        {/* <Button>View Variants</Button> */}
      </CardElement>
    );
  });
};

export default DisplayCards;
