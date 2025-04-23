"use client";

import "./cadastro.css";
import Image from "next/image";
import logo from "../../public/logo.png";
import Button from "../../components/Button";

import { useState } from "react";

export default function Cadastro() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [match, setMatch] = useState(null);
  const [error, setError] = useState(null);

  const handleCheck = () => {
    if (input1 !== input2) {
      setMatch(false);
      setError("As senhas não conferem");
    } else if (input1.length < 6) {
      setMatch(false);
      setError("A senha deve ter no mínimo 6 caracteres");
    } else if (input1.length === 0) {
      setMatch(false);
      setError("Preencha o input 1");
    } else if (input2.length === 0) {
      setMatch(false);
      setError("Preencha o input 2");
    } else {
      setMatch(true);
      setError("Sucesso");
    }
  };

  return (
    <div className="container">
      <div className="content">
        <Image className="logo" src={logo} alt="" />
        <div className="texts">
          <h1 className="title">Tulips and Books - Cadastro</h1>
          <form className="form">
            <input className="input" type="text" name="username" placeholder="Name" />
            <input className="input" type="text" name="password" placeholder="Email" value={input1} onChange={(e) => setInput1(e.target.value)} />
            <input className="input" type="password" name="password" placeholder="Password" />
            <input className="input" type="password" name="password" placeholder="Confirm Password" value={input2} onChange={(e) => setInput2(e.target.value)} />
            <Button text="Cadastre-se" onClick={handleCheck} />
            {match !== null && <p>{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}