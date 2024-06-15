import Header from "./Components/Header";
import Search from "./Components/Search";
import Error from "./Components/Error";
import Content from "./Components/Content";
import { useSelector } from "react-redux";

function App() {
  const isDarkTheme = useSelector((state) => state.theme.darkTheme);
  const isError = useSelector((state) => state.data.isError);
  const family = useSelector((state) => state.font.font);

  return (
    <div
      className={`py-10 min-h-screen ${
        isDarkTheme ? "bg-black text-white" : "bg-white text-black"
      } font-${family}`}
    >
      <div className="max-w-xl  mx-auto ">
        <Header></Header>
        <Search></Search>
        {isError ? <Error></Error> : <Content></Content>}
      </div>
    </div>
  );
}

export default App;
