import { FunctionComponent, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { Project } from "../type";
import Image from "next/image";

const ProjectCard: FunctionComponent<{
  project: Project;
  showDetail: null | number;
  setShowDetail: (id: null | number) => void;
}> = ({ project: { id, name, get_image, rating }, setShowDetail }) => {
  return (
    <div className="relative">
      <Image
        src={get_image}
        alt={name}
        className="cursor-pointer"
        onClick={() => setShowDetail(id)}
        width="300"
        height="150"
        layout="responsive"
      />
      <p className="my-2 text-center">{name}</p>
      <div className="absolute top-2 left-1">
        <div className="flex flex-row text-2xl text-green">
          {new Array<number>(rating).fill(rating).map((_, i) => (
            <AiFillStar />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
