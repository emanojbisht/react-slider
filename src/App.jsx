import { useState } from "react";
import Slider from "./Slider";
import Dots from "./Dots";

const users = [
  {
    img: "https://hips.hearstapps.com/hmg-prod/images/singer-and-actress-selena-gomez-poses-as-she-arrives-for-news-photo-1586786642.jpg?crop=0.668xw:1.00xh;0.0323xw,0&resize=1200:*",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia nesciunt aliquid ex atque quibusdam. Rerum officia unde suscipit quo sunt hic illo fugit.",
    name: "Selena Gomez",
    pos: "Senior Product Manager",
    city: "EDP Comercial",
    id: 0,
  },
  {
    img: "https://media.glamourmagazine.co.uk/photos/63fc99bb3ca80ea44878250d/1:1/w_1280,h_1280,c_limit/ZENDAYA%20NAACP%20270223%20default-GettyImages-1469620256.jpg",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia nesciunt aliquid ex atque quibusdam. Rerum officia unde suscipit quo sunt hic illo fugit.",
    name: "Zendaya",
    pos: "Product Manager",
    city: "EDP Comercial",
    id: 1,
  },
  {
    img: "https://hips.hearstapps.com/hmg-prod/images/edc-taylor-swift-homes1-6463a3cf7da66.jpg?crop=0.391xw:0.782xh;0.609xw,0.0769xh&resize=1200:*",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia nesciunt aliquid ex atque quibusdam. Rerum officia unde suscipit quo sunt hic illo fugit.",
    name: "Taylor Swift",
    pos: "Manager",
    city: "EDP Comercial",
    id: 2,
  },
  {
    img: "https://www.pinkvilla.com/pics/480x480/deepika_padukone_modelling_career_202209.jpg",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia nesciunt aliquid ex atque quibusdam. Rerum officia unde suscipit quo sunt hic illo fugit.",
    name: "Deepika padukone",
    pos: "Junior Manager",
    city: "EDP Comercial",
    id: 3,
  },
  {
    img: "https://media1.popsugar-assets.com/files/thumbor/cAHcieCgYfMQ_0DiJzQK5nTyNjQ/613x51:2226x1664/fit-in/500x500/filters:format_auto-!!-:strip_icc-!!-/2020/10/26/001/n/1922398/c8450c525f97556842e0e2.16322452_/i/Will-Smith.jpg",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia nesciunt aliquid ex atque quibusdam. Rerum officia unde suscipit quo sunt hic illo fugit.",
    name: "Will Smith",
    pos: "Executive",
    city: "EDP Comercial",
    id: 4,
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPtg8blrA-wIQCvphS6g95QO-68HG2OK0uJw&usqp=CAU",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia nesciunt aliquid ex atque quibusdam. Rerum officia unde suscipit quo sunt hic illo fugit.",
    name: "Tom Holland",
    pos: "Intern",
    city: "EDP Comercial",
    id: 5,
  },
];

const maxSlides = users.length;

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  function slidePositive() {
    if (currentSlide === maxSlides - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide((prev) => ++prev);
    }
  }

  function slideNegative() {
    if (currentSlide === 0) {
      setCurrentSlide(maxSlides - 1);
    } else {
      setCurrentSlide((prev) => --prev);
    }
  }

  function moveSlideTodot(dotID) {
    setCurrentSlide(dotID);
  }

  return (
    <div className="relative mx-auto my-0 h-[340px] max-w-screen-lg overflow-hidden">
      {users.map((user, i) => (
        <Slider
          user={user}
          key={user.id}
          index={i}
          currentSlide={currentSlide}
          slidePositive={slidePositive}
          slideNegative={slideNegative}
        />
      ))}
      <div class="absolute bottom-0 left-[50%] flex -translate-x-1/2">
        {users.map((user) => (
          <Dots
            key={user.id}
            id={user.id}
            currentSlide={currentSlide}
            moveSlideTodot={moveSlideTodot}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
