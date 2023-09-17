import { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Albums from "./components/Albums";

export default function App() {
  const [login, setLogin] = useState(false);
  const [password, setPassword] = useState("");

  function onChangePassword(password) {
    setPassword(password);
    if (password === "a") setLogin(!login);
  }

  return (
    <div className="grid place-content-center h-screen">
      {login || (
        <Login onChangePassword={onChangePassword} password={password} />
      )}

      {login && (
        <div>
          <Albums />
        </div>
      )}
    </div>
  );
}
