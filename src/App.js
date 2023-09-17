import { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Albums from "./components/Albums";

export default function App() {
  const [login, setLogin] = useState(false);
  const [password, setPassword] = useState("");
  const [album, setAlbum] = useState(0);

  function onChangePassword(password) {
    setPassword(password);
    if (password === "ab") setLogin(!login);
  }

  function handleSetAlbum(id) {
    setAlbum(id);
  }

  return (
    <div className="grid place-content-center h-screen">
      {login || (
        <Login onChangePassword={onChangePassword} password={password} />
      )}

      {login && (
        <div className="overflow-hidden">
          {album === 0 ? (
            <Albums onSetAlbum={handleSetAlbum} />
          ) : (
            <div onClick={() => handleSetAlbum(0)}>
              <button
                type="button"
                className=" text-white border-white border-2  py-2 hover:bg-[#f6b284] hover:border-0 hover:text-white px-3">
                <div className="flex flex-row align-middle">
                  <svg
                    className="w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                      clip-rule="evenodd"></path>
                  </svg>
                </div>
              </button>
              <h1 className="text-6xl">
                {album === 1 ? "Schloss Heidegg" : ""}
                {album === 2 ? "Schifflände" : ""}
                {album === 3 ? "Photobox" : ""}
              </h1>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
