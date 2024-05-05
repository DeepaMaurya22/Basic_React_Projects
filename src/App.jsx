import "./components/accordian/styles.css";
import "./components/starRating/styles.css";
import Accordian from "./components/accordian/index";
import ImageSlider from "./components/imageSlider/index";
import StarRating from "./components/starRating";
import RandomColor from "./components/randomColor";
import LoadMore from "./components/loadMore";

function App() {
  return (
    <>
      <Accordian />
      <ImageSlider url={"https://picsum.photos/v2/list"} page={1} limit={5} />
      <StarRating />
      <RandomColor />
      <LoadMore />
    </>
  );
}

export default App;
