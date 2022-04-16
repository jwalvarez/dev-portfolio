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
        <div className="w-full backdrop-blur-lg bg-black/60 py-40 px-40">
          <Banner />
        </div>
      </section>
      <section
        id="quiensoy"
        className="px-40 bg-gradient-to-tr from-indigo-600 to-indigo-400 py-32"
      >
        <h3 className="font-bold text-4xl text-gray-light mb-10">
          Acerca de mi
        </h3>
        <div className="grid grid-cols-2">
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
        <div className="grid grid-cols-5">
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
        <div className="px-40 py-20 backdrop-blur-lg bg-black/40">
          <div className="pt-20 pb-6">
            <div className="flex justify-between">
              <h3 className="font-bold text-4xl mb-4 text-indigo-600">
                Proyectos y experiencia
              </h3>
              <Button label={"Ver todos"} type="" showIcon={false} />
            </div>
            <div className="w-full flex">
              <div className="my-auto w-1/2 pr-10">
                <h3 className="font-bold text-xl mb-4 text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h3>
                <p className="font-normal text-md mb-4 text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusantium quo, saepe pariatur modi assumenda provident est
                  nemo debitis?
                </p>
                <Button label={"Leer más"} />
              </div>
              <div className="w-3/4 my-auto flex overflow-auto">
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

      <section id="contactar">
        <div className="bg-gradient-to-tl from-purple-500 via-indigo-500 to-black h-auto flex px-40">
          <div className="w-1/2 flex">
            <img className="w-3/4" src={img2} alt="" />
          </div>
          <div className="my-auto w-1/2">
            <h2 className="font-black text-2xl my-auto">
              Escríbeme <br />
            </h2>
            <h2 className="font-black text-4xl my-auto">
              Puedes ponerte en contacto conmigo por WhatsApp <br />
            </h2>
            <h2 className="font-black text-2xl my-auto">
              Tambien puedes descargar mi Curriculum
            </h2>
            <div className="my-6 flex">
              <Button label={"Contactar"} />
              <Button label={"Descargar CV"} type="" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
