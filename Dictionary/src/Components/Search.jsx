import { fetcher } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { useRef, useState } from "react";
export default function Search() {
  const [input, setInput] = useState("");
  const inputRef = useRef("");
  const isDarkTheme = useSelector((state) => state.theme.darkTheme);
  const themeClasses = isDarkTheme
    ? "text-white bg-black fill-white"
    : undefined;
  const dispatch = useDispatch();
  function searchHandler(e) {
    e.preventDefault();
    const word = e.target[0].value;
    dispatch(fetcher(word));
    setInput("");
  }
  function inputHandler(e) {
    setInput(e.target.value);
  }
  return (
    <form
      className={`bg-gray-100 p-3  w-full rounded-lg h-12 font-bold flex justify-between border-2 border-gray-100  hover:border-purple-500 ${themeClasses}`}
      onSubmit={searchHandler}
    >
      <input
        className=" bg-gray-100 text-black placeholder:text-gray-400  transition-all outline-none w-11/12"
        type="text"
        ref={inputRef}
        value={input}
        onChange={inputHandler}
        placeholder="Search for any word..."
      />
      <button type="submit">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="#000000"
          viewBox="0 0 256 256"
          className="fill-purple-500"
        >
          <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
        </svg>
      </button>
    </form>
  );
}
