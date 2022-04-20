import { FunctionComponent, useState } from "react";
import Image from "next/image";

const SkeletonProjectCard: FunctionComponent = () => {
  return (
    <div className="h-full items-center">
      <Image
        src="https://live.staticflickr.com/65535/52016144611_96bfd975bf_t.jpg"
        className="cursor-pointer z-30"
        width="300"
        height="150"
        layout="responsive"
        />
        <div className="my-2 z-40 rounded-lg mx-auto bg-white w-11/12 text-center">&#8287;</div>
        
    </div>
  );
};

export default SkeletonProjectCard;
