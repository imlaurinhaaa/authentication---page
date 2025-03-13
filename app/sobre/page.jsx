import styles from "./Sobre.module.css"
import livro1 from "../../public/ÉAssimQueAcaba.png";
import Post from "../../components/Post";

export default function Sobre() {
    return (
        <div className={styles.container}>
            <Post image={livro1} title="É Assim Que Acaba 🤍🌸" text="Resenha Literária 📑" />
            <Post image={livro1} title="É Assim Que Acaba 🤍🌸" text="Resenha Literária 📑" />
            <Post image={livro1} title="É Assim Que Acaba 🤍🌸" text="Resenha Literária 📑" />
        </div>
    );
}