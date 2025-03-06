import styles from "../../styles/Cadastro.module.css"
import Image from "next/image";
import logo from "../../public/logo.png";
import Button from "../../components/Button";

export default function Cadastro() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <Image className={styles.logo} src={logo} alt="" />
                <div className={styles.texts}>
                    <h1 className={styles.title}>Tulips and Books - Cadastro</h1>
                    <form className={styles.form}>
                        <input className={styles.input} type="text" name="username" placeholder="Name" />
                        <input className={styles.input} type="password" name="password" placeholder="Email" />
                        <input className={styles.input} type="password" name="password" placeholder="Password" />
                        <Button text="Cadastre-se" />
                    </form>
                </div>
            </div>
        </div>
    );
}