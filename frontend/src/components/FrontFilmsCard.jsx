const FrontFilmsCard = ({
  image,
  title,
  price,
  newPrice,
  discount,
  pack,
  thickness,
  size,
  newP,
}) => {
  return (
    <div className="px-3 w-full  bg-white border rounded-lg mb-4 ">
      <div className="relative flex w-full justify-between items-center ">
        <div className="w-28 h-32">
          <img
            src={image}
            alt="frontFilms"
            className="w-full h-full object-scale-down mix-blend-multiply"
          />
        </div>

        <img
          src={"/assets/new.png"}
          alt="newProduct"
          className={`absolute w-[60px] h-[60px] -right-5 -top-1 ${
            newP ? "block" : "hidden"
          }`}
        />
        <div>
          <h1 className="text-[16px] font-bold text-txtGray">{title}</h1>
          <div className="flex justify-center items-center gap-2 flex-wrap ">
            <div className="flex flex-col">
              <span
                className={`relative font-bold text-[14px] text-txtGray ${
                  discount ? "line-through-red" : ""
                }`}
              >
                ${price}
              </span>
              <span
                className={`font-bold text-[14px] text-txtGray ${
                  discount ? "" : "hidden"
                }`}
              >
                ${newPrice}
              </span>
            </div>

            <span className=" text-[14px] text-txtGray">Pack:{pack}</span>
            <span className=" text-[14px] text-txtGray">
              Thickness:{thickness}
            </span>
            <span className=" text-[14px] text-txtGray">Size:{size}</span>
          </div>
        </div>

        <button className="bg-bgBlue font-bold text-white w-[80px] h-[30px] rounded-lg text-sm">
          ADD
        </button>
      </div>
    </div>
  );
};

export default FrontFilmsCard;
