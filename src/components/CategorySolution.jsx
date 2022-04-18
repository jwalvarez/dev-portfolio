import React from "react";
import Badge from "./Badge";

const CategorySolution = () => {
  return (
    <div className="pt-10 w-full my-auto flex overflow-auto ">
      <div className="p-10 bg-black/5 rounded-4xl border-[1px] border-indigo-200/10 cursor-default backdrop-blur-xl hover:-translate-y-4 hover:shadow-[0px_10px_0_rgba(79,70,229,1)] ease-linear duration-75">
        <div className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="bi bi-shop text-gray-light mr-4 my-auto md:w-10 w-7 h-auto"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0z"
            />
            <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z" />
          </svg>
          <h3 className="text-gray-light md:text-3xl text-xl font-bold">
            Soluciones Ecommerce
          </h3>
        </div>
        <div className="lg:flex block mt-6">
          <div className="lg:w-2/6 w-full mr-6">
            <img
              className="h-full object-cover my-auto rounded-2xl drop-shadow-xl"
              // src="./src/assets/person-adding-clothes-to-cart-closeup-for-online-shopping-campaign.jpg"
              src="./src/assets/young-male-designer-using-graphics-tablet-while-working-with-com.jpg"
              alt=""
            />
          </div>
          <div className="lg:w-4/6 w-full lg:m-0 mt-4 flex ">
            <div className="">
              <p className="text-indigo-200 md:text-xl text-lg font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolores, soluta ex maiores accusamus unde repellat similique sit
                animi amet expedita veniam commodi voluptatibus quia possimus
                non facilis placeat voluptatum aperiam.
              </p>
              <div className="flex my-4">
                <Badge
                  text={"Beauty"}
                  bgColor={"bg-indigo-200/30"}
                  textColor={"text-indigo-900"}
                />
                <Badge
                  text={"Beauty"}
                  bgColor={"bg-red-200/30"}
                  textColor={"text-red-900"}
                />
                <Badge
                  text={"Beauty"}
                  bgColor={"bg-cyan-200/30"}
                  textColor={"text-cyan-900"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategorySolution;
