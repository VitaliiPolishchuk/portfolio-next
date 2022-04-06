import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import { useTheme } from "next-themes";
import Image from "next/image";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <Image
        src="https://media-exp1.licdn.com/dms/image/C4D03AQHMYgAeIcWROw/profile-displayphoto-shrink_400_400/0/1537532480762?e=1654128000&v=beta&t=NaFvegH7cf83DoOJnSziWvPOHi6n7wq84JOAqEVxYwI"
        alt="user avatar"
        className="w-32 h-32 mx-auto rounded-full"
        height="128px"
        width="128px"
        layout="intrinsic"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-green">Vitalii </span>
        Polishchuk
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200">
        Web Developer
      </p>
      <a
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200"
        href="/images/blink.jpg"
        download="blink.jpg"
      >
        <GiTie className="w-6 h-6" />
        <span>Download Resume</span>
      </a>

      <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full">
        <a href="https://github.com/VitaliiPolishchuk">
          <AiFillGithub className="w-8 h-8 cursor-pointer hover:text-green-200 dark:hover:text-green-700" />
        </a>
        <a href="https://www.linkedin.com/in/vitalii-polishchuk-26380715a/">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer hover:text-green-200 dark:hover:text-green-700" />
        </a>
      </div>

      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-200"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Kiyv,Ukraine</span>
        </div>
        <p className="my-2">vitalii0polishchuk@gmail.com</p>
        <p className="my-2">+380683221354</p>
      </div>
      <button
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none hover:from-green-300 hover:to-blue-300 dark:hover:from-green-700 dark:hover:to-blue-700"
        onClick={() => window.open("mailto:vitalii0polishchuk@gmail.com")}
      >
        Email Me
      </button>
      <button
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 hover:from-green-300 hover:to-blue-300 dark:hover:from-green-700 dark:hover:to-blue-700"
        onClick={changeTheme}
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default Sidebar;
