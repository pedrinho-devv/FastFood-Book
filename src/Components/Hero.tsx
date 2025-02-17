import img1 from "../assets/R_1.jpg";
import img2 from "../assets/R_2.jpg";
import img3 from "../assets/R_3.jpg";
import img4 from "../assets/R_4.jpg";

const Hero = () => {
  return (
    <div className="grid grid-cols-3 w-full border border-gray-400 overflow-hidden">
      {/* IMAGEM GRANDE - LADO ESQUERDO */}
      <div className="flex">
        <img className="w-[932px] h-[973px] object-cover" src={img1} alt="Imagem principal" />
      </div>

      {/* TRÊS IMAGENS MENORES - LADO DIREITO */}
      <div className="flex flex-col justify-center items-center gap-4">
        <img className="w-[388px] h-[313px] object-cover rounded-lg shadow-md" src={img2} alt="Imagem 2" />
        <img className="w-[388px] h-[313px] object-cover rounded-lg shadow-md" src={img3} alt="Imagem 3" />
        <img className="w-[388px] h-[313px] object-cover rounded-lg shadow-md" src={img4} alt="Imagem 4" />
      </div>
    </div>
  );
};

export default Hero;
