
export default function Teacher() {
  return (
    <div className="w-screen h-screen flex py-10">
      <div className="w-full h-full bg-white rounded-2xl flex flex-col items-center justify-around">
        <div className="w-10/12 h-auto flex items-center justify-center">
          <div className="w-1/2">
            <h1 className="text-3xl font-primary uppercase">Quem sou eu?</h1>
            <p className="text-xl font-secondary w-10/12 leading-loose ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam
              error voluptatum recusandae doloribus! Sapiente autem harum quae
              accusamus dicta doloribus, vero beatae natus nemo odit officiis
              deleniti aut adipisci temporibus?
            </p>
          </div>
          <img
            src="https://via.placeholder.com/300"
            alt=""
            className="rounded-full w-80 h-80"
          />
        </div>

        <div className="w-10/12 h-auto flex flex-col items-center justify-evenly">
          <h2 className="font-primary">Certificados</h2>
          <div className="w-full h-auto flex items-center gap-2 justify-start">
            <div>
              <img
                src="https://via.placeholder.com/300"
                alt="pdf do certificado"
                className="w-[300px] h-[200px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
