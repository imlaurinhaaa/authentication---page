import "./cadastro.css"
import Image from "next/image";
import logo from "../../public/logo.png";
import Button from "../../components/Button";

export default function Cadastro() {
    return (
        <div className="container">
            <div className="content">
                <Image className="logo" src={logo} alt="" />
                <div className="texts">
                    <h1 className="title">Tulips and Books - Cadastro</h1>
                    <form className="form">
                        <input className="input" type="text" name="username" placeholder="Name" />
                        <input className="input" type="password" name="password" placeholder="Email" />
                        <input className="input" type="password" name="password" placeholder="Password" />
                        <Button text="Cadastre-se" />
                    </form>
                </div>
            </div>
        </div>
    );
}