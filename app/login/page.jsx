import "./login.css";
import Image from "next/image";
import logo from "../../public/logo.png";
import Button from "../../components/Button";

export const metadata = {
    title: "Login 🌷📚",
};

export default function Login() {
    return (
        <div className="container">
            <div className="content">
                <Image className="logo" src={logo} alt="" />
                <div className="texts">
                    <h1 className="title">Tulips and Books - Login</h1>
                    <form className="form">
                        <input className="input" type="text" name="username" placeholder="Username" />
                        <input className="input" type="password" name="password" placeholder="Password" />
                        <label className="label">
                            <input className="inputCheck" type="checkbox" />
                            Remember me
                        </label>
                        <Button text="Login In" />
                    </form>
                    <div className="line"></div>
                    <p className="text">Não tem uma conta? </p><a className="text" href="/cadastro"><span className="span">Cadastre-se</span></a>
                </div>
            </div>
        </div>
    );
}