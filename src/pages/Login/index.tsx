import React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Login() {
  const passwordInput = React.useRef<HTMLInputElement | null>(null);
  const [showPassword, setShowPassword] = React.useState<boolean>(false);
  const togglePassword = () => {
    if (passwordInput.current) {
      passwordInput.current.type =
        passwordInput.current.type === "password" ? "text" : "password";
      setShowPassword(!showPassword);
    }
  };

  return (
    <div className="container mx-auto w-[600px] h-[700px] bg-white rounded-2xl flex flex-col items-center justify-around border border-gray-300">
      <h1 className="font-primary text-4xl uppercase">Login</h1>
      <form className="w-6/12 text-xl flex flex-col items-center justify-between font-secondary gap-8">
        <div className="flex flex-col justify-center w-full gap-1">
          <label htmlFor="emailInputLogin">Email</label>
          <input
            type="text"
            placeholder="exemplo@gmail.com"
            name="emailInputLogin"
            className="w-full bg-gray-200 px-4 py-2 rounded-md outline-none"
          />
        </div>
        <div className="flex flex-col justify-center w-full gap-1">
          <label htmlFor="passwordInputLogin">Senha</label>
          <div className="flex bg-gray-200 rounded-md w-full px-4 py-2 ">
            <input
              className="bg-gray-200 outline-none"
              type="password"
              name="passwordInputLogin"
              placeholder="********"
              min={8}
              ref={passwordInput}
              autoComplete="off"
            />
            <i
              className="cursor-pointer text-gray-400"
              onClick={togglePassword}
            >
              {showPassword ? <FaEye size={25} /> : <FaEyeSlash size={25} />}
            </i>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <input
            type="checkbox"
            name="keepLoggedCheckbox"
            className="w-8 h-8 appearance-none rounded-full checked:bg-gray-600 border-2 cursor-pointer"
          />
          <label htmlFor="keepLoggedCheckbox">Permanecer conectado?</label>
        </div>
        <button className="bg-gray-200 px-8 py-4 font-tertiary uppercase rounded-md shadow-sm shadow-black active:bg-gray-400 active:shadow-md active:shadow-gray-400">
          Confirmar
        </button>
      </form>
      <div className="w-1/2 font-secondary text-lg">
        <p>
          Esqueceu a{" "}
          <span className="hover:underline cursor-pointer">senha?</span>
        </p>
        <p>
          Não tem login?{" "}
          <a href="/register" className="hover:underline">
            Clique aqui
          </a>
        </p>
      </div>
    </div>
  );
}
