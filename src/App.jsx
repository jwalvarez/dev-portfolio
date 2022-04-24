import "./App.css";
import Banner from "./components/Banner";
import Button from "./components/Button";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";
import img2 from "./assets/5e53523e8e24936f0704284f_peep-17.png";

import img from "./assets/young-male-designer-using-graphics-tablet-while-working-with-com.jpg";
import SolidImageLink from "./components/SolidImageLink";
import TopHeader from "./components/TopHeader";
import CategorySolution from "./components/CategorySolution";

const aboutMe = [
  {
    icon: "M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41 4.157 8.5z",
    message:
      "111 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam eaque nulla dolor dignissimos commodi neque ea, mollitia ab labore repellat animi adipisci nesciunt repudiandae illo saepe ametvoluptate, officiis magnam.",
  },
  {
    icon: "M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0v-.214c-2.162-1.241-4.49-1.843-6.912-2.083l.405 2.712A1 1 0 0 1 5.51 15.1h-.548a1 1 0 0 1-.916-.599l-1.85-3.49a68.14 68.14 0 0 0-.202-.003A2.014 2.014 0 0 1 0 9V7a2.02 2.02 0 0 1 1.992-2.013 74.663 74.663 0 0 0 2.483-.075c3.043-.154 6.148-.849 8.525-2.199V2.5zm1 0v11a.5.5 0 0 0 1 0v-11a.5.5 0 0 0-1 0zm-1 1.35c-2.344 1.205-5.209 1.842-8 2.033v4.233c.18.01.359.022.537.036 2.568.189 5.093.744 7.463 1.993V3.85zm-9 6.215v-4.13a95.09 95.09 0 0 1-1.992.052A1.02 1.02 0 0 0 1 7v2c0 .55.448 1.002 1.006 1.009A60.49 60.49 0 0 1 4 10.065zm-.657.975 1.609 3.037.01.024h.548l-.002-.014-.443-2.966a68.019 68.019 0 0 0-1.722-.082z",
    message:
      "222 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam eaque nulla dolor dignissimos commodi neque ea, mollitia ab labore repellat animi adipisci nesciunt repudiandae illo saepe ametvoluptate, officiis magnam.",
  },
  {
    icon: "M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z",
    message:
      "333 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam eaque nulla dolor dignissimos commodi neque ea, mollitia ab labore repellat animi adipisci nesciunt repudiandae illo saepe ametvoluptate, officiis magnam.",
  },
  {
    icon: "M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41 4.157 8.5z",
    message:
      "444 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam eaque nulla dolor dignissimos commodi neque ea, mollitia ab labore repellat animi adipisci nesciunt repudiandae illo saepe ametvoluptate, officiis magnam.",
  },
];

