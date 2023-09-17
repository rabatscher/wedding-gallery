import React from "react";

function Login({ onChangePassword, password }) {
  return (
    <div className="grid place-content-center h-screen">
      <div className="text-center content-center justify-center flex items-center flex-col">
        <h2 className="text-4xl lg:text-5xl pb-12">Bildergalerie</h2>
        <img
          src="logo_lg.png"
          className="lg:w-[50vw] w-[75vw] animate-hover "
          alt="Hello"
        />
        <h1 className="text-4xl lg:text-5xl mt-12">Jessica & Pascal</h1>
        <h2 className="text-xl lg:text-2xl">4. August 2023</h2>
        <input
          placeholder="Passwort"
          value={password}
          onChange={(e) => onChangePassword(e.target.value)}
          className=" bg-[#eedfd3] border-0 border-b-2 border-black text-black placeholder-black text-center text-sm block focus:border-0  md:w-1/2 w-4/5 p-2.5 mt-6"
        />
      </div>
    </div>
  );
}

export default Login;
