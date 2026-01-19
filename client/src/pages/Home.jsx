import { useNavigate } from "react-router-dom";
import Carousel from "../components/Carousel";
import ShopBy from "../components/ShopBy";
import GenInfo, { Brands } from "../components/GenInfo";

 const data = [
    { src: "/GenInfo/adidas.jpg", name: "Adidas", to: "/search/adidas" },
    { src: "/GenInfo/nike.png", name: "Nike", to: "/search/nike" },
    { src: "/GenInfo/skechers.jpg", name: "Skechers", to: "/search/skechers" },
    { src: "/GenInfo/puma.jpg", name: "Puma", to: "/search/puma" },
  ];

  
const Home = () => {
  const navigate = useNavigate();
  
  return (
    <div className="max-w-screen-xl xs:w-[95vw] xs:max-w-[95vw] md:w-full mx-auto ">
      <Carousel />
      <GenInfo />
      <Brands />
      <div className="md:w-full md:max-w-full xs:mx-2  sm:mx-auto ">
        <div className="flex flex-col items-center my-16 w-full">
          <p className="prose prose-2xl font-bold mb-6">Best Sellers</p>
          <div className="flex flex-wrap justify-center">
            {data.map((elem, id) => (
              <div
                key={id}
                className="relative w-[340px] h-[340px] mx-2 mb-6 hover:text-white"
              >
                <div className="absolute w-full flex justify-center items-center top-4  ">
                  <p className="logo font-semibold z-50 ">{elem.name}</p>
                </div>
                <img
                  src={elem.src}
                  alt={elem.name}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => navigate(elem.to)}
                  className="absolute inset-0 flex items-center justify-center
                                 bg-gray-800 text-white opacity-0 hover:opacity-80 transition-opacity duration-200"
                >
                  Explore →
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="prose prose-2xl">
          <ShopBy title="Top Rated" filter="topRated" />
        </div>
      </div>
    </div>
  );
};

export default Home;
