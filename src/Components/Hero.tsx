import img1 from "../assets/R_1.jpg";
import img2 from "../assets/R_2.jpg";
import img3 from "../assets/R_3.jpg";
import img4 from "../assets/R_4.jpg";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 min-w-min overflow-hidden">
      <div className="flex justify-center">
        <img className="w-full h-auto object-cover" src={img1} alt="Imagem principal" />
      </div>
      <div className="flex flex-col gap-4">
        <img className="w-full h-auto object-cover rounded-lg shadow-md" src={img2} alt="Imagem 2" />
        <img className="w-full h-auto object-cover rounded-lg shadow-md" src={img3} alt="Imagem 3" />
        <img className="w-full h-auto object-cover rounded-lg shadow-md" src={img4} alt="Imagem 4" />
      </div>
    </div>
  );
};

export default Hero;
