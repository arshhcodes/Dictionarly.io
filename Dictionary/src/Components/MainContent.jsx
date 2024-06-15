import { useSelector } from "react-redux";
import { fetcher } from "../store";
import { useDispatch } from "react-redux";
import Footer from "./Footer";
export default function MainContent() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.data)?.at(0).meanings;

  function fetchHandler(e) {
    const newWord = e.target.textContent.slice(0, -1);
    dispatch(fetcher(newWord));
  }
  return (
    <>
      <div>
        {data.map((obj, index) => {
          return (
            <div key={index}>
              <div className="my-8">
                <h3 className="italic font-bold text-xl ">
                  {obj.partOfSpeech}
                </h3>
                <hr />
              </div>
              <p className="text-lg">Meaning</p>
              <ul className="mb-5">
                {obj.definitions.map((item, index) => (
                  <li key={index}>
                    <ul className="flex items-center list-disc list-outside marker:text-purple-700 ml-5 ">
                      <li className=" ">{item.definition}</li>
                    </ul>
                    <p className="ml-10 text-gray-500 mb-3">{item?.example}</p>
                  </li>
                ))}
              </ul>
              {obj.synonyms.toString() && (
                <div className="flex gap-2 items-center my-5">
                  <p className="text-gray-600 text-lg">Synonyms</p>
                  <p className="text-sm text-purple-600" onClick={fetchHandler}>
                    {obj.synonyms.map((item, index) => (
                      <button onClick={fetchHandler} key={index}>
                        {item}/
                      </button>
                    ))}
                    {/* {obj.synonyms.join(",")} */}
                  </p>
                </div>
              )}
              {obj.antonyms.toString() && (
                <div className="flex gap-5 items-center my-5">
                  <p className="text-gray-600 text-lg">Antonyms</p>
                  <p className="text-sm text-purple-600">
                    {obj.antonyms.map((item, index) => (
                      <button onClick={fetchHandler} key={index}>
                        {item}/
                      </button>
                    ))}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <hr />
      <Footer></Footer>
    </>
  );
}
