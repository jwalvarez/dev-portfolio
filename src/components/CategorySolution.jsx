import React from "react";

const CategorySolution = () => {
  return (
    <div className="pt-10 w-full my-auto flex overflow-auto ">
      <div className="p-10 bg-white rounded-4xl shadow-black cursor-default drop-shadow-[0px_0px_0_rgba(79,70,229,1)] hover:-translate-y-4 hover:drop-shadow-[0px_10px_0_rgba(79,70,229,1)] ease-linear duration-75">
        <div className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            fill="currentColor"
            className="bi bi-shop text-indigo-600 mr-4 my-auto"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0z"
            />
            <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z" />
          </svg>
          <h3 className="text-indigo-600 text-3xl font-bold">
            Soluciones E-commerce
          </h3>
        </div>
        <div className="flex mt-6">
          <img
            className="object-none object-center rounded-3xl drop-shadow-xl h-52 mr-4"
            src="https://gestion.pe/resizer/yMOUi5_9L_uYFu9KdrQaoaqxKbI=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/UB4WJTVWGFBJ5ML2WT5G7LSSSA.jpg"
            alt=""
          />
          <p className="text-indigo-600 text-xl font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
            soluta ex maiores accusamus unde repellat similique sit animi amet
            expedita veniam commodi voluptatibus quia possimus non facilis
            placeat voluptatum aperiam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CategorySolution;
