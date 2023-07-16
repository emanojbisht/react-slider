function Slider({ user, index, currentSlide, slidePositive, slideNegative }) {
  return (
    <div
      className={`delay-400 absolute top-0 flex h-[340px] transition-all ease-in`}
      style={{ transform: `translateX(${100 * (index - currentSlide)}%) ` }}
    >
      <div
        className={`relative mx-24 my-[50px] flex items-center  gap-[86px] rounded-lg bg-green-600 py-[32px] pb-10 pl-[86px] pr-[48px] `}
      >
        <img
          className="h-[200px] scale-150 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
          src={user.img}
          alt={user.name}
        />
        <div>
          <blockquote className="mb-[32px] text-lg font-semibold text-white">
            {user.review}
          </blockquote>
          <p className="mb-[4px] text-[14px] text-white">{user.name}</p>
          <p className="text-[12px] text-white">
            {user.pos} at {user.city}
          </p>
          <button
            className="absolute left-[-24px] top-[115px] flex  h-[40px] w-[40px] items-center justify-center rounded-full bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
            onClick={slideNegative}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6 text-green-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            className="absolute right-[-24px] top-[115px] flex h-[40px] w-[40px] items-center justify-center rounded-full bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
            onClick={slidePositive}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6 text-green-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Slider;
