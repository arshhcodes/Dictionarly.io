import { useSelector } from "react-redux";
import AudioButton from "./AudioButton";
import MainContent from "./MainContent";
export default function Content() {
  const data = useSelector((state) => state.data.data)?.at(0);
  const isAudio = data?.phonetics[0]?.audio;
  return (
    data && (
      <div className="">
        <div className="flex justify-between my-10">
          <div>
            {data.word && <h1 className="text-6xl font-bold">{data.word}</h1>}
            <p className="text-xl text-purple-600">
              {data.phonetics ? data.phonetics.map((obj) => obj.text)[0] : ""}
            </p>
          </div>
          {isAudio && <AudioButton></AudioButton>}
        </div>
        <MainContent></MainContent>
      </div>
    )
  );
}
