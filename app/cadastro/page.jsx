"use client";

import "./cadastro.css";
import Image from "next/image";
import logo from "../../public/logo.png";
import Button from "../../components/Button";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Cadastro() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const router = useRouter();

  const handleCheck = (event) => {
    event.preventDefault();

    setIsSubmitting(true);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setError("Por favor, insira um e-mail válido");
      setIsSubmitting(false);
      return;
    } else if (input1 !== input2) {
      setError("As senhas não conferem");
      setIsSubmitting(false);
      return;
    } else if (input1.length < 6) {
      setError("A senha deve ter no mínimo 6 caracteres");
      setIsSubmitting(false);
      return;
    } else if (input1.length === 0) {
      setError("Preencha o campo de senha");
      setIsSubmitting(false);
      return;
    } else if (input2.length === 0) {
      setError("Preencha o campo de confirmação de senha");
      setIsSubmitting(false);
      return;
    } else {
      setError("Sucesso");

      setTimeout(() => {
        router.push("/sobre");
      }, 1000);
    }
  };

  return (
    <div className="container">
      <div className="content">
        <Image className="logo" src={logo} alt="" />
        <div className="texts">
          <h1 className="title">Tulips and Books - Cadastro</h1>
          <form className="form" onSubmit={handleCheck}>
            <input className="input" type="text" name="username" placeholder="Name" />
            <input className="input" type="text" name="password" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input className="input" type="password" name="password" placeholder="Password" value={input1} onChange={(e) => setInput1(e.target.value)} />
            <input className="input" type="password" name="password" placeholder="Confirm Password" value={input2} onChange={(e) => setInput2(e.target.value)} />
            <Button text="Cadastre-se" onClick={handleCheck} disabled={isSubmitting} />
            {error && (<p className={`error-text ${error === "Sucesso" ? "success" : ""}`}>{error}</p>)}
          </form>
        </div>
      </div>
    </div>
  );
}