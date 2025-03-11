import styles from "../../styles/Sobre.module.css"
import Image from "next/image";
import livro1 from "../../public/ÉAssimQueAcaba.png";

export default function Sobre() {
    return (
        <div className={styles.container}>
            <div className={styles.line1}>
                <div className={styles.content}>
                <Image className={styles.img} src={livro1} alt="" />
                <div className={styles.texts}>
                    <h1 className={styles.title}>É Assim Que Acaba 🤍🌸</h1>
                    <p className={styles.text}>Resenha Literária 📑</p>
                </div>
                </div>
            </div>
        </div>
    );
}