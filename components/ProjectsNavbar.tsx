import { FunctionComponent } from "react";

export const NavItem: FunctionComponent<{
  value: string | "all";
  handleFilterCategory: Function;
  active: string;
}> = ({ value, handleFilterCategory, active }) => {
  let className = "capitalize cursor-pointer hover:text-green";
  if (active === value) className += " text-green";

  return (
    <li className={className} onClick={() => handleFilterCategory(value)}>
      {value}
    </li>
  );
};

const ProjectNavbar: FunctionComponent<{
  handleFilterCategory: Function;
  active: string;
  categories: string[];
}> = ({ categories, ...props }) => {
  return (
    <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
      <NavItem value="all" {...props} />
      {categories &&
        categories.map((category) => <NavItem value={category} {...props} />)}
    </div>
  );
};

export default ProjectNavbar;
