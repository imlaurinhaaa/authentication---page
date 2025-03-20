"use client";

import "./cadastro.css"
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
          // Verifica se as senhas são diferentes
          setMatch(false); // Define que as senhas não conferem
          setError("As senhas não conferem"); // Define a mensagem de erro
        } else if (input1.length < 6) {
          // Verifica se a senha tem menos de 6 caracteres
          setMatch(false); // Define que as senhas não conferem
          setError("A senha deve ter no mínimo 6 caracteres"); // Define a mensagem de erro
        } else if (input1.length === 0) {
          // Verifica se o primeiro input está vazio
          setMatch(false); // Define que as senhas não conferem
          setError("Preencha o input 1"); // Define a mensagem de erro
        } else if (input2.length === 0) {
          // Verifica se o segundo input está vazio
          setMatch(false); // Define que as senhas não conferem
          setError("Preencha o input 2"); // Define a mensagem de erro
        } else {
          setMatch(true); // Define que as senhas conferem
          setError("Sucesso"); // Define a mensagem de sucesso
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