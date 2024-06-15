import { useSelector } from "react-redux";
import { useState } from "react";
export default function AudioButton() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioApi = useSelector((state) => {
    return state.data.data.at(0).phonetics.filter((obj) => obj.audio !== "")[0]
      .audio;
  });
  function audioHandler() {
    const audio = new Audio(audioApi);
    setIsPlaying(true);
    audio?.play();
    audio.onended = () => {
      setIsPlaying(false);
    };
  }
  return (
    <button
      onClick={audioHandler}
      className=" bg-purple-300 rounded-full w-16 h-16 flex items-center
      justify-center hover:bg-purple-500  "
      disabled={isPlaying}
    >
      {!isPlaying ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="#000000"
          viewBox="0 0 256 256"
          className="fill-gray-100"
        >
          <path d="M232.4,114.49,88.32,26.35a16,16,0,0,0-16.2-.3A15.86,15.86,0,0,0,64,39.87V216.13A15.94,15.94,0,0,0,80,232a16.07,16.07,0,0,0,8.36-2.35L232.4,141.51a15.81,15.81,0,0,0,0-27ZM80,215.94V40l143.83,88Z"></path>
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="#000000"
          viewBox="0 0 256 256"
          className="fill-gray-100"
        >
          <path d="M200,32H160a16,16,0,0,0-16,16V208a16,16,0,0,0,16,16h40a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm0,176H160V48h40ZM96,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V48A16,16,0,0,0,96,32Zm0,176H56V48H96Z"></path>
        </svg>
      )}
    </button>
  );
}
