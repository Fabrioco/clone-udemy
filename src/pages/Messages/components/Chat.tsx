import { FaDotCircle } from "react-icons/fa";

export const Chat = () => {
  return (
    <div className="w-full h-40 border-b border-gray-300 flex flex-col items-center justify-center cursor-pointer">
      <div className="flex w-full h-auto items-center">
        <img
          src="https://via.placeholder.com/150"
          alt="foto do professor"
          className="m-3 rounded-full w-20 h-20"
        />
        <p className="font-secondary w-full flex justify-around items-center">
          NOVA MENSAGEM
          <i className="shadow-md shadow-blue-500 rounded-full">
            <FaDotCircle size={10} color="#00ff" />
          </i>
        </p>
      </div>
      <p className="h-auto w-11/12 text-ellipsis whitespace-nowrap overflow-hidden text-gray-500">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, optio
        sequi culpa eveniet dicta quae nisi atque dolorum vero ipsum, sunt ea
        minima recusandae repellat incidunt ipsam necessitatibus vel sint?
      </p>
    </div>
  );
};
