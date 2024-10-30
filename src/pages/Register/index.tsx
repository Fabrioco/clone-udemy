import React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Register() {
  const passwordInputRef = React.useRef<HTMLInputElement>(null);
  const [showPassword, setShowPassword] = React.useState<boolean>(false);
  const [acceptedTerms, setAcceptedTerms] = React.useState<boolean>(false);

  const [emailInput, setEmailInput] = React.useState<string>("");
  const [passwordInput, setPasswordInput] = React.useState<string>("");

  const togglePassword = () => {
    const input = passwordInputRef.current;
    if (input) {
      input.type = input.type === "password" ? "text" : "password";
      setShowPassword(!showPassword);
    }
  };

  const handleAcceptTerms = () => setAcceptedTerms(!acceptedTerms);

  const handleRegister = () => {
    if (!acceptedTerms) return;
    if (!emailInput || !passwordInput) {
      alert("Preencha todos os campos");
      return;
    }
  };

  return (
    <div className="container flex flex-col bg-white w-[600px] h-[700px] items-center justify-around rounded-2xl border border-gray-300">
      <h1 className="font-primary text-4xl uppercase">Registrar</h1>
      <form
        onSubmit={handleRegister}
        className="w-6/12 text-xl flex flex-col items-center justify-between font-secondary gap-8"
      >
        <div className="flex flex-col justify-center w-full gap-1">
          <label htmlFor="nameInputRegister">Nome</label>
          <input
            type="text"
            name="nameInputRegister"
            className="w-full bg-gray-200 px-4 py-2 rounded-md outline-none"
            placeholder="Nome aqui"
          />
        </div>
        <div className="flex flex-col justify-center w-full gap-1">
          <label htmlFor="emailInputRegister">Email</label>
          <input
            type="email"
            name="emailInputRegister"
            placeholder="exemplo@gmail.com"
            className="w-full bg-gray-200 px-4 py-2 rounded-md outline-none"
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
          />
        </div>
        <div className="flex flex-col justify-center w-full gap-1">
          <label htmlFor="passwordInputRegister">Senha</label>
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
        <div
          className="flex w-full items-center justify-between"
          onClick={handleAcceptTerms}
        >
          <label htmlFor="keepLoggedCheckbox">Li e aceito os termos.</label>
          <input
            type="checkbox"
            name="keepLoggedCheckbox"
            className="w-8 h-8 appearance-none rounded-full checked:bg-gray-600 border-2 cursor-pointer"
            checked={acceptedTerms}
          />
        </div>
        <button
          className="bg-gray-200 px-8 py-4 font-tertiary uppercase rounded-md shadow-sm shadow-black active:bg-gray-400 active:shadow-md active:shadow-gray-400"
          type="submit"
        >
          Registrar
        </button>
      </form>
      <div className="w-1/2 font-secondary text-lg">
        <p>
          Já tem uma conta?{" "}
          <a href="/login" className="hover:underline">
            Clique aqui
          </a>
        </p>
      </div>
    </div>
  );
}