function App() {
  return (
    <div className="App">
      <TopHeader />
      <Header />
      <section
        id="banner"
        className="-mt-20 bg-cover bg-center bg-section-2 flex"
      >
        <div className="md:px-40 px-10 w-full backdrop-blur-lg bg-black/60 py-40">
          <Banner />
        </div>
      </section>
      <section
        id="quiensoy"
        className="md:px-40 px-10 bg-gradient-to-tr from-indigo-600 to-indigo-400 py-32"
      >
        <h3 className="font-bold text-4xl text-gray-light mb-10">
          Acerca de mi
        </h3>
        <div className="grid lg:grid-cols-2 grid-cols-1">
          {aboutMe.map((description) => (
            <div className="flex mr-10 mb-10">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  fill="currentColor"
                  className="bi mr-10 text-gray-light"
                  viewBox="0 0 16 16"
                >
                  <path d={description.icon} />
                </svg>
              </span>
              <p className="font-medium text-md text-gray-light">
                {description.message}
              </p>
            </div>
          ))}
        </div>
        <div className="p-6 bg-black/20 rounded-md">
          <p className="font-medium text-md text-gray-light/80">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
            eaque nulla dolor dignissimos commodi neque ea, mollitia ab labore
            repellat animi adipisci nesciunt repudiandae illo saepe amet
            voluptate, officiis magnam.
          </p>
        </div>
        <h3 className="font-bold text-4xl text-gray-light my-10">
          Tecnologías
        </h3>
        <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2">
          <SolidImageLink
            img={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png"
            }
          />
          <SolidImageLink
            img={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png"
            }
          />
          <SolidImageLink
            img={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/800px-Vue.js_Logo_2.svg.png"
            }
          />
          <SolidImageLink
            img={
              "https://raw.githubusercontent.com/flutter/website/master/src/_assets/image/flutter-logomark-320px.png"
            }
          />
          <SolidImageLink
            img={
              "https://s.w.org/style/images/about/WordPress-logotype-wmark.png"
            }
          />
        </div>
      </section>

      <section id="proyectos" className="bg-cover bg-center bg-section-2">
        <div className="md:px-40 px-10 py-20 bg-black/60">
          <div className="pt-20 pb-6">
            <div className="flex justify-between">
              <h3 className="font-bold lg:text-4xl text-2xl my-auto text-indigo-600">
                Proyectos y experiencia
              </h3>
              <Button label={"Ver todos"} type="" showIcon={false} />
            </div>
            <div className="w-full lg:flex block">
              <div className="my-auto lg:w-1/2 md:pr-10">
                <h3 className="font-bold text-xl my-4 text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h3>
                <p className="font-normal text-md mb-4 text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusantium quo, saepe pariatur modi assumenda provident est
                  nemo debitis?
                </p>
                <Button label={"Leer más"} />
              </div>
              <div className="lg:w-3/4 my-auto flex overflow-auto">
                <Card />
                <Card />
                <Card />
                <Card />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1">
            <CategorySolution />
            <CategorySolution />
            <CategorySolution />
          </div>
        </div>
      </section>
      <section id="contactar" className="">
        <div className="py-20 bg-gradient-to-bl from-indigo-400 to-indigo-500 h-auto flex px-40 w-full">
          <Banner />
        </div>
      </section>
      {/* <a
        href="https://wa.me/5211234567890?text=Me%20gustaría%20saber%20el%20precio%20del%20coche"
        className="fixed z-50 w-60 h-60 bg-red-600 right-40 b-40"
        target="_blank"
      >
        {" "}
        asd
        <i class="fa fa-whatsapp whatsapp-icon"></i>
      </a> */}

      <div className="rounded-full fixed bottom-3 right-3 p-4 cursor-pointer ">
        <div className="relative">
          <a className="absolute my-auto w-full h-full bg-green/80 rounded-full animate-ping-slow"></a>
          <a
            className="relative z-50"
            href="https://wa.me/571111111111?text=Hola!%20"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              className="bi bi-whatsapp text-gray-light bg-green rounded-full p-1"
              fill="currentColor"
              viewBox="0 0 26 26"
            >
              <path d="M19.145 7.41909C18.3822 6.64915 17.4737 6.03875 16.4726 5.62343C15.4714 5.20812 14.3976 4.99621 13.3138 5.00005C8.77208 5.00005 5.07072 8.70037 5.06656 13.2431C5.06656 14.6981 5.4472 16.1135 6.16584 17.3667L5 21.6401L9.37216 20.494C10.5817 21.1522 11.9367 21.4972 13.3138 21.4976H13.3179C17.8606 21.4976 21.561 17.7973 21.5651 13.2504C21.5662 12.1667 21.3528 11.0936 20.9372 10.0928C20.5217 9.092 19.9123 8.18332 19.144 7.41909H19.145ZM13.3138 20.1019C12.0855 20.1023 10.8799 19.7718 9.82352 19.1451L9.57392 18.9953L6.98016 19.6755L7.6728 17.1452L7.51056 16.8841C6.82396 15.7925 6.46083 14.5286 6.46328 13.2389C6.46328 9.46789 9.53856 6.39157 13.3179 6.39157C14.2183 6.38996 15.1101 6.56658 15.9419 6.91125C16.7736 7.25592 17.529 7.76183 18.1643 8.39981C18.8019 9.0353 19.3073 9.79073 19.6514 10.6225C19.9956 11.4543 20.1716 12.346 20.1694 13.2462C20.1653 17.0308 17.09 20.1019 13.3138 20.1019V20.1019ZM17.0734 14.9705C16.8685 14.8676 15.8566 14.3694 15.6662 14.2987C15.477 14.2311 15.3386 14.1957 15.2034 14.4017C15.0651 14.6065 14.6699 15.0735 14.5514 15.2077C14.4328 15.346 14.3101 15.3616 14.1042 15.2597C13.8993 15.1557 13.2347 14.9393 12.4485 14.2353C11.8349 13.6893 11.4241 13.0133 11.3014 12.8084C11.1828 12.6025 11.2899 12.4922 11.3929 12.3893C11.4834 12.2977 11.5978 12.148 11.7007 12.0294C11.8047 11.9109 11.839 11.8235 11.9066 11.6862C11.9742 11.5469 11.942 11.4283 11.891 11.3253C11.839 11.2224 11.4282 10.2063 11.2546 9.79653C11.0882 9.39197 10.9186 9.44813 10.7918 9.44293C10.6732 9.43565 10.5349 9.43565 10.3966 9.43565C10.2921 9.43825 10.1893 9.46241 10.0946 9.50661C9.99997 9.55082 9.91545 9.61411 9.8464 9.69253C9.65712 9.89845 9.12776 10.3966 9.12776 11.4127C9.12776 12.4288 9.86616 13.4053 9.97016 13.5437C10.0721 13.682 11.4199 15.7609 13.4885 16.6553C13.9773 16.8685 14.3621 16.9944 14.6626 17.0901C15.1566 17.2481 15.6028 17.2242 15.9585 17.1733C16.3537 17.1129 17.1763 16.6741 17.35 16.1925C17.5206 15.71 17.5206 15.2981 17.4686 15.2118C17.4176 15.1245 17.2793 15.0735 17.0734 14.9705V14.9705Z" />
            </svg>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
