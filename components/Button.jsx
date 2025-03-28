import styles from "../styles/Button.module.css";

export default function Button({ text, onClick }) {
    return <button className={styles.button} onClick={onClick}>{text}</button>;
}