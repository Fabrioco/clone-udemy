import { SidebarNav } from "../../components/sideBarNav";
import { CourseCard } from "./components/CourseCard";

export default function MyCourses() {
  return (
    <div className="w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-row justify-around">
      <div className="min-h-full pl-20 py-10">
        <SidebarNav />
      </div>
      <div className="flex flex-col w-full h-full py-10 pl-10 pr-20 rounded-md">
        <div className="w-full h-52 flex flex-col justify-around bg-[#282828] rounded-md">
          <h1 className="text-4xl font-primary text-white w-9/12 mx-auto">
            Meus cursos
          </h1>
          <div className="flex w-full justify-around text-white text-2xl font-tertiary">
            <button className="underline">Todos Cursos</button>
            <button>Favoritos</button>
            <button>Concluídos</button>
          </div>
        </div>
        <div className="w-full h-full flex gap-5 flex-wrap mx-auto justify-center overflow-y-auto bg-white py-10 rounded-b-md">
          <CourseCard />
        </div>
      </div>
    </div>
  );
}
