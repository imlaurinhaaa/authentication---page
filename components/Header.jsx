import styles from "../styles/Header.module.css";
import Image from "next/image";

export default function Header({ image, title }) {
    return (
        <header className={styles.header}>
            <Image className={styles.img} src={image} alt="" />
            <h1 className={styles.title}>{title}</h1>
        </header>
    )
}