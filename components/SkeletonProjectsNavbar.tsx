import { FunctionComponent } from "react";

const SkeletonProjectNavbar: FunctionComponent = () => {
  return (
    <div className="flex opacity-30 md:w-6/12 lg:w-5/12 xl:w-4/12 rounded-lg t-4 bg-gray-200 px-3 py-2 space-x-3 overflow-x-auto list-none animate-pulse">
      <li>
      &#8287;
    </li>
    </div>
  );
};

export default SkeletonProjectNavbar;
