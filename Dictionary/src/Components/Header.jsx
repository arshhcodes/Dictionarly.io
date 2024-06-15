import Button from "./Button";
import { fontActions } from "../store";
import { useSelector, useDispatch } from "react-redux";
// import Search from "./Search";
export default function Header() {
  const dispatch = useDispatch();
  const isDarkTheme = useSelector((state) => state.theme.darkTheme);
  const themeClasses = isDarkTheme
    ? "text-white bg-black fill-white"
    : undefined;

  function fontHandler(e) {
    dispatch(fontActions.changeFont(e.target.value));
  }

  return (
    <>
      <div className={`flex justify-between p-1 mb-10 ${themeClasses}`}>
        {/* Logo for the app */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill={isDarkTheme ? themeClasses : "#000000"}
          viewBox="0 0 256 256"
        >
          <path d="M232,72H160a40,40,0,0,0-32,16A40,40,0,0,0,96,72H24a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8H96a24,24,0,0,1,24,24,8,8,0,0,0,16,0,24,24,0,0,1,24-24h72a8,8,0,0,0,8-8V80A8,8,0,0,0,232,72ZM96,192H32V88H96a24,24,0,0,1,24,24v88A39.81,39.81,0,0,0,96,192Zm128,0H160a39.81,39.81,0,0,0-24,8V112a24,24,0,0,1,24-24h64ZM89.6,43.19a48,48,0,0,1,76.8,0,8,8,0,0,1-12.79,9.62,32,32,0,0,0-51.22,0A8,8,0,1,1,89.6,43.19Z"></path>
        </svg>
        <div className="flex w-1/4 justify-between   ">
          {/* drop-down list to select font */}
          <select
            name="font-style"
            className={`outline-none cursor-pointer -ml-10  border-r-2 w-50 ${themeClasses}`}
            onChange={fontHandler}
          >
            <option
              value="sans"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Sans Serif
            </option>
            <option
              value="serif"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Serif
            </option>
            <option
              value="mono"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Mono
            </option>
          </select>
          <Button></Button>
        </div>
      </div>
      {/* <Search></Search> */}
    </>
  );
}
