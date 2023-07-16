function Dots({ currentSlide, id, moveSlideTodot }) {
  return (
    <div
      onClick={() => moveSlideTodot(id)}
      className={`mr-7 h-4 w-4 cursor-pointer rounded-full transition-all duration-500 ${
        currentSlide === id ? "bg-gray-600" : " bg-gray-300"
      }`}
    ></div>
  );
}

export default Dots;
