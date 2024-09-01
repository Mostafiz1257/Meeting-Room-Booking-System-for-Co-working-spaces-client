import { FadeLoader } from "react-spinners";

const Loader = () => {
  return (
    <div
      className="
      h-[70vh]
      flex 
      flex-col 
      justify-center 
      items-center 
    "
    >
      <FadeLoader height={15} width={5} radius={2} color="#003580" />
    </div>
  );
};

export default Loader;
