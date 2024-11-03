import React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useAuth } from "../../contexts/authContext";

export default function Login() {
  const passwordInputRef = React.useRef<HTMLInputElement | null>(null);
  const [showPassword, setShowPassword] = React.useState<boolean>(false);
  const [emailInput, setEmailInput] = React.useState<string>("");
  const [passwordInput, setPasswordInput] = React.useState<string>("");

  const { signIn } = useAuth();

  const togglePassword = () => {
    const input = passwordInputRef.current;
    if (input) {
      input.type = input.type === "password" ? "text" : "password";
      setShowPassword(!showPassword);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput || !passwordInput) {
      alert("Preencha todos os campos");
      return;
    }
    signIn(emailInput, passwordInput);
  };

  return (
    <div className="container mx-auto w-[600px] h-[700px] bg-white rounded-2xl flex flex-col items-center justify-around border border-gray-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <h1 className="font-primary text-4xl uppercase">Login</h1>
      <form
        className="w-6/12 text-xl flex flex-col items-center justify-between font-secondary gap-8"
        onSubmit={handleLogin}
      >
        <div className="flex flex-col justify-center w-full gap-1">
          <label htmlFor="emailInputLogin">Email</label>
          <input
            type="text"
            placeholder="exemplo@gmail.com"
            name="emailInputLogin"
            className="w-full bg-gray-200 px-4 py-2 rounded-md outline-none"
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
          />
        </div>
        <div className="flex flex-col justify-center w-full gap-1">
          <label htmlFor="passwordInputLogin">Senha</label>
          <div className="flex bg-gray-200 rounded-md w-full px-4 py-2 ">
            <input
              className="w-full bg-gray-200 rounded-md outline-none"
              type="password"
              name="passwordInputLogin"
              placeholder="********"
              min={8}
              ref={passwordInputRef}
              autoComplete="off"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
            />
            <i
              className="cursor-pointer text-gray-400"
              onClick={togglePassword}
            >
              {showPassword ? <FaEye size={25} /> : <FaEyeSlash size={25} />}
            </i>
          </div>
        </div>
        <div className="flex w-full items-center justify-between">
          <label htmlFor="keepLoggedCheckbox">Permanecer conectado?</label>
          <input
            type="checkbox"
            name="keepLoggedCheckbox"
            className="w-8 h-8 appearance-none rounded-full checked:bg-gray-600 border-2 cursor-pointer"
          />
        </div>
        <button
          className="bg-gray-200 px-8 py-4 font-tertiary uppercase rounded-md shadow-sm shadow-black active:bg-gray-400 active:shadow-md active:shadow-gray-400"
          type="submit"
        >
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
