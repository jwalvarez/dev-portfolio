import "./App.css";
import Banner from "./components/Banner";
import Button from "./components/Button";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";
import img2 from "./assets/5e53523e8e24936f0704284f_peep-17.png";

import img from "./assets/young-male-designer-using-graphics-tablet-while-working-with-com.jpg";
import SolidImageLink from "./components/SolidImageLink";

function App() {
  return (
    <div className="App">
      <Header />
      <section className="pt-40 px-40 bg-cover bg-center bg-section-2 flex">
        {/* <section className="pt-20 px-40 bg-gradient-to-tr to-indigo-400 from-emerald-200 flex"> */}
        <Banner />
      </section>
      <section
        id="biografia"
        className="px-40 bg-gradient-to-tr from-indigo-600 to-indigo-400 py-32"
      >
        <h3 className="font-bold text-4xl mb-10text-black mb-10">
          Acerca de mi
        </h3>
        <div className="grid grid-cols-2">
          <div className="flex mr-10 mb-10">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                fill="currentColor"
                className="bi bi-lightning-charge mr-10"
                viewBox="0 0 16 16"
              >
                <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41 4.157 8.5z" />
              </svg>
            </span>
            <p className="font-medium text-md">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
              eaque nulla dolor dignissimos commodi neque ea, mollitia ab labore
              repellat animi adipisci nesciunt repudiandae illo saepe amet
              voluptate, officiis magnam.
            </p>
          </div>
          <div className="flex mr-10 mb-10">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                fill="currentColor"
                className="bi bi-cloud mr-10"
                viewBox="0 0 16 16"
              >
                <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
              </svg>
            </span>
            <p className="font-medium text-md">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
              eaque nulla dolor dignissimos commodi neque ea, mollitia ab labore
              repellat animi adipisci nesciunt repudiandae illo saepe amet
              voluptate, officiis magnam.
            </p>
          </div>
          <div className="flex mr-10 mb-10">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                fill="currentColor"
                className="bi bi-cloud mr-10"
                viewBox="0 0 16 16"
              >
                <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
              </svg>
            </span>
            <p className="font-medium text-md">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
              eaque nulla dolor dignissimos commodi neque ea, mollitia ab labore
              repellat animi adipisci nesciunt repudiandae illo saepe amet
              voluptate, officiis magnam.
            </p>
          </div>
          <div className="flex mr-10 mb-10">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                fill="currentColor"
                className="bi bi-lightning-charge mr-10"
                viewBox="0 0 16 16"
              >
                <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41 4.157 8.5z" />
              </svg>
            </span>
            <p className="font-medium text-md">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
              eaque nulla dolor dignissimos commodi neque ea, mollitia ab labore
              repellat animi adipisci nesciunt repudiandae illo saepe amet
              voluptate, officiis magnam.
            </p>
          </div>
        </div>
        <p className="font-medium text-md">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam eaque
          nulla dolor dignissimos commodi neque ea, mollitia ab labore repellat
          animi adipisci nesciunt repudiandae illo saepe amet voluptate,
          officiis magnam.
        </p>
        <h3 className="font-bold text-4xl mb-10text-black mb-10">Categorías</h3>
        Marketing, Aplicaciones UI, Ecommerce
        <h3 className="font-bold text-4xl mb-10text-black mb-10">
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

      <section id="ejemplo1" className="bg-cover bg-center bg-section-2">
        <div className="backdrop-blur-lg bg-indigo-200/40 py-10 px-40">
          <h3 className="font-bold text-4xl mb-4 text-white">
            Lorem ipsum dolor sit.
          </h3>
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
      </section>

      <section id="contactar" className="bg-slate-300">
        <div className="px-40 py-20">
          <h3 className="font-bold text-4xl mb-4 text-white">
            Lorem ipsum dolor sit.
          </h3>
          <h3 className="font-bold text-xl mb-4 text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <p className="font-normal text-md mb-4 text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            quo, saepe pariatur modi assumenda provident est nemo debitis?
          </p>
          <div className="grid grid-cols-2">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </section>

      <div className="h-auto flex px-40">
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
      <Footer />
      <a
        href="https://api.whatsapp.com/send?phone=573015351652&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n."
        className="float flex"
        target="_blank"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          className="bi bi-whatsapp m-auto"
          viewBox="0 0 16 16"
        >
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
        </svg>
      </a>
    </div>
  );
}

export default App;
