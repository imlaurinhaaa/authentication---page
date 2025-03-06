import styles from "../styles/Login.module.css";
import Image from "next/image";
import logo from "../public/logo.png";
import Button from "../components/Button";

export default function Login() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <Image className={styles.logo} src={logo} alt="" />
                <div className={styles.texts}>
                    <h1 className={styles.title}>Tulips and Books - Login</h1>
                    <form className={styles.form}>
                        <input className={styles.input} type="text" name="username" placeholder="Username" />
                        <input className={styles.input} type="password" name="password" placeholder="Password" />
                        <label className={styles.label}>
                            <input className={styles.inputCheck} type="checkbox" />
                            Remember me
                        </label>
                        <Button text="Login In" />
                    </form>
                    <div className={styles.line}></div>
                    <p className={styles.text}>Não tem uma conta? </p><a className={styles.text} href="/cadastro"><span className={styles.span}>Cadastre-se</span></a>
                </div>
            </div>
        </div>
    );
}