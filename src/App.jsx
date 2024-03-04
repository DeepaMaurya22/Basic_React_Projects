import "./components/accordian/styles.css";
import Accordian from "./components/accordian/index";
import ImageSlider from "./components/imageSlider/index";

function App() {
  return (
    <>
      <Accordian />
      <ImageSlider url={"https://picsum.photos/v2/list"} page={1} limit={5} />
    </>
  );
}

export default App;
