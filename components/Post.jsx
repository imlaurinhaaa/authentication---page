import styles from "../styles/Post.module.css";
import Image from "next/image";

export default function Post({ image, url, title, text }) {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <a href={url} target="blank"><Image className={styles.img} src={image} alt="" /></a>
                <div className={styles.texts}>
                    <h1 className={styles.title}>{title}</h1>
                    <p className={styles.text}>{text}</p>
                </div>
            </div>
        </div>
    ); 
}   