import { FunctionComponent } from "react";

const SkeletonProjectNavbar: FunctionComponent = () => {
  return (
    <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none bg-gray-200 rounded-lg opacity-30 md:w-6/12 lg:w-5/12 xl:w-4/12 t-4 dark:bg-gray-600 animate-pulse">
      <li>
      &#8287;
    </li>
    </div>
  );
};

export default SkeletonProjectNavbar;
